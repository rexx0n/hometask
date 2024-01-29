const options = {
    name:'test',
    width: '1024',
    height: '1024',
    color: {
        border: 'black',
        background: 'red',
    }
}
delete options.name
console.log(options)
const soldier = {
    health:400,
    armor: 300,
}
const jonh = {
    health: 100,
}
Object.setPrototypeOf(jonh, soldier)// делает прототип к обьекту jonh
const jonh2 = Object.create(soldier)// к пустому обьекту сразу добавляет прототип
console.log(jonh.armor)
console.log(jonh2.armor)
let y = 1; let x = y = 2;
console.log(x);