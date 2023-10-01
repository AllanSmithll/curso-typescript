"use strict";
// 24/09/2023
// Exemplo 1 - Propriedades estáticas
class Funcionario {
    nome;
    sobrenome;
    titulo;
    static contratacoes = 0;
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++;
    }
}
const funcionario_01 = new Funcionario("Allan", "Amancio", "Developer");
const funcionario_02 = new Funcionario("Anderson", "Joca", "Nutricionista");
const funcionario_03 = new Funcionario("Pedro", "Bosco", "Professor");
console.log(Funcionario.contratacoes);
class Cachorro {
    nome;
    idade;
    racas;
    static QTD_CACHORRO_VENDIDO = 0;
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    exibirInformacao() {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}
const cachorro_01 = new Cachorro("Pipoca", 4, ['Spitz Alemão']);
const cachorro_02 = new Cachorro("Farofa", 6, ['Yorkshire']);
// Exemplo 3 - Métodos estáticos
class Funcionario_01 {
    nome;
    sobrenome;
    titulo;
    static contratacoes = 0;
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario_01.contratacoes++;
    }
    static retornarContratacoes() {
        return Funcionario_01.contratacoes;
    }
}
const funcionario_07 = new Funcionario_01("Allan", "Amancio", "Developer");
const funcionario_08 = new Funcionario_01("Anderson", "Joca", "Nutricionista");
const funcionario_09 = new Funcionario_01("Pedro", "Bosco", "Professor");
// nome_classe + nome_metodo
console.log(Funcionario_01.retornarContratacoes);
