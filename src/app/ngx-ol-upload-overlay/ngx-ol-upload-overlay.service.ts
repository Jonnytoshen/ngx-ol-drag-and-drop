import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { NgxOlUploadOverlayComponent } from './ngx-ol-upload-overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgxOlUploadOverlayRef } from './ngx-ol-upload-overlay-ref.class';
import { NgxOlUploadOverlayOptions } from './ngx-ol-upload-overlay-options.model';
import { NgxOlUploadContainerComponent } from './ngx-ol-upload-container';

export class UploadOverlayBuilder {

  private modalRef: ComponentRef<NgxOlUploadOverlayComponent>;
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    options: NgxOlUploadOverlayOptions = {}
  ) {
    this.overlayRef = this.overlay.create();
    this.modalRef = this.overlayRef.attach(new ComponentPortal(NgxOlUploadOverlayComponent));
    this.changeProps({ ...options, component: NgxOlUploadContainerComponent });
    this.modalRef.instance.open();
    this.modalRef.instance.$afterClose.subscribe(() => this.destroyModal());
  }

  getInstance(): NgxOlUploadOverlayComponent {
    return this.modalRef && this.modalRef.instance;
  }

  destroyModal(): void {
    if (this.modalRef) {
      this.overlayRef.dispose();
      this.modalRef = null;
    }
  }

  private changeProps(options: NgxOlUploadOverlayOptions): void {
    if (this.modalRef) {
      Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class NgxOlUploadOverlayService {

  constructor(
    private overlay: Overlay
  ) { }

  open(options: NgxOlUploadOverlayOptions = {}): NgxOlUploadOverlayRef {
    const modalRef = new UploadOverlayBuilder(this.overlay, options).getInstance();
    return modalRef;
  }

}
