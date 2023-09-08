"use strict";
// 08/09/2023
// Exemplo 01 - Uso simples de Tuplas em TypeScript
console.log('Exemplo 01 - Uso simples de Tuplas em TypeScript');
let pessoa;
pessoa = ['Allan Amâncio', 'Desenvolvedor', 18];
// pessoa = ['Allan Amâncio', 'Desenvolvedor', 'J'] -> Errado
// Exemplo 02 - Acessando o valor da Tupla
console.log('Exemplo 02 - Acessando o valor da Tupla');
let pessoa1;
pessoa1 = ['Allan Amâncio', 'Desenvolvedor', 18];
console.log(pessoa1[0]);
// Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
console.log('Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)');
let pessoa2 = ['Allan Amâncio', 'Desenvolvedor', 18];
console.log(pessoa2);
// Exemplo 04 - Usando Tuplas com Spread Operator
console.log('Exemplo 04 - Usando Tuplas com Spread Operator');
let listaFrutas = ['Abacaxi', 'Banana', 'Morango', 'Uva', 'Pera'];
console.log(...listaFrutas);
// Exemplo 05 - Lista Heterogênea de Tuplas
console.log('Exemplo 05 - Lista Heterogênea de Tuplas');
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// Exemplo 06 - Uso de função com Tuplas
console.log('Exemplo 06 - Uso de função com Tuplas');
function listaPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listaPessoas(['Allan', 'Jurema'], [18, 68]);
console.log(resultado);
// Exemplo 07 - Labeled Tuples com Spread Operator numa função
console.log('Exemplo 07 - Labeled Tuples com Spread Operator numa função');
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Allan', 'Alves', 'Amâncio'));
