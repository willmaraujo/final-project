import { NumberDirective, MockElementRef } from './number.directive';
import { async, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { Mock } from 'protractor/built/driverProviders';

describe('NumberDirective', () => {

  let mockElementRef: MockElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();

    mockElementRef = TestBed.inject(MockElementRef);
  }));

  it('should create an instance', () => {
    const directive = new NumberDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
