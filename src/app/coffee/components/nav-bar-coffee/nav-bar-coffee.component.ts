import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoffeeService} from "../../../common/service/CoffeeService";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../../common/state/data.state";
import {Observable, of} from "rxjs";
import {Coffee, CoffePayloadEvent} from "../../model/coffee.model";

@Component({
  selector: 'app-nav-bar-coffee',
  templateUrl: './nav-bar-coffee.component.html',
  styleUrls: ['./nav-bar-coffee.component.scss']
})
export class NavBarCoffeeComponent implements OnInit {

  @Output()
  getCoffees: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  getSelectedCoffees: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  getAvailableCoffee: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  searchCoffeeByName: EventEmitter<CoffePayloadEvent> = new EventEmitter<CoffePayloadEvent>();

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {}

  public onGetCoffees(){
    this.getCoffees.emit()
  }

  public onGetSelectedCoffee() {
    this.getSelectedCoffees.emit();
  }

  public onGetAvailableCoffee() {
    this.getAvailableCoffee.emit();
  }

  onSearchCoffeeByName(keyWord: string) {
    this.searchCoffeeByName.emit({KeyWordSearch: keyWord})
  }
}
