import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata
} from '@angular/animations';

@Component({
  selector: 'app-products-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  animations: [
    trigger('panelState', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('inactive => active', [
        animate('500ms ease')
      ])
    ])
  ]
})
export class GridItemComponent implements OnInit {

  @Input() product: any;
  @Input() delay: number;

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
