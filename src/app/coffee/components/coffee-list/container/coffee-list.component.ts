import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppDataState, DataStateEnum} from "../../../../common/model/state/data.state";
import {Coffee} from "../../../model/coffee.model";

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  @Input()
  public coffees$: Observable<AppDataState<Coffee[]>>;
  readonly dataStateEnum = DataStateEnum

  constructor() {}

  ngOnInit(): void {}
}
