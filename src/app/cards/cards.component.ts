import {ViewEncapsulation,ViewChildren, QueryList,ViewChild,Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
//加入子component
import { SkyComponent } from './../sky/sky.component';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit
{

  type:string;
  name:string;
  counter = 10;

  //子元件第一個
  @ViewChild(SkyComponent)
  sky: SkyComponent;
  //子元件下所有
  @ViewChildren(SkyComponent)
   skies: QueryList<SkyComponent>;

  constructor(private router:Router,private route:ActivatedRoute) { }

  //只有在創建時會執行一次
  ngOnInit() {
    //此用法只是適用value不會在被修改
    //this.type=this.route.snapshot.params['type'];
    //改RXJS採非同步 訂閱者模式 一旦值修改則會通知更新
    //取得參數
    this.route.params.subscribe( params => {
       this.type = params['type'];
      console.log('Matrix: ' + params['name']);
     });
     //取得參數
     this.route.queryParams.subscribe( params => {
       console.log('QueryString: ' + params['name']);
     })
  }



  updateCards(type)
  {
    this.router.navigateByUrl('/cards/' + type);
  }
  //QueryString傳參數 程式寫法
  goQueryString() {
     this.router.navigate(['/cards', 100], {
       queryParams: {
         name: 'QueryString-by-Code'
       }
     })
   }
  //Matrix傳參數 程式寫法
   goMatrix() {
     this.router.navigate(['/cards', 100, {
         name: 'Matrix-by-Code',
       }]);
   }


   //在事件初始化後才執行
   ngAfterViewInit() {
     //抓欄位值 子元件只有一個
     console.log(this.sky.name);
     //子元件不只1個
       this.skies.forEach(x => {
      console.log(x.titleimg);
    });
   }



   incCounter() {
    this.counter++;
  }

   checkSkyInputDirty() {
     //抓子component中元件的狀態
     console.log(this.sky.input.dirty);
   }
}

