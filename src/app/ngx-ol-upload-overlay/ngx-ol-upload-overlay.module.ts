import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NgxOlUploadOverlayComponent } from './ngx-ol-upload-overlay';
import { NgxOlUploadOverlayService } from './ngx-ol-upload-overlay.service';
import { MeasureScrollbarService } from './measure-scrollbar.service';
import { CssUnitPipe } from './css-unit.pipe';
import { NgxOlUploadContainerComponent } from './ngx-ol-upload-container';
import { NgxOlUploadComponent } from './ngx-ol-upload';
import { NgxOlFileComponent } from './ngx-ol-file';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadFilesService } from './read-files.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [NgxOlUploadOverlayComponent, CssUnitPipe, NgxOlUploadContainerComponent, NgxOlUploadComponent, NgxOlFileComponent],
  entryComponents: [NgxOlUploadOverlayComponent, NgxOlUploadContainerComponent],
  providers: [ NgxOlUploadOverlayService, MeasureScrollbarService, ReadFilesService ]
})
export class NgxOlUploadOverlayModule { }
