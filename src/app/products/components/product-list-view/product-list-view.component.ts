import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit, OnChanges {

  @Input() products: any[] = [];
  mode: String = 'grid';
  sortBy: String = 'name';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.sortProducts();

  }

  sortProducts() {

    if (this.sortBy === 'price-asc' || this.sortBy === 'price-desc') {

      this.products = _.sortBy(this.products || [], ['price']);

      if (this.sortBy === 'price-desc') {
        this.products.reverse();
      }

    } else {

      this.products = _.sortBy(this.products || [], ['name']);

    }

  }

}
