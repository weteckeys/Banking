import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
      this.router.navigate(['/tabs']);
  }

  goToRegister() {
      this.router.navigate(['/register']);
  }

  goToForgot() {
      this.router.navigate(['/forgot']);
  }

}
