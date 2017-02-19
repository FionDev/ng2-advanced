import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

data: any = {
     "name": "123",
     "group1": {
       "sub1": "1",
       "sub2": "123"
     }
   };

  constructor() { }

  ngOnInit() {
  }
  debug(obj) {
     console.dir(obj);
   }
}
