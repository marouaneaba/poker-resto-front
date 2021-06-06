import {Injectable} from '@angular/core';
import {CoffeeService} from '../../shared/service/Coffee.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {ActionCoffeeTypeEnum, CoffeesAction, CoffeesActionError, CoffeesActionSuccess} from './Coffee.action';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class EffectsCoffee {

  public constructor(private coffeeService: CoffeeService,
                     private effectActions: Actions) {}

  getCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.GET_ALL_COFFEES),
          mergeMap(action => {
            return this.coffeeService
              .getCoffees()
              .pipe(
                map(coffee => {
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.GET_COFFEES_SUCCESS, coffee);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.GET_COFFEES_ERROR, error)))
              );
          }));
    }
  );

  getSelectedCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.GET_SELECTED_COFFEES),
          mergeMap(action => {
            return this.coffeeService
              .getSelectedCoffees()
              .pipe(
                map(coffee => {
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.GET_SELECTED_COFFEES_SUCCESS, coffee);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.GET_SELECTED_COFFEES_ERROR, error)))
              );
          }));
    }
  );

  getAvailableCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.GET_AVAILABLE_COFFEES),
          mergeMap(action => {
            return this.coffeeService
              .getAvailableCoffe()
              .pipe(
                map(coffee => {
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.GET_AVAILABLE_COFFEES_SUCCESS, coffee);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.GET_AVAILABLE_COFFEES_ERROR, error)))
              );
          }));
    }
  );

  getSearchByNameCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME),
          mergeMap(action => {
            const keyWord = (action as CoffeesAction).payload;
            return this.coffeeService
              .searchCoffeeByName(keyWord)
              .pipe(
                map(coffee => {
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME_SUCCESS, coffee);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME_ERROR, error)))
              );
          }));
    }
  );

  selectCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.SELECT_COFFEE),
          mergeMap(action => {
            return this.coffeeService
              .selectCoffee((action as CoffeesAction).payload)
              .pipe(
                map(coffee => {
                  console.log(coffee);
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.SELECT_COFFEE_SUCCEESS, coffee);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.SELECT_COFFEE_ERROR, error)))
              );
          }));
    }
  );

  deleteCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.DELETE_COFFEE),
          mergeMap(action => {
            const coffeeDeleted = (action as CoffeesAction).payload;
            return this.coffeeService
              .deleteCoffee(coffeeDeleted)
              .pipe(
                map(coffee => {
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.DELETE_COFFEE_SUCCESS, coffeeDeleted);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.DELETE_COFFEE_ERROR, error)))
              );
          }));
    }
  );

  editCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.EDIT_COFFEE),
          mergeMap(action => {
            return this.coffeeService
              .saveCoffee((action as CoffeesAction).payload)
              .pipe(
                map(coffee => {
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.EDIT_COFFEE_SUCCESS, coffee);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.EDIT_COFFEE_ERROR, error)))
              );
          }));
    }
  );

  createCoffeeEffects: Observable<Action> = createEffect(
    () => {
      return this.effectActions
        .pipe(
          ofType(ActionCoffeeTypeEnum.CREATE_COFFEE),
          mergeMap(action => {
            return this.coffeeService
              .createCoffe((action as CoffeesAction).payload)
              .pipe(
                map(coffee => {
                  return new CoffeesActionSuccess(ActionCoffeeTypeEnum.CREATE_COFFEE_SUCCESS, coffee);
                }),
                catchError(error => of(new CoffeesActionError(ActionCoffeeTypeEnum.CREATE_COFFEE_ERROR, error)))
              );
          }));
    }
  );
}
