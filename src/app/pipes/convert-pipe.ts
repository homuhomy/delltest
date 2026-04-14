import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, args: String, unit?: String): any {
    if (args == 'upperCase') {
      return String(value).toUpperCase();
    }

    if (args == 'height') {
      if(unit === 'meter')
      return (value/100).toFixed(2);  // Convert cm to meters and format to 2 decimal places
      else return (value/2.54).toFixed(2);  // Convert cm to inches and format to 2 decimal places
    }

    return value;
  }
}
