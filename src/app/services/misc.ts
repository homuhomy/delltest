import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Misc {
  private loginSubject = new Subject;

  constructor(private snackBar: MatSnackBar) {
    //this.initNetworkListener();
  }

  publishLoginEvent(data: any) {
    this.loginSubject.next(data); //carry latest data
  }

  observeLoginEvent() {
    return this.loginSubject;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration: 3000});
  }

  initNetworkListener() {
    let isOfflineShown = false;

    window.addEventListener('offline', ()=>{
      if (!isOfflineShown){
         this.openSnackBar('No internet connection', 'OKAY?');
         isOfflineShown = true;
      }
    });

    window.addEventListener('online', ()=>{
         this.openSnackBar('You are back on line', 'Close');
         isOfflineShown = false;
     
    });

  }
}
