import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculationFormPageComponent } from './tax-calculation-form-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TaxCalculationFormPageComponent', () => {
  let component: TaxCalculationFormPageComponent;
  let fixture: ComponentFixture<TaxCalculationFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxCalculationFormPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxCalculationFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO add tests
});
