import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: '../components/home/home.module#HomePageModule',
  },
  {
    path: 'badges',
    canActivate: [AuthGuard],
    loadChildren: '../components/exam/exam.module#ListPageModule',
  },
  {
    path: 'teams',
    canActivate: [AuthGuard],
    loadChildren: '../components/teams/teams.module#TeamsModule',
  },
  {
    path: 'attendance',
    canActivate: [AuthGuard],
    loadChildren: '../components/attendance/attendance.module#AttendanceModule',
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: '../components/my-profile/my-profile.module#MyProfilePageModule',
  },
  {
    path: 'login',
    loadChildren: '../components/login/login.module#LoginPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
