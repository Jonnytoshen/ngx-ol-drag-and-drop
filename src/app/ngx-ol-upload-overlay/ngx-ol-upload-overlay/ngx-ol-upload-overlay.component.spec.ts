import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOlUploadOverlayComponent } from './ngx-ol-upload-overlay.component';

describe('NgxOlUploadOverlayComponent', () => {
  let component: NgxOlUploadOverlayComponent;
  let fixture: ComponentFixture<NgxOlUploadOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOlUploadOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOlUploadOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
