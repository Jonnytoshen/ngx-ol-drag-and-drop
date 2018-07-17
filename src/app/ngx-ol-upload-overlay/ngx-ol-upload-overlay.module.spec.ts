import { NgxOlUploadOverlayModule } from './ngx-ol-upload-overlay.module';

describe('NgxOlUploadOverlayModule', () => {
  let ngxOlUploadOverlayModule: NgxOlUploadOverlayModule;

  beforeEach(() => {
    ngxOlUploadOverlayModule = new NgxOlUploadOverlayModule();
  });

  it('should create an instance', () => {
    expect(ngxOlUploadOverlayModule).toBeTruthy();
  });
});
