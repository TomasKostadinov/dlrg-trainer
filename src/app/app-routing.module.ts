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
    path: 'attendance',
    loadChildren: './components/attendance/attendance.module#AttendanceModule',
  },
  {
    path: 'profile',
    loadChildren: './components/my-profile/my-profile.module#MyProfilePageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
