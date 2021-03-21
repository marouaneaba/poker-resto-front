export interface Coffee {
  id: number;
  name: string;
  price: number;
  quantity: number;
  selected: boolean;
  available: boolean;
}

export interface CoffePayloadEvent {
  KeyWordSearch: any
}
