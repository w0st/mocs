import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { OrderRoutes } from './order/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...OrderRoutes,
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
