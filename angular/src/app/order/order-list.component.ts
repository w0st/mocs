import { Component, Input } from '@angular/core';
import { Order } from './order';
@Component({
    selector: 'as-orderlist',
    templateUrl: 'app/order/order-list.html'
})
export class OrderListComponent {
    @Input('orders') orders: Order[];
}
