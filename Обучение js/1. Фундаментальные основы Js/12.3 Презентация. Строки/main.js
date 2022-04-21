let string = "so  me test string";
let value;
// 1. Получить первую и последнюю буквы строки
value = string[0];
console.log(value === "s");
value = string[string.length - 1];
console.log(value === "g");

// 2. Сделать первую и последнюю буквы в верхнем регистре 
//TODO с помощью slice

value = `${string[0].toUpperCase()}ome test strin${string[string.length -1].toUpperCase()}`
console.log(value === "Some test strinG");

// 3. Найти положение слова ‘string’ в строке

value = string.indexOf("string");
console.log(value === 10);

//4. Найти положение второго пробела (“вручную” ничего не считать)
//TODO с помощью цикла
value = string.indexOf(" ", 5);
console.log(value === 9);

//5. Получить строку с 5-го символа длиной 4 буквы

value = string.slice(5, 9);
console.log(value === "test");

//6. Получить строку с 5-го по 9-й символы

value = string.slice(5, 10);
console.log(value === "test ");

//7. Получить новую строку из исходной путем удаления последних 6-и символов
//(то есть исходная строка без последних 6и символов)

value = string.slice(0, -6);
console.log(value === "some test ");

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
a = 20;
b = 16;
let res = String(a) + String(b);
console.log(res === "2016");
