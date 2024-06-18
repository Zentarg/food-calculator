import { UntypedFormControl, UntypedFormGroup } from "@angular/forms"
import { Subscription } from "rxjs";

export class WaterIntakeFormGroup extends UntypedFormGroup {
    private subscriptions: Array<Subscription>;

    /**
     *
     */
    constructor() {
        const form = {
            Water: new UntypedFormControl(0),
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