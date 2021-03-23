import {Component, Input, OnInit} from '@angular/core';
import {Coffee} from "../../../../model/coffee.model";
import {Router} from "@angular/router";
import {EventDriverService} from "../../../../../common/service/Event.driver.service";
import {Context, EventCommandType, EventQueryType} from "../../../../../common/model/event/data.event";

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss']
})
export class CoffeeItemComponent implements OnInit {

  @Input()
  coffee: Coffee;

  constructor(private router: Router,
              private eventDriverService: EventDriverService) { }

  ngOnInit(): void {}

  onSelect(coffee: Coffee) {
    this.eventDriverService
      .publishCommandEvent({
        context: Context.COFFEE,
        type:EventCommandType.SELECT_ACTION_EVENT,
        data: coffee
      })
  }

  onAlertAndDeleteCoffee(coffee: Coffee) {
    this.eventDriverService
      .publishCommandEvent({
        context: Context.COFFEE,
        type: EventCommandType.ALERT_DELETE_ACTION_EVENT,
        data: coffee
      })
  }

  onNavigateEditCoffee(coffee: Coffee) {
    this.router.navigateByUrl(`/coffee/editCoffee/${coffee.id}`)
  }
}
