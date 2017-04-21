import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent implements OnInit {

  @Input() product: any;
  @Input() category: String;
  @Input() specs: any[];

  constructor() { }

  ngOnInit() {
  }

}
