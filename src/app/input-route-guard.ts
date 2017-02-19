import { LoginComponent } from './login/login.component';
import { Injectable } from '@angular/core';
import {CanDeactivate, Router,  CanActivate,   ActivatedRouteSnapshot,   RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable()
export class InputRouteGuard implements CanDeactivate<LoginComponent> {
  constructor(private router: Router) {

  }
  canDeactivate(component: LoginComponent,
              route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot ) {

      if(component.form.dirty) {
        return confirm('Are you SURE?');
      } else {
        return true;
      }

  }
}
