import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tabID;
  constructor(
    private router: Router
  ) { }

  tabChange(eve) {
    console.log(eve.tab);
    this.tabID = eve.tab;
  }
  home() {
    this.router.navigate(['tabs']);
  }
}
