import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styles: ``
})

export class HeaderComponent implements OnInit {
  showFiller = false;
  public sidebarItems: any = [{
    url: '/cli-test',
    icon: '',
    label: 'cli test'
  }, {
    url: '/admin-pro',
    icon: '',
    label: 'Admin pro'
  }];

  ngOnInit(): void {

  }
}

