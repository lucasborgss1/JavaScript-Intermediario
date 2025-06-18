// Mapas

var myObjMap = new Map();
var a = { value: 1 },
  b = { value: 2 };

myObjMap.set(a, 5);
myObjMap.set(b, 10);
console.log(myObjMap.get(a), myObjMap.get(b));

// Podemos usar “get()” e “set()” para acessar as propriedades
// Podemos limpar todo o conteúdo com a função “clear()”
// Para pegar o número de chaves, use “size”.

//WeakMaps

var myObjWeakMap = new WeakMap();
var a = { value: 1 },
  b = { value: 2 };

myObjWeakMap.set(a, 5);
myObjWeakMap.set(b, 10);
console.log(myObjWeakMap.get(a), myObjWeakMap.get(b));

//Sets
//Não pega valores armazenados

var a = { myValue: 1 },
  b = { myValue: 2 };
var mySet = new Set([a, b]);

// .has(item) - verifica se determinado item está presente no Set
// .delete(item) - remove determinado item do Set
// .clear() - limpa todo o Set
// .size - retorna a quantidade de itens no Set

//WeakSets
var myWeakSet = new WeakSet();
var a = { myValue: 1 },
  b = { myValue: 2 };

myWeakSet.add(a);
myWeakSet.add(b);

a = null;
