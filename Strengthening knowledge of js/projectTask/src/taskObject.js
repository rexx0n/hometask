// Напишите функцию, которая принимает объект и возвращает количество его свойств.

export function objectLength(obj) {
    let a = 0
    for(let key in obj) {
        a++
    }
    return a
}
// console.log(objectLength({name:'asd',age:13,id:133,ids:133}) === 4);
// Напишите функцию, которая принимает два объекта и возвращает новый объект, содержащий свойства обоих объектов.
    function sumObject(obj, obj2) {
        for(let key in obj) {
            obj2[key] = obj[key]
        }
        return obj2
    }
    // console.log(sumObject({name:'asd'}, {age:123, id:1}));
// Напишите функцию, которая принимает массив объектов и возвращает массив значений конкретного свойства этих объектов.
//[{a:1},{a:2},{a:'c'},{b:1}] = [1,2,'c']
function arrObject(arr,key) {

}

// Напишите функцию, которая принимает объект и возвращает новый объект, в котором значения свойств перевернуты наоборот.
function reverseObject(obj) {
    let a = ''
    for (let key in obj) {
        a += ' ' + key 
    }
    a = a.split(' ')
    a.shift()
    let b = ['', '','']
    let c = 0
    for(let i = a.length; i > 0;i--) {
        b[i] = a[c]
        c++
    }
    b.shift()
    let newObj = {}
    b.forEach(el => {
        newObj[el] = obj[el]
    });
    // console.log(newObj)
}
reverseObject({name:'131',age:13, id:31})
// Напишите функцию, которая принимает объект и возвращает новый объект, в котором только те свойства, которые содержат строковые значения.
function onlyStr(obj) {
    let newObj = {}
    for (let key in obj) {
        if(typeof obj[key] === 'string') {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
// console.log(onlyStr({name:'asd',age:32, id:31, about:'smart, kind, strong'}));
// Напишите функцию, которая принимает массив объектов и возвращает новый массив объектов, в которых сохранены только свойства, указанные во втором аргументе функции.
function onlyPropObj(arr, prop) {
    let arrObj = []
    arr.forEach(el => {
       arrObj =   el[0].el//todo
    })
}
let b = [
    {name:'131'},
    {age:'123'}
]
// Напишите функцию, которая принимает объект и проверяет, является ли он пустым (не содержит свойств).
function isEmptyObj (obj) {
    let count = 0
    for(let key in obj) {
        return false
    }
    return true
}
// console.log(isEmptyObj({name:'asd'}))
// Напишите функцию, которая принимает два объекта и возвращает true, если они содержат одинаковые наборы свойств и значений, и false в противном случае.
function isSame(obj, obj2) {
    for(let key in obj) {
        if( obj[key] === obj2[key]) {
            count++
        }
    }
    return false
}
// console.log(isSame({name:'123a',id:1, age:22}, {name:'12a',id:12,age:222}))
// Напишите функцию, которая принимает массив объектов и возвращает объект, в котором свойства это значения конкретного свойства объектов, а значения - количество раз, которое это значение встречается в массиве.

// Напишите функцию, которая принимает объект и массив строк и возвращает новый объект, в котором только те свойства, которые есть в массиве строк.
function objArr(obj, arr) {
let newObj = {}
arr.forEach(el => {
    if(obj[el] !== undefined) {
        newObj[el] = obj[el]
    }
    
})
// console.log(newObj)
}
objArr({age:22,id:1,name:'Aleksey',city:'Simferopol'}, ['name','age','id','sda','aasd'])
// export {objectLength}