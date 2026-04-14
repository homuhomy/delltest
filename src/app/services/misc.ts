import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Misc {

  constructor(private snackBar: MatSnackBar) {
    //this.initNetworkListener();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  initNetworkListener() {
    let isOfflineShown = false;

    window.addEventListener('offline', ()=>{
      if (!isOfflineShown){
         this.openSnackBar('No internet connection hOE', 'OKAY?');
         isOfflineShown = true;
      }
    });

    window.addEventListener('online', ()=>{
         this.openSnackBar('You are back on line hoE', 'Close');
         isOfflineShown = false;
     
    });

  }
}
