import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [UserMenuComponent, SiteFooterComponent,
                 SiteHeaderComponent, SiteMenuComponent,
                 BreadcrumbComponent, MessagesComponent, 
                 NotificationsComponent, TasksComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[UserMenuComponent,SiteHeaderComponent,
          SiteFooterComponent,SiteMenuComponent,
          BreadcrumbComponent,MessagesComponent,
          NotificationsComponent,TasksComponent]
})
export class SharedModule { }
