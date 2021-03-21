import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coffee} from "../../../../model/coffee.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss']
})
export class CoffeeItemComponent implements OnInit {

  @Input()
  coffee: Coffee;
  @Output()
  selectCoffee: EventEmitter<Coffee> = new EventEmitter<Coffee>();
  @Output()
  alertAndDeleteCoffee: EventEmitter<Coffee> = new EventEmitter<Coffee>();

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onSelect(coffee: Coffee) {
    this.selectCoffee
      .emit(coffee);
  }

  onAlertAndDeleteCoffee(coffee: Coffee) {
    this.alertAndDeleteCoffee
      .emit(coffee);
  }

  onNavigateEditCoffee(coffee: Coffee) {
    this.router.navigateByUrl(`/coffee/editCoffee/${coffee.id}`)
  }
}
