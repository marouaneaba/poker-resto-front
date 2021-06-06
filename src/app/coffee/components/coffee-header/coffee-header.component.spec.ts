import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeHeaderComponent } from './coffee-header.component';

describe('CoffeeHeaderComponent', () => {
  let component: CoffeeHeaderComponent;
  let fixture: ComponentFixture<CoffeeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
