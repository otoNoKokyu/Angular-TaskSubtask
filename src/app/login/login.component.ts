import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  title = "ReactiveForms"
  myForm: FormGroup


  constructor(private fb:  FormBuilder){}

  onSubmit(){

    console.log(this.myForm.valid)
  }
  // emailValidator(email:FormControl){
  //   if( email.value && email.value === "rumpa.dey@gmail.com") return {isEmailError:true }
  //   return null
  // }
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }
   
}
