import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrucate'
})
export class TextTrucatePipe implements PipeTransform {

  transform(value: string, maxLength: number = 100): string {
    return `${value.slice(0, maxLength)} ......`;
  }

}
