import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDmApOGZm7jWr7a8pKnl1LKi9SDySMjG44",
      authDomain: "anti-ragging-60e5b.firebaseapp.com",
      projectId: "anti-ragging-60e5b",
      storageBucket: "anti-ragging-60e5b.appspot.com",
      messagingSenderId: "31263761962",
      appId: "1:31263761962:web:95c7e08dec4549fb31c553",
      measurementId: "G-JC8J2ZSDBZ"
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
