import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { StoreModule, USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { sampleReducer } from './State/Reducers/sample';
import { CounterReducer } from './State/Reducers/counterReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { bookingReducer } from './State/Reducers/bookingReducer';
import { BookingsEffect } from './State/Effects/BookingEffects';
import { userReducer } from './State/Reducers/userReducers';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({sample:sampleReducer, counter:CounterReducer, booking:bookingReducer, profile:userReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BookingsEffect])
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
