import { UntypedFormControl, UntypedFormGroup } from "@angular/forms"
import { Subscription } from "rxjs";

export class FoodIntakeFormGroup extends UntypedFormGroup {
    private subscriptions: Array<Subscription>;

    constructor() {
        const form = {
            Breakfast: new UntypedFormControl([{foodId: 1, amount: 24120}]),
            Lunch: new UntypedFormControl([{foodId: 6, amount: 20}, {foodId: 8, amount: 20}, {foodId: 9, amount: 2000}, {foodId: 10, amount: 20}]),
            Dinner: new UntypedFormControl([{foodId: 11, amount: 200}, {foodId: 12, amount: 20}, {foodId: 13, amount: 20}, {foodId: 14, amount: 20}]),
            Snacks: new UntypedFormControl([{foodId: 17, amount: 20}, {foodId: 20, amount: 200}, {foodId: 21, amount: 20}, {foodId: 22, amount: 20}])
        }
        super(form);
        
        this.subscriptions = [
            // Control specific subscriptions - I.E. max number in one control cant be below min number in other control
        ]
        
    }


    unsubscribe(): void {
        this.subscriptions?.forEach(s => {
            s?.unsubscribe();
        })
    }
}