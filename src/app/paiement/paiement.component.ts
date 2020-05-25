import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import axios from 'axios'


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
somme : any
solde_insuff:boolean
solde_suff:boolean
num_carte:string
solde:any
new_solde:number
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.somme = this.route.snapshot.paramMap.get('somme')
  }
  aff_solde(){
    axios.get('http://localhost:8080/montant?carte='+ this.num_carte).then((res)=>{
this.solde = res.data[0]
this.solde.montant < this.somme ? (this.solde_insuff = true, this.solde_suff = false) 
: (this.solde_insuff = false, this.solde_suff = true)
        })
  }

  payer(){
    this.new_solde= this.solde.montant - this.somme
    axios.post('http://localhost:8080/new_solde',{new_solde: this.new_solde, num_carte: this.num_carte}).then((res)=>{
      console.log(this.new_solde +"     " +this.num_carte)
    })
  }
}
