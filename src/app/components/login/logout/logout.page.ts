import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user-service/user-service.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private userService: UserService, private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
    this.userService.logout();
    this.logoutToast();
    this.router.navigate(['/login']);
  }

  async logoutToast() {
    const toast = await this.toastController.create({
      message: 'Erfolgreich ausgeloggt.',
      duration: 2000,
    });
    toast.present();
  }
}
