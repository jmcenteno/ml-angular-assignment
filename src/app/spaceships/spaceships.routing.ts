import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceshipListComponent } from './components/spaceship-list/spaceship-list.component';
import { SpaceshipDetailsComponent } from './components/spaceship-details/spaceship-details.component';

const routes: Routes = [
  { path: 'spaceships', component: SpaceshipListComponent },
  { path: 'spaceships/:id', component: SpaceshipDetailsComponent }
];

export const SpaceshipsRouting: ModuleWithProviders = RouterModule.forChild(routes);
