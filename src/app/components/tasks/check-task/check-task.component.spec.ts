import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTaskPage } from './check-task.page';

describe('CheckTaskPage', () => {
  let component: CheckTaskPage;
  let fixture: ComponentFixture<CheckTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
