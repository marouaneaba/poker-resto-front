import {Component, OnInit} from '@angular/core';
import {CoffeeErvice} from '../../../common/service/Coffee.ervice';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {CoffeeState} from "../../nrgx/Reducer.coffee";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  public coffeeState$: Observable<CoffeeState>

  constructor(private coffeeService: CoffeeErvice,
              private store: Store<any>) {}

  ngOnInit(): void {
    this.coffeeState$ = this.store
      .pipe(
        map( value => {
          return value.coffeeState
        })
      )
  }
}
