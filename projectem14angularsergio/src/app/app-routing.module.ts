import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { FavoritsComponent } from './favorits/favorits.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import {MostraArtistaComponent} from './mostra-artista/mostra-artista.component';
import {MostraAlbumComponent} from './mostra-album/mostra-album.component';
import {MostraPistaComponent} from './mostra-pista/mostra-pista.component';

import {ReproductorComponent} from './reproductor/reproductor.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'favorits', component: FavoritsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'artista/:nom', component: MostraArtistaComponent },
  { path: 'album/:nom', component: MostraAlbumComponent },
  { path: 'pista/:nom', component: MostraPistaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
