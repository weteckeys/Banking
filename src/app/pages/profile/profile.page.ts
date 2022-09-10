import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEditProfile() {
      this.router.navigate(['/edit-profile']);
  }

  goToChangePassword() {
      this.router.navigate(['/change-password']);
  }

  goToSettings() {
      this.router.navigate(['/settings']);
  }

}
