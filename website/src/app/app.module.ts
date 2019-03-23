import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlateDatabaseComponent } from './plate-database/plate-database.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateDatabaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
