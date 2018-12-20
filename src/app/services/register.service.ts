import { Injectable } from '@angular/core';
import { LoginForm } from '../auth/models/LoginForm';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { GtSessionStorageService } from '../services/gt-session-storage.service';

@Injectable()
export class RegisterService {

  private validationMessage = {
    success: 'You are successfully logged In',
    error: 'Username or password is incorrect.'
  };
  constructor(private sessionStorage: GtSessionStorageService) {

  }

  public register(data: LoginForm): Observable<any> {
     return of(this.validationMessage.success)
  }

  public login(data: LoginForm): Observable<any> {
    const user = this.sessionStorage.value('username');
    const pass = this.sessionStorage.value('password');
    if(data.username === user && data.password === pass) {
      return of(this.validationMessage.success)
    }
    return Observable.throw(this.validationMessage.error)
  }
}
