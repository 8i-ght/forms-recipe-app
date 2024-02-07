import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        DropdownDirective,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule
    ],
})
export class SharedModule { }