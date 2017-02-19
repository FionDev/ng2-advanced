import { Component, OnInit } from '@angular/core';

import {FormArray, Validators,  FormGroup,   FormBuilder} from '@angular/forms';
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
    let group1: FormArray = <FormArray>this.form.controls['group1'];
    group1.insert(group1.length, this.fb.control('Will 5'));

  }
 getFieldInvalid(fieldName) {
     return this.form.controls[fieldName].invalid;
   }
}
