const return_encoded = require('./return_encoded');

describe('return encoded', () => {
    test('return feild value', () => {
        const results = return_encoded('Zab'.split(""), 1);
        expect(results).toBe('Abc');
    });
});