import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTaskPage } from './counter-task.page';

describe('CounterTaskPage', () => {
  let component: CounterTaskPage;
  let fixture: ComponentFixture<CounterTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
