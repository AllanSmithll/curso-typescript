// 18/08/2023 - Type Annotation

// => Variáveis [Type Annotations]
let nome3 = "Allan Amancio";
console.log(nome3);

// => Arrays [Type Annotations]
const animais: string[] = ['Cachorro','Gato','Garça']
console.log(animais);

// => Objetos [Type Annotations]
let carro1: {
    nome: string,
    ano: number,
    preco: number
}
// eslint-disable-next-line prefer-const
carro1 = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 8000 };
console.log(carro1);

// => Functions [Type Annotation]
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}
const produtoMultiplicao = multiplicarNumeros(10, 30);
console.log(produtoMultiplicao);