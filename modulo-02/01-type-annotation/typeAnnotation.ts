// 18/08/2023 - Type Annotation

// => Variáveis [Type Annotations]
let nome: string = "Allan Amancio";
console.log(nome);

// => Arrays [Type Annotations]
let animais: string[] = ['Cachorro','Gato','Garça']
console.log(animais);

// => Objetos [Type Annotations]
let carro: {
    nome: string,
    ano: number,
    preco: number
}
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 8000 };
console.log(carro);

// => Functions [Type Annotation]
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}
const produtoMultiplicao = multiplicarNumeros(10, 30);
console.log(produtoMultiplicao);