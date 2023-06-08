let a = 7



console.log(a);
let b = new Promise(function(resolve, rejects) {
    setTimeout(()=> {
        resolve( a = 99)//resolve выполниться когда код завершится удачно
    }, 2000)
})
b.then(function(){
    console.log(a);
})