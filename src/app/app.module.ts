import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PesquisarRemediosComponent } from './pesquisar-remedios/pesquisar-remedios.component';
import { SalvarRemediosComponent } from './salvar-remedios/salvar-remedios.component';
import {MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, DateAdapter} from '@angular/material';
import { RemediosService } from './services/remedios-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { LocalStorageService } from 'angular-web-storage';

@NgModule({
  declarations: [
    AppComponent,
    PesquisarRemediosComponent,
    SalvarRemediosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ToasterModule.forRoot(),
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [RemediosService,LocalStorageService,
    { provide: LOCALE_ID, useValue: 'pt-BR' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
