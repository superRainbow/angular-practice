import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from 'src/environments/environment';
import { MockService } from './mock.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(MockService, {
          dataEncapsulation: false,
          caseSensitiveSearch: true,
          passThruUnknownUrl: true,
          rootPath: 'https://www.twse.com.tw/exchangeReport/STOCK_DAY',
        }),
  ],
})
export class MockModule {}
