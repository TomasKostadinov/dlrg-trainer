import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AttendanceOverviewPage} from './attendance-overview.page';

describe('TrackPage', () => {
  let component: AttendanceOverviewPage;
  let fixture: ComponentFixture<AttendanceOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceOverviewPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
