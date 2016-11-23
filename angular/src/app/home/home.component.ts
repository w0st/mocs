import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { SharedService } from '../shared/shared.service';
import { Shared } from '../shared/shared';

@Component({
    selector: 'as-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ]
})
export class HomeComponent implements OnInit {
    data: Shared;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private auth: AuthService,
        private shared: SharedService) {
        this.data = shared.data;
    }

    ngOnInit() {
        this.auth.setStorageType('localStorage');
        console.log('token = ', this.auth.getToken());
        this.data.isLogged = this.auth.isAuthenticated();
        this.sub = this.route.queryParams.subscribe((params: {token: string}) => {
            if (params.token) {
                console.log('set token = ', params.token);
                this.auth.setToken(params.token);
                this.data.isLogged = this.auth.isAuthenticated();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
