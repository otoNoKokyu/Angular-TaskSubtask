import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static phoneValidator(control: AbstractControl): { [key: string]: boolean } | null {
    let sPhone = String(control.value)
    if( sPhone && (sPhone.length >10 || sPhone.length <10)) return {isPhoneError:true }
    return null
  }

  static countryValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if( control.value && control.value !== "India") return {isCountryError:true }
    return null
    };
  }


