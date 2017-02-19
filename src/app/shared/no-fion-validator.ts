import { AbstractControl } from '@angular/forms';
   //自訂控制項檢查
export function noFionValidator(control: AbstractControl) {

    if(control.value == 'FionFion') {
      return {
        NoFion: true
      };
    }
    else {
      return null;//代表查無FionFion
    }
  }

