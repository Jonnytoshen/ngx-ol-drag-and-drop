import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  Renderer2,
  Input
} from '@angular/core';

@Component({
  selector: '[ngx-ol-upload]',
  templateUrl: './ngx-ol-upload.component.html',
  styleUrls: ['./ngx-ol-upload.component.scss']
})
export class NgxOlUploadComponent implements OnInit {

  @Input() accept: string | string[];

  @Output() fileInputChange: EventEmitter < Event > = new EventEmitter();
  @Output() fileDrag: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileDragEnd: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileDragEnter: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileDragExit: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileDragLeave: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileDragOver: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileDragStart: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileDrop: EventEmitter < DragEvent > = new EventEmitter();
  @Output() fileChange: EventEmitter < File[] > = new EventEmitter();

  @ViewChild('container') container: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  @HostListener('click')
  onclick(): void {
    (this.fileInput.nativeElement as HTMLInputElement).click();
  }

  @HostListener('keydown', ['$event'])
  onkeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onclick();
    }
  }

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() { }

  onDrag(event: DragEvent): void {
    this.handleStop(event);
    this.fileDrag.emit(event);
  }

  onDragEnd(event: DragEvent): void {
    this.handleStop(event);
    this.fileDragEnd.emit(event);
  }

  onDragEnter(event: DragEvent): void {
    this.handleStop(event);
    this.fileDragEnter.emit(event);
    this.renderer.addClass(this.container.nativeElement, 'drag-enter');
  }

  onDragExit(event: DragEvent): void {
    this.handleStop(event);
    this.fileDragExit.emit(event);
  }

  onDragLeave(event: DragEvent): void {
    this.handleStop(event);
    this.fileDragLeave.emit(event);
    this.renderer.removeClass(this.container.nativeElement, 'drag-enter');
  }

  onDragOver(event: DragEvent): void {
    this.handleStop(event);
    this.fileDragOver.emit(event);
  }

  onDragStart(event: DragEvent): void {
    this.handleStop(event);
    this.fileDragStart.emit(event);
  }

  onDrop(event: DragEvent): void {
    this.handleStop(event);
    this.fileDrop.emit(event);
    this.fileChange.emit(this.filterfiles(event.dataTransfer.files));
  }

  onChange(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.fileInputChange.emit(event);
    this.fileChange.emit(this.filterfiles(target.files));
  }

  private handleStop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private attrAccept(file: File, acceptedFiles: string | string[]): boolean {
    if (file && acceptedFiles) {
      const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
      const fileName = '' + file.name;
      const mimeType = '' + file.type;
      const baseMimeType = mimeType.replace(/\/.*$/, '');

      return acceptedFilesArray.some(type => {
        const validType = type.trim();
        if (validType.charAt(0) === '.') {
          return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
        } else if (/\/\*$/.test(validType)) {
          // This is something like a image/* mime type
          return baseMimeType === validType.replace(/\/.*$/, '');
        }
        return mimeType === validType;
      });
    }
    return true;
  }

  private filterfiles(files: FileList): File[] {
    return Array.prototype.slice.call(files).filter(
      (file: File) => this.attrAccept(file, this.accept)
    );
  }

}
