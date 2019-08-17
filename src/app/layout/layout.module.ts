import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [SiteLayoutComponent, BlankLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[]
})
export class LayoutModule { }
