import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule ({
    imports: [BrowserModule, HttpModule, RouterModule],
    providers: [UserService]

})
export class UserModule {

}
