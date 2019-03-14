import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CreateNewTeamComponent} from './create-new-team/create-new-team.component';
import {TeamDetailsComponent} from './team-details/team-details.component';
import {EditTeamComponent} from './edit-team/edit-team.component';
import {TeamOverviewComponent} from './team-overview/team-overview.component';

const routes: Routes = [
  {
    path: '',
    component: TeamOverviewComponent,
  }, {
    path: 'create',
    component: CreateNewTeamComponent,
  }, {
    path: 'configure/:id',
    component: EditTeamComponent,
  }, {
    path: ':id',
    component: TeamDetailsComponent,
  },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TeamOverviewComponent, CreateNewTeamComponent, TeamDetailsComponent, EditTeamComponent],
})
export class TeamsModule {
}
