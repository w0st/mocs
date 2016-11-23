import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersComponent } from './index';
import { Angular2DataTableModule } from 'angular2-data-table';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from './order.service';
import { OrdersListsComponent } from './orders-lists.component';
import { OrderListComponent } from './order-list.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        Angular2DataTableModule
    ],
    declarations: [
        OrdersComponent,
        OrderComponent,
        OrdersListsComponent,
        OrderListComponent
    ],
    exports: [
        OrdersComponent
    ],
    providers: [
        OrderService
    ]
})
export class OrderModule {
}
