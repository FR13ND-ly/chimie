import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnthalpyComponent } from './enthalpy.component';

describe('EnthalpyComponent', () => {
  let component: EnthalpyComponent;
  let fixture: ComponentFixture<EnthalpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnthalpyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnthalpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
