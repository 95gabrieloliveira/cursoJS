/* Luís Otávio Miranda tem 33 Anos , pesa 84 kg
Tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 33 ;
const peso = 84;
const altura = 1.80;

let imc = peso / (altura * altura); // Peso / (Altura * Altura)
let anoNascimento = 2022 - idade;

/* console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura,'de altura e seu IMC é de', imc,
nome, sobrenome, 'nasceu em', anoNascimento ); */

// Outras maneiras de fazer
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

