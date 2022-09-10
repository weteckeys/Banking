import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensePageRoutingModule } from './expense-routing.module';

import { ExpensePage } from './expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    ExpensePageRoutingModule
  ],
  declarations: [ExpensePage]
})
export class ExpensePageModule {}
