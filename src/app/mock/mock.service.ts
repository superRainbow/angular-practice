import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import STOCK_DAY from './data/stock.json';

@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return STOCK_DAY;
  }
}
