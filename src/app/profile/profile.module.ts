import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SettingComponent } from './setting/setting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputSwitchModule} from 'primeng/inputswitch';
@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    MultiSelectModule,
    InputSwitchModule    
  ]
})
export class ProfileModule { }
