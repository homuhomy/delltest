import { Component, inject } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";
import { SharedModules } from '../../shared/shared-modules';
import { ChartType, ChartConfiguration } from 'chart.js';
import { Data } from '../../services/data';
  
@Component({
  selector: 'app-charts-page',
  imports: [BaseChartDirective, ...SharedModules],
  templateUrl: './charts-page.html',
  styleUrl: './charts-page.scss',
})

export class ChartsPage {
  public lineChartType: ChartType = 'line';
  
  public lineChartOptions: ChartConfiguration['options'] = {
    plugins:{
      title:{
        display: true,
        position: 'top',
        padding: 20,
        text: 'Monthly Sales overview',
        font: { size: 18, weight: 'bold' },
      },
      legend:{
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true, pointStyle: 'rect', padding: 30
        }
      }, 
  },
  layout: {padding: 30},
};

  public dataService = inject(Data);
  
  public lineChartData: ChartConfiguration['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: this.dataService.lineChartData().lineChartA,
        label: 'Product A',
        borderColor: '#1976D2',
        pointBackgroundColor: '#1976D2',
        backgroundColor: 'transparent',
        fill: 'origin'
      },
      {
        data: this.dataService.lineChartData().lineChartB,
        label: 'Product B',
        borderColor: '#ff0000',
        pointBackgroundColor: '#ff0000',
        backgroundColor: 'transparent',
        fill: 'origin'
      }

    ]
  }

  public pieChartType: ChartType = 'pie';

  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      title: {
        display: true,
        position: 'top',
        padding: 20,
        text: 'Category Distribution',
        font: { size: 18, weight: 'bold' }
      },

      legend: {
        display: true,
        position: 'bottom',
        labels: { usePointStyle: true, pointStyle: 'circle', padding: 30 }
      }
    },
    layout: { padding: 30 }
  };

  public pieChartData: ChartConfiguration['data'] = {
    labels: this.dataService.lineChartData().pieChartLabels,
    datasets: [
      {
        data: this.dataService.lineChartData().pieChart,
        backgroundColor: ['#e387eb', '#3498db', '#2ecc71', '#f1c40f'],
        borderColor: ['#ffffff'],
        borderWidth: 2
      }
    ]
  };


}

