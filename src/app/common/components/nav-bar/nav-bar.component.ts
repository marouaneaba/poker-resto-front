import { Component, OnInit } from '@angular/core';
import {CoffeeService} from "../../service/CoffeeService";
import {AppDataState, DataStateEnum} from "../../state/data.state";
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

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {}
}
