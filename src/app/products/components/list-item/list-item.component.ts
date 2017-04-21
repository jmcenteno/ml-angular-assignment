import { Component, Input, OnInit } from '@angular/core';

import { FadeInUp } from '../../products.animations';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    FadeInUp('itemState', 300)
  ]
})
export class ListItemComponent implements OnInit {

  @Input() product: any;
  @Input() delay: number;
  @Input() index: number;

  constructor() {

    this['state'] = 'inactive';

  }

  ngOnInit() {

    this.sleep(this.delay).then(() => {
      this['state'] = 'active';
    });

  }

  sleep(time) {

    return new Promise((resolve) => setTimeout(resolve, time));

  }

}
