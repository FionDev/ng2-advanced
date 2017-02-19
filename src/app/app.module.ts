
//Module
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
//延遲載入 所以必須砍掉
//import { ChartsModule } from './charts/charts.module';

//Component
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SkyComponent } from './sky/sky.component';
import { ApplyCounterDirective } from './apply-counter.directive';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Page2Component,
    DashboardComponent,
    CardsComponent,
    FormComponent,
    ReactiveformComponent,
    SkyComponent,
    ApplyCounterDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //延遲載入 所以必須砍掉
    //ChartsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//AppRoutingModule必須放在最後
