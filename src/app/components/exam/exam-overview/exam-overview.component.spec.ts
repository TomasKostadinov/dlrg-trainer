import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamOverviewPage } from './exam-overview.page';

describe('ExamOverviewPage', () => {
  let component: ExamOverviewPage;
  let fixture: ComponentFixture<ExamOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
