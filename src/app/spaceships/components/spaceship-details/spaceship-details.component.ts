import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpaceshipsService } from '../../services/spaceships/spaceships.service';
import { Spaceship } from '../../services/spaceships/spaceship';

@Component({
  selector: 'app-spaceship-details',
  templateUrl: './spaceship-details.component.html',
  styleUrls: ['./spaceship-details.component.scss']
})
export class SpaceshipDetailsComponent implements OnInit {

  spaceship: Spaceship;
  specs: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spaceshipsService: SpaceshipsService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.spaceshipsService.spaceships
        .subscribe((data: Spaceship[]) => {

          if (data) {

            this.spaceship = data.find((item: Spaceship) => {
              return (item.id === +params['id']);
            });

            if (!this.spaceship) {
              this.router.navigate(['/not-found']);
            }

            this.specs = [
              { label: 'Length', value: this.spaceship.specs.length },
              { label: 'Max Acceleration', value: this.spaceship.specs.maxaccel },
              { label: 'Megalights', value: this.spaceship.specs.MGLT },
              { label: 'Max Atmospheric Speed', value: this.spaceship.specs.maxatmosphericspeed },
              { label: 'Hull', value: this.spaceship.specs.hull },
              { label: 'Sensor', value: this.spaceship.specs.sensor },
              { label: 'Targeting', value: this.spaceship.specs.targeting },
              { label: 'Armament', value: this.spaceship.specs.armament },
              { label: 'Communications', value: this.spaceship.specs.communications },
            ];

          } else {

            this.spaceshipsService.getAllSpaceships();

          }

        });

    });

  }

}
