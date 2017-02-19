import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
//將 DashboardComponent 需要的初始化程式轉成 TypeScript 版本
import { initDashboard } from '../shared/app-init';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    initDashboard();
  }

  goCards(type)
  {
     this.router.navigateByUrl('/cards/'+type);
  }
}
