import { Component } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/order/order.html'
})
export class OrderComponent {

    model = new Order();
    submitted: boolean = false;
    added: boolean = false;
    wrong: boolean = false;

    constructor(private orderService: OrderService, private router: Router) {

    }

    create(model: Order) {
        this.submitted = true;
        this.orderService.addOrder(model)
            .then(
                result => {
                    console.log('addOrderResult = ', result.json().data);
                    this.added = true;
                    this.wrong = false;
                    setTimeout(() => {
                        this.router.navigate(['/orders']);
                    }, 5000);
            },
                error => {
                    console.log('error = ', error);
                    this.submitted = false;
                    this.wrong = true;
            });
    }
}
