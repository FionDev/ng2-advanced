import {HostListener, HostBinding,  Directive} from '@angular/core';

@Directive({
  selector: '[apply-counter]'
})
export class ApplyCounterDirective {

  @HostBinding('class.bg-success')
  bgClass = false;

  @HostListener('click', ['$event'])
  myClick($event) {
    this.bgClass = !this.bgClass;
    console.log($event);
  }

  constructor() {

    setTimeout(() => {
      this.bgClass = true;
    }, 5000);

  }

}
