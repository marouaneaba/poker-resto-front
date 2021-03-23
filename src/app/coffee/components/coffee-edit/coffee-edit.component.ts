import { Component, OnInit } from '@angular/core';
import {CoffeeErvice} from "../../../common/service/Coffee.ervice";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Coffee} from "../../model/coffee.model";

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
              private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCoffeeById(Number(this.activateRoute.snapshot.params.id));
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
    console.log(this.coffeeFormGroup);
    this.coffeeService
      .saveCoffee(this.buildCurrentEditCoffee())
      .subscribe(
        data => alert("Sucess coffee updated"),
        error => console.log(error),
      )
  }

  public buildCurrentEditCoffee() :Coffee{
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
