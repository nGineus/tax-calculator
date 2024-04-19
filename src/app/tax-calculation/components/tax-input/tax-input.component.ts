import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tax-input',
  templateUrl: './tax-input.component.html',
  styleUrl: './tax-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxInputComponent implements OnInit {
  @Input() isDisabled: boolean = false;
  @Input() value: number | null = null;
  @Output() valueChanged: EventEmitter<number | null> = new EventEmitter();

  grossAnnualSalaryFormControl: FormControl = this.fb.control(this.value, [
    Validators.required,
    Validators.min(0),
  ]);

  form: FormGroup = this.fb.group({
    grossAnnualSalary: this.grossAnnualSalaryFormControl,
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.value && this.grossAnnualSalaryFormControl.setValue(this.value);
    this.isDisabled && this.form.disable();
  }

  calculateTaxes(event: Event): void {
    if (this.form.valid) {
      this.valueChanged.emit(this.grossAnnualSalaryFormControl.value);
    }
    event.preventDefault();
  }
}
