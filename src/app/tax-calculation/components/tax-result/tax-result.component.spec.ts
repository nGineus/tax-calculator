import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxResultComponent } from './tax-result.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { TaxRoutes } from '../../constants/tax-routes';
import { By } from '@angular/platform-browser';

describe('TaxResultComponent', () => {
  let component: TaxResultComponent;
  let fixture: ComponentFixture<TaxResultComponent>;

  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj(Router, ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [TaxResultComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('#goBack', () => {
    it('should call router with home address', () => {
      component.goBack();

      expect(routerSpy.navigate).toHaveBeenCalledWith([TaxRoutes.HOME]);
    });
  });

  describe('UI', () => {
    const mockTaxInfo = {
      grossAnnualSalary: 10000,
      grossMonthlySalary: 555,
      netAnnualSalary: 111,
      netMonthlySalary: 222,
      annualTaxPaid: 333,
      monthlyTaxPaid: 444,
      currencyCode: 'GBP',
    };

    it('should display data correctly', () => {
      const expectedResult: any = [
        ['Gross Annual Salary', '£10,000.00'],
        ['Gross Monthly Salary', '£555.00'],
        ['Net Annual Salary', '£111.00'],
        ['Net Monthly Salary', '£222.00'],
        ['Annual Tax Paid', '£333.00'],
        ['Monthly Tax Paid', '£444.00'],
      ];

      component.taxInfo = mockTaxInfo;
      fixture.detectChanges();
      const elements = fixture.debugElement
        .queryAll(By.css('.tax-info__row'))
        .map(element => element.nativeElement.innerText.split('\n'));

      expect(elements).toEqual(expectedResult);
    });
  });
});
