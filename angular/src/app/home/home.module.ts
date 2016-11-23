import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
