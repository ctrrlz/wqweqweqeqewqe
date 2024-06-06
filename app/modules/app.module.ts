import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from '../components/app/app.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ProfileComponent } from '../components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
