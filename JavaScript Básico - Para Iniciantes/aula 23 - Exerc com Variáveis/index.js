let varA = 'A'; // Transformar em B
let varB = 'B';// Transformar em  C
let varC = 'C'; //transformar em A

// Metodo mais antigo
/* const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp; */

// Metodo atual sem criar variável
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);