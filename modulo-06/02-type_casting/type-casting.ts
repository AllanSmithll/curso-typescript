// 17/10/2023

// Exemplo 1 - Type casting: 'as
const nome: unknown = 'Allan Amancio';
console.log((nome as string).toUpperCase());

// Exemplo 2 - Type casting: '<>'
const carro = 'Corolla';
const tamanhoString: number = (<string>carro).length;
console.log('A tamanho da string é ...;', tamanhoString)