import { ModuleWithProviders, NgModule } from '@angular/core';
import { PlusSpinnerComponent } from "./plus-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports     : [CommonModule],
    declarations: [PlusSpinnerComponent],
    exports     : [PlusSpinnerComponent]
})
export class PlusSpinnerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule : PlusSpinnerModule,
            providers: []
        }
    }
}