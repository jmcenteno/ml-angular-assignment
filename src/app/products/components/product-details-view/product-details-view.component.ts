import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent implements OnInit {

  @Input() product: any;
  @Input() category: string;
  @Input() specs: any[];

  currentTab: number = 0;

  constructor() { }

  ngOnInit() {

    window.scroll(0, 0);

  }

}
