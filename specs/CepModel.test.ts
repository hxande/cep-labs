import { CepModel } from '../src/models/CepModel';

describe('CepModel', () => {
    it('Objeto deve ser instanciado', () => {
        const test = new CepModel('', '', '', '', '', '', '', '', '', '');
        expect(test).toHaveProperty("cep");
    });
});