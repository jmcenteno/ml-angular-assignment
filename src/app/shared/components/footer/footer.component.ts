import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../../../app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  appName: String = APP_NAME;
  year: Number = (new Date()).getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
