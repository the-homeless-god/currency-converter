export enum Currencies {
  RUB = 'RUB',
  USD = 'USD',
  EURO = 'EUR',
}

export type CurrencyHolder = {
  code: Currencies;
  value: number;
  isDefault?: boolean;
};
