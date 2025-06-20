// Closure
var add = function () {
    var counter = 0;
    return function (params) {
        return counter++;
    };
};

// Recursividade
function fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

// Call Aply e Bind

var myObj = {
    name: "TreinaWeb",
    sayName: function () {
        console.log(this.name);
        setTimeout(
            function () {
                console.log(this.name);
            }.bind(this),
            1000
        );
    },
};

myObj.sayName();
// myFunc.call(this, 1, 2, 3);
// myFunc.apply(this, [1, 2, 3]);

//Executando funções de Arrays em Strings

var Dog = {
    name: "Dingo",
    sayName: function () {
        console.log(this.name);
    },
};
var Cat = {
    name: "Marry",
};

Dog.sayName.call(Cat);

[].forEach.call("Lucas", function (letter) {
    console.log(letter);
});

// Arrow Functions

var myObj2 = {
    name: "TreinaWeb",
    sayName: function () {
        console.log(this.name);
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    },
};
