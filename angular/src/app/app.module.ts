import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { OrderModule } from './order/order.module';
import { LoginModule } from './login/login.module';
import { CustomConfig, Ng2UiAuthModule } from 'ng2-ui-auth';
import { IProviders } from 'ng2-ui-auth/declerations/config.service';
import { UserModule } from './user/user.module';
import { MealModule } from './meal/meal.module';

export const GITHUB_CLIENT_ID = 'b70a7829812203cb9f3f';
export class MyAuthConfig extends CustomConfig {
    defaultHeaders = {'Content-Type': 'application/json'};
    providers: { [provider: string]: IProviders } = {
        github: {
            clientId: GITHUB_CLIENT_ID,
            redirectUri: 'http://localhost:3000/auth/github/callback',
        }
    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        OrderModule,
        LoginModule,
        UserModule,
        MealModule,
        Ng2UiAuthModule.getWithConfig(MyAuthConfig),
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
