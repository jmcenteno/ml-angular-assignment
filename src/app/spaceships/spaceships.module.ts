import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModule } from '../products/products.module';

import { SpaceshipsRouting } from './spaceships.routing';
import { SpaceshipsService } from './services/spaceships/spaceships.service';
import { SpaceshipListComponent } from './components/spaceship-list/spaceship-list.component';
import { SpaceshipDetailsComponent } from './components/spaceship-details/spaceship-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    SpaceshipsRouting
  ],
  declarations: [SpaceshipListComponent, SpaceshipDetailsComponent],
  providers: [SpaceshipsService]
})
export class SpaceshipsModule { }
