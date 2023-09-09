import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


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

    console.log(this.mySignupForm.value)
  }
  countryValidator(country: FormControl){
    if( country.value && country.value !== "India") return {isCountryError:true }
    return null
  }
  phoneValidator(phone: FormControl){
    let sPhone = String(phone.value)

    if( sPhone && (sPhone.length >10 || sPhone.length <10)) return {isPhoneError:true }
    return null
  }
  
  ngOnInit(): void {
    this.mySignupForm = this.fb.group({
      name: this.fb.group({
        firstName : ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      phone: ['', [Validators.required, this.phoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required, this.countryValidator]],
      password: ['', [Validators.required]],
      
    });


  }

}
