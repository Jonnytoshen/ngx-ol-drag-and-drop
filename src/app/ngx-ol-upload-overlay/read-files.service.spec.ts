import { TestBed, inject } from '@angular/core/testing';

import { ReadFilesService } from './read-files.service';

describe('ReadFilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadFilesService]
    });
  });

  it('should be created', inject([ReadFilesService], (service: ReadFilesService) => {
    expect(service).toBeTruthy();
  }));
});
