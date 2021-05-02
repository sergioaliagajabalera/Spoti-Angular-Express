import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Album} from '../classAlbum';
import {ALBUMS} from '../mockAlbums';

@Component({
  selector: 'app-mostra-album',
  templateUrl: './mostra-album.component.html',
  styleUrls: ['./mostra-album.component.css','../app.component.css']
})
export class MostraAlbumComponent implements OnInit {

  parametre: string;
  Albums=ALBUMS;
  album;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
      this.parametre=this.route.snapshot.paramMap.get('nom');
      this.album=this.Albums.find(a=>a.nom==this.parametre)
      console.log(this.album);
    };
 
}


