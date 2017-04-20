import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { ProductsToolbarComponent } from './components/products-toolbar/products-toolbar.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ProductsToolbarComponent, ProductsGridComponent, ProductsListComponent],
  providers: [],
  exports: [
    ProductsToolbarComponent,
    ProductsGridComponent,
    ProductsListComponent
  ]
})
export class ProductsModule { }
