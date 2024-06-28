import { AsyncPipe, NgIf, PlatformLocation } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ParameterIds } from '@app/core/models/ParameterIds';
import { ModalSettings, ModalSize } from '@app/core/models/UIModels/ModalSettings';
import { FoodData, FoodIntake } from '@app/core/models/models';
import { DataService } from '@app/core/services/data.service';
import { ModalService } from '@app/core/services/modal.service';
import { ScreenSizeService } from '@app/core/services/screen-size.service';
import { TranslateModule } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-food-intake',

  standalone: true,
  imports: [TranslateModule, AsyncPipe, NgIf],
  templateUrl: './food-intake.component.html',
  styleUrl: './food-intake.component.scss'
})
export class FoodIntakeComponent implements OnInit {

  @Input() headingTextId: string = "FOOD";
  @Input() formGroup!: UntypedFormGroup;
  @Input() formControl!: UntypedFormControl;

  foodItems: [FoodData, number][] = [];

  constructor(public dataService: DataService, private modalService: ModalService, private screenSizeService: ScreenSizeService) {}

  async ngOnInit(): Promise<void> {
    this.formControl.valueChanges.subscribe(async (c) => {
      this.updateFood(await firstValueFrom(this.dataService.foodData$))
    })

    this.dataService.foodData$.subscribe(f => {
      this.updateFood(f);
    });
    
    this.updateFood(await firstValueFrom(this.dataService.foodData$))
  }

  private updateFood(foodData: {[key: number]: FoodData}) {
    const food: [FoodData, number][] = [];
    this.formControl.value.forEach((intake: FoodIntake) => {
      food.push([foodData[intake.foodId], intake.amount]);
    });
    this.foodItems = food;
  }


  async openAddFoodModal() {
    let options: ModalSettings = {}
    if (!this.screenSizeService.tabletLandscapeUp)
      options.fullscreen = true;
    else
      options.size = ModalSize.Large;

    const modal = await this.modalService.open(FoodIntakeComponent, options);
  }

  get totalCalories(): number {
    let calories = 0;
    this.foodItems.forEach(item => {
      calories += (Number(item[0].Parameters[ParameterIds.Calories].ResVal) ?? 0) * (item[1] / 100);
    })
    return Number(calories.toFixed(1));
  }
  get totalCarbohydrates(): number {
    let calories = 0;
    this.foodItems.forEach(item => {
      calories += (Number(item[0].Parameters[ParameterIds.CarbohydratesDifference].ResVal) ?? 0) * (item[1] / 100);
    })
    return Number(calories.toFixed(1));
  }
  get totalProtein(): number {
    let calories = 0;
    this.foodItems.forEach(item => {
      calories += (Number(item[0].Parameters[ParameterIds.Protein].ResVal) ?? 0) * (item[1] / 100);
    })
    return Number(calories.toFixed(1));
  }
  get totalFat(): number {
    let calories = 0;
    this.foodItems.forEach(item => {
      calories += (Number(item[0].Parameters[ParameterIds.Fat].ResVal) ?? 0) * (item[1] / 100);
    })
    return Number(calories.toFixed(1));
  }



  get localization_path() {
    return "DIARY.FOOD_INTAKE."
  }

}
