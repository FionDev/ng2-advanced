import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup,  FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder)
  {
     this.form = this.fb.group({ 'name': ['Will', Validators.required]});
   }

  ngOnInit() {
  }

}
