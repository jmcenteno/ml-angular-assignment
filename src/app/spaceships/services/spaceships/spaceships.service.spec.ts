import { TestBed, inject } from '@angular/core/testing';

import { SpaceshipsService } from './spaceships.service';

describe('SpaceshipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceshipsService]
    });
  });

  it('should ...', inject([SpaceshipsService], (service: SpaceshipsService) => {
    expect(service).toBeTruthy();
  }));
});
