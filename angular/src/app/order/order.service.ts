import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONSTANTS } from '../shared/constant/index';
import * as _ from 'lodash';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AuthService } from 'ng2-ui-auth';
import { Order } from './order';
import { Meal } from '../meal/meal';


@Injectable()
export class OrderService {

    constructor(private http: Http, private auth: AuthService) {

    }

    getAuthorizationHeader(): Headers {
        let headers = new Headers();
        headers.append('X-Api-Key', this.auth.getToken());
        headers.append('Content-Type', 'application/vnd.api+json');
        return headers;
    }

    parseOrders(json): Order[] {
        let orders: Order[] = [];
        _.forEach(json.data, order => {
           console.log('order = ', order);
            let o = new Order;
            o.id = order.id;
            _.forOwn(order.attributes, (value, key) => {
                o[key] = value;
            });
            // attach meals
            let meals: Meal[] = [];
            _.forEach(order.relationships.meals.data, rmeal => {
                // find rmeal.id
                let meal: Meal = (_.find(json.included, {id: rmeal.id}) as {attributes}).attributes;
                meals.push(meal);
            });
            o.meals = meals;
            orders.push(o);
        });

        return orders;
    }

    public getOrders(): Promise<Order[]> {
        return this.http.get(CONSTANTS.MAIN.API.URL + 'orders', {
            headers: this.getAuthorizationHeader()
        })
            .toPromise()
            .then(response => this.parseOrders(response.json()))
            .catch(this.handleError);
    }

    public addOrder(order) {
        console.log('AddOrder = ', order);
        let data = {
            data: {
                type: 'order',
                attributes: {
                    restaurant: order.name
                }
            }};
        return this.http.post(CONSTANTS.MAIN.API.URL + 'orders', JSON.stringify(data), {
            headers: this.getAuthorizationHeader()
        })
            .toPromise();
    }

    public updateStatusOnOrder(order, status) {
        console.log('Update order = ', order);
        let data = {
            data: {
                id: order.id,
                type: 'order',
                attributes: {
                    id: order.id,
                    status: status
                }
            }
        };
        return this.http.patch(CONSTANTS.MAIN.API.URL + 'orders' + '/' + order.id, JSON.stringify(data), {
            headers: this.getAuthorizationHeader()
        })
            .toPromise();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
