import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerBarHomeComponent } from './poker-bar-home.component';

describe('PokerBarHomeComponent', () => {
  let component: PokerBarHomeComponent;
  let fixture: ComponentFixture<PokerBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerBarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
