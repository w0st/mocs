import { Component, ViewChild } from '@angular/core';
import { Order } from './order';


@Component({
    templateUrl: 'app/order/orders.html'
})
export class OrdersComponent {
    @ViewChild('orders') table;
    rows: Order[];

    constructor() {
        this.fetch((response) => {
            this.rows = response.data;
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

}
