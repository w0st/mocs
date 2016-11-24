import { Injectable } from '@angular/core';
import { Shared } from './shared';
import * as Rx from 'rxjs/Rx';


@Injectable()
export class SharedService {
    nameChange: Rx.Subject<string> = new Rx.Subject<string>();

    public data: Shared = {
        user: {email: '', uid: '', provider: ''},
        isLogged: false
    };

    notify() {
        this.nameChange.next('notify');
    }
}
