// function genderDetermination (gender) {
//     if (gender === "male") {
//         return "Your gender is male";
//     }
//     else if (gender === "female") {
//         return 'Your gender is female'
//     }
//     else {
//         return "Your gender is undefined"
//     }
// }
// console.log(genderDetermination("male") === "Your gender is male");
// console.log(genderDetermination("female") === "Your gender is female");
// console.log(genderDetermination("dog") === "Your gender is undefined");

// It could be written differently, without repeating code, but I haven't figured out how

const object = {
    name: 'Alexander',
    lastName: "Kravhenko",
    print () {
        console.log(`Hello ${this.name} ${this.lastName}`)
    }
}
object.print()