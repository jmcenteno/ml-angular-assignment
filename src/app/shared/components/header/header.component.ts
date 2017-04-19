import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../../../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName: String = APP_NAME;

  constructor() { }

  ngOnInit() {
  }

}
