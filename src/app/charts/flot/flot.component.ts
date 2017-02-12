import { OnDestroy,Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit,OnDestroy {
  username:string;

 //此route會隨著此component消失而摧毀  但因為此component的paraent並無設定component所以部會消失 所以要自己destory
  constructor(private router:Router,private route:ActivatedRoute) { }

  //RXJS 訂閱
  parentParams$: Subscription;

  //只會執行一次
  ngOnInit() {
    //this.username = this.route.parent.snapshot.params['username'];
    this.username = this.route.parent.snapshot.params['username'];
     this.parentParams$ = this.route.parent.params.subscribe(params => {
       console.log(params['username']);
     });
  }


  ngOnDestroy() {
     this.parentParams$.unsubscribe();
   }
}
