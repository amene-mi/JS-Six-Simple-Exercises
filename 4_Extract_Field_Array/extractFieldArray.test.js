/**
 * @jest-environment jsdom
 */
const extractFieldArray = require('./extractFieldArray');

describe('extract Field Array', () => {
    let events = [];
    beforeEach(() => {
        events = [
            {
                performer: 'Joe kelly',
                title: 'Nirvana'
            },
            {
                performer: 'Misa Ro',
                title: 'Days'
            }
        ]
    });
    test('return feild value', () => {
        const results = extractFieldArray('title', events);
        expect(results[0]).toBe('Nirvana');
        expect(results.length).toBe(2);
    });
});