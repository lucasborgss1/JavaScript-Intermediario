function Pencil(color, length) {
    var code = 123;

    if (!(this instanceof Pencil)) {
        return new Pencil(color, length);
    }

    this.color = color;
    this.length = length;
    this.write = function (text) {
        console.log("Writing: " + text);
    };
    this.getCode = function () {
        return code;
    };
    this.setCode = function (newCode) {
        code = newCode;
    };
}

var pencil = Pencil("red", 15);
var pencil2 = new Pencil("black", 20);
