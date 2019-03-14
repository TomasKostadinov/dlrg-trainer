import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListRendererPage } from './task-exam-renderer.page';

describe('TaskListRendererPage', () => {
  let component: TaskListRendererPage;
  let fixture: ComponentFixture<TaskListRendererPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListRendererPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListRendererPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
