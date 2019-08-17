import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [{
  path: '',
    canActivate: [AuthenticationGuard],
  children: [
    {
      path: '',
      component: SettingComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
