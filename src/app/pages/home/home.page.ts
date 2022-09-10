import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    tabID = 1;
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

    constructor(private route: Router) { }

    ngOnInit() {
    }

    goToTransfer() {
        this.route.navigate(['/transfer']);
    }

    goToActivity() {
        this.route.navigate(['/activity']);
    }

    goToAddBudget() {
        this.route.navigate(['/add-budget']);
    }

}
