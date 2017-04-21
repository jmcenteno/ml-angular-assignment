import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { ProductDetailsViewComponent } from './components/product-details-view/product-details-view.component';
import { GridComponent } from './components/grid/grid.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [ProductListViewComponent, ProductDetailsViewComponent, GridComponent, GridItemComponent, ListComponent, ListItemComponent],
  providers: [],
  exports: [
    ProductListViewComponent,
    ProductDetailsViewComponent
  ]
})
export class ProductsModule { }
