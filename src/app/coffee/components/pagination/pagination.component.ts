import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ActionCoffeeTypeEnum, CoffeesAction} from '../../nrgx/Coffee.action';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  currentPage: number;
  pageNumber: number;
  pages = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store
      .subscribe(state => {
        this.pageNumber = state.coffeeState.totalPage;
        this.currentPage = state.coffeeState.currentPage;
        this.createPagination();
      });
  }

  public createPagination() {
    for (let i = (this.pages.length + 1); i <= this.pageNumber; i++) {
      this.pages.push({id: i});
    }
  }

  public nextPageOnClick() {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.PREVIOUS_PAGE_EVENT, {}));
  }

  public previousPageOnClick(){
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.NEXT_PAGE_EVENT, {}));
  }

  public nextPageVisible(): boolean {
    return this.pages.length > this.currentPage;
  }

  public previousPageVisible(): boolean {
    return this.currentPage > 1;
  }

  public switchToPage(pageNumber: number) {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.SWITCH_TO_PAGE, pageNumber));
  }

  public isPaginationActive(): boolean {
    return environment.paginationFeature;
  }
}
