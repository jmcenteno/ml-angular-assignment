import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { ProductDetailsViewComponent } from './components/product-details-view/product-details-view.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ProductListViewComponent, ProductDetailsViewComponent, GridComponent, ListComponent],
  providers: [],
  exports: [
    ProductListViewComponent,
    ProductDetailsViewComponent
  ]
})
export class ProductsModule { }
