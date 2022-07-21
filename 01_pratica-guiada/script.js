let saldo;
saldo = 15;
saldo+= 22.40;
console.log ("soma", saldo);

saldo-= 12.34;
console.log ("subtração",saldo);

saldo/= 3;
console.log ("divisão", saldo);

saldo*= 3.42;
console.log ("multiplicação", saldo);

saldo = saldo %3;
console.log ("troco", saldo);

//precendencia matematica

const multESoma = 2*2+2;
console.log (multESoma);

const multESoma2 = 2*(2+2);
console.log (multESoma2);

//comparação

let resultado1 = 5===5;
console.log (resultado1);
let resultado2 = 5!==5;
console.log (resultado2);
let resultado3 = 5!=="5"; 
console.log (resultado3);
let resultado4 = "5"=== "cinco";
console.log (resultado4);
let resultado5 = typeof 5 === typeof 20;
console.log (resultado5);
let resultado6 = typeof "5" === typeof "cinco";
console.log (resultado6);

//menor ou igual

const primeiroNum = 7894578458215;
const segundoNum = 115485475441;

console.log ("primeiro número é igual ao segundo?", primeiroNum === segundoNum);
console.log ("primeiro número é menor ou igual ao segundo?", primeiroNum <= segundoNum);
console.log ("primeiro número é maior ao segundo?", primeiroNum > segundoNum);
console.log ("primeiro número é menor ao segundo?", primeiroNum < segundoNum);

//logica &&||!

/*const a= "quero dirigir um celta 2012";
const b= "sou maior de idade";
const c= "consigo comprar o Celta por 22.000 reais";
const d= "consigo alugar o celta";
const e= "tenho carteira de motorista";

a
!b
b && !e
b && (c || d)
b && e && !a */



