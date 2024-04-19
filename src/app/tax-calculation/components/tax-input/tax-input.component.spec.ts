import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInputComponent } from './tax-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TaxInputComponent', () => {
  let component: TaxInputComponent;
  let fixture: ComponentFixture<TaxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxInputComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should create form', () => {
      fixture.detectChanges();

      expect(component.form).toBeTruthy();
    });

    it('should disable form when isDisabled property is true', () => {
      component.isDisabled = true;

      component.ngOnInit();

      expect(component.form.disabled).toBeTrue();
    });

    it('should set initial value if it provided', () => {
      const testValue = 10000;
      component.value = testValue;

      component.ngOnInit();

      expect(component.grossAnnualSalaryFormControl.value).toEqual(testValue);
    });
  });
});
