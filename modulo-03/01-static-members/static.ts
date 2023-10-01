// 24/09/2023

// Exemplo 1 - Propriedades estáticas
class Funcionario {
    static contratacoes = 0;

    constructor (
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        Funcionario.contratacoes++;
    }
}

const funcionario_01 = new Funcionario("Allan", "Amancio","Developer");
const funcionario_02 = new Funcionario("Anderson", "Joca","Nutricionista");
const funcionario_03 = new Funcionario("Pedro", "Bosco","Professor");

console.log(Funcionario.contratacoes);

// Exemplo 2 - Propriedades estáticas
type Raca = 'Spitz Alemão' | 'Buldogue' | "Pug" | "Yorkshire" | "Poodle";

class Cachorro {
    public nome: string;
    public idade: number
    public racas: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;

    constructor (nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }

    public exibirInformacao():void {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}

const cachorro_01 = new Cachorro("Pipoca",4,['Spitz Alemão'])
const cachorro_02 = new Cachorro("Farofa",6,['Yorkshire']);

// Exemplo 3 - Métodos estáticos
class Funcionario_01 {
    private static contratacoes = 0;

    constructor (
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        Funcionario_01.contratacoes++;
    }

    public static retornarContratacoes() {
        return Funcionario_01.contratacoes;
    }
}


const funcionario_07 = new Funcionario_01("Allan", "Amancio","Developer");
const funcionario_08 = new Funcionario_01("Anderson", "Joca","Nutricionista");
const funcionario_09 = new Funcionario_01("Pedro", "Bosco","Professor");

// nome_classe + nome_metodo
console.log(Funcionario_01.retornarContratacoes);