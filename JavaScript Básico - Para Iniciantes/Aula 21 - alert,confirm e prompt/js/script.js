/* alert('Com a nossa mensagem') // Exibe a mensagem e não retorna nada na memória.

confirm('Confirma uma informação Boolean') // Mostra uma caixa de confirmação e retorna se foi V ou F

const confirma = confirm ('Realmente deseja apagar ?'); // guardar essa informação

prompt ('Texto para mensagem') // Aparece uma caixa para digitar um texto */

let num1 = prompt('Digite um numero');
let num2 = prompt('Digite outro numero');
// transformar essa string em numero
num1 = parseInt(num1);
num2 = parseInt(num2);

let resultado = num1 + num2;
/* alert ('O resultado foi ' + resultado); Meu resultado*/

alert (`O resultado da sua conta foi ${resultado}`) // Resultado melhor contatenado