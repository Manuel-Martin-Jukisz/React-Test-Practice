import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruevas de 07-deses-arr.js', () => {
  test('retornaArreglo deveria retornar una array', () => {
    const [letras, numeros] = retornaArreglo(); //['ABC', 123]

    expect(typeof letras).toBe('string');
    
    expect(typeof numeros).toBe('number');
  });
});
