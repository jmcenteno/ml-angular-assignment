import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit, OnChanges {

  @Input() products: any[] = [];

  grid: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.grid = this.paginate(this.products);

  }

  private paginate(arr: Array<any>): Array<any[]> {

    const pages: Array<any[]> = [];
    let page: Array<any> = [];

    arr.forEach((item, i) => {

      page.push(item);

      if ((i + 1) % 3 === 0 || (i + 1) >= arr.length) {
        pages.push(page);
        page = [];
      }

    });

    return pages;

  }

}
