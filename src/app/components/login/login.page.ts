import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user-service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login();
  }

}
