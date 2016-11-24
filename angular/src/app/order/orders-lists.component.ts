import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from './order';
import * as _ from 'lodash';


@Component({
    templateUrl: 'app/order/orders-lists.html'
})
export class OrdersListsComponent {
    rows: Order[];
    activeOrders: Order[];
    historyOrders: Order[];
    isActiveVisible: boolean = true;

    constructor(private orderService: OrderService) {
        this.fetch();
    }

    fetch() {
        this.orderService.getOrders().then(results => {
            this.historyOrders = _.filter(results, order => {
                return order.status === 'Delivered' || order.status === 'Canceled';
            });
            this.activeOrders = _.differenceBy(results, this.historyOrders, 'status');
            this.historyOrders = _.sortBy(this.historyOrders, r => -r.id);
            this.activeOrders = _.sortBy(this.activeOrders, r => -r.id);
            console.log('results = ', results);
        });
    }

    show(tab) {
        this.isActiveVisible = (tab === 'Active');
    }

    notify(event) {
        console.log('event =', event);
        this.fetch();
    }

}
