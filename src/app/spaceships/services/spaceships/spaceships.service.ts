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
        this.spaceships$.next(response.json().products || []);
      });

  }

  getSpaceshipByName(name: String): Observable<Spaceship> {

    return _.find(this.spaceships$, { name: name });

  }

}
