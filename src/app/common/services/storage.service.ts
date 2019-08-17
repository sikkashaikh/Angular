import { Injectable } from '@angular/core';
import { UserDetails } from '../model/user-details';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUserDetails(user: any) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserDetails(): UserDetails {
    let currentUser: UserDetails;
    currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return currentUser;
    }
    return null;
  }

  removeUserDetails() {
    sessionStorage.removeItem('currentUser');
  }
}
