import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostraanyssemoticones'
})
export class MostraanyssemoticonesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    if(value>=2019) return '🆕';
    else if(value<=2002) return '👴';
    else return value;
  }

}
