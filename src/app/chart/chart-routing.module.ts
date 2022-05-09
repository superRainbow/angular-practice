import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';

const routes: Routes = [
  {
    path: '',
    component: ChartComponent,
    children: [
      { path: 'bar', component: BarChartComponent },
      { path: 'time-axis', component: TimeAxisComponent },
      { path: 'financial', component: FinancialChartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {}
