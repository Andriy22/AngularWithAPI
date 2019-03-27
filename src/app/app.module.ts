import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkersComponent } from './workers/workers.component';

import {Workers} from './workers';
import {WorkersService} from './workers.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HttpClient} from '@angular/common/http'

import {MatButtonModule, MatMenuModule, MatCheckboxModule} from '@angular/material';
import {MatNativeDateModule, MatTableModule, MatInputModule} from '@angular/material';
import {MatTooltipModule, MatCardModule, MatIconModule, MatFormFieldModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
