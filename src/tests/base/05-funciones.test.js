import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas de 05-functions.js', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Manuel';

        const activeUser = {
          uid: 'ABC567',
          username: nombre,
        };

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(activeUser);
        
    });
    
});
