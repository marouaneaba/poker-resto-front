export interface DataEvent<T,Z> {
  type: T;
  data?: Z;
  context: Context;
}

export enum EventQueryType {
  SELECTED_EVENT,
  AVAILABLE_EVENT,
  SEARCH_BY_NAME_ACTION_EVENT,
  GET_ALL_EVENT
}

export enum EventCommandType {
  DELETE_ACTION_EVENT,
  SELECT_ACTION_EVENT,
  ALERT_DELETE_ACTION_EVENT
}

export enum Context {
  COFFEE
}
