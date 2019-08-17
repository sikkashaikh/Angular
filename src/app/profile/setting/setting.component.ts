import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { CustomValidators } from '../../common/validators/custom.validators';
import { BaseService } from '../../core/http/base.service';
import { uri } from '../../common/services/constant';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: BaseService) { }

  settingForm: FormGroup;
  countries: { label: string, value: string }[];
  cities: { label: string, value: string }[];


  //validation object and message start
  formErrors = {};

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be greater than 5 characters.',
      maxlength: 'Name must be less than 10 characters.'
    },
    email: {
      required: 'Password is required.',
      emailDomain: 'Email must be on the sikka.com'
    },
    mobile: { required: 'Mobile is required.' },
    gender: { required: 'Gender is required.' },
    language: { required: 'Language is required.' },
    country: { required: 'Country is required.' },
    city: { required: 'City is required.' },
    email2: {
      required: 'Provide email2 input',
      custemailmob: 'provide email2 data'
    },
    mob2: {
      required: 'Provide mob2 input',
      custemailmob: 'provide mob2 data'
    },
    emailORmobGroup:{
      custemailmob: 'Group validation msg'
    }
  };
  //validation object and message end

  ngOnInit() {

    this.createFormControls();

    this.dataInitialise();
    this.getProfileData();
  }

  save() {
    CustomValidators.logValidationErrors(this.settingForm, this.formErrors, this.validationMessages);
    if (this.settingForm.valid) {
      this.http.postData(uri.Profile, this.settingForm.value).subscribe((data: any) => {
        if (data != null) {
          alert("Saved");
        }
        else {
          console.log("no data found");
        }
      }, error => {
        console.log("error");
      });
    }
  }

  dataInitialise() {
    this.http.getData(uri.Countries).subscribe((data: any) => {
      if (data.length > 0) {
        this.countries = data;
      }
      else {
        console.log("no data found");
      }
    }, error => {
      console.log("error");
    });

    this.http.getData(uri.Cities).subscribe((data: any) => {
      if (data.length > 0) {
        this.cities = data;
      }
      else {
        console.log("no data found");
      }
    }, error => {
      console.log("error");
    });
  }

  createFormControls() {
    this.settingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, CustomValidators.emailDomainValidate]],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      language: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      emailORmobGroup: this.fb.group(
        {
          enabled: [false], // bydefault set false for email requied
          email2: ['', Validators.required],// by default email is required
          mob2: [''],
        },{validators: CustomValidators.emailORmobileValidate}
      ),
    });
  }

  getProfileData() {
    this.http.getData(uri.Profile).subscribe((data: any) => {
      if (data != null) {
        this.settingForm.patchValue(data);
      }
      else {
        console.log("no data found");
      }
    }, error => {
      console.log("error");
    });

  }
}

