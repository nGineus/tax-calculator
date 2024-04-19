import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculationResultPageComponent } from './tax-calculation-result-page.component';

describe('TaxCalculationResultPageComponent', () => {
  let component: TaxCalculationResultPageComponent;
  let fixture: ComponentFixture<TaxCalculationResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxCalculationResultPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxCalculationResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
