import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import * as _ from 'lodash';
import lipsum from 'simple-lipsum';

import { API_URL } from '../../../app.config';
import { UtilitiesService } from '../../../shared/services/utilities/utilities.service';
import { Spaceship } from './spaceship';

@Injectable()
export class SpaceshipsService {

  private spaceships$: BehaviorSubject<Spaceship[]> = new BehaviorSubject<Spaceship[]>(null);
  private placeholderImages: string[] = [
    'http://facetheforce.today/luke',
    'http://facetheforce.today/han',
    'http://facetheforce.today/leia',
    'http://facetheforce.today/yoda',
    'http://facetheforce.today/darthvader',
    'http://facetheforce.today/r2d2',
    'http://facetheforce.today/c3po',
    'http://facetheforce.today/chewbacca-alt',
    'http://facetheforce.today/luke-old',
    'http://facetheforce.today/han-old',
    'http://facetheforce.today/leia-old',
    'http://facetheforce.today/obiwan-old',
    'http://facetheforce.today/rey',
    'http://facetheforce.today/finn',
    'http://facetheforce.today/poe',
    'http://facetheforce.today/bb8',
    'http://facetheforce.today/chewbacca',
    'http://facetheforce.today/kylo',
    'http://facetheforce.today/kylo-alt',
    'http://facetheforce.today/lando',
    'http://facetheforce.today/obiwan',
    'http://facetheforce.today/anakin',
    'http://facetheforce.today/c3po-alt',
    'http://facetheforce.today/amidala',
    'http://facetheforce.today/darthmaul',
    'http://facetheforce.today/macewindu',
    'http://facetheforce.today/quigon',
    'http://facetheforce.today/bail',
    'http://facetheforce.today/palpatine',
    'http://facetheforce.today/stormtrooper',
    'http://facetheforce.today/jaba',
    'http://facetheforce.today/boba',
    'http://facetheforce.today/boba-alt',
    'http://facetheforce.today/jawa',
    'http://facetheforce.today/ewok',
    'http://facetheforce.today/greedo',
    'http://facetheforce.today/stormtrooper-alt',
    'http://facetheforce.today/unkarplutt',
    'http://facetheforce.today/jyn',
    'http://facetheforce.today/saw',
    'http://facetheforce.today/orson',
    'http://facetheforce.today/chirrut',
    'http://facetheforce.today/mon',
    'http://facetheforce.today/cassian',
    'http://facetheforce.today/phasma'
  ];

  constructor(
    private http: Http,
    private utils: UtilitiesService) { }

  get spaceships(): Observable<Spaceship[]> {

    return this.spaceships$;

  }

  getAllSpaceships(): void {

    this.http.get(`${API_URL}/spaceships`)
      .subscribe((response: Response) => {

        this.spaceships$.next((response.json().products || []).map((item: any, i) => {

          const spaceship = new Spaceship();
          const images = _.shuffle(this.placeholderImages).slice(0, 4);

          spaceship.id = i;
          spaceship.name = item.name;
          spaceship.price = item.price;
          spaceship.category = item.class;
          spaceship.manufacturer = item.manufacturer;
          spaceship.specs = item.techspecs;
          spaceship.description = lipsum.getParagraph();
          spaceship.pictures = images.map((img) => img += '/300');

          return spaceship;

        }));

      });

  }

  getSpaceshipById(id: number): Observable<Spaceship> {

    return _.find(this.spaceships$, { id: id });

  }

}
