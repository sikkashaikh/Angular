import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { BaseService } from '../../core/http/base.service';
import { StorageService } from '../../common/services/storage.service';
import { UserDetails } from '../../common/model/user-details';
import { CustomValidators } from '../../common/validators/custom.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response: any;
  loginForm: FormGroup;

  constructor(public router: Router, private fb: FormBuilder, private http: BaseService,
     private storage: StorageService) { }



  //validation object and message start
  formErrors = {
    userName: '',
    password: ''
  };

  validationMessages = {
    userName: {
      required: 'User Name is required.',
      minlength: 'User Name must be greater than 5 characters.',
      maxlength: 'User Name must be less than 10 characters.'
    },
    password: {
      'required': 'Password is required.'
    }
  };
  //validation object and message end

  ngOnInit() {

    this.createFormControls();
  }

  login() {
    CustomValidators.logValidationErrors(this.loginForm,this.formErrors,this.validationMessages);

    if (this.loginForm.valid) {
      let ud = this.loginForm.value;

      // //Uncomment when connect to actual API
      // this.http.postData('/public-api/users', ud).subscribe((response: any) => {
      //   if (response.result.length > 0) {
      //     if (response && response.token) {
      //       // store response details and jwt token in local storage to keep response logged in between page refreshes
      //       this.storage.setUserDetails(response);
      //     }
      //     // navigate to dashboard page
      //     this.router.navigate(['/'], {
      //       replaceUrl: true
      //     });
      //   }
      //   else {
      //     console.log("no data found");
      //   }
      // }, error => {
      //   console.log("error");
      // });



      //**************Fake response Start********************* */    
      let response: UserDetails = {
        id: 1,
        userName: ud.userName,
        firstName: "sikandar",
        lastName: "shaikh",
        token: "e02AqB-CZC-UbL_CoKt0wcH5UxbilwfE17CR",
        role: "admin",
        roleId: 1
      };

      this.storage.setUserDetails(response);
      this.router.navigate(['/'], {
        replaceUrl: true
      });
      //**************Fake response End********************* */
    }
    return false;
  }

  createFormControls() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', Validators.required]
    });
  }

}
