 // Padrão JavaScript IEEE 754-2008
 let num1 = 10.51515;
 let num2 = 2.5;

 /* console.log(num1.toString() + num2);  */// Junta os dois numeros não faz a soma.
 /* num1 = num1.toString() Transforma em String */
console.log(num1.toString(2)); // Transforma em Binário
console.log(num1.toFixed(2)); // QUantas casas decimais quer que seja arredondada
console.log(Number.isInteger(num1)); // Saber se o numero é inteiro ou não (V ou F)
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // Saber se é um NaN ou não

//num1 = parseFloat ou Number(num1.toFixed(2)) SOlução para transformar em numero inteiro e fazer a conclusão certa 
//num1 = ((num * 100) + (num2 * 100)) /100; outra maneira de fazer essa conclusão

