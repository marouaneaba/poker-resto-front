import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoffeeState, CoffeeStatEnum} from '../../../nrgx/Reducer.coffee';
import {ActionCoffeeTypeEnum, CoffeesAction} from '../../../nrgx/Coffee.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  @Input()
  public coffees$: Observable<CoffeeState>;
  readonly coffeeStatEnum = CoffeeStatEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.fetchCoffees();
  }

  public fetchCoffees(){
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.GET_ALL_COFFEES, {}));
  }
}
