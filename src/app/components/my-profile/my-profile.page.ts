import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {User} from '../../interfaces/user.interface';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})

export class MyProfilePage implements OnInit {

  public user: User = {
    lastName: '',
    firstName: '',
    birthDay: '',
    licenseNumber: '',
  };

  constructor(private storage: Storage, private router: Router, private toastController: ToastController) {
  }

  async showSaveSuccess() {
    const toast = await this.toastController.create({
      message: 'Einstellungen wurden gespeichert.',
      duration: 2000,
    });
    toast.present();
  }


  ngOnInit() {
    this.storage.get('user').then((user: User) => {
      if (user != null) {
        this.user = user;
      }
    });
  }

  public saveUser() {
    this.storage.set('user', this.user);
    this.showSaveSuccess();
  }


}
