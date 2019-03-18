import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AttendanceOverviewPage} from './attendance-overview.page';
import {TrackPage} from './track/track.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceOverviewPage,
  },
  {
    path: 'track',
    component: TrackPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AttendanceOverviewPage, TrackPage],
})
export class AttendanceModule {
}
