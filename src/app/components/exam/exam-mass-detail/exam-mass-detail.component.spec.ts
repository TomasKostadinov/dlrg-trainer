import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamMassDetailPage } from './exam-mass-detail.page';

describe('ExamMassDetailPage', () => {
  let component: ExamMassDetailPage;
  let fixture: ComponentFixture<ExamMassDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamMassDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamMassDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
