// colocar dentro de app/pipes ou app/modulo_que_usa_o_pipe

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'stringToCurrency'
// })
// export class StringToCurrencyPipe implements PipeTransform {
//   transform(value: string): string {
//     const numericValue = parseFloat(value);

//     if (isNaN(numericValue)) {
//       return 'R$ 0,00';
//     }

//     const formattedValue = numericValue.toLocaleString('pt-BR', {
//       style: 'currency',
//       currency: 'BRL'
//     });

//     return formattedValue;
//   }
// }
