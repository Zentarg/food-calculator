import { Inject, Injectable, OnDestroy } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { WaterIntakeFormGroup } from "./components/water-intake/WaterIntakeFormGroup";
import { FoodIntakeComponent } from "./components/food-intake/food-intake.component";
import { FoodIntakeFormGroup } from "./components/food-intake/FoodIntakeFormGroup";

@Injectable({
    providedIn: 'root'
})
export class DiaryForm extends UntypedFormGroup implements OnDestroy {

    /**
     *
     */
    constructor() {
        const form = {
            Water: new WaterIntakeFormGroup(),
            Food: new FoodIntakeFormGroup()
        }
        super(form);
    }

    ngOnDestroy(): void {
        this.Water?.unsubscribe();
    }

    private get Water(): WaterIntakeFormGroup {
        return this.get('Water') as WaterIntakeFormGroup;
    }

}