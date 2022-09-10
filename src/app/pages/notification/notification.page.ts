import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  list = [
    {
        icn : 'card-outline',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        icn : 'alarm-outline',
        text : 'Temporibus vitae exercitationem quam totam sint labore',
    },
    {
        icn : 'document-text-outline',
        text : 'Sit amet consectetur adipisicing elit.',
    },
    {
        icn : 'arrow-down',
        text : 'Lorem ipsum temporibus vitae exercitationem',
    },
    {
        icn : 'alarm-outline',
        text : 'Elit temporibus vitae exercite quam totam sint labore?',
    },
    {
        icn : 'arrow-up',
        text : 'Sit amet consectetur adipisicing elit.',
    },
    {
        icn : 'card-outline',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        icn : 'alarm-outline',
        text : 'Temporibus vitae exercitationem quam totam sint labore',
    },
    {
        icn : 'document-text-outline',
        text : 'Sit amet consectetur adipisicing elit.',
    },
    {
        icn : 'arrow-down',
        text : 'Lorem ipsum temporibus vitae exercitationem',
    },
    {
        icn : 'alarm-outline',
        text : 'Elit temporibus vitae exercite quam totam sint labore?',
    },
    {
        icn : 'card-outline',
        text : 'Sit amet consectetur adipisicing elit.',
    },
];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
        this.navCtrl.back();
  }

}
