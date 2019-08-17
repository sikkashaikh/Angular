import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../common/services/storage.service';

@Component({
  selector: '[usermenu]',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  isCollapse: boolean = true;
  className: string;

  constructor(public router: Router, private storage: StorageService) { }

  ngOnInit() {
  }

  // toggleUserMenu() {
  //   this.isCollapse = !this.isCollapse;
  //   this.className = this.isCollapse ? '' : 'open';
  // }
  
  signout(){
    this.storage.removeUserDetails();
    this.router.navigate(['/login'], {
      replaceUrl: true
    });
  }

}
