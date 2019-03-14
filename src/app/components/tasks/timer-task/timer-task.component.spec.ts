import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTaskPage } from './timer-task.page';

describe('TimerTaskPage', () => {
  let component: TimerTaskPage;
  let fixture: ComponentFixture<TimerTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
