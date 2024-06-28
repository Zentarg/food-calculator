import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIntakeComponent } from './food-intake.component';

describe('FoodIntakeComponent', () => {
  let component: FoodIntakeComponent;
  let fixture: ComponentFixture<FoodIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodIntakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
