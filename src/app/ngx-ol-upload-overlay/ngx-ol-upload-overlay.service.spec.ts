import { TestBed, inject } from '@angular/core/testing';

import { NgxOlUploadOverlayService } from './ngx-ol-upload-overlay.service';

describe('NgxOlUploadOverlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxOlUploadOverlayService]
    });
  });

  it('should be created', inject([NgxOlUploadOverlayService], (service: NgxOlUploadOverlayService) => {
    expect(service).toBeTruthy();
  }));
});
