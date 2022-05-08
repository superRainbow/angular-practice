import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChartComponent,
    BarChartComponent,
    TimeAxisComponent,
    FinancialChartComponent,
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    FormsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class ChartModule {}
