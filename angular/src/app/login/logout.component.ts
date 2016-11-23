import { Component } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
    templateUrl: 'app/login/logout.html',
})
export class LogoutComponent {

    constructor(private auth: AuthService, private router: Router, private shared: SharedService) {
        auth.logout();
        shared.data.isLogged = false;
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 5000);
    }
}
