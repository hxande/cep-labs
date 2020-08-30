import substituirZeros from '../src/utils/substituirZeros';

describe('substituirZeros', () => {
    it('Deve substituir por zero se o valor da String no index nao for 0', () => {
        const test = substituirZeros('00900', 3);
        expect(test).toBe("00000");
    });
});