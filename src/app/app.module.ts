import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

import { SpaceshipsModule } from './spaceships/spaceships.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    SharedModule.forRoot(),
    SpaceshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
