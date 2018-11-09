export interface IRateEntity {
  id: number;
  name: string;
  buy: number;
  sell: number;
}

export interface IRatesEntity {
  list: IRateEntity[];
}
