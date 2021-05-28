import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHomeIndexComponent } from './products-home-index.component';

describe('ProductsHomeIndexComponent', () => {
  let component: ProductsHomeIndexComponent;
  let fixture: ComponentFixture<ProductsHomeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsHomeIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsHomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
