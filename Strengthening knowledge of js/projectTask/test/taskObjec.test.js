import { expect, test, describe } from 'vitest';
import { objectLength} from '../src/taskObject';
import { sum, sumArr, whatsLength, arrOverFive, reverse, sort,annagram, isPalidrome,unical } from '../src/taskArr';

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
describe('тестирование функции sum', () => {
    test('work function', ()=> {
        expect(sum(2, 2)).toBe(4)
    })
    test('is empty',()=> {
        expect(sum()).toBe(0)
    })
    test('negative values',()=> {
        expect(sum(-2, -2)).toBe(-4)
    })
})
describe('тестирование функции sumArr', () => {
    test('work function', ()=> {
        expect(sumArr([1,2,3,4])).toBe(10)
    })
    test('negative values', ()=> {
        expect(sumArr([2,3,-5])).toBe(0)
    })
    test('is empty', ()=> {
        expect(sumArr([])).toBe(0)
    })
    test('nothing', ()=> {
        expect(sumArr()).toBe(0)
    })
})
describe('тестирование функции whatsLength', ()=> {
    test('work function', ()=> {
        expect(whatsLength('код')).toBe(3)
    })
    test('is empty', ()=> {
        expect(whatsLength('')).toBe(0)
    })
    test('is nothing', ()=> {
        expect(whatsLength()).toBe(0)
    })
})
// describe('Тестирование функции arrOverFive', ()=> {
//     test('work func', ()=> {
//         expect(arrOverFive(['asd','ert','Человек','фывфыафыа'])).toEqual(['Человек','фывфывфыф'])
//     })
// })
describe('тестирование функции reverse', ()=> {
    test('work func', ()=> {
        expect(reverse('Казак')).toBe('казаК')
    })
    test('is empty', ()=> {
        expect(reverse('')).toBe('')
    })
    test('is nothing', ()=> {
        expect(reverse()).toBe('')
    })
})
describe('тестирование функции sort', ()=> {
    test('work func', ()=> {
        expect(sort([24,5,1,42,523,2,4,3])).toStrictEqual([1,2,3,4,5,24,42,523])
    })
    test('is empty', ()=> {
        expect(sort([])).toStrictEqual([])
    })
    test('is nothing', ()=> {
        expect(sort()).toStrictEqual([])
    })
    // test('is string', () => {
    //     expect(sort(['dd','dddd','d','dddddddd'])).toStrictEqual(['d','dd','dddd','dddddddd'])
    // })
})
describe('тестирование функции annagram',()=> {
    test('work function',()=> {
        expect(annagram('привет', 'ирпвет')).toBe(true)
    })
    test('is empty', ()=> {
        expect(annagram('','')).toBe(false)
    })
    test('is nothing', ()=> {
        expect(annagram()).toBe(false)
    })
    test('is number', ()=> {
        expect(annagram(312,123)).toBe(false)
    })
})
describe('тестирование функции isPalidrome',()=> {
    test('work func',()=> {
        expect(isPalidrome('Казак')).toBe(true)
    })
    test('is empty', ()=> {
        expect(isPalidrome('')).toBe(false)
    })
    test('is nothing', ()=> {
        expect(isPalidrome()).toBe(false)
    })
    test('is number', ()=> {
        expect(isPalidrome(312)).toBe(false)
    })
})
describe('тестирование функции unical',()=> {
    test('work func',()=> {
        expect(unical(['1','2','2','3','4','3'])).toStrictEqual(['1','2','3','4'])
    })
    // test('is empty', ()=> {
    //     expect(unical('')).toBe()
    // })
    // test('is nothing', ()=> {
     //     expect(unical()).toBe()
     // })
    // test('is number', ()=> {
     //     expect(unical()).toBe()
     // })
})



