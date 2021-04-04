import {Component, OnInit} from '@angular/core';
import {CoffeeService} from '../../../common/service/Coffee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActionCoffeeTypeEnum, CoffeesAction} from '../../nrgx/Coffee.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-coffee-add',
  templateUrl: './coffee-add.component.html',
  styleUrls: ['./coffee-add.component.scss']
})
export class CoffeeAddComponent implements OnInit {

  public coffeeFormGroup?: FormGroup;

  constructor(private coffeeService: CoffeeService,
              private fb: FormBuilder,
              private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  public onCreateCoffee() {
    this.store
      .dispatch(new CoffeesAction(ActionCoffeeTypeEnum.CREATE_COFFEE, this.coffeeFormGroup.value));
  }

  public initForm() {
    this.coffeeFormGroup = this.fb.group( {
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: ['', Validators.required],
      selected: [false],
      available: [true],
    });
  }

}
