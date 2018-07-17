import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOlFileComponent } from './ngx-ol-file.component';

describe('NgxOlFileComponent', () => {
  let component: NgxOlFileComponent;
  let fixture: ComponentFixture<NgxOlFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOlFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOlFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
