import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[ngx-ol-file]',
  templateUrl: './ngx-ol-file.component.html',
  styleUrls: ['./ngx-ol-file.component.scss']
})
export class NgxOlFileComponent implements OnInit {

  suffix: string;

  private _file: File;
  private _suffixs: { [key: string]: string } = {
    GPX: 'GPX',
    GEOJSON: 'GeoJSON',
    IGC: 'IGC',
    KML: 'KML',
    TOPOJSON: 'TopoJSON',
    SHP: 'Shp'
  };

  @Input() 
  set file(value: File) {
    this._file = value;
    this.suffix = this.getSuffix(value);
  }

  get file(): File {
    return this._file;
  }

  @Output() onRemove: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private getSuffix(file: File): string {
    const fileName: string = file.name;
    const fileNameSplit: string[] = fileName.split('.');
    const suffix = fileNameSplit[fileNameSplit.length - 1].toLocaleUpperCase();
    return this._suffixs[suffix] || suffix;
  }

}
