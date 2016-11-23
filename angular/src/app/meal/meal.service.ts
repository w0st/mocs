import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONSTANTS } from '../shared/constant/index';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AuthService } from 'ng2-ui-auth';


@Injectable()
export class MealService {

    constructor(private http: Http, private auth: AuthService) {
    }

    getAuthorizationHeader(): Headers {
        let headers = new Headers();
        headers.append('X-Api-Key', this.auth.getToken());
        headers.append('Content-Type', 'application/vnd.api+json');
        return headers;
    }

    public addMealToOrder(meal, orderId) {
        let data = {
            data: {
                type: 'meal',
                attributes: meal
            }};
        return this.http.post(CONSTANTS.MAIN.API.URL + 'orders/' + orderId + '/meals', JSON.stringify(data), {
            headers: this.getAuthorizationHeader()
        })
            .toPromise();
    }
}
