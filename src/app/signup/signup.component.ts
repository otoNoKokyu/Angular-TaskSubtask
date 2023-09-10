import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { CustomValidators } from './validator';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = "ReactiveForms"
  mySignupForm: FormGroup


  constructor(
    private fb:  FormBuilder, 
    private userService: UserService,
    private router:  Router
    
    ){}

  onSubmit(){
    this.userService.addUser(this.mySignupForm.value)
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.mySignupForm = this.fb.group({
      name: this.fb.group({
        firstName : ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      phone: ['', [Validators.required, CustomValidators.phoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required, CustomValidators.countryValidator]],
      password: ['', [Validators.required]],
      
    });


  }

}
