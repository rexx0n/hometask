const multiply = require('./app')

// it('проверяем что 2 * 2 на 4', ()=> {
//     expect(multiply(2,2)).toBe(4)
// })

describe('testing app js', () => {
    it("проверяем что 2 * 2 на 4", () => {
      expect(multiply(2, 2)).toBe(4);
    });
})