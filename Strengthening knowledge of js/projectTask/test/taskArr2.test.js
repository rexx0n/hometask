import { expect, test, describe } from 'vitest';
import {toUpper, largest, oddNumbered, sumArr, isInclude, isDividingANumberThree, multiplication, toLower, arrone} from '../src/taskArr2.js'

describe('тестирование функции toUpper', () => {
    test('non empty object', () => {
        expect(toUpper('кот')).toBe("КОТ")
    })
    test(' empty str', () => {
        expect(toUpper("")).toBe("")
    })
    test('empty', () => {
        expect(toUpper()).toBe('')
        
    })
})
describe('тестирование функции largest', () => {
    test('work function', () => {
        expect(largest([1,2,3,4,5])).toBe(5)
    })
    test('work function', () => {
        expect(largest([-1,-2,-3,-4,-5])).toBe(-1)
    })
    test(' empty arr', () => {
        expect(largest([])).toBe(null)
    })
    test('empty', () => {
        expect(()=> largest()).toThrowError('Invalid argument')
        
    })
})
describe('тестирование функции oddNumbered', () => {
    test('non empty ', () => {
        expect(oddNumbered([1,2,3,4,5,6])).toStrictEqual([1,3,5])
    })
    test(' empty arr', () => {
        expect(oddNumbered([])).toStrictEqual([])
    })
    test('empty ', () => {
        expect(oddNumbered()).toStrictEqual([])
        
    })
})
describe('тестирование функции sumArr', () => {
    test('non empty ', () => {
        expect(sumArr([1,2],[3,4])).toStrictEqual([1,2,3,4])
    })
    test(' empty arr', () => {
        expect(sumArr([],[])).toStrictEqual([])
    })
    test('empty', () => {
        expect(sumArr()).toStrictEqual([])
        
    })
})
describe('тестирование функции sumArr', () => {
    test('non empty', () => {
        expect(isInclude('еж', 'белый еж')).toStrictEqual(true)
    })
    test('work function', () => {
        expect(isInclude('еж', 'белый кот')).toStrictEqual(false)
    })
    test('empty', () => {
        expect(isInclude()).toStrictEqual(true)
        
    })
})
describe('тестирование функции isDividingANumberThree', () => {
    test('non empty', () => {
        expect(isDividingANumberThree([1,3,6,2,4,9,12,10,22,21])).toStrictEqual([3,6,9,12,21])
    })
    test('empty arr', () => {
        expect(isDividingANumberThree([])).toStrictEqual([])
    })
    test('empty', () => {
        expect(isDividingANumberThree()).toStrictEqual([])
        
    })
})
describe('тестирование функции multiplication', () => {
    test('non empty', () => {
        expect(multiplication(2,3)).toBe(6)
    })
    test('empty ', () => {
        expect(multiplication()).toBe(0)
    })
    test('work function', () => {
        expect(multiplication(-2,3)).toStrictEqual(-6)
        
    })
})
describe('тестирование функции toLower', () => {
    test('work function', () => {
        expect(toLower('BUTTER')).toBe('butter')
    })
    test('empty str', () => {
        expect(toLower('')).toBe('')
    })
    test('empty', () => {
        expect(toLower()).toStrictEqual('')
        
    })
})
describe('тестирование функции arrone', () => {
    test('work function', () => {
        expect(arrone(['cat','car','red'], ['red','arr', 'mouse', 'car'])).toStrictEqual(['red', 'car'])
    })
    test('empty arr', () => {
        expect(arrone([])).toStrictEqual([])
    })
    test('empty', () => {
        expect(arrone()).toStrictEqual([])
        
    })
})
