import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  tabID = 1;
  slideCardOpts = {
    slidesPerView : 1.2
  };
  slideOpts = {
    slidesPerView : 3.2
  };

  users = [
      {
          image : 'assets/imgs/users/user2.jpg',
          name : ''
      },
      {
          image : 'assets/imgs/users/user3.jpg',
          name : ''
      },
      {
          image : 'assets/imgs/users/user4.jpg',
          name : ''
      },
      {
          image : 'assets/imgs/users/user5.jpg',
          name : ''
      },
      {
          image : 'assets/imgs/users/user6.jpg',
          name : ''
      },
      {
          image : 'assets/imgs/users/user7.jpg',
          name : ''
      },
  ];

  activity = [
    {
        name : 'Amazon',
        price : '- $35.88',
        image : 'assets/imgs/cart.png',
        color : '#FF7E87'
    },
    {
        name : 'Shell',
        price : '- $78.88',
        image : 'assets/imgs/pump.png',
        color : '#00D793  '
    },
    {
        name : 'Shopping',
        price : '- $50.92',
        image : 'assets/imgs/cart.png',
        color : '#FF7E87'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAddContact() {
      this.router.navigate(['/add-contact']);
  }

}
