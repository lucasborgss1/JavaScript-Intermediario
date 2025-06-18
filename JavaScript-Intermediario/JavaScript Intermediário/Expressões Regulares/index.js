var regexp = /abc/,
  myString = "abc";

console.log(regexp.test(myString)); // test()

var regexp = /a.c/g,
  myString = "12313abc123 a4c",
  match;

while ((match = regexp.exec(myString))) {
  console.log(`${match[0]} -> ${match.index}`);
}

console.log(regexp.exec(myString)); //exec()
console.log(myString.match(regexp)); //match()

var myString2 = "Abc abc Abc abc";
console.log(myString2.replaceAll(/a/gi, "1"));

var myString3 = "abc-123-def",
  myRegex = /(ab)c-(\d{3})-def/;
console.log(myString3.replace(myRegex, "my number: $1 $2"));

//"string".indexOf('char') -> retorna a posição do elemento na string, se não existir retorna -1
//"string".search(/char/) -> retorna a posição do elemento na string, se não existir retorna -1
