import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent {
  title = 'sikkaTemp';
  isCollapse: boolean = true;
  className: string;

  toggleMenu(e: HTMLElement) {
    if (e.className == "sidebar-toggle") {
      var w = window.innerWidth;
      this.isCollapse = !this.isCollapse;
      if(w<767)
      this.className = this.isCollapse ? '' : 'sidebar-open';
      else
      this.className = this.isCollapse ? '' : 'sidebar-collapse';
    }
  }
}

