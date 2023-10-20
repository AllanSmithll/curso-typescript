// 17/10/2023

// Exemplo 1 - Type casting: 'as
const nome1: unknown = 'Allan Amancio';
console.log((nome1 as string).toUpperCase());

// Exemplo 2 - Type casting: '<>'
const carro1 = 'Corolla';
const tamanhoString: number = (<string>carro1).length;
console.log('A tamanho da string é ...;', tamanhoString)