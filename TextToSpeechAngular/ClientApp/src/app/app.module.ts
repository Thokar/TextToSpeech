import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PubnubComponent } from './pubnub/pubnub.component';

@NgModule({
  declarations: [
    AppComponent,
    PubnubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
