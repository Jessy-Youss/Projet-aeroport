import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { ScannerComponent } from './scanner/scanner.component'
import {RedirectComponent} from './redirect/redirect.component'
import {PaiementComponent} from './paiement/paiement.component'
const routes: Routes = [
  { path: 'information/:id', component: InformationComponent },
  {
    path: '',
    redirectTo: 'scanner',
    pathMatch: 'full',
  }, 
  {path:"paiement/:somme", component:PaiementComponent },
  { path: 'scanner', component: ScannerComponent },
  {path:"not-found", component:RedirectComponent },
 
  {path:"**",redirectTo: "/not-found" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }