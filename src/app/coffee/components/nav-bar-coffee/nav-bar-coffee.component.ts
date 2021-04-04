import {Component, OnInit} from '@angular/core';
import {CoffeeService} from '../../../common/service/Coffee.service';
import {Store} from '@ngrx/store';
import {ActionCoffeeTypeEnum, CoffeesAction} from '../../nrgx/Coffee.action';

@Component({
  selector: 'app-nav-bar-coffee',
  templateUrl: './nav-bar-coffee.component.html',
  styleUrls: ['./nav-bar-coffee.component.scss']
})
export class NavBarCoffeeComponent implements OnInit {

  constructor(private coffeeService: CoffeeService,
              private store: Store<any>) { }

  ngOnInit(): void {}

  public onGetCoffees(){
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.GET_ALL_COFFEES, {}));
  }

  public onGetSelectedCoffee() {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.GET_SELECTED_COFFEES, {}));
  }

  public onGetAvailableCoffee() {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.GET_AVAILABLE_COFFEES, {}));
  }

  onSearchCoffeeByName(keyWord: string) {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME, '{keyWord}'));
  }
}
