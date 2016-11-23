import { Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrderComponent } from './order.component';

export const OrderRoutes: Routes = [
    { path: 'orders',  component: OrdersComponent },
    { path: 'order', component: OrderComponent }
];
