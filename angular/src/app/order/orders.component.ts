import { Component, ViewChild } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';


@Component({
    templateUrl: 'app/order/orders.html'
})
export class OrdersComponent {
    @ViewChild('orders') table;
    rows: Order[];
    selected = [];

    constructor(private orderService: OrderService) {
        this.orderService.getOrders().then(results => {
            this.rows = results;
            console.log('results = ', results);
        });
    }

    fetch(cb) {
        let req = new XMLHttpRequest();
        req.open('GET', 'assets/json/orders.json');

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.toggleExpandRow(row);
    }


    changeStatus(order, newStatus) {
        this.orderService.updateStatusOnOrder(order, newStatus).then(result => {
            console.log('result = ', result);
        }, error =>
            console.log('error = ', error)
        );
    }


    nextState(order) {
        let n: string;
        switch (order.status) {
            case 'Created': n = 'Finalized'; break;
            case 'Finalized': n = 'Ordered'; break;
            case 'Ordered': n = 'Delivered'; break;
            default: n = '';
        }
        return n;
    }

}
