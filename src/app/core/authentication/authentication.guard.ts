import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../common/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage : StorageService
  ) { }
  canActivate(): boolean {
    if (this.storage.getUserDetails()) {
      return true;
    }

    this.router.navigate(['/login'], {
      replaceUrl: true
    });
    return false;
  }
}
