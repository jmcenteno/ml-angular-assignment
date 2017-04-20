import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import * as _ from 'lodash';

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
      .subscribe(response => {
        const data: Spaceship[] = response.json().products || [];
        this.spaceships$.next(data.map((item: Spaceship, i) => {
          item.id = i;
          return item;
        }));
      });

  }

  getSpaceshipById(id: Number): Observable<Spaceship> {

    return _.find(this.spaceships$, { id: id });

  }

}
