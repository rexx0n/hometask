let a = 7;

console.log(a);
let b = new Promise(function (resolve, rejects) {
  setTimeout(() => {
    resolve((a = 99)); //resolve выполниться когда код завершится удачно
  }, 2000);
});
b.then(function () {
  console.log(a);
});

// setTimeout(()=> {
//     console.log('preparing');
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

// }, 2000)

const p = new Promise(function (resolve, rejects) {
  setTimeout(() => {
    console.log("preparind data");
    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };
    resolve(backendData);
  }, 2000);
});
p.then((data) => {
  console.log("promise resolved", data);
  const p2 = new Promise((resolve, rejects) => {
    setTimeout(() => {
      data.modufied = true;
      resolve(data);
    });
  });
  p2.then((clientData) => {});
});

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whoops"));
    resolve("done!");
  }, 1000);
});
promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
