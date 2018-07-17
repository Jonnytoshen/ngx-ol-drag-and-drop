import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { NgxOlUploadOverlayRef } from '../ngx-ol-upload-overlay-ref.class';
import { ReadFilesService, Shapefile } from '../read-files.service';

@Component({
  selector: 'app-ngx-ol-upload-container',
  templateUrl: './ngx-ol-upload-container.component.html',
  styleUrls: ['./ngx-ol-upload-container.component.scss']
})
export class NgxOlUploadContainerComponent implements OnInit {

  fileType: string = 'Shapefile';
  files: File[] = [];
  accepts: string[];
  loading: boolean = false;
  submitDisabled: boolean = true;
  shapfileError: number[] = null;

  constructor(
    private overlay: NgxOlUploadOverlayRef,
    private readFilesService: ReadFilesService
  ) { }

  ngOnInit() { 
    this.accepts = this.acceptsBuilder(this.fileType);
  }

  onFileTypeChange(event): void {
    this.files = [];
    this.accepts = this.acceptsBuilder(event);
    this.shapfileError = null;
    this.validate();
  }

  onFileChange(files: File[]): void {
    this.files = files || [];
    this.validate();
  }

  onRemoveFile(file: File): void {
    this.files = this.files.filter(_file => _file !== file);
    this.validate();
  }

  onAlertClose(): void {
    this.files = [];
    this.validate();
  }

  onClickOkBtn(): void {
    this.loading = true;
    if(this.fileType === 'Shapefile') {
      const shapefile: Shapefile = this.shapefileBuiler(this.files);
      this.readFilesService.readShapefileAsFeatures(shapefile)
        .subscribe(data => this.close(data), error => console.log(error));
    } else {
      this.readFilesService.readFilesAsFeatures(this.files)
        .subscribe(data => this.close(data), error => console.log(error));
    }
  }

  onClickResetBtn(): void {
    this.fileType = 'Shapefile';
    this.files = [];
    this.accepts = this.acceptsBuilder(this.fileType);
    this.validate();
  }

  onClickCancelBtn(): void {
    this.overlay.destroy();
  }

  /**
   * @private
   * @param type string
   */
  private acceptsBuilder(type: string): string[] {
    const accepts = {
      // Shapefile: ['.dbf', '.prj', '.sbn', '.sbx', '.shp', '.shx'],
      Shapefile: ['.dbf', '.shp'],
      GPX: ['.gpx'],
      GeoJSON: ['.geojson'],
      IGC: ['.igc'],
      KML: ['.kml'],
      TopoJSON: ['.topojson']
    };
    return accepts[type];
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

  /**
   * @private
   * @param files File[]
   */
  private shapefileBuiler(files: File[]): Shapefile {
    let dbf: File,
        prj: File,
        sbn: File,
        sbx: File,
        shp: File,
        shx: File;
    for(let i = 0; i < files.length; i++) {
      if(this.attrAccept(files[i], '.dbf')) {
        dbf = files[i];
      } else if (this.attrAccept(files[i], '.prj')) {
        prj = files[i];
      } else if (this.attrAccept(files[i], '.sbn')) {
        sbn = files[i];
      } else if (this.attrAccept(files[i], '.sbx')) {
        sbx = files[i];
      } else if (this.attrAccept(files[i], '.shp')) {
        shp = files[i];
      } else if (this.attrAccept(files[i], '.shx')) {
        shx = files[i];
      }
    }
    return { dbf, prj, sbn, sbx, shp, shx };
  }

  private validate(): void {
    this.submitDisabled = this.files.length === 0;
    if(this.files.length > 0 && this.fileType === 'Shapefile' && !this.shapefileValidate(this.files)) {
      this.submitDisabled = true;
      this.shapfileError = [Math.random()];
    }
  }

  private shapefileValidate(files: File[]): boolean {
    for(let i = 0; i < files.length; i++) {
      if(this.attrAccept(files[i], '.shp')) {
        return true;
      }
    }
    return false;
  }

  private close(result: any): void {
    this.loading = false;
    this.overlay.destroy(result);
  }

}
