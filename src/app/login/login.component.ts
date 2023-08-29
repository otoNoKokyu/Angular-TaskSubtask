import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild("myForm") form : any
  onSubmit(){
    console.log(this.form.value)
  }
  ngAfterViewInit(){
    // this.form
  }	
}
