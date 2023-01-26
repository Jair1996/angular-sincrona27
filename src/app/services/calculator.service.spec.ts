import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe retornar 5 si calculate recibe como parametro 2, 3 y "+"', () => {
    const result = service.calculate(2, 3, '+');
    const expectedResult = 5;

    expect(expectedResult).toBe(result);
  });

  it('debe retornar 10 si calculate recibe como parametro 20, 10 y "-"', () => {
    const result = service.calculate(20, 10, '-');
    const expectedResult = 10;

    expect(expectedResult).toBe(result);
  });

  it('debe retornar 45 si calculate recibe como parametro 9, 5 y "*"', () => {
    const result = service.calculate(9, 5, '*');
    const expectedResult = 45;

    expect(expectedResult).toBe(result);
  });

  it('debe retornar 3 si calculate recibe como parametro 9, 3 y "/"', () => {
    const result = service.calculate(9, 3, '/');
    const expectedResult = 3;

    expect(expectedResult).toBe(result);
  });

  it('debe retornar "Indeterminado" si calculate recibe como parametro 9, 0 y "/"', () => {
    const result = service.calculate(9, 0, '/');
    const expectedResult = 'Indeterminado';

    expect(expectedResult).toBe(result);
  });
});
