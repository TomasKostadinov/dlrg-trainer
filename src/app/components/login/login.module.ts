import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {LogoutPage} from './logout/logout.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'logout',
    component: LogoutPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginPage, LogoutPage],
})
export class LoginPageModule {
}
