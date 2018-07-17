import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOlUploadComponent } from './ngx-ol-upload.component';

describe('NgxOlUploadComponent', () => {
  let component: NgxOlUploadComponent;
  let fixture: ComponentFixture<NgxOlUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOlUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOlUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
