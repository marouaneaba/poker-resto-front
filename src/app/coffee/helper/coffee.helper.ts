import {Message} from '../nrgx/Reducer.coffee';
import {ActionCoffeeTypeEnum, CoffeeActionType} from '../nrgx/Coffee.action';

export class CoffeeHelper {

  public static buildEditCoffeeMessageSuccess(action: CoffeeActionType): Message {
    if (action.type === ActionCoffeeTypeEnum.EDIT_COFFEE_SUCCESS) {
      return {
        successMessage: `Coffee ${action.payload.name} est créer.`
      };
    }
    return {};
  }

  public static buildDeleteCoffeeErrorMessage(action: CoffeeActionType): Message {
    if (action.type === ActionCoffeeTypeEnum.DELETE_COFFEE_SUCCESS) {
      return {
        errorMessage: `Coffee ${action.payload.name} est supprimer.`
      };
    }
    return {};
  }
}
