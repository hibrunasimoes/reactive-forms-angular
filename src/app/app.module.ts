import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ValidationComponent } from './validation/validation.component';
import { Ex03Component } from './ex03/ex03.component';
import { CamilaTesteComponent } from './camila-teste/camila-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    ValidationComponent,
    Ex03Component,
    CamilaTesteComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
