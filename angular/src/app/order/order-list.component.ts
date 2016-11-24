import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order } from './order';
import { MealService } from '../meal/meal.service';
import { Meal } from '../meal/meal';
@Component({
    selector: 'as-orderlist',
    templateUrl: 'app/order/order-list.html'
})
export class OrderListComponent {
    @Input('orders') orders: Order[];
    @Output() changed: EventEmitter<string> = new EventEmitter();

    constructor(private mealService: MealService) {
    }

    deleteMeal(meal: Meal, order: Order) {
        this.mealService.deleteMeal(meal.id, order.id).then(result => {
            this.changed.emit('delete a meal');
            }, error => {
                console.log('error =', error);
            });
    }
}
