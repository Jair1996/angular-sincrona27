import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  history: string[] = [];

  constructor() {}

  calculate(x: number, y: number, operator: string) {
    if (operator === '/' && y === 0) return 'Indeterminado';

    const operation = `${x} ${operator} ${y}`;

    const result = eval(operation);

    this.history.unshift(`${operation} = ${result}`);

    return result;
  }
}
