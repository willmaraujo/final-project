import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { ConverterComponent } from './components/converter.component';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { ModalPriceComponent } from './utils';
import { DateBrPipe } from './pipes/date-br.pipe';
import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterRoutingComponent } from './converter-routing.component';

@NgModule({
  declarations: [ConverterComponent, NumberDirective, ModalPriceComponent, DateBrPipe, ConverterRoutingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConverterRoutingModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
