import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: false
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const values = value.split(" ");
    let result = "";

    for (const v of values) {
      result += this.capitalize(v) + " ";
    }

    // values.map(char => char.replace(char[0], char[0].toLocaleLowerCase())).join(" ");

    return result;
  }

  private capitalize(value: string) {
    return value.substring(0, 1).toUpperCase() +
      value.substring(1).toLowerCase();
  }
}
