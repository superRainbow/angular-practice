import { Component, OnInit, ViewChild } from '@angular/core';
import 'chartjs-adapter-date-fns';
import 'chartjs-chart-financial';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { zhTW } from 'date-fns/locale';
import {
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement,
} from 'chartjs-chart-financial';
import { StockService } from '../../service/stock.service';
import dayjs from 'dayjs';

@Component({
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.scss'],
})
export class FinancialChartComponent implements OnInit {
  public loading = true;

  public stockId = '0050';
  public chartType: ChartType = 'candlestick';
  public options: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        time: {
          unit: 'day',
        },
        adapters: {
          date: {
            locale: zhTW,
          },
        },
        ticks: {
          source: 'auto',
        },
      },
    },
  };

  public financialChartData: ChartConfiguration['data'] = { datasets: [] };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(public api: StockService) {
    Chart.register(
      CandlestickController,
      OhlcController,
      CandlestickElement,
      OhlcElement
    );
  }

  ngOnInit() {
    this.getStockData();
  }

  getStockData() {
    this.loading = true;
    this.api.getThisMoth(this.stockId).subscribe((res: any) => {
      this.financialChartData.datasets = [this.setData(res)];
      this.loading = false;
    });
  }

  setData(res: any) {
    return {
      label: res.title,
      data: res.data.map((item: any) => ({
        x: this.parseDate(item[0]),
        o: Number(item[3]),
        h: Number(item[4]),
        l: Number(item[5]),
        c: Number(item[6]),
      })),
    };
  }

  parseDate(string: string) {
    const dataArray = string.split('/');
    return dayjs(
      `${Number(dataArray[0]) + 1911}/${dataArray[1]}/${dataArray[2]}`
    ).valueOf();
  }

  search(): void {
    this.getStockData();
  }
}
