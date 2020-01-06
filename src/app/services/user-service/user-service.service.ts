import {Platform} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
      console.log("Test");
    });
  }

  checkToken() {
    this.storage.get('auth').then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login() {
    return this.storage.set('auth', 'Bearer 1234567').then(() => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.storage.remove('auth').then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}
