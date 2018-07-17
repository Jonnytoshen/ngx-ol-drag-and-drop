import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOlUploadContainerComponent } from './ngx-ol-upload-container.component';

describe('NgxOlUploadContainerComponent', () => {
  let component: NgxOlUploadContainerComponent;
  let fixture: ComponentFixture<NgxOlUploadContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOlUploadContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOlUploadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
