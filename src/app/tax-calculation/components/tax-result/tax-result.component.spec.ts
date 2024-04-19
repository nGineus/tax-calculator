import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxResultComponent } from './tax-result.component';

describe('TaxResultComponent', () => {
  let component: TaxResultComponent;
  let fixture: ComponentFixture<TaxResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
