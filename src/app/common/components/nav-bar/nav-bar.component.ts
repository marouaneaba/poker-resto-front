import { Component, OnInit } from '@angular/core';
import {CoffeeErvice} from "../../service/Coffee.ervice";
import {AppDataState, DataStateEnum} from "../../model/state/data.state";
import {catchError, map, startWith} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Coffee} from "../../../coffee/model/coffee.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  coffes$: Observable<AppDataState<Coffee[]>>

  constructor(private coffeeService: CoffeeErvice) { }

  ngOnInit(): void {}
}
