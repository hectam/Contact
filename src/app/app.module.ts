import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { ListContactosComponent } from './list-contactos/list-contactos.component';
import { EditContactosComponent } from './edit-contactos/edit-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ListContactosComponent,
    EditContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
