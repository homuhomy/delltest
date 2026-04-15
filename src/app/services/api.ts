import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from './data';

 
@Injectable({
  providedIn: 'root',
})

export class Api {

  // private baseURL: string = 'https://myexpressnov2025.-production.up.railway.app/api';
  private baseURL: string = 'https://shrill-star-0215.muhammadnaimabduljalil.workers.dev/api';

 
  constructor(
    private httpClient: HttpClient,
    private dataService: Data) {}


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

    httpPost(path: string, payload: any, method?: string) {
      let fullURL: string = this.baseURL + path;
      let token = this.dataService.getLocalStorage('token');
      let headers: any;
      if(token){
        headers = {headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')};
      } else {
        headers = {headers: new HttpHeaders()
          .set('Content-Type', 'application/json')};
      }
return new Promise((resolve, reject)=>{
  if(method == 'put'){
    this.httpClient.put(fullURL, payload, headers)
          .subscribe({
            next: (response: any) => {resolve(response)},
            error: (error: any) => {reject(error)}
          });
  } else {
    this.httpClient.post(fullURL, payload, headers)
          .subscribe({
            next: (response: any) => {resolve(response)},
            error: (error: any) => {reject(error)}
          });
        }
      })
    }
}