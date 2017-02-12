import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent
  },
  {
    path: 'page2',
    component:Page2Component
  }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes,{useHash:true})]
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
