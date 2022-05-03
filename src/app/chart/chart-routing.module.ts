import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';

const routes: Routes = [
  { path: '', component: ChartComponent },
  { path: 'bar', component: BarChartComponent },
  { path: 'time-axis', component: TimeAxisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
