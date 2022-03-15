// const arr1 = [1, 2, 3, 4];
// arr1.forEach((item) => {
//   console.log(item);
// });

// // function forEach (arr, callback) {
// //     for (let i = 0; i < arr.length; i++) {
// //         callback(arr[i])
// //     }
// // }

const family = [
  {
    name: "Aleksei",
    age: 16,
  },
  {
    name: "Elena",
    age: 30,
  },
  {
    name: "Danil",
    age: 21,
  }
];

// const res = family.sort(compare);
// console.log(JSON.stringify(res));

// function compare(a, b) {
//   if (a.age < b.age) {
//     return -1;
//   }
//   if (a.age > b.age) {
//     return 1;
//   }
//   // a должно быть равным b
//   return 0;
// }
// console.log(JSON.stringify(family))

const result = family.map((element, index) => {
    let a = {...element}
    a.id = index
    return a  
})
console.log(JSON.stringify(result))

const res = family.reduce//посчитать суммарный возвраст всех участников
