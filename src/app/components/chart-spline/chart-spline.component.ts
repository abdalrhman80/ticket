import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexFill,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  fill: ApexFill | any;
};
@Component({
  selector: 'app-chart-spline',
  templateUrl: './chart-spline.component.html',
  styleUrls: ['./chart-spline.component.scss']
})
export class ChartSplineComponent {
  @ViewChild("chart") chart!: ChartComponent;
  chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [80, 160, 30, 100, 249.9, 170, 230, 180, 190, 90, 50, 200],
        },
      ],

      chart: {
        legend: {
          show: false,
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: false,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: '<i class="pi pi-undo fw-semibold">',
          },
        },
        locales: [
          {
            name: "ar",
            options: {
              months: [
                "يناير",
                "فبراير",
                "مارس",
                "أبريل",
                "مايو",
                "يونيو",
                "يوليو",
                "أغسطس",
                "سبتمبر",
                "أكتوبر",
                "نوفمبر",
                "ديسمبر"
              ],
              shortMonths: [
                "يناير",
                "فبراير",
                "مارس",
                "أبريل",
                "مايو",
                "يونيو",
                "يوليو",
                "أغسطس",
                "سبتمبر",
                "أكتوبر",
                "نوفمبر",
                "ديسمبر"
              ],
              days: [
                "الأحد",
                "الإثنين",
                "الثلاثاء",
                "الأربعاء",
                "الخميس",
                "الجمعة",
                "السبت"
              ],
              shortDays: [
                "أحد",
                "إثنين",
                "ثلاثاء",
                "أربعاء",
                "خميس",
                "جمعة",
                "سبت"
              ],
              toolbar: {
                exportToSVG: "تحميل بصيغة SVG",
                exportToPNG: "تحميل بصيغة PNG",
                exportToCSV: "تحميل بصيغة CSV",
                menu: "القائمة",
                selection: "تحديد",
                selectionZoom: "تكبير التحديد",
                zoomIn: "تكبير",
                zoomOut: "تصغير",
                pan: "تحريك",
                reset: "إعادة التعيين"
              }
            }
          }
        ],
        defaultLocale: "ar",
        height: '220px',
        width: '98.5%',
        type: "area",
      },

      dataLabels: {
        enabled: false
      },

      stroke: {
        curve: "smooth"
      },

      xaxis: {
        type: "category",
        categories: [
          "ديسمبر",
          "نوفمبر",
          "أكتوبر",
          "سبتمبر",
          "أغسطس",
          "يوليو",
          "يونيو",
          "مايو",
          "أبريل",
          "مارس",
          "فبراير",
          "يناير"
        ],
        labels: {
          show: true,
          floating: true,
          rotate: -45,
          trim: true,
          style: {
            fontSize: '12px',
            fontFamily: 'Neo Sans Arabic',
            fontWeight: 500,
            colors: '#9291A5',
          },
        },

        axisTicks: {
          show: false,
        },

        crosshairs: {
          show: true,
          width: 1,
          position: 'back',
          opacity: 0.9,
          stroke: {
            color: '#8A74F9',
            width: 2,
            dashArray: 0,
          },
        },
        max: 12,
        tooltip: {
          enabled: false
        }
      },

      yaxis: {
        show: false,
      },

      tooltip: {
        marker: {
          show: false
        },
        custom: ({ series, seriesIndex, dataPointIndex }: any) => {
          return (
            `<div class="arrow_box pt-1" > 
              <p class="mb-0" > ${series[seriesIndex][dataPointIndex]} إستخدام</p>
              <div class="mb-1 pe-2">
                <svg class="ms-1" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="4.74882" cy="4.83807" rx="4.14588" ry="4.03717" fill="#8A74F9"/>
                  <path d="M5.67989 4.4061L5.56864 4.51443C4.97335 5.09411 4.37801 5.67384 3.7826 6.25363C3.66216 6.37092 3.51984 6.39661 3.3777 6.33256C3.24077 6.26986 3.16562 6.1551 3.18558 6.01635C3.20351 5.9161 3.25208 5.82346 3.32494 5.75051C3.90062 5.17979 4.48376 4.61634 5.06464 4.05069L5.17467 3.94354C5.13917 3.93763 5.10337 3.93357 5.06742 3.93137C4.83451 3.93036 4.60143 3.93256 4.36869 3.92968C4.18438 3.92765 4.05716 3.80411 4.05474 3.63241C4.05231 3.44515 4.16772 3.31958 4.36054 3.3184C4.89624 3.31502 5.43165 3.31463 5.96677 3.31722C6.18319 3.3184 6.30502 3.43231 6.30902 3.64069C6.31885 4.15795 6.32469 4.67526 6.32655 5.19264C6.32724 5.38226 6.20055 5.4938 6.00703 5.49228C5.82446 5.49059 5.70436 5.37634 5.6988 5.19213C5.6929 4.97344 5.69238 4.75458 5.68908 4.53572C5.68839 4.50125 5.68388 4.46745 5.67989 4.4061Z" fill="white"/>
                </svg>
                <span>1.3%</span>
              </div>
            </div>`
          )
        }
      },

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: .9,
        }
      }
    };
  }
}
