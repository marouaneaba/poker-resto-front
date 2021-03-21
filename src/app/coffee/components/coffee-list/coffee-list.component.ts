import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from "rxjs";
import {AppDataState, DataStateEnum} from "../../../common/state/data.state";
import {Coffee, CoffeePayloadEvent} from "../../model/coffee.model";
import {CoffeeService} from "../../../common/service/CoffeeService";
import {Router} from "@angular/router";
import {catchError, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  @Input()
  public coffees$: Observable<AppDataState<Coffee[]>>;
  @Output()
  public coffeeSelect: EventEmitter<Coffee> = new EventEmitter<Coffee>();
  @Output()
  public coffeeDelete: EventEmitter<Coffee> = new EventEmitter<Coffee>();
  readonly dataStateEnum = DataStateEnum

  constructor(private coffeeService: CoffeeService,
              private router: Router) {}

  ngOnInit(): void {}

  onSelect(coffee: Coffee) {
    this.coffeeSelect
      .emit(coffee);
  }

  onAlertAndDeleteCoffee(coffee: Coffee) {
    const response: boolean = confirm('Etes-vous sùr vouloire supprimer?');
    if(response){
      this.onDeleteCoffee(coffee);
    }
  }

  public onDeleteCoffee(coffee: Coffee) {
    this.coffeeDelete
      .emit(coffee);
  }

  onNavigateEditCoffee(coffee: Coffee) {
    this.router.navigateByUrl(`/coffee/editCoffee/${coffee.id}`)
  }
}
