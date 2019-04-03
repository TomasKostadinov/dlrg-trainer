import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {appPages} from './config/menu.config';
import {MenuGroup} from './interfaces/menu.interface';
import {UserService} from './services/user-service/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  private appPages: MenuGroup[] = appPages;
  private showNav: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#e61f2b');

      this.userService.authenticationState.subscribe(state => {
        if (state) {
          this.showNav = true;
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
        this.splashScreen.hide();
      });

    });
  }
}
