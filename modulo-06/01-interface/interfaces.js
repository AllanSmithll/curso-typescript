"use strict";
// 08/10/2023
function exibirNome(pessoa) {
    return `
        Nome: ${pessoa.nome}
        Sobrenome: ${pessoa.sobrenome}
        Idade: ${pessoa.idade}
    `;
}
const allan = {
    nome: 'Allan',
    sobrenome: 'Amancio',
    idade: 36
};
console.log(exibirNome(allan));
