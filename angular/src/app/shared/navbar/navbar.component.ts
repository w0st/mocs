import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from '../../user/user.service';
import { SharedService } from '../shared.service';
import { Shared } from '../shared';
import { AuthService } from 'ng2-ui-auth';
import { Subscription } from 'rxjs';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/shared/navbar/navbar.html'
})
export class NavbarComponent implements OnChanges {
    @Input() brand: string;
    data: Shared;
    subscription: Subscription;

    constructor(private userService: UserService, private shared: SharedService, private auth: AuthService) {
        this.data = this.shared.data;
        this.subscription = shared.nameChange.subscribe((value) => {
            this.fetchUser();
        });
    }

    ngOnChanges() {
        this.fetchUser();
    }

    fetchUser() {
        this.data.isLogged = this.auth.isAuthenticated();
        if (this.data.isLogged) {
            this.userService.getUser()
                .then(result => {
                    this.shared.data.user = result;
                });
        }
    }


}
