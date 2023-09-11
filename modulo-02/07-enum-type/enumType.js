"use strict";
// 10/09/2023
// Exemplo 1 - Numeric Enums (Enums Numérico) - O mais recomendado
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// Exemplo 2 - String Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TEC";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
function comida(Comida) {
    return 'Comidas muito apetitosas';
}
console.log(comida("Pizza" /* Comida.Pizza */));
console.log(comida("Torta" /* Comida.Torta */));
//console.log(comida(5));
// Exemplo 4 - Quando usar enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!'
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar email: Tarefa concluída com sucesso');
}
// Resposta: quando for usado uma pequena quantidade de valores fixos que estão intimamente relacionados e são conhecidos em tempo de compilação
