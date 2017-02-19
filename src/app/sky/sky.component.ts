import {NgModel} from '@angular/forms';
import { ElementRef, Input, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {


  @ViewChild('input')
  input: NgModel;

  @Input()
  name: string = 'Sky';

  constructor() { }

  ngOnInit() {
  }


}
