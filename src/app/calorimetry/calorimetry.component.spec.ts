import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorimetryComponent } from './calorimetry.component';

describe('CalorimetryComponent', () => {
  let component: CalorimetryComponent;
  let fixture: ComponentFixture<CalorimetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorimetryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalorimetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
