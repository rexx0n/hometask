import { expect, test, describe } from 'vitest';
import { objectLength } from '../src/taskObject';

describe('тестирование функции objectLength', () => {
    test('non empty object', () => {
        expect(objectLength({a:'1',b:'2',c:'s'})).toBe(3)
    })
    test(' empty object', () => {
        expect(objectLength({})).toBe(0)
    })
        test('empty object', () => {
            let  a = null
        expect(objectLength(a)).toBe(0)
        
    })
})


