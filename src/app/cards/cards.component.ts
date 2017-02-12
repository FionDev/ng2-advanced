import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type:string;

  constructor(private router:Router,private route:ActivatedRoute) { }

  //只有在創建時會執行一次
  ngOnInit() {
    //此用法只是適用value不會在被修改
    //this.type=this.route.snapshot.params['type'];
    //改RXJS採非同步 訂閱者模式 一旦值修改則會通知更新
    this.route.params.subscribe( params => {
       this.type = params['type'];
     });
  }

  updateCards(type)
  {
    this.router.navigateByUrl('/cards/' + type);
  }
}
