// Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.

// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// // Ok!

function getUsers() {
    let promise = fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .catch(() => {
       throw new Error("Не получилось развезолвить");
      });
      let promise2 = fetch("https://jsoplaceholder.typicode.com/posts")
        .then((responce) => responce.json())
        .catch(() => {
          throw new Error("Не получилось развезолвить");
        });
      
  return Promise.allSettled([promise,promise2]);
}

getUsers()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
