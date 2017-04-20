import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { SpaceshipsService } from '../../services/spaceships/spaceships.service';
import { Spaceship } from '../../services/spaceships/spaceship';

@Component({
  selector: 'app-spaceship-list',
  templateUrl: './spaceship-list.component.html',
  styleUrls: ['./spaceship-list.component.scss']
})
export class SpaceshipListComponent implements OnInit {

  products: Spaceship[] = [];

  constructor(
    private spaceshipsService: SpaceshipsService) { }

  ngOnInit() {

    this.spaceshipsService.spaceships.subscribe(data => {
      this.products = data || [];
    });

    this.spaceshipsService.getAllSpaceships();

  }

}
