import { Component } from '@angular/core';
import { MatCardHeader } from "@angular/material/card";   
import { SharedModules } from "../../shared/shared-modules";
import { RouterLink, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Misc } from '../../services/misc';

@Component({
  selector: 'app-add-page',
  imports: [...SharedModules, RouterLink],
  templateUrl: './add-page.html',
  styleUrl: './add-page.scss',
})
export class AddPage {
  public reportForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: Api,
    private router: Router,
    private misc: Misc
  ){
    this.reportForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required]
    })
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
        let response = await this.apiService.httpPost('/reports/add', reportData);
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
