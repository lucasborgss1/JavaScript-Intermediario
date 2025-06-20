function Rect(base, altura) {
    this.base = base;
    this.altura = altura;
    this.area = function () {
        return this.base * this.altura;
    };
}

function Square(l) {
    this.base = l;
    this.altura = l;
}

Square.prototype = new Rect();

quadrado = new Square(5);
console.log(quadrado.area());

retangulo = new Rect(5, 4);
console.log(retangulo.area());
