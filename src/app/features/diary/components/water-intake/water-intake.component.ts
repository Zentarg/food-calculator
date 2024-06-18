import { Component } from '@angular/core';
import { DiaryForm } from '../../DiaryForm';
import { WaterIntakeFormGroup } from './WaterIntakeFormGroup';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-water-intake',
  standalone: true,
  imports: [TranslateModule, NgIf],
  templateUrl: './water-intake.component.html',
  styleUrl: './water-intake.component.scss'
})
export class WaterIntakeComponent {

  
  target: number = 2;
  increment: number = 0.25;
  droplets: boolean[] = [];

  public form = this.diaryForm.get('Water') as WaterIntakeFormGroup;

  get localization_path() {
    return "DIARY.WATER_INTAKE."
  }

  constructor(private diaryForm: DiaryForm) {
    for (let index = 0; index < this.target/this.increment; index++) {
      if (index * this.increment < this.form.get('Water')?.value)
        this.droplets.push(true);
      else 
        this.droplets.push(false);
    }
  }

  ToggleDroplets(index: number) {
    // Create temp droplets array and assign true/false up to & including clicked index
    let tempDroplets: boolean[] = []
    this.droplets.forEach((value: boolean, dropletIndex: number) => {
      if (dropletIndex < index)
        tempDroplets.push(true)
      else if (dropletIndex == index)
        // If current clicked index is not the last true index, set it to true
        if (this.droplets[dropletIndex+1] == true)
          tempDroplets.push(true)
        // If it is, toggle it between its own value
        else
          tempDroplets.push(!value)
      else
        tempDroplets.push(false)
    })
    // Reassign droplets to force reactivity
    this.droplets = tempDroplets;
    
    let waterCount = this.droplets.filter(v => !!v)?.length * this.increment;
    this.form.get('Water')?.setValue(waterCount);
    
    let currentRows = this.droplets.length / (this.target / this.increment);

    if (this.droplets.filter(v => !v).length == 0) {
      this.ExtendDroplets();
      // Shrink if theres less droplet rows with minimum 1 filled droplet than current rows
    } else if (this.droplets.filter(v => !!v).length < ((this.target / this.increment) - 1) * currentRows) {
      this.ShrinkDroplets();
    }

  }

  ExtendDroplets() {
    // Add another row of droplets
    let tempDroplets = [...this.droplets]
    for (let index = 0; index < this.target/this.increment; index++) {
      tempDroplets.push(false)
    }
    this.droplets = tempDroplets;
  }

  ShrinkDroplets() {
    // Get current amount of filled rows, and shrink to those
    const dropletLength = this.droplets.filter(v => !!v)?.length
    let currentRows = Math.ceil(dropletLength / (this.target / this.increment));
    
    // Keep an extra row if first one is filled
    if (dropletLength / (this.target / this.increment) == currentRows)
      currentRows++;
    this.droplets = this.droplets.slice(0, (this.target / this.increment) * (currentRows));
  }
}
