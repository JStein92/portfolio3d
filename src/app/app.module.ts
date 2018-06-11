import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';


@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
