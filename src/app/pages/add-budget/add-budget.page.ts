import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.page.html',
  styleUrls: ['./add-budget.page.scss'],
})
export class AddBudgetPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  goBack() {
      this.navCtrl.back();
  }

  goToPayment() {
      this.router.navigate(['/payment']);
  }
}
