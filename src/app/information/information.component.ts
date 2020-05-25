import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import axios from 'axios'


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {
  id = null;
  a : any;
  save_bag: boolean = true
  next_bag: boolean = true
  paiement:boolean
  verif_save: boolean
  poids : number = 35
  num_bag: number = 1
  somme:number = 0

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    axios.get('http://localhost:8080/recup_billet?billet='+this.id).then((res)=>{
      this.a = res.data[0]
      console.log(this.a)
    })
  }

  ngOnDestroy(): void {
  }

  save_bagage(){
    this.verif_save = true
    if (this.poids >10) {this.somme += 10}
    console.log(this.somme)
    console.log(this.a.nombre_bagage)
    
    if(this.num_bag == this.a.nombre_bagage){
      this.next_bag = false
      this.paiement = true
    }
  }

  next_bagage(){
    this.verif_save = false
    this.num_bag += 1
  }
  recup_somme(){
this.router.navigate(['paiement',this.somme])
  }



}
