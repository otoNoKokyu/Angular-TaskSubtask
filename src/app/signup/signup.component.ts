import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = "ReactiveForms"
  mySignupForm: FormGroup


  constructor(private fb:  FormBuilder){}

  onSubmit(){

    console.log(this.mySignupForm.valid)
  }
  // emailValidator(email:FormControl){
  //   if( email.value && email.value === "rumpa.dey@gmail.com") return {isEmailError:true }
  //   return null
  // }
  
  ngOnInit(): void {
    this.mySignupForm = this.fb.group({
      name: this.fb.group({
        firstName : ['', Validators.required],
        lastNme: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }

}
