import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPriceComponent } from './modal-price.component';
import { DateBrPipe } from '../pipes';
import { ConverterService } from '../services';
import { HttpClientModule } from '@angular/common/http';

describe('ModalPriceComponent', () => {
  let component: ModalPriceComponent;
  let fixture: ComponentFixture<ModalPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPriceComponent, DateBrPipe],
      providers: [ConverterService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
