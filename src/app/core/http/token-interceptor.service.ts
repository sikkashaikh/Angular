import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../common/services/storage.service';
import { UserDetails } from '../../common/model/user-details';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private storage: StorageService) { }
    token: any;
    excludeUrls: Array<string> = ['/login', '/demo'];
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        // Exclude interceptor for login request: listof string array
        if (this.excludeUrls.indexOf(request.url) > -1) {
            return next.handle(request);
        }

        // add authorization header with jwt token if available
        let currentUser: UserDetails;
        currentUser = this.storage.getUserDetails();
        if (currentUser && currentUser.token) {
             request = request.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${currentUser.token}`,
                    'userId': currentUser.userName
                })
            });
        }

        return next.handle(request);
    }
}