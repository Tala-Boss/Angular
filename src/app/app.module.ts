import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UfmModule} from "./ufm/ufm.module";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UfmModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
