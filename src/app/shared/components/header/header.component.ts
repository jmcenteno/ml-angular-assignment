import { Component, OnInit } from '@angular/core';

import { APP_NAME, APP_TAGLINE } from '../../../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName: string = APP_NAME;
  appTagline: string = APP_TAGLINE;
  collapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
