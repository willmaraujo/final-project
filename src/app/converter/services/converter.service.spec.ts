import { TestBed } from '@angular/core/testing';

import { ConverterService } from './converter.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConverterService', () => {
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConverterService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
