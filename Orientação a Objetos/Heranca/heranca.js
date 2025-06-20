function Animal() {
    this.sleep = function () {
        console.log("Zzz");
    };
}

function Dog(name) {
    this.bark = function () {
        console.log("Woof!");
    };
}

Dog.prototype = new Animal();
var dog = new Dog();
