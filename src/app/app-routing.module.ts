import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
//login
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginRouteGuard } from './login-route-guard';
import { InputRouteGuard } from './input-route-guard';
//import { Routes, RouterModule } from '@angular/router';
//延遲載入
import { PreloadAllModules, Route,  Routes,  RouterModule} from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';
// step 1 test
/*
import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'/layout',pathMatch:'full'
  },
  {
    path: 'layout',
    component:LayoutComponent
  },
  {
    path: 'page2',
    component:Page2Component,
    data:{pageTitle:'Page Title'}
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  fallbackRoute
];
*/
import {DashboardComponent} from './dashboard/dashboard.component'
import {CardsComponent} from './cards/cards.component'
const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'form',   component: FormComponent },
      { path: 'reactiveform',   component: ReactiveformComponent },
      { path: 'dashboard',   component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      { path: 'charts/:username',
        loadChildren: './charts/charts.module#ChartsModule'
      }
    ]
  },
  { path: 'login',  component: LoginComponent },
  fallbackRoute
];

@NgModule({
  //imports: [RouterModule.forRoot(routes,{useHash:true})]
  //imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  imports: [RouterModule.forRoot(routes, {
     enableTracing: false,
     preloadingStrategy: PreloadAllModules
   })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
