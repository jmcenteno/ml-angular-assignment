import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    RouterModule,
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
