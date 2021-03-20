import {Component, OnInit} from '@angular/core';
import {CoffeeService} from '../../../common/service/CoffeeService';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../../common/state/data.state";
import {Coffee} from "../../model/coffee.model";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  public coffees$: Observable<AppDataState<Coffee[]>>;
  readonly dataStateEnum = DataStateEnum

  constructor(private coffeeService: CoffeeService, private router: Router) {}

  ngOnInit(): void {
    this.coffees$ = this.coffeeService
      .getCoffees()
      .pipe(
        map(data=> ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage: err.message}))
      );
  }

  onSelect(coffee: Coffee) {
    this.coffeeService
      .selectCoffee(coffee)
      .subscribe(data => {
        coffee.selected= data.selected;
      })
  }

  onAlertAndDeleteCoffee(coffee: Coffee) {
    const response: boolean = confirm('Etes-vous sùr vouloire supprimer?');
    if(response){
      this.onDeleteCoffee(coffee);
    }
  }

  public onDeleteCoffee(coffee: Coffee) {
    this.coffeeService
      .deleteCoffee(coffee)
      .subscribe(
        data => {this.onGetCoffees()},
        err => {console.log("Error", err)})
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
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  public onGetAvailableCoffee() {
    this.coffees$ = this.coffeeService
      .getAvailableCoffe()
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSearchCoffeeByName($event: any) {
    console.log($event.keyWord);
    this.coffees$ = this.coffeeService
      .searchCoffeeByName($event.KeyWordSearch)
      .pipe(
        map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onNewCoffee() {
    this.router.navigateByUrl("/newCoffee")
  }

  onNavigateEditCoffee(coffee: Coffee) {
    this.router.navigateByUrl(`/coffee/editCoffee/${coffee.id}`)
  }
}
