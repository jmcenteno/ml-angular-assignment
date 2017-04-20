import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpaceshipsService } from '../../services/spaceships/spaceships.service';
import { Spaceship } from '../../services/spaceships/spaceship';

@Component({
  selector: 'app-spaceship-details',
  templateUrl: './spaceship-details.component.html',
  styleUrls: ['./spaceship-details.component.scss']
})
export class SpaceshipDetailsComponent implements OnInit {

  product: Spaceship;
  specs: any[];

  constructor(
    private route: ActivatedRoute,
    private spaceshipsService: SpaceshipsService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.spaceshipsService.spaceships
        .subscribe((data: Spaceship[]) => {

          if (data) {

            this.product = data.find((item: Spaceship) => {
              return item.id === +params['id'];
            });

            this.specs = [
              { label: 'Length', value: this.product.techspecs.length },
              { label: 'Max Acceleration', value: this.product.techspecs.maxaccel },
              { label: 'Megalights', value: this.product.techspecs.MGLT },
              { label: 'Max Atmospheric Speed', value: this.product.techspecs.maxatmosphericspeed },
              { label: 'Hull', value: this.product.techspecs.hull },
              { label: 'Sensor', value: this.product.techspecs.sensor },
              { label: 'Targeting', value: this.product.techspecs.targeting },
              { label: 'Armament', value: this.product.techspecs.armament },
              { label: 'Communications', value: this.product.techspecs.communications },
            ];

          } else {

            this.spaceshipsService.getAllSpaceships();

          }

        });

    });

  }

}
