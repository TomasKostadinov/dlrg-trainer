import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AttendanceTrackingPage } from './attendance-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceTrackingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AttendanceTrackingPage]
})
export class AttendanceTrackingPageModule {}
