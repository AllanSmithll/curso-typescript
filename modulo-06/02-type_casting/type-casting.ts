// 17/10/2023

// Exemplo 1 - Type casting: 'as
<<<<<<< HEAD
const nome1: unknown = 'Allan Amancio';
console.log((nome1 as string).toUpperCase());

// Exemplo 2 - Type casting: '<>'
const carro1 = 'Corolla';
const tamanhoString: number = (<string>carro1).length;
=======
const nome: unknown = 'Allan Amancio';
console.log((nome as string).toUpperCase());

// Exemplo 2 - Type casting: '<>'
const carro = 'Corolla';
const tamanhoString: number = (<string>carro).length;
>>>>>>> 5ee05cfee06e545d2ece5dcadfef435821e82c15
console.log('A tamanho da string é ...;', tamanhoString)