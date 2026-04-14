import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseURL: string = 'https://myexpressnov2025.-production.up.railway.app/api';

  constructor(private httpClient: HttpClient) {}

  httpGet(path: string){
      let headers = { headers: new HttpHeaders()};
      let fullURL: string = this.baseURL + path;

      return new Promise((resolve, reject) => {
        this.httpClient.get(fullURL, headers).subscribe({
          next: (response: any) => {resolve(response)},
          error: (error: any) => {reject(error)}
        });
      })
    }
}
