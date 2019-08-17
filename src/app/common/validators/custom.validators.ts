import { FormGroup, AbstractControl, Validators, FormArray } from '@angular/forms';

export class CustomValidators {
  static logValidationErrors(group: FormGroup, formErrors: any, validationMessages: any): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      formErrors[key] = '';
      if (abstractControl && !abstractControl.valid) {
        const messages = validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl, formErrors, validationMessages);
      }

      // We need this additional check to get to the FormGroup
      // in the FormArray and then recursively call this
      // logValidationErrors() method to fix the broken validation
      if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls) {
          if (control instanceof FormGroup) {
            this.logValidationErrors(control, formErrors, validationMessages);
          }
        }
      }

    });
  }

  static emailDomainValidate(control: AbstractControl): { [key: string]: any } | null {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (email === '' || domain.toLowerCase() === 'sikka.com') {
      return null;
    } else {
      return { 'emailDomain': true };
    }
  }

  static emailORmobileValidate(group: AbstractControl, em: boolean): { [key: string]: any } | null {
    const radioControl = group.get('enabled');
    const email2Control = group.get('email2');
    const mob2Control = group.get('mob2');
    var result: any;
    group.get('enabled').valueChanges
      .subscribe(userCategory => {

        if (radioControl.value) {
          mob2Control.setValidators([Validators.required]);
          email2Control.setValidators(null);

          email2Control.updateValueAndValidity(); // use to reflect validator which was inplemented above
          mob2Control.updateValueAndValidity();

          result = mob2Control.value == '' ? { 'custemailmob': true } : null;
        }
        else {
          email2Control.setValidators([Validators.required]);
          mob2Control.setValidators(null);

          email2Control.updateValueAndValidity();// use to reflect validator which was inplemented above
          mob2Control.updateValueAndValidity();

          result = email2Control.value == '' ? { 'custemailmob': true } : null;
        }
      });
    return result;
  }
}
