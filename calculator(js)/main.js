function calc(a, b, c) {
    let result
    if (c == "+") {
      result = a + b
    }
    if (c == "-") {
      result = a - b
    }
    if (c == "*") {
      result = a * b
    }
    if (c == "/") {
      result = a / b
    }
    return result
  }
  console.log(calc(20, 10, "-") === 10)
  console.log(calc(5, 5, "*") === 25)
  console.log(calc(4, 0, "/") )
  console.log(calc(5, 6, "+") === 11)