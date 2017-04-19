import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipDetailsComponent } from './spaceship-details.component';

describe('SpaceshipDetailsComponent', () => {
  let component: SpaceshipDetailsComponent;
  let fixture: ComponentFixture<SpaceshipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
