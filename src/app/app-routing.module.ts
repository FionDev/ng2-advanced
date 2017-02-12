import { FlotComponent } from './flot/flot.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';
import { RadialComponent } from './radial/radial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type',     component: CardsComponent },
  { path:'charts/:username',
    children:[
      //{ path:'',redirectTo:'flot',pathMatch:'full'},
      { path:'flot',component:FlotComponent},
      { path:'radial', component:RadialComponent},
      { path:'rickshaw',component:RickshawComponent}
    ]
  },
  fallbackRoute
];
@NgModule({
  //imports: [RouterModule.forRoot(routes,{useHash:true})]
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
