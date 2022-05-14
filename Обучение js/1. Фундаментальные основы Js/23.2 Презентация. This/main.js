// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
const rectangle = {
    width: 20,
    height:20,
    getSquare: function () {return this.width * this.height}
}
console.log(rectangle.getSquare())