import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersComponent } from './index';
import { Angular2DataTableModule } from 'angular2-data-table';


@NgModule({
    imports: [
        BrowserModule,
        Angular2DataTableModule
    ],
    declarations: [
        OrdersComponent
    ],
    exports: [
        OrdersComponent
    ]
})
export class OrderModule {
}
