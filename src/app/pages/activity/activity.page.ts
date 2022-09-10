import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  activity = [
      {
          date : '02/03/2021',
          name : 'McDonald\'s',
          amount : '400',
          type : 'w'
      },
      {
          date : '05/03/2021',
          name : 'Jonh Doe',
          amount : '5000',
          type : 'c'
      },
      {
          date : '09/03/2021',
          name : 'Domino\'s',
          amount : '300',
          type : 'w'
      },
      {
          date : '12/03/2021',
          name : 'Recharge',
          amount : '799',
          type : 'w'
      },
      {
          date : '22/03/2021',
          name : 'Jonh Doe',
          amount : '5000',
          type : 'c'
      },
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
