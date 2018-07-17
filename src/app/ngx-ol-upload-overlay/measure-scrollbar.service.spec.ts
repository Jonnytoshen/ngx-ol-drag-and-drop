import { TestBed, inject } from '@angular/core/testing';

import { MeasureScrollbarService } from './measure-scrollbar.service';

describe('MeasureScrollbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeasureScrollbarService]
    });
  });

  it('should be created', inject([MeasureScrollbarService], (service: MeasureScrollbarService) => {
    expect(service).toBeTruthy();
  }));
});
