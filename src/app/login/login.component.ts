import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  
  title = "ReactiveForms"
  reactiveForm: FormGroup;
  onSubmit(){
    console.log(this.reactiveForm.value)
  }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      details: new FormGroup({
        email: new FormControl(null,[Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
      }),
      petName: new FormControl(null,Validators.required)

    })
  }
   
}
