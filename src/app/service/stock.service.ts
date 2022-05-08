import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  url = 'https://www.twse.com.tw/exchangeReport/STOCK_DAY';

  today = dayjs().format('YYYYMMDD');

  constructor(private http: HttpClient) {}

  getThisMoth(id: string) {
    return this.http.get<any>(`${this.url}?stockNo=${id}`);
  }
}
