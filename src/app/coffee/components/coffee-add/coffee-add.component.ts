import {Component, OnInit} from '@angular/core';
import {CoffeeErvice} from "../../../common/service/Coffee.ervice";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActionCoffeeTypeEnum, CoffeesAction} from "../../nrgx/Coffee.action";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {CoffeeState, CoffeeStatEnum} from "../../nrgx/Reducer.coffee";

@Component({
  selector: 'app-coffee-add',
  templateUrl: './coffee-add.component.html',
  styleUrls: ['./coffee-add.component.scss']
})
export class CoffeeAddComponent implements OnInit {

  public coffeeFormGroup?: FormGroup;

  constructor(private coffeeService: CoffeeErvice,
              private fb: FormBuilder,
              private store: Store<any>,
              private router:  Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    /*this.store.subscribe(state => {
      if(state.coffeeState.dataState == CoffeeStatEnum.SUCCESS){
        this.router
          .navigateByUrl('/coffee');
      }
    })*/
  }


  public onCreateCoffee() {
    console.log("created clicked");
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.CREATE_COFFEE, this.coffeeFormGroup.value));
  }

  public initForm() {
    this.coffeeFormGroup = this.fb.group( {
      name: ["",Validators.required],
      price: [0, Validators.required],
      quantity: ["", Validators.required],
      selected: [false],
      available: [true]
    })
  }

}
