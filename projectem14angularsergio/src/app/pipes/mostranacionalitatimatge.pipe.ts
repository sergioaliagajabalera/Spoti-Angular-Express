import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostranacionalitatimatge'
})
export class MostranacionalitatimatgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let valor=args[0];
    console.log(valor);
    switch(valor){
        case 'USA': return '../assets/image/nacionalitats/United_States.png';
        case 'España': return '../assets/image/nacionalitats/Spain.png';
        case 'Puerto Rico': return '../assets/image/nacionalitats/puertorico.png';
    }
    
    return null;
  }

}
