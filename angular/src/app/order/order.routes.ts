import { Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrderComponent } from './order.component';
import { OrdersListsComponent } from './orders-lists.component';

export const OrderRoutes: Routes = [
    { path: 'orders',  component: OrdersComponent },
    { path: 'orders-lists',  component: OrdersListsComponent },
    { path: 'order', component: OrderComponent }
];
