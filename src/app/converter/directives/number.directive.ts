import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appNumber]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberDirective,
    multi: true
  }]
})
export class NumberDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    const posDecimals = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if (posDecimals > 0) {
      value = value.substr(0, posDecimals) + '.' + value.substr(posDecimals);
    }

    $event.target.value = value;
    this.onChange(value);
  }

}

export class MockElementRef extends ElementRef {}
