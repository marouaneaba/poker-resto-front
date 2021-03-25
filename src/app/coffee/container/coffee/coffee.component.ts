import {Component, OnInit} from '@angular/core';
import {CoffeeErvice} from '../../../common/service/Coffee.ervice';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../../common/model/state/data.state";
import {Coffee} from "../../model/coffee.model";
import {EventDriverService} from "../../../common/service/Event.driver.service";
import {Context, DataEvent, EventQueryType} from "../../../common/model/event/data.event";
import {Router} from "@angular/router";
import {EndPoint} from "../../../common/utils/EndPoint";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  public coffees$: Observable<AppDataState<Coffee[]>>;

  constructor(private coffeeService: CoffeeErvice,
              private eventDriverService: EventDriverService,
              private router: Router) {}

  ngOnInit(): void {
    this.onGetCoffees();

    this.eventDriverService
      .subscribeQueryEvent(data => {
        if(data.context == Context.COFFEE) {
          this.executeQueryActionEvent(data);
        }
      });
  }

  public onGetCoffees(){
    this.coffees$ = this.coffeeService
      .getCoffees()
      .pipe(
        map(data=> ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage: err.message}))
      );
  }

  public onGetSelectedCoffee() {
    this.coffees$ = this.coffeeService
      .getSelectedCoffees()
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err =>
          of({
              dataState: DataStateEnum.ERROR, errorMessage: err.message
          })
        )
      );
  }

  public onGetAvailableCoffee() {
    this.coffees$ = this.coffeeService
      .getAvailableCoffe()
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err =>
          of({
            dataState: DataStateEnum.ERROR, errorMessage: err.message
          })
        )
      );
  }

  public onSearchCoffeeByName(keyWordSearch: any) {
    this.coffees$ = this.coffeeService
      .searchCoffeeByName(keyWordSearch)
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  public onDeleteCoffee(coffee: Coffee) {
    this.coffeeService
      .deleteCoffee(coffee)
      .subscribe(
        data => this.onGetCoffees(),
        err => {console.log("Error", err)})
  }

  public onCreateCoffee(coffeeFormGroup: any) {
    this.coffeeService
      .createCoffe(coffeeFormGroup)
      .subscribe(data => {this.onGetCoffees()},
        err => console.log(err));
  }

  public onSelect(coffee: Coffee) {
    this.coffeeService
      .selectCoffee(coffee)
      .subscribe(
        data => coffee.selected = data.selected,
      error => console.log(error))
  }

  public executeQueryActionEvent(dataEvent: DataEvent<EventQueryType, String>) {
    switch(dataEvent.type){
      case EventQueryType.SELECTED_EVENT:
        this.onGetSelectedCoffee();
        break;
      case EventQueryType.AVAILABLE_EVENT:
        this.onGetAvailableCoffee();
        break;
      case EventQueryType.GET_ALL_EVENT:
        this.onGetCoffees();
        break;
      case EventQueryType.SEARCH_BY_NAME_ACTION_EVENT:
        this.onSearchCoffeeByName(dataEvent.data);
        break;
      case EventQueryType.REFRESH_COFFEE:
        this.onGetCoffees();
        break;
    }
  }
}
