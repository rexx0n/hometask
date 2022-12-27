export function myFunction() {
    console.log('hello')
}
export const config = {
    apiUrl: 'demo'
}
export {config as conf, myFunction as foo};//можно экспортировать в одной строчке также confing as conf означает что теперь его имя conf
// import {conf, foo} from ...