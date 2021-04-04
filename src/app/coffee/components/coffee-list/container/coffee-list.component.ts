import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoffeeState, CoffeeStatEnum} from '../../../nrgx/Reducer.coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  @Input()
  public coffees$: Observable<CoffeeState>;
  readonly coffeeStatEnum = CoffeeStatEnum;

  constructor() {}

  ngOnInit(): void {}
}
