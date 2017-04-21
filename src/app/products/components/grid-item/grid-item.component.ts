import { Component, Input, OnInit } from '@angular/core';

import { ZoomInUp } from '../../products.animations';

@Component({
  selector: 'app-products-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  animations: [
    ZoomInUp('panelState', 500)
  ]
})
export class GridItemComponent implements OnInit {

  @Input() product: any;
  @Input() delay: Number;

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
