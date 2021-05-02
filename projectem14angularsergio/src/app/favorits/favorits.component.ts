import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import {storagefavorits} from '../storagefavorits';

import {CANCONS} from '../mockCancons';

import { trigger, state, animate, transition, style } from '@angular/animations';

import {ReproductorComponent} from '../reproductor/reproductor.component';

 
@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css','../app.component.css'],
  animations: [
    trigger('divState',[
      state('escalar',style({
        backgroundColor:'gold',
        transform:'scale(1.1)',
      })),
      state('desescalar',style({
        backgroundColor:'gold',
        transform:'translateX(250)',
      })),
      transition('* => *', animate('900ms'))
    ]),trigger("openClose", [
      state(
        "open",
        style({
          height: "250px",
          opacity: 1,
          backgroundColor: "pink"
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0,
          backgroundColor: "green"
        })
      ),
      transition("* => open", [animate("0.5s")])
    ])
  ]
})



export class FavoritsComponent implements OnInit {
  
  stateName='escalar'
  switchState(){
    this.stateName = this.stateName === 'escalar' ? 'desescalar' : 'escalar'
   } 
   isOpen = false;
  toggle() {
    console.log("hola");
    this.isOpen = !this.isOpen;
  } 

  reproductor=new(ReproductorComponent);

  favorits=new storagefavorits();
  favorit:string[];
  cancons=CANCONS;
  canco;
  constructor() { }

  
  ngOnInit(): void {
    console.log(this.canco);
    let temp=this.favorits.mostrar('favorits');
    this.favorit=temp.split(',');
    console.log(this.favorit);
    let favorit2=JSON.stringify(this.favorit);
    if(this.favorit[0]!="[]"){
      this.canco=this.cancons.filter( a=>favorit2.includes(a.nom));
    }else this.canco=null;
    console.log(this.canco);
  }

}

