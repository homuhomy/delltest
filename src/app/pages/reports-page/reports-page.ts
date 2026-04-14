import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../services/api';
import { SharedModules } from '../../shared/shared-modules';
import { MatTableDataSource } from '@angular/material/table';

interface ReportItem {
  title: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-reports-page',
  imports: [...SharedModules],
  templateUrl: './reports-page.html',
  styleUrl: './reports-page.scss',
})
export class ReportsPage implements OnInit{
  public reportList: ReportItem[] = [];
  public dataSource: any = new MatTableDataSource(this.reportList);
  public displayedColumns: string[] = ['id','title', 'category', 'date'];
  cdr: any;

  constructor (
    private api: Api,
    private router: Router
  ){}

  async ngOnInit(){
    try {
      let response: any = await this.api.httpGet('/reports');
      console.log(response.data);
      this.reportList = response.data;
      this.dataSource = new MatTableDataSource(this.reportList);

      this.dataSource.data = this.dataSource.data.map((report: any)=>({...report}));
      this.cdr.detectChanges();

    } catch (error: any){
      console.error('Error occured: ', error);
    }
  }
}

