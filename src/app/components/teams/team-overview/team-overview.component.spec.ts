import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOverviewPage } from './team-overview.page';

describe('TeamOverviewPage', () => {
  let component: TeamOverviewPage;
  let fixture: ComponentFixture<TeamOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
