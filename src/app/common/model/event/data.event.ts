export interface DataEvent<T,Z> {
  type: T;
  data?: Z;
  context: Context;
}

export enum EventQueryType {
  SELECTED_EVENT,
  AVAILABLE_EVENT,
  SEARCH_BY_NAME_ACTION_EVENT,
  GET_ALL_EVENT,
  REFRESH_COFFEE
}

export enum Context {
  COFFEE
}
