import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { TokenInterceptor } from './http/token-interceptor.service';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  providers: [
    AuthenticationGuard, ,
    TokenInterceptor,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ApiPrefixInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
