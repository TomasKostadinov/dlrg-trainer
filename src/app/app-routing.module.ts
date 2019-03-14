import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomePageModule',
  },
  {
    path: 'badges',
    loadChildren: './components/exam/exam.module#ListPageModule',
  },
  {
    path: 'teams',
    loadChildren: './components/teams/teams.module#TeamsModule',
  },
  {
    path: 'attendance-tracking',
    loadChildren: './components/attendance-tracking/attendance-tracking.module#AttendanceTrackingPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
