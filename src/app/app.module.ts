
//Module
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InputRouteGuard } from './input-route-guard';
import { LoginRouteGuard } from './login-route-guard';
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
import { LoginComponent } from './login/login.component';


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
    ApplyCounterDirective,
    LoginComponent,
    LayoutComponent

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
  //login檢查
  providers: [LoginRouteGuard, InputRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
//AppRoutingModule必須放在最後
