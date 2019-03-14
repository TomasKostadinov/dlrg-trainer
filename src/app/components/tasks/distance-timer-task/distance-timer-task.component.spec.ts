import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceTimerTaskPage } from './distance-timer-task.page';

describe('DistanceTimerTaskPage', () => {
  let component: DistanceTimerTaskPage;
  let fixture: ComponentFixture<DistanceTimerTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceTimerTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceTimerTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
