import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FirebaseAuthenticationService } from './auth/services/firebase-authentication.service';
import { async } from '@angular/core/testing';

@Injectable()

export class AuthGuardService implements CanActivate {
  constructor(public auth: FirebaseAuthenticationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.user) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
