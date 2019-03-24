import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlateDatabaseComponent } from './plate-database/plate-database.component';
import { routing } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    PlateDatabaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
