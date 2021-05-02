import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artista } from '../classArtista';

import {ARTISTES} from '../mockArtistes';

@Component({
  selector: 'app-mostra-artista',
  templateUrl: './mostra-artista.component.html',
  styleUrls: ['./mostra-artista.component.css','../app.component.css']
})
export class MostraArtistaComponent implements OnInit{

  parametre: string;
  Artistes=ARTISTES;
  artista;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
      this.parametre=this.route.snapshot.paramMap.get('nom');
      this.artista=this.Artistes.find(a=>a.nick==this.parametre)
      console.log(this.artista);
    };
  
}
