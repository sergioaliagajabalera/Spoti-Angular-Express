import { Component, Input} from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-escalaranimation',
  animations: [
      trigger('ferEfecte', [
        state('true' , style({ hidden: 'true', transform: 'scale(1.0)' })),
        state('false', style({ hidden: 'false', transform: 'scale(0.0)'  })),
        transition('1 => 0', animate('300ms')),
        transition('0 => 1', animate('900ms'))
      ])

  ],template: ``

})
export class EscalaranimationComponent{
  @Input() isVisible : boolean = true;
  @Input() isnotvisible : boolean = false;
}
