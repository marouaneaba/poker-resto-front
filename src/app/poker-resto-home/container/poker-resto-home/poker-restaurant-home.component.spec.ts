import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PokerRestaurantHomeComponent} from './poker-restaurant-home.component';


describe('PokerRestoHomeComponent', () => {
  let component: PokerRestaurantHomeComponent;
  let fixture: ComponentFixture<PokerRestaurantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerRestaurantHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerRestaurantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
