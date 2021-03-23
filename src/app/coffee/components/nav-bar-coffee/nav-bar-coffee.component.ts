import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoffeeErvice} from "../../../common/service/Coffee.ervice";
import {EventDriverService} from "../../../common/service/Event.driver.service";
import {Context, EventQueryType} from "../../../common/model/event/data.event";

@Component({
  selector: 'app-nav-bar-coffee',
  templateUrl: './nav-bar-coffee.component.html',
  styleUrls: ['./nav-bar-coffee.component.scss']
})
export class NavBarCoffeeComponent implements OnInit {

  constructor(private coffeeService: CoffeeErvice,
              private eventDriverService: EventDriverService) { }

  ngOnInit(): void {}

  public onGetCoffees(){
    this.eventDriverService
      .publishQueryEvent({
        context: Context.COFFEE,
        type: EventQueryType.GET_ALL_EVENT
      })
  }

  public onGetSelectedCoffee() {
    this.eventDriverService
      .publishQueryEvent({
        context: Context.COFFEE,
        type: EventQueryType.SELECTED_EVENT
      });
  }

  public onGetAvailableCoffee() {
    this.eventDriverService
      .publishQueryEvent({
        context: Context.COFFEE,
        type: EventQueryType.AVAILABLE_EVENT
      });
  }

  onSearchCoffeeByName(keyWord: string) {
    this.eventDriverService
      .publishQueryEvent({
        context: Context.COFFEE,
        type: EventQueryType.SEARCH_BY_NAME_ACTION_EVENT,
        data: keyWord
      })
  }
}
