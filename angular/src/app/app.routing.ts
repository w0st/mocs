import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { OrderRoutes } from './order/index';
import { LoginRoutes } from './login/index';
import { MealRoutes } from './meal/meal.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...OrderRoutes,
    ...MealRoutes,
    ...LoginRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
