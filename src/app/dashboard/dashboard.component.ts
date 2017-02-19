//解決跑無窮迴圈檢查 示範用正確的方法整合第三方 JavaScript 函式庫進來
import {NgZone, Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
//將 DashboardComponent 需要的初始化程式轉成 TypeScript 版本
import { initDashboard } from '../shared/app-init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private zone: NgZone) { }

  ngOnInit() {
    //跑在zone之外
    this.zone.runOutsideAngular(() => {
      initDashboard();
    });
  }
  //測試跑的次數
  debug() {
    console.log('Dashboard', 'debug()');
  }

  goCards(type)
  {
     this.router.navigateByUrl('/cards/'+type);
  }
}
