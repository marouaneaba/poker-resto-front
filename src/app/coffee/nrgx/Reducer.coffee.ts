import {Action} from '@ngrx/store';
import {Coffee} from '../model/coffee.model';
import {ActionCoffeeTypeEnum, CoffeeActionType} from './Coffee.action';
import * as _ from 'lodash';
import {CoffeeHelper} from '../helper/coffee.helper';

export enum CoffeeStatEnum {
  SUCCESS,
  ERROR,
  LOADING,
  INITIAL
}
export interface Message {
  errorMessage?: string;
  warningMessage?: string;
  successMessage?: string;
}
export interface CoffeeState {
  coffee: Coffee[];
  message: Message;
  dataState: CoffeeStatEnum;
  action: ActionCoffeeTypeEnum;
  totalPage: number;
  currentPage: number;
}

export function coffeeReducer(currentState: CoffeeState, coffeeAction: Action): CoffeeState {
  switch (coffeeAction.type){
    case ActionCoffeeTypeEnum.INITIAL_EDIT_COFFEE:
      return {
        ...currentState,
        dataState: CoffeeStatEnum.INITIAL,
        action: coffeeAction.type,
      };
      break;
    case ActionCoffeeTypeEnum.CREATE_COFFEE:
    case ActionCoffeeTypeEnum.EDIT_COFFEE:
    case ActionCoffeeTypeEnum.SELECT_COFFEE:
    case ActionCoffeeTypeEnum.DELETE_COFFEE:
    case ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME:
    case ActionCoffeeTypeEnum.GET_AVAILABLE_COFFEES:
    case ActionCoffeeTypeEnum.GET_SELECTED_COFFEES:
    case ActionCoffeeTypeEnum.GET_ALL_COFFEES:
      return {
        ...currentState,
        dataState: CoffeeStatEnum.LOADING,
        action: coffeeAction.type,
      };
      break;
    case ActionCoffeeTypeEnum.CREATE_COFFEE_SUCCESS:
      return {
        ...currentState,
        coffee: currentState.coffee,
        dataState: CoffeeStatEnum.SUCCESS,
        action: coffeeAction.type,
      };
      break;
    case ActionCoffeeTypeEnum.EDIT_COFFEE_SUCCESS:
    case ActionCoffeeTypeEnum.SELECT_COFFEE_SUCCEESS:
      // TODO refacto
      const currentStateCoffees = [...currentState.coffee];
      const newStateCoffee: Coffee[] = currentStateCoffees.map( coffee => {
        if (coffee.id === (coffeeAction as CoffeeActionType).payload.id) {
          coffee = (coffeeAction as CoffeeActionType).payload;
        }
        return coffee;
      });
      const editCoffeeSuccessMessage = CoffeeHelper.buildEditCoffeeMessageSuccess((coffeeAction as CoffeeActionType));
      return {
        ...currentState,
        coffee: newStateCoffee,
        dataState: CoffeeStatEnum.SUCCESS,
        action: coffeeAction.type,
        message: editCoffeeSuccessMessage,
      };
      break;
    case ActionCoffeeTypeEnum.DELETE_COFFEE_SUCCESS:
      // TODO refacto
      const coffeeDeleted = (coffeeAction as CoffeeActionType).payload;
      const currentStateCoffee = [...currentState.coffee];
      const newCoffeeState = _.remove(currentStateCoffee, value => value.id !== coffeeDeleted.id);
      const deleteCoffeeErrorMessage = CoffeeHelper.buildDeleteCoffeeErrorMessage((coffeeAction as CoffeeActionType));
      return {
        ...currentState,
        coffee: newCoffeeState,
        dataState: CoffeeStatEnum.SUCCESS,
        action: coffeeAction.type,
        message: deleteCoffeeErrorMessage,
      };
      break;
    case ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME_SUCCESS:
    case ActionCoffeeTypeEnum.GET_AVAILABLE_COFFEES_SUCCESS:
    case ActionCoffeeTypeEnum.GET_SELECTED_COFFEES_SUCCESS:
    case ActionCoffeeTypeEnum.GET_COFFEES_SUCCESS:
      return {
        ...currentState,
        coffee: (coffeeAction as CoffeeActionType).payload,
        dataState: CoffeeStatEnum.SUCCESS,
        action: coffeeAction.type,
      };
      break;
    case ActionCoffeeTypeEnum.EDIT_COFFEE_ERROR:
    case ActionCoffeeTypeEnum.EDIT_COFFEE_ERROR:
    case ActionCoffeeTypeEnum.SELECT_COFFEE_ERROR:
    case ActionCoffeeTypeEnum.DELETE_COFFEE_ERROR:
    case ActionCoffeeTypeEnum.SEARCH_COFFEE_BY_NAME_ERROR:
    case ActionCoffeeTypeEnum.GET_AVAILABLE_COFFEES_ERROR:
    case ActionCoffeeTypeEnum.GET_SELECTED_COFFEES_ERROR:
    case ActionCoffeeTypeEnum.GET_COFFEES_ERROR:
      return {
        ...currentState,
        dataState: CoffeeStatEnum.ERROR,
        message: {errorMessage: (coffeeAction as CoffeeActionType).payload},
      };
      break;
    default:
      return {
        coffee: [],
        message: null,
        dataState: CoffeeStatEnum.INITIAL,
        action: null,
        totalPage: 8,
        currentPage: 1,
      };
  }
}
