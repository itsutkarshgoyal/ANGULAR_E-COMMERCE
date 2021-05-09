import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/core/services/auth.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private _authService : AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem("isLoggedIn"))
    this.router.navigateByUrl('/home');
  }

  // Validate and submit the login form.
  submitLoginForm(email: HTMLInputElement,password: HTMLInputElement): void {

    if(!email.value || !password.value ){
      if(!this.toastr.currentlyActive)
    this.toastr.error("Email/Password are Required", "Authentication Failed")
    return
    }

    this._authService.authenticateUser({email:email.value,password:password.value}).subscribe(data =>
      {
        if(data){
          this._authService.storeUserData(data);
          this.toastr.success("Login Successful", "Welcome " + data.name )
          this.router.navigateByUrl('/home');
        }else
        {
          if(!this.toastr.currentlyActive)
          this.toastr.error("Incorrect Email or Password", "Authentication Failed")
        } 
      });
  
  }

}
