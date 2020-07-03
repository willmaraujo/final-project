import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConversionResponse, Conversion } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly BASE_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  constructor(private httpClient: HttpClient) { }

  convert(conversion: Conversion): Observable<ConversionResponse> {
    const params = `&base=${conversion.currencyFrom}&symbols=${conversion.currencyTo}`;

    return this.httpClient.get<ConversionResponse>(this.BASE_URL + params);
  }

  priceTo(conversionResponse: ConversionResponse, conversion: Conversion): number {
    if (conversionResponse === undefined) {
      return 0;
    }
    return conversionResponse.rates[conversion.currencyTo];
  }

  priceFrom(conversionResponse: ConversionResponse, conversion: Conversion): number {
    if (conversionResponse === undefined) {
      return 0;
    }

    return (1 / conversionResponse.rates[conversion.currencyTo].toFixed(4));
  }

  priceDate(conversionResponse: ConversionResponse): string {
    if (conversionResponse === undefined) {
      return '';
    }
    return conversionResponse.date;
  }
}
