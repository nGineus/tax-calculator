import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxInputComponent } from './components/tax-input/tax-input.component';
import { TaxResultComponent } from './components/tax-result/tax-result.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaxCalculationFormPageComponent } from './pages/tax-calculation-form-page/tax-calculation-form-page.component';
import { TaxCalculationResultPageComponent } from './pages/tax-calculation-result-page/tax-calculation-result-page.component';
import { TaxCalculationRoutingModule } from './tax-calculation-routing.module';
import { TaxService } from './services/tax.service';
import { ApiService } from './services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

const COMPONENTS = [
  TaxInputComponent,
  TaxResultComponent,
  TaxCalculationFormPageComponent,
  TaxCalculationResultPageComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    TaxCalculationRoutingModule,
  ],
  providers: [ApiService, TaxService],
})
export class TaxCalculationModule {}
