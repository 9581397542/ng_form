import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,

   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormControl,
    FormGroup,
    Validators,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
