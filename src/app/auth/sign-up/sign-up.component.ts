import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { GtSessionStorageService } from '../../services/gt-session-storage.service';
import { LoginForm } from '../models/LoginForm';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signInForm: LoginForm;
  public loggedInMessage: string;
  public loggedInError: string;
  public register$: Subscription;
  public signUpForm: LoginForm;
  constructor(private _registerService: RegisterService,
    private _router: Router,
    private sessionStorage: GtSessionStorageService) { }

  public ngOnInit() {
    this.signUpForm = <LoginForm>{}
  }

  public onSumbit(form) {
    this.sessionStorage.put('username', form.username);
    this.sessionStorage.put('password', form.password);
    // this._router.navigate(['/dashboard'])
    // this.register$ = this._registerService.register(form)
    //   .subscribe((res)=> {
    //       this.loggedInError = null;
    //       this.loggedInMessage = res;
    //     },
    //     (err) => {
    //       this.loggedInMessage = null;
    //       this.loggedInError = err;
    //     })
  }
}
