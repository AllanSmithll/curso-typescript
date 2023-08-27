"use strict";
// 18/08/2023 - Type Annotation
// => Variáveis [Type Annotations]
let nome = "Allan Amancio";
console.log(nome);
// => Arrays [Type Annotations]
let animais = ['Cachorro', 'Gato', 'Garça'];
console.log(animais);
// => Objetos [Type Annotations]
let carro;
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 8000 };
console.log(carro);
// => Functions [Type Annotation]
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
const produtoMultiplicao = multiplicarNumeros(10, 30);
console.log(produtoMultiplicao);
