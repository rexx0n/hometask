const object = {
  name: "Alexander",
  lastName: "Kravhenko",
  print() {
    console.log(`Hello ${this.name} ${this.lastName}`);
  },
};
object.print();
