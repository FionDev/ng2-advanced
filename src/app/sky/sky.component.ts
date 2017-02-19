import {NgModel} from '@angular/forms';
import {ContentChild, ElementRef,   Input,   Component,   OnInit,   ViewChild} from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  @ViewChild('input')
  input: NgModel;

  @Input()
  titleimg: string;

  @ContentChild('btn')
  btn: ElementRef;

  @Input()
  name: string = 'Sky';

  constructor() { }

  ngOnInit() {
  }

  getCounter() {
    if(this.btn) {
      console.log(this.btn.nativeElement.innerText);
    }
  }

}
