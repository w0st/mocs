import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONSTANTS } from '../shared/constant/index';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AuthService } from 'ng2-ui-auth';
import { Restaurant } from './restaurant';


@Injectable()
export class UserService {

    constructor(private http: Http, private auth: AuthService) {

    }

    getAuthorizationHeader(): Headers {
        let headers = new Headers();
        headers.append('X-Api-Key', this.auth.getToken());
        return headers;
    }

    public getRestaurants(): Promise<Restaurant[]> {
        return this.http.get(CONSTANTS.MAIN.API.URL + 'restaurants', {
            headers: this.getAuthorizationHeader()
        })
            .toPromise()
            .then(response => response.json().data as Restaurant[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
