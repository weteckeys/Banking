import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  accNo = 'XXXXXXXX1234';
  confirmAccNo = 'XXXXXXXX1234';
  name = 'Jonh Doe';
  ifsc = 'BANK1234';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

}
