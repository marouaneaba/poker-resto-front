import {Component, Input, OnInit} from '@angular/core';
import {Coffee} from "../../../../model/coffee.model";
import {Router} from "@angular/router";
import {EventDriverService} from "../../../../../common/service/Event.driver.service";
import {Context, EventQueryType} from "../../../../../common/model/event/data.event";
import {CoffeeErvice} from "../../../../../common/service/Coffee.ervice";
import {AlertDisplay} from "../../../../alert/AlertDisplay";

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss']
})
export class CoffeeItemComponent implements OnInit {

  @Input()
  coffee: Coffee;

  constructor(private router: Router,
              private coffeeService: CoffeeErvice,
              private eventDriverService: EventDriverService) { }

  ngOnInit(): void {}

  onSelect(coffee: Coffee) {
    this.coffeeService
      .selectCoffee(coffee)
      .subscribe(data => coffee.selected = data.selected,
        error => console.log(error))
  }

  onAlertAndDeleteCoffee(coffee: Coffee) {
    const response: boolean = confirm(AlertDisplay.COFFEE_DELETE_CONFIRM);
    if(response){
      this.onDeleteCoffee(coffee);
    }
  }

  public onDeleteCoffee(coffee: Coffee) {
    this.coffeeService
      .deleteCoffee(coffee)
      .subscribe(data => console.log(data),
        error => console.log(error))
    this.eventDriverService
      .publishQueryEvent({
        context: Context.COFFEE,
        type: EventQueryType.REFRESH_COFFEE
      })
  }

  onNavigateEditCoffee(coffee: Coffee) {
    this.router.navigateByUrl(`/coffee/editCoffee/${coffee.id}`)
  }
}
