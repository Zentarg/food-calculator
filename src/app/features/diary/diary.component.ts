import { Component } from '@angular/core';
import { WaterIntakeComponent } from './components/water-intake/water-intake.component';
import { FoodIntakeComponent } from './components/food-intake/food-intake.component';
import { DiaryForm } from './DiaryForm';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [WaterIntakeComponent, FoodIntakeComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss'
})
export class DiaryComponent {

  breakfast = this.diaryForm.get('Food.Breakfast') as UntypedFormControl;
  lunch = this.diaryForm.get('Food.Lunch') as UntypedFormControl;
  dinner = this.diaryForm.get('Food.Dinner') as UntypedFormControl;
  snacks = this.diaryForm.get('Food.Snacks') as UntypedFormControl;

  constructor(public diaryForm: DiaryForm) {
    
  }

}
