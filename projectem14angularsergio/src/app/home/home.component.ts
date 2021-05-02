import { Component, OnInit , HostListener, ElementRef} from '@angular/core';


import {Cancon} from '../classCanco';
import {CANCONS} from '../mockCancons';

import {storagefavorits} from '../storagefavorits';
import { trigger, state, animate, transition, style } from '@angular/animations';

import {ReproductorComponent} from '../reproductor/reproductor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../app.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class HomeComponent{
  state = 'hide'
  cancons=CANCONS;
  favorits=new storagefavorits();
  reproductor=new(ReproductorComponent);


  constructor(public el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}
