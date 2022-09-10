import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  slideOpts = {
    slidesPerView : 3.2
  };

  accNo = 'XXXXXXXX1234';
  confirmAccNo = 'XXXXXXXX1234';
  amount = 5000;

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
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

}
