import { Component, OnInit } from '@angular/core';
import { MatCardHeader } from "@angular/material/card";   
import { SharedModules } from "../../shared/shared-modules";
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Misc } from '../../services/misc';

@Component({
  selector: 'app-add-page',
  imports: [...SharedModules, RouterLink],
  templateUrl: './add-page.html',
  styleUrl: './add-page.scss',
})
export class AddPage implements OnInit{
  public reportForm: FormGroup;
  public id: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: Api,
    private router: Router,
    private misc: Misc,
    private activatedRoute: ActivatedRoute
    
  ){
    this.reportForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  async ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); //id taken from the route
    if (this.id) {
      try{
        let response: any = await this.apiService.httpGet('/reports/' + this.id);
        if(response.success){
          let report = response.data;
          this.reportForm.setValue({
            title: report.title,
            category: report.category,
            date: this.parseApiDate(report.date)
          })
        }
      }catch(error: any){
        console.error(error);
      }
    }
  }

  //paste fuction here
  private parseApiDate(value: string | Date | null): Date | null {
      if (!value) {
        return null;
      }
      if (value instanceof Date) {
        return value;
      }
      if (typeof value !== 'string') {
        return null;
      }
  
      // Try ISO format first
      const isoDate = new Date(value);
      if (!isNaN(isoDate.getTime())) {
        return isoDate;
      }
  
      // Support dd/mm/yyyy or dd-mm-yyyy from the API
      const dmy = /^([0-3]\d)[\/\-]([0-1]\d)[\/\-](\d{4})$/.exec(value);
      if (dmy) {
        const day = Number(dmy[1]);
        const month = Number(dmy[2]) - 1;
        const year = Number(dmy[3]);
        return new Date(year, month, day);
      }
  
      return null;
    }
  
    private formatDateToString(value: Date | string | null): string | null {
      if (!value) {
        return null;
      }
      const date = value instanceof Date ? value : new Date(value);
      if (isNaN(date.getTime())) {
        return null;
      }
      const day = `${date.getDate()}`.padStart(2, '0');
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    //end fuction
    async onSubmit(){
      if(this.reportForm.invalid){
        this.reportForm.markAllAsTouched();
        return;
      }
      try{
        const rawData: any = this.reportForm.value;
        const reportData: any = {
          ...rawData,
          date: this.formatDateToString(rawData.date) ?? rawData.date
        };
        if(this.id){
          var response = await this.apiService.httpPost('/reports/update/' + this.id, reportData, 'put');
        } else{
          var response = await this.apiService.httpPost('/reports/add', reportData);
        }
        if(response){
          console.log('Report submitted successfully');
          this.misc.openSnackBar('Report submitted successfully', 'OK');
          this.router.navigateByUrl('/reports');
        }
      }catch(err: any){
        console.error(err);
      }
      
    }

}
