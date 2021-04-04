import {Component, Input, OnInit} from '@angular/core';
import {Coffee} from '../../../../model/coffee.model';
import {Router} from '@angular/router';
import {CoffeeService} from '../../../../../common/service/Coffee.service';
import {AlertDisplay} from '../../../../alert/AlertDisplay';
import {Store} from '@ngrx/store';
import {ActionCoffeeTypeEnum, CoffeesAction} from '../../../../nrgx/Coffee.action';
import {EndPoint} from '../../../../../common/utils/EndPoint';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss']
})
export class CoffeeItemComponent implements OnInit {

  @Input()
  coffee: Coffee;

  constructor(private router: Router,
              private coffeeService: CoffeeService,
              private store: Store) { }

  ngOnInit(): void {}

  onSelect(coffee: Coffee) {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.SELECT_COFFEE, coffee));
  }

  onAlertAndDeleteCoffee(coffee: Coffee) {
    const response: boolean = confirm(AlertDisplay.COFFEE_DELETE_CONFIRM);
    if (response){
      this.onDeleteCoffee(coffee);
    }
  }

  public onDeleteCoffee(coffee: Coffee) {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.DELETE_COFFEE, coffee));
  }

  onNavigateEditCoffee(coffee: Coffee) {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.INITIAL_EDIT_COFFEE, coffee));
    this.router.navigate([`${EndPoint.EDIT_COFFEE}${coffee.id}`]);
  }
}
