//code main
const calc = require("./meuModulo/funcoes");
const x = 10;
const y = 2;
/*
console.log(`Valor da soma de ${x} e ${y} é: `, calc.soma(x, y));
console.log(`Valor da diferença de ${x} e ${y} é: `, calc.dif(x, y));
console.log(`Valor da multiplicação de ${x} por ${y} é: `, calc.mult(x, y));
console.log(`Valor da divisao de ${x} por ${y} é: `, calc.div(x, y));
*/
console.log(`Item 4 a) 1 + 1: `, calc.soma(1, 1));
console.log(`Item 4 b) -123 + 123123: `, calc.soma(-123, 123123));
console.log(`Item 4 c) 8 * 0: `, calc.mult(8, 0));
console.log(`Item 4 d) 1239123 * 12313: `, calc.mult(1239123, 12313));
console.log(`Item 4 e) 123 / -12: `, calc.div(123, -12));
console.log(`Item 4 e) 123 / 0: `, calc.div(123, 0));

