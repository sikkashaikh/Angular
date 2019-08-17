import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { Dash1Component } from './dash1/dash1.component';
import { Dash2Component } from './dash2/dash2.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [Dash1Component, Dash2Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    TriStateCheckboxModule,
    TableModule
  ]
})
export class DashboardModule { }
