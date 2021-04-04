import {Action} from '@ngrx/store';

export enum ActionCoffeeTypeEnum {
  // Get all coffees
  GET_ALL_COFFEES = '[COFFEE] Get all coffees',
  GET_COFFEES_ERROR = '[COFFEE] Get all coffees error',
  GET_COFFEES_SUCCESS = '[COFFEE] Get all coffees success',
  // Get all selected coffees
  GET_SELECTED_COFFEES = '[COFFEE] Get all selected coffees',
  GET_SELECTED_COFFEES_ERROR = '[COFFEE] Get all selected coffees error',
  GET_SELECTED_COFFEES_SUCCESS = '[COFFEE] Get all selected coffees success',
  // Get all available coffee
  GET_AVAILABLE_COFFEES = '[COFFEE] Get all available coffee',
  GET_AVAILABLE_COFFEES_ERROR = '[COFFEE] Get all available coffee error',
  GET_AVAILABLE_COFFEES_SUCCESS = '[COFFEE] Get all available coffee success',
  // Search coffee by name
  SEARCH_COFFEE_BY_NAME = '[COFFEE] Search coffee by name',
  SEARCH_COFFEE_BY_NAME_ERROR = '[COFFEE] Search coffee by name error',
  SEARCH_COFFEE_BY_NAME_SUCCESS = '[COFFEE] Search coffee by name success',
  // On Select coffee
  SELECT_COFFEE = '[COFFEE] Select coffee',
  SELECT_COFFEE_SUCCEESS = '[COFFEE] Select coffee success',
  SELECT_COFFEE_ERROR = '[COFFEE] Select coffee error',
  // Delete coffee
  DELETE_COFFEE = '[COFFEE] Delete coffee',
  DELETE_COFFEE_ERROR = '[COFFEE] Delete coffee error',
  DELETE_COFFEE_SUCCESS = '[COFFEE] Delete coffee success',
  // Edit coffee
  EDIT_COFFEE = '[COFFEE] Edit coffee',
  EDIT_COFFEE_ERROR = '[COFFEE] Edit coffee error',
  EDIT_COFFEE_SUCCESS = '[COFFEE] Edit coffee success',
  INITIAL_EDIT_COFFEE = '[COFFEE] Initial  edit coffee',
  // Create coffee
  CREATE_COFFEE = '[COFFEE] Create coffee',
  CREATE_COFFEE_ERROR = '[COFFEE] Create coffee error',
  CREATE_COFFEE_SUCCESS = '[COFFEE] Create coffee success',
}

export class CoffeesAction implements Action {
  public type: ActionCoffeeTypeEnum = ActionCoffeeTypeEnum.GET_ALL_COFFEES;

  public constructor(type: ActionCoffeeTypeEnum, public payload: any) {
    this.type = type;
  }
}

export class CoffeesActionSuccess implements Action {
  public type: ActionCoffeeTypeEnum = ActionCoffeeTypeEnum.GET_COFFEES_SUCCESS;

  public constructor(type: ActionCoffeeTypeEnum, public payload: any) {
    this.type = type;
  }
}

export class CoffeesActionError implements Action {
  public type: ActionCoffeeTypeEnum = ActionCoffeeTypeEnum.GET_COFFEES_ERROR;

  public constructor(type: ActionCoffeeTypeEnum, public payload: string) {
    this.type = type;
  }
}

// Alias type of coffee
export type  CoffeeActionType = CoffeesAction | CoffeesActionError | CoffeesActionSuccess;
