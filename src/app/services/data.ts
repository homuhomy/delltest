import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private isBrowser = typeof window !== 'undefined' && !window.localStorage;

  setLocalStorage(key: string, value: string) {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getLocalStorage(key:string){
    if(this.isBrowser){
      const item = localStorage.getItem(key);
      return item;
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
