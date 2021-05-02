import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';

import {Cancon} from '../classCanco';
import {CANCONS} from '../mockCancons';
import {storagefavorits} from '../storagefavorits';


import {ReproductorComponent} from '../reproductor/reproductor.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css','../app.component.css']
})
export class MusicComponent {
  favorits=new storagefavorits();
  displayedColumns: string[] = ['nom', 'genere', 'album', 'autor','any','audio'];
  dataSource = new MatTableDataSource(CANCONS);
  ultimacanco:string;

  veri:boolean;
  

  reproductor=new(ReproductorComponent);

  verificar(nom){
    this.ultimacanco=nom;  
    this.veri=this.favorits.verifica(nom,'favorits');
      
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export class M07_DirectivaPersonalitzadaComponent {
  color: string;
}
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[marcat]' })
export class M07_DirectivaPersonalizada {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';

    }
}