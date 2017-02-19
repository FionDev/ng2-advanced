import { Component, OnInit } from '@angular/core';

import {AbstractControl,FormArray, Validators,  FormGroup,   FormBuilder} from '@angular/forms';
import { noFionValidator } from '../shared/no-fion-validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form: FormGroup;
   constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': ['Fion', [Validators.required, Validators.minLength(3)]],
      'group1': this.fb.array([
        this.fb.control('Fion1', Validators.required),
        this.fb.control('Fion2', Validators.required),
        this.fb.control('Fion3', Validators.required),
        this.fb.control('Fion4', Validators.required)
      ])
    });
  }

  ngOnInit() {
    this.form.addControl('email', this.fb.control('default@example.com', Validators.required));
    //動態塞入
    let group1: FormArray = <FormArray>this.form.controls['group1'];
    group1.insert(group1.length, this.fb.control('FionFion', noFionValidator));

  }


getFieldInvalid(fieldName, prefix="") {
     return this.form.get(prefix+fieldName).invalid;
    }

}
