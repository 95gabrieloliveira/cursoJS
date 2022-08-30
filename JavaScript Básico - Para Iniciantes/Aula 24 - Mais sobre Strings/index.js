//                 012345678910
let = umaString = "Um 'texto'"; // Caso queira usar aspas duplas ou simples

// Caso queira usar barra invertida \ é necessário utilizar 2 "um \\Texto"
console.log(umaString.charAt(7));
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia`);

// Saber onde começa o texto
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('o')); // COmeça de trás pra frente.
console.log(umaString.search(/t/)); // Busca uma expressão regular
console.log(umaString.replace('Um', 'Outra')); //Substitui uma expressão.
console.log(umaString.replace(/t/g, '#')); //usar o g Substitui todas as expressões.
console.log(umaString.length); // Saber o numero de caracteres
console.log(umaString.slice(4, 9)); // para pegar uma parte especifica do texto e é necessária pegar 1 casa depois do necessário.

console.log(umaString.slice(-3)); //Nesse caso ele pega a string toda e volta 3 casas do final
console.log(umaString.slice(-3, -1)); // Volta igual o caso anterior mas começa a contagem uma casa antes
console.log(umaString.split('t')); // retirar uma letra
console.log(umaString.split('t', 2)); // retirar apenas 2 vezes










