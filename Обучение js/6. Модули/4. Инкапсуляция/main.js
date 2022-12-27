const User = {
  name: "Aleksei",
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};

// function User(name) {
//   let userName = name;

//   return {
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     },
//   };
// }

// const aleksei = new User('Aleksei')

// function User(name) {
//   let userName = name;

//   return Object.freeze( {
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     },
//   });
// }

// const aleksei = new User("Aleksei");


function User(name) {
    const symbol = Symbol()

    return {
        [symbol]: name,
        getName() {
            return this[symbol]
        },
        setName(name) {
            this[symbol] = name
        }
    }
}