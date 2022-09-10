import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

    tabID = 'Jan';
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

    public lineChartData: Array<any> = [
        // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        {data: [500, 1000, 5000, 3200, 4000, 1900, 2700], label: 'Series A'},
        {data: [1200, 2000, 2200, 3400, 4200, 1700, 3700], label: 'Series B'},
    ];

    public lineChartLabels: Array<any> = ['0', '1', '2', '3', '4', '5', '6'];

    public lineChartOptions: any = {
        responsive: false,
    };

    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: 'rgba(41, 191, 118, 1)',
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgba(41, 191, 118, 1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'transparent',
            borderColor: 'rgba(242, 71, 80, 1)',
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgba(242, 71, 80, 1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
    ];

    public lineChartLegend = false;
    public lineChartType = 'line';

    public randomize(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    constructor() { }

    ngOnInit() {
    }

}
