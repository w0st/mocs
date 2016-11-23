import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from './meal';
import { MealService } from './meal.service';

@Component({
    templateUrl: 'app/meal/meal.html',
})
export class MealComponent implements OnInit {
    orderId: number;
    model: Meal = {
        name: '',
        price: ''
    };
    submitted: boolean = false;
    errorMessage: string = null;

    constructor(private mealService: MealService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: {id: string}) => {
            let id = Number.parseInt(params.id);
            console.log('id = ', id);
            this.orderId = id;
        });
    }

    create(model: Meal) {
        console.log('order = ', this.orderId);
        console.log('model = ', model);
        this.submitted = true;
        this.mealService.addMealToOrder(model, this.orderId).then(result => {
            console.log('result = ', result);
            this.router.navigate(['/orders']);
        }, error => {
            console.log('error = ', error);
            this.submitted = false;
            this.errorMessage = error.statusText;
        });
    }
}
