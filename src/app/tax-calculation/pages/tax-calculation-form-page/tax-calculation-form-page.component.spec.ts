import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculationFormPageComponent } from './tax-calculation-form-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TaxRoutes } from '../../constants/tax-routes';
import { By } from '@angular/platform-browser';

describe('TaxCalculationFormPageComponent', () => {
  let component: TaxCalculationFormPageComponent;
  let fixture: ComponentFixture<TaxCalculationFormPageComponent>;

  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj<Router>('router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [TaxCalculationFormPageComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxCalculationFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('calculateTaxes', () => {
    it('should navigate to tax result page with gross annual salary in URL', () => {
      const annualSalary = 1000;

      component.calculateTaxes(annualSalary);

      expect(routerSpy.navigate).toHaveBeenCalledWith([
        TaxRoutes.CALCULATION,
        annualSalary,
      ]);
    });

    describe('UI', () => {
      it('should navigate to tax result page with gross annual salary in URL WHEN salary is changed', () => {
        const annualSalary = 1000;

        const comp = fixture.debugElement.query(By.css('app-tax-input'));

        comp.triggerEventHandler('valueChanged', annualSalary);
        fixture.detectChanges();

        expect(routerSpy.navigate).toHaveBeenCalledWith([
          TaxRoutes.CALCULATION,
          annualSalary,
        ]);
      });
    });
  });
});
