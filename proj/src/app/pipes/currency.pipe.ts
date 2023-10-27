import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {

    const formattedValue = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return formattedValue;
  }
}
