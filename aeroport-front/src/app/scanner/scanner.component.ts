import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  title = 'youssif';
  verifLoad:boolean =true
  verifErr:boolean
  verifSuivant:boolean
  numero:string
  
  
  verif_billet(){
  axios.get('http://localhost:8080/verif_billet?billet='+this.numero).then((res)=>{
  //Condition ternaire qui gère les boutons (Loading, Réessayer, Suivant) à afficher.
  res.data != "" ? (this.verifSuivant = true, this.verifLoad = false, this.verifErr = false)
  : (this.verifErr = true, this.verifSuivant = false, this.verifLoad = false)
  console.log(res)
    });
  }

  
  recup_billet(){
    this.router.navigate(['information', this.numero]);
  }

  initErr(){
    this.numero =""
    this.verifLoad = true
    this.verifErr = false
  }

}
