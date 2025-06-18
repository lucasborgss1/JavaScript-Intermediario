function myLooping() {
  "use strict"; // Ativa o modo estrito, que impõe regras mais rigorosas e ajuda a evitar erros no código.
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    debugger; // permite a pausa (breakpoints) da execução do código, possibilitando ver como está funcionando e corrigindo bugs.
  }
}

myLooping();

function double(number) {
  if (typeof number !== "number") {
    throw new Error("value expected: number. Value received: " + typeof number);
  }
  return number * 2;
}

// Tratando erros
try {
  console.log(double("das"));
} catch (error) {
  console.log(error);
} finally {
  console.log("finish");
}
