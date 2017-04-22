import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import * as _ from 'lodash';
import lipsum from 'simple-lipsum';

import { API_URL } from '../../../app.config';
import { Spaceship } from './spaceship';

@Injectable()
export class SpaceshipsService {

  private spaceships$: BehaviorSubject<Spaceship[]> = new BehaviorSubject<Spaceship[]>(null);

  constructor(private http: Http) { }

  get spaceships(): Observable<Spaceship[]> {

    return this.spaceships$;

  }

  getAllSpaceships(): void {

    this.http.get(`${API_URL}/spaceships`)
      .subscribe((response: Response) => {

        this.spaceships$.next((response.json().products || []).map((item: any, i) => {

          const spaceship = new Spaceship();
          spaceship.id = i;
          spaceship.name = item.name;
          spaceship.price = item.price;
          spaceship.category = item.class;
          spaceship.manufacturer = item.manufacturer;
          spaceship.specs = item.techspecs;
          spaceship.pictures = _.times(4).map((j) => 'http://facetheforce.today/random/300?r=' + j);
          spaceship.description = lipsum.getParagraph();

          return spaceship;

        }));

      });

  }

  getSpaceshipById(id: number): Observable<Spaceship> {

    return _.find(this.spaceships$, { id: id });

  }

}
