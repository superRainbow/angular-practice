import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://data.epa.gov.tw/api/v1/wqx_p_01?api_key=9be7b239-557b-4c10-9775-78cadfc555e9&limit=1000&sort=ImportDate%20desc&format=json'
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>(this.url);
  }

}
