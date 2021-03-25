import {Component, OnInit} from '@angular/core';
import {CoffeeErvice} from "../../../common/service/Coffee.ervice";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventDriverService} from "../../../common/service/Event.driver.service";

@Component({
  selector: 'app-coffee-add',
  templateUrl: './coffee-add.component.html',
  styleUrls: ['./coffee-add.component.scss']
})
export class CoffeeAddComponent implements OnInit {

  public coffeeFormGroup?: FormGroup;

  constructor(private coffeeService: CoffeeErvice,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }


  public onCreateCoffee() {
    console.log(this.coffeeFormGroup?.value)
    if(this.coffeeFormGroup?.valid) {
      this.coffeeService
        .createCoffe(this.coffeeFormGroup?.value)
        .subscribe(data => console.log(data),
          error => console.log(error))
    }
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
