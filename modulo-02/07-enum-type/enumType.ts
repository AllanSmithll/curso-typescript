// 10/09/2023

// Exemplo 1 - Numeric Enums (Enums Numérico) - O mais recomendado
enum Idioma {
    Portugues,
    Ingles,
    Espanhol
}

console.log(Idioma);

// Exemplo 2 - String Enums

enum Dia {
    Segunda = 'SEG',
    Terca = 'TEC',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Dia);

// Exemplo 3 - Como podemos acessar um valor de um Enum com uma chave: usando o const -> PERIGOSO

const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
}

console.log(Comida.Churrasco);

// Exemplo 4 - Quando usar enum?
enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!'
}

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar email: Tarefa concluída com sucesso')
}

// Resposta: quando for usado uma pequena quantidade de valores fixos que estão intimamente relacionados e são conhecidos em tempo de compilação