import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private isBrowser = typeof window !== 'undefined' && !!window.localStorage;

  lineChartData(){
    return{
      lineChartA: [65, 55, 70, 40],
      lineChartB: [65, 15, 70, 20],
      pieChart: [60, 80, 10, 10],
      pieChartLabels: ['Product A', 'Product B', 'Product C', 'Product D']
    }
  }

  setLocalStorage(key: string, value: string) {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getLocalStorage(key:string){
    if(this.isBrowser){
      console.log('true');
      const item : any = localStorage.getItem(key);
      return JSON.parse(item);
    }
    return null;
  }

  clearStorage(){
    return localStorage.clear(); //clear all storage
  }

  deleteStorage(key: string){
    return localStorage.removeItem(key); //delete specific key
  }
}
