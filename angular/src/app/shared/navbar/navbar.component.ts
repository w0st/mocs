import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from '../../user/user.service';
import { SharedService } from '../shared.service';
import { Shared } from '../shared';
import { AuthService } from 'ng2-ui-auth';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/shared/navbar/navbar.html'
})
export class NavbarComponent implements OnChanges {
    @Input() brand: string;
    data: Shared;

    constructor(private userService: UserService, private shared: SharedService, private auth: AuthService) {
        this.data = this.shared.data;
    }

    ngOnChanges() {
        console.log('on changes');
        console.log('shared service = ', this.shared);
        console.log('this.logged',  this.data.isLogged);
        this.data.isLogged = this.auth.isAuthenticated();
        if (this.data.isLogged) {
            this.userService.getUser()
                .then(result => {
                    this.data.user = result;
                });
        }
    }


}
