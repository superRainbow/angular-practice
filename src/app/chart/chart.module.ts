import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';

@NgModule({
  declarations: [
    ChartComponent,
    BarChartComponent,
    TimeAxisComponent,
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class ChartModule { }
