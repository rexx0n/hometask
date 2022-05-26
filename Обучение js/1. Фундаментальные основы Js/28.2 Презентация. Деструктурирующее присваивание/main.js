// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }
function sawsda (a) {
    const [first,...other] = a
    return {
        first,
        other
    }
}
console.log(sawsda (["sasda", "asdas", "asdas", "asdasdas"]))


// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

 const organisation = {  
   name: 'Google',   
   info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
 };
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook
function getInfo (organisation) {
    const {name = "Unknown", info:{employees,partners:[first,second]}} = organisation
    return {name,  partners:`${first} ${second} `}
}
console.log(getInfo(organisation))