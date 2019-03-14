import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceTaskPage } from './distance-task.page';

describe('DistanceTaskPage', () => {
  let component: DistanceTaskPage;
  let fixture: ComponentFixture<DistanceTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
