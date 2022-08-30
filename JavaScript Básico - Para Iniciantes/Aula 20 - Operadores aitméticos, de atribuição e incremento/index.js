/** 
 * * Aritméticos
 *  + adição e concatenação
 *  ** Potenciação
 *  % Resto da divisão  
 
 Ordem dos calculos () **  *%/   +-  
 */

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);

// ++ Incremento pode ser usado antes ou depois: Antes ele pré incrementa e depois ele incrementa após
// -- Decremento 

let contador =1;
contador++; //2
++contador; //3
contador++;  //4

console.log(contador);

// contador pra valor maiores

const passo = 2;
let contador2 = 0
contador2 = contador2 + passo;
console.log(contador2); // 2

contador2 = contador2 + passo;
console.log(contador2); // 4

contador2 = contador2 + passo;
console.log(contador2); // 6

// maneira mais fácil de fazer
let contador3 = 0;
contador3 += 3;
contador3 += 3;
contador3 += 3;
console.log(contador3); //6

// Converter String para um numero
const num3 = 10;
const num4 = Number('5.2');
console.log(num3 + num4);

// parseInt () Transforma em numero inteiro sem casa decimal
// parseFloat () Transforma em m números decimais
// number () transforma string ou qualquer outro em numero


