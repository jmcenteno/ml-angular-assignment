import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsToolbarComponent } from './products-toolbar.component';

describe('ProductsToolbarComponent', () => {
  let component: ProductsToolbarComponent;
  let fixture: ComponentFixture<ProductsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
