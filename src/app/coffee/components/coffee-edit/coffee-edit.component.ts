import {Component, OnInit} from '@angular/core';
import {CoffeeErvice} from "../../../common/service/Coffee.ervice";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Coffee} from "../../model/coffee.model";
import {AlertDisplay} from "../../alert/AlertDisplay";
import {Store} from "@ngrx/store";
import {ActionCoffeeTypeEnum, CoffeesAction} from "../../nrgx/Coffee.action";
import {CoffeeStatEnum} from "../../nrgx/Reducer.coffee";
import {EndPoint} from "../../../common/utils/EndPoint";


@Component({
  selector: 'app-coffee-edit',
  templateUrl: './coffee-edit.component.html',
  styleUrls: ['./coffee-edit.component.scss']
})
export class CoffeeEditComponent implements OnInit {

  coffeeFormGroup: FormGroup;
  currentEditCoffee: Coffee

  constructor(private coffeeService: CoffeeErvice,
              private fb: FormBuilder,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private store:  Store<any>) {}

  ngOnInit(): void {
    console.log('mar')
    this.getCoffeeById(Number(this.activateRoute.snapshot.params.id));

    this.store.subscribe(state => {
      console.log(state);
      if(state.coffeeState.dataState == CoffeeStatEnum.LOADING){
        this.router
          .navigateByUrl(EndPoint.COFFEE);
      }
    })
  }

  public initForm(coffee: Coffee) {
    this.coffeeFormGroup = this.fb.group({
      name: [coffee.name, Validators.required],
      price: [coffee.price, Validators.required],
      quantity: [coffee.quantity, Validators.required],
      selected: [coffee.selected, Validators.required],
      available: [coffee.available, Validators.required],
    });
  }

  public getCoffeeById(id: number){
    this.coffeeService
      .getCoffeeById(id)
      .subscribe(
        coffee => {
            this.currentEditCoffee = coffee
            this.initForm(coffee)
        },
            error => console.log(error),
      );
  }

  public onSaveCoffee() {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.EDIT_COFFEE, this.buildCurrentEditCoffee()));
  }

  public buildCurrentEditCoffee(): Coffee{
    return {
      id: this.currentEditCoffee.id,
      name: this.coffeeFormGroup.value.name,
      price: this.coffeeFormGroup.value.price,
      quantity: this.coffeeFormGroup.value.quantity,
      selected: this.coffeeFormGroup.value.selected,
      available: this.coffeeFormGroup.value.available,
    }
  }

}
