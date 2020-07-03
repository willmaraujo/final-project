import { Injectable } from '@angular/core';
import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencies: Currency[];

  constructor() { }

  private currenciesObj = [
    { name: 'AUD', description: 'Australian Dolar' },
    { name: 'EUR', description: 'Euro' },
    { name: 'BRL', description: 'Brazilian Real' }
  ];

  listAll(): Currency[] {
    if (this.currencies) {
      return this.currencies;
    }

    this.currencies = [];

    for (const currencyObj of this.currenciesObj) {
      const currency: Currency = new Currency();
      Object.assign(currency, currencyObj);
      this.currencies.push(currency);
    }

    return this.currencies;
  }
}
