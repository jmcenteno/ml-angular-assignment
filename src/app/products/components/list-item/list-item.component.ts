import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    trigger('itemState', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(120%)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('inactive => active', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class ListItemComponent implements OnInit {

  @Input() product: any;
  @Input() delay: number;
  @Input() index: number;

  state: string = 'inactive';

  constructor() { }

  ngOnInit() {

    this.sleep(this.delay).then(() => {
      this.state = 'active';
    });

  }

  sleep(time) {

    return new Promise((resolve) => setTimeout(resolve, time));

  }

}
