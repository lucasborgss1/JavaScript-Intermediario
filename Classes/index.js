// Classe

class Pencil {
    constructor(color) {
        this.color = color;
    }

    write(text) {
        console.log(text);
    }
}

var myPencil = new Pencil("red");

// Herança

class Animal {
    sleep() {
        console.log("zzzzz");
    }

    static size(sizeAnimal) {
        console.log("Size: " + sizeAnimal);
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }

    sleep() {
        console.log("The dog will sleep");
        // Super
        super.sleep();
    }
}

var myDog = new Dog();
myDog.sleep();

// Métodos Estáticos

Animal.size("pequeno");

// Estendendo Objetos Nativos
class MyArray extends Array {
    first() {
        return this[0];
    }

    last() {
        return this[this.length - 1];
    }
}

var myList = new MyArray(5, 8, 13);
console.log(myList.first());
console.log(myList.last());
