import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import {PaiementComponent} from './paiement/paiement.component'
import {AppRoutingModule} from './app-routing.module';
import { ScannerComponent } from './scanner/scanner.component';
import { RedirectComponent } from './redirect/redirect.component'



@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    ScannerComponent,
    RedirectComponent,
    PaiementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
