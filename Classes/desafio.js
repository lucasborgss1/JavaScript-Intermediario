class Rect {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}

class Square extends Rect {
    constructor(l) {
        super(l, l);
    }
}

quadrado = new Square(5);
console.log(quadrado.area());

retangulo = new Rect(5, 4);
console.log(retangulo.area());
