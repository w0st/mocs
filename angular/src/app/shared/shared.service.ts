import { Injectable } from '@angular/core';
import { Shared } from './shared';

@Injectable()
export class SharedService {
    public data: Shared = {
        user: {email: '', uid: '', provider: ''},
        isLogged: false
    };

    constructor() {
        console.log('only once');
        this.data.user = {email: '', uid: '', provider: ''};
        this.data.isLogged = false;
    }
}
