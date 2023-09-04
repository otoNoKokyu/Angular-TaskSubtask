import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  title = "ReactiveForms"
  reactiveForm: FormGroup


  onSubmit(){

    console.log(this.reactiveForm)
  }
  emailValidator(email:FormControl){
    if( email.value && email.value === "rumpa.dey@gmail.com") return {isEmailError:true }
    return null
  }
  
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      details: new FormGroup({
        email: new FormControl("",[Validators.required, Validators.email, this.emailValidator]),
        password: new FormControl("", [Validators.required])
      })

    })
  }
   
}
