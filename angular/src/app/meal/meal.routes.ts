import { Routes } from '@angular/router';

import { MealComponent } from './meal.component';

export const MealRoutes: Routes = [
    { path: 'order/:id/add',  component: MealComponent },
];
