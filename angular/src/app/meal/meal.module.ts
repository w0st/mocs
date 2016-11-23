import { NgModule } from '@angular/core';
import { MealComponent } from './meal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MealService } from './meal.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        MealComponent
    ],
    exports: [
        MealComponent
    ],
    providers: [
        MealService
    ]
})
export class MealModule {
}
