import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCoffeeComponent } from './nav-bar-coffee.component';

describe('NavBarCoffeeComponent', () => {
  let component: NavBarCoffeeComponent;
  let fixture: ComponentFixture<NavBarCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
