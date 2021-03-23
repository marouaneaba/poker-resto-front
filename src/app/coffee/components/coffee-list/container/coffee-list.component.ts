import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppDataState, DataStateEnum} from "../../../../common/model/state/data.state";
import {Coffee} from "../../../model/coffee.model";
import {EventDriverService} from "../../../../common/service/Event.driver.service";
import {Context, EventCommandType,} from "../../../../common/model/event/data.event";

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  @Input()
  public coffees$: Observable<AppDataState<Coffee[]>>;
  readonly dataStateEnum = DataStateEnum

  constructor(private eventDriverService: EventDriverService) {}

  ngOnInit(): void {
    this.eventDriverService
      .subscribeCommandEvent(eventData => {
        if(eventData.context == Context.COFFEE
        && eventData.type == EventCommandType.ALERT_DELETE_ACTION_EVENT) {
          this.onAlertAndDeleteCoffee(eventData.data)
        }
      })
  }

  onAlertAndDeleteCoffee(coffee: Coffee) {
    const response: boolean = confirm('Etes-vous sùr vouloire supprimer?');
    if(response){
      this.onDeleteCoffee(coffee);
    }
  }

  public onDeleteCoffee(coffee: Coffee) {
    this.eventDriverService
      .publishCommandEvent({
        context: Context.COFFEE,
        type: EventCommandType.DELETE_ACTION_EVENT,
        data: coffee
      })
  }
}
