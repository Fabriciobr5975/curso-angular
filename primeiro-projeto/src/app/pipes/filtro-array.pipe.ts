import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  standalone: false
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: string[] = [], ...args: unknown[]): string[] {

    if (value.length === 0 || args === undefined) {
      return value;
    }

    const filter = (args as string[]).toLocaleString().toLocaleLowerCase();
    return value.filter((v: string) => v.toLocaleLowerCase().includes(filter));
  }
}
