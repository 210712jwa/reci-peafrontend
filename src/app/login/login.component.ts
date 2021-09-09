import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

 showErrorMessage: boolean = false;
 errorMessage: string = '';

  constructor(private loginservice: LoginService, private router: Router) {
  this.router.navigate(['']);
  }
    

  ngOnInit(): void {
    this.checkIfAlreadyLoggedIn();
  }

  login(){
    this.loginservice.login(this.username, this.password).subscribe((data: User) =>{
      this.router.navigate(["shopping-cart"]);
    },  
    (err: HttpErrorResponse) => {
      console.log(err);
      this.showErrorMessage = true;
      this.errorMessage = err.error.message

    });
  }
  
  checkIfAlreadyLoggedIn(){
    this.loginservice.checkIfAlreadyLoggedIn().subscribe((data) => {
      this.router.navigate(['shopping-cart']);
    })
  }

}
