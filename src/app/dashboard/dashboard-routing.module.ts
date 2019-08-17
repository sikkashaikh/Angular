import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dash1Component } from './dash1/dash1.component';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { Dash2Component } from './dash2/dash2.component';

const routes: Routes = [
  {
    path: '',
      canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: Dash1Component,
      },
      {
        path: 'dash2',
        component: Dash2Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
