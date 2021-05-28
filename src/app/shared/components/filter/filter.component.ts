import { Component, OnInit } from '@angular/core';
import {ActionCoffeeTypeEnum, CoffeesAction} from '../../../coffee/nrgx/Coffee.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onSearchCoffeeByName(keyWord: string) {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME, keyWord.search));
  }

}
