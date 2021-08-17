import '@testing-library/jest-dom'

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe de retornar Hola Manuel', () => {
        const nombre = 'Manuel';

        const saludo = getSaludo(nombre)

        console.log(saludo)
        
        expect(saludo).toBe( 'Hola ' + nombre + '!')

    })

    //Tarea

    //getSaludo debe de retornar Hola Carlos! si no hay argumento nombre

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {

        const saludo = getSaludo();

        console.log(saludo)

        expect(saludo).toBe('Hola Carlos!')
    });
    
    
})
