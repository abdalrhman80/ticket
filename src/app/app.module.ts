import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ChartSplineComponent } from './components/chart-spline/chart-spline.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { QRCodeModule } from 'angularx-qrcode';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { OverTableSectionComponent } from './components/over-table-section/over-table-section.component';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    ChartSplineComponent,
    OverTableSectionComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    TooltipModule,
    TableModule,
    QRCodeModule,
    ToastModule,
    InputTextModule,
    InputSwitchModule,
    PaginatorModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
