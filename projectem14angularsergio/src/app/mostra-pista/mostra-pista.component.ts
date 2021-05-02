import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ReproductorComponent} from '../reproductor/reproductor.component'

import {Cancon} from '../classCanco';

import {CANCONS} from '../mockCancons';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-mostra-pista',
  templateUrl: './mostra-pista.component.html',
  styleUrls: ['./mostra-pista.component.css','../app.component.css'],
  animations: [
    trigger('mouimatgepista',[
      state('inici',style({
        
      })),
      state('despres',style({
        transform:'rotate(360deg)',
        backgroundColor:'gold',

      })),
      transition('* => *', animate('900ms'))
    ])
  ]
})
export class MostraPistaComponent  implements OnInit{ 
  reproductor=new(ReproductorComponent);
  parametre: string;
  Cancons=CANCONS;
  canco;


  stateName='inici'
  switchState(){
    this.stateName = this.stateName === 'inici' ? 'despres' : 'inici'
   } 
   switchStateenvers(){
    this.stateName = this.stateName === 'inici' ? 'despres' : 'inici'
   } 

  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
      this.parametre=this.route.snapshot.paramMap.get('nom');
      this.canco=this.Cancons.find(a=>a.nom==this.parametre)
      console.log(this.Cancons);
      this.reproductor.audio(this.canco.audio);
    };


}
