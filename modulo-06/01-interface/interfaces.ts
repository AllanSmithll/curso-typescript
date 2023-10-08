// 08/10/2023

// Interaface normal
interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    conjuge?: string;
}

function exibirNome(pessoa: IPessoa) {
    return `
        Nome: ${pessoa.nome}
        Sobrenome: ${pessoa.sobrenome}
        Idade: ${pessoa.idade}
    `;
}

const allan: IPessoa = {
    nome: 'Allan',
    sobrenome: 'Amancio',
    idade: 36
}

console.log(exibirNome(allan))

// Inteface com Alias Type
interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string;
    sobrenome: string;
    idade: number;
}