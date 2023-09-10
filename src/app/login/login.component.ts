import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  title = "ReactiveForms"
  myForm: FormGroup


  constructor(
    private fb:  FormBuilder,
    private userService: UserService,
    private router: Router
     
    ){}

  onSubmit(){
    const isUserLoggedIn = this.userService.isLoggedIn(this.myForm.value)
    if(!isUserLoggedIn) alert("You are not a platform User, please Register")
    else this.router.navigate(['/task']);

  }

  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }
   
}
