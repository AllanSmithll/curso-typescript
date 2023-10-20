"use strict";
// 20/10/2023
function retornarElementosRandomicos(items) {
    const itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico];
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosRandomicos = retornarElementosRandomicos(numeros);
console.log(numerosRandomicos);
const estados = ["Paraíba", "Alagoas", "Pernambuco", "Sergipe", "Ceará", "Maranhão", "Bahia", "Rio Grande do Norte", "Piauí"];
const estadosRandomicos = retornarElementosRandomicos(estados);
console.log(estadosRandomicos);
