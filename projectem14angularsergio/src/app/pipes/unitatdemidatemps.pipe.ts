import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitatdemidatemps'
})
export class UnitatdemidatempsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args=='hores') return (value / 3600).toFixed(2).split('.').join(':')+' h';
    if(args=='minuts') return (value / 60).toFixed(2).split('.').join(':')+' m';
  }

}
