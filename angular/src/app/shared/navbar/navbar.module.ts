import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule,
        BrowserModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
