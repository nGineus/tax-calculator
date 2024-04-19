import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculationResultPageComponent } from './tax-calculation-result-page.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { DEFAULT_TAX_CONFIG } from '../../constants/default-tax-config';
import { TaxInfo } from '../../interfaces/tax-info';

describe('TaxCalculationResultPageComponent', () => {
  let component: TaxCalculationResultPageComponent;
  let fixture: ComponentFixture<TaxCalculationResultPageComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  const routerStub = {
    params: of({
      annualSalary: '1000',
    }),
  };

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('apiService', [
      'getTaxConfig',
      'getTaxInfo',
    ]);

    await TestBed.configureTestingModule({
      declarations: [TaxCalculationResultPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: ActivatedRoute, useValue: routerStub },
      ],
    }).compileComponents();

    apiServiceSpy.getTaxConfig.and.returnValue(of(DEFAULT_TAX_CONFIG));
    apiServiceSpy.getTaxInfo.and.returnValue(of({} as TaxInfo));

    fixture = TestBed.createComponent(TaxCalculationResultPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Init', () => {
    it('should call apiService to get TaxConfig', () => {
      fixture.detectChanges();

      expect(apiServiceSpy.getTaxConfig).toHaveBeenCalled();
    });

    it('should call TaxService to calculate TaxInfo with property from URL', () => {
      fixture.detectChanges();
      expect(apiServiceSpy.getTaxInfo).toHaveBeenCalledWith(
        1000,
        DEFAULT_TAX_CONFIG
      );
    });
  });
});
