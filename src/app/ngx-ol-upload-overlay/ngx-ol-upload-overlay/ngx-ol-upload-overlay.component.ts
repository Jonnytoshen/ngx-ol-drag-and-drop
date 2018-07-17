import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter, 
  Input, 
  Renderer2, 
  Inject, 
  ViewChild, 
  ElementRef, 
  Type, 
  ComponentFactoryResolver, 
  Injector, 
  ViewContainerRef, 
  ComponentRef, 
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InputBoolean } from 'ng-zorro-antd/src/core/util/convert';
import { Observable } from 'rxjs';

import { NgxOlUploadOverlayRef } from '../ngx-ol-upload-overlay-ref.class';
import { MeasureScrollbarService } from '../measure-scrollbar.service';
import OverlayUtil from '../Overlay-util';
import { OverlayRef } from '@angular/cdk/overlay';

type AnimationState = 'enter' | 'leave' | null;

export type OnClickCallback<T> = ((instance: T) => (false | void | {}) | Promise<false | void | {}>);

@Component({
  selector: 'app-ngx-ol-upload-overlay',
  templateUrl: './ngx-ol-upload-overlay.component.html',
  styleUrls: ['./ngx-ol-upload-overlay.component.scss']
})
export class NgxOlUploadOverlayComponent<T = any, R = any> extends NgxOlUploadOverlayRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() title: string;
  @Input() component: Type<T>;
  @Input() componentParams: object;
  @Input() @InputBoolean() visible: boolean = false;
  @Output() $visibleChange = new EventEmitter<boolean>();

  @Input() zIndex: number = 1000;
  @Input() width: number | string = 520;
  @Input() wrapClassName: string;
  @Input() className: string;
  @Input() style: object;
  @Input() @InputBoolean() maskEnable: boolean = true;
  @Input() @InputBoolean() maskClosable: boolean = true;
  @Input() maskStyle: object;
  @Input() closable: boolean = true;

  @Output() $afterOpen = new EventEmitter<void>(); // Trigger when modal open(visible) after animations
  @Output() $afterClose = new EventEmitter<R>(); // Trigger when modal leave-animation over

  get afterOpen(): Observable<void> { // Observable alias for nzAfterOpen
    return this.$afterOpen.asObservable();
  }

  get afterClose(): Observable<R> { // Observable alias for nzAfterClose
    return this.$afterClose.asObservable();
  }

  @Input() @Output() onOk: OnClickCallback<T> = () => {};
  @Input() @Output() onCancel: OnClickCallback<T> = () => {};

  get hidden(): boolean {
    return !this.visible && !this.animationState;
  }

  @ViewChild('modalContainer') modalContainer: ElementRef;
  @ViewChild('bodyContainer', { read: ViewContainerRef }) bodyContainer: ViewContainerRef;

  maskAnimationClassMap: object;
  modalAnimationClassMap: object;
  transformOrigin = '0px 0px 0px'; // The origin point that animation based on

  private animationState: AnimationState; // Current animation state
  private contentComponentRef: ComponentRef<T>;
  private container: HTMLElement | OverlayRef;

  constructor(
    private renderer: Renderer2,
    private cfr: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef,
    private measureScrollbarService: MeasureScrollbarService,
    @Inject(DOCUMENT) private document: any
  ) { 
    super();
  }

  ngOnInit() {
    this.createDynamicComponent(this.component);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.visible) {
      this.handleVisibleStateChange(this.visible, !changes.visible.firstChange);
    }
  }

  ngAfterViewInit() {
    if(this.contentComponentRef) {
      this.bodyContainer.insert(this.contentComponentRef.hostView);
    }
  }

  ngOnDestroy() {}

  open(): void {
    this.changeVisibleFromInside(true);
  }

  close(result?: R): void {
    this.changeVisibleFromInside(false, result);
  }

  destroy(result?: R): void { // Destroy equals Close
    this.close(result);
  }

  getContentComponent(): T {
    return this.contentComponentRef && this.contentComponentRef.instance;
  }

  onClickMask($event: MouseEvent): void {
    if (
      this.maskEnable &&
      this.maskClosable &&
      ($event.target as HTMLElement).classList.contains('overlay-wrap') &&
      this.visible
    ) {
      this.onClickOkCancel('cancel');
    }
  }

  onClickCloseBtn(): void {
    if(this.visible) {
      this.onClickOkCancel('cancel');
    }
  }

  /**
   * @private
   * @param type 'ok'|'cancel'
   */
  private onClickOkCancel(type: 'ok' | 'cancel'): void {
    const trigger = { 'ok': this.onOk, 'cancel': this.onCancel }[ type ];
    const result = (typeof trigger === 'function') ? trigger(this.getContentComponent()) : undefined;
    const caseClose = (doClose: boolean | void | {}) => (doClose !== false) && this.close(doClose as R); // Users can return "false" to prevent closing by default
    if (this.isPromise(result)) {
      const handleThen = (doClose) => {
        caseClose(doClose);
      };
      (result as Promise<void>).then(handleThen).catch(handleThen);
    } else {
      caseClose(result);
    }
  }

  /**
   * Change visible from insid
   * @private
   * @param visible boolean
   * @param closeResult R
   */
  private changeVisibleFromInside(visible: boolean, closeResult?: R): Promise<void> {
    if (this.visible !== visible) {
      // Change visible value immediately
      this.visible = visible;
      this.$visibleChange.emit(visible);
      return this.handleVisibleStateChange(visible, true, closeResult);
    }
    return Promise.resolve();
  }

  /**
   * Do rest things when visible state changed
   * @private
   * @param visible boolean
   * @param animation boolean
   * @param closeResult R
   */
  private handleVisibleStateChange(visible: boolean, animation: boolean = true, closeResult?: R): Promise<void> {
    if (visible) { // Hide scrollbar at the first time when shown up
      this.changeBodyOverflow(1);
    }

    return Promise
    .resolve(animation && this.animateTo(visible))
    .then(() => { // Emit open/close event after animations over
      if (visible) {
        this.$afterOpen.emit();
      } else {
        this.$afterClose.emit(closeResult);
        this.changeBodyOverflow(); // Show/hide scrollbar when animation is over
      }
    });
  }

  /**
   * Take care of the body's overflow to decide the existense of scrollbar
   * @private
   * @param plusNum number - The number that the openModals.length will increase soon
   */
  private changeBodyOverflow(plusNum: number = 0): void {
    if (plusNum > 0) {
      this.renderer.setStyle(this.document.body, 'padding-right', `${this.measureScrollbarService.scrollBarWidth}px`);
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(this.document.body, 'padding-right');
      this.renderer.removeStyle(this.document.body, 'overflow');
    }
  }

  /**
   * @private
   * @param state AnimationState
   */
  private changeAnimationState(state: AnimationState): void {
    this.animationState = state;
    if (state) {
      this.maskAnimationClassMap = {
        [ `ngx-fade-${state}` ]       : true,
        [ `ngx-fade-${state}-active` ]: true
      };
      this.modalAnimationClassMap = {
        [ `ngx-zoom-${state}` ]       : true,
        [ `ngx-zoom-${state}-active` ]: true
      };
    } else {
      this.maskAnimationClassMap = this.modalAnimationClassMap = null;
    }
  }

  /**
   * @private
   * @param isVisible boolean
   */
  private animateTo(isVisible: boolean): Promise<void> {
    if (isVisible) { // Figure out the lastest click position when shows up
      window.setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
    }

    this.changeAnimationState(isVisible ? 'enter' : 'leave');
    return new Promise((resolve) => window.setTimeout(() => { // Return when animation is over
      this.changeAnimationState(null);
      resolve();
    }, 200));
  }

  /**
   * Update transform-origin to the last click position on document
   * @private
   */
  private updateTransformOrigin(): void {
    const modalElement = this.modalContainer.nativeElement as HTMLElement;
    const lastPosition = OverlayUtil.getLastClickPosition();
    if (lastPosition) {
      this.transformOrigin = `${lastPosition.x - modalElement.offsetLeft}px ${lastPosition.y - modalElement.offsetTop}px 0px`;
    }
  }

  /**
   * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
   * @private
   * @param component Type<T> - Component Class
   */
  private createDynamicComponent(component: Type<T>): void {
    const factory = this.cfr.resolveComponentFactory(component);
    const childInjector = Injector.create({
      providers: [ { provide: NgxOlUploadOverlayRef, useValue: this } ],
      parent   : this.viewContainer.parentInjector
    });
    this.contentComponentRef = factory.create(childInjector);
    if (this.componentParams) {
      Object.assign(this.contentComponentRef.instance, this.componentParams);
    }
    // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
    this.contentComponentRef.changeDetectorRef.detectChanges();
  }

  private isPromise(obj: {} | void): boolean {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof (obj as Promise<{}>).then === 'function' && typeof (obj as Promise<{}>).catch === 'function';
  }

}
