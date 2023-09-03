// 01/09/2023

// => Exemplo 01 - Uso de Colchetes
let frutas: string[] = ['Abacaxi','Banana','Morango','Uva','Pera'];
console.log(frutas);
console.log(frutas[4]);

// => Exemplo 02 - Array Object (Objeto Array)
let frutas1: Array<string> = ['Abacaxi','Banana','Morango','Uva','Pera'];
console.log(frutas1[3]);

// => Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas: Array<string> = ['Português','Inglês','Espanhol','Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
idiomas.push('Japonês');
console.log(idiomas);

// => Exemplo 04 - Identificar tamanho do array - método length
let idiomas1: Array<string> = ['Português','Inglês','Espanhol','Francês'];
console.log(idiomas1.length);

// => Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [0,1,2,3,4,5];
listaNumeros = [...listaNumeros,6,7,8,9,10]; // as reticências '...'
console.log(listaNumeros)

// => Exemplo 06 - Exemplo de Array com laços de iteração
let linguagensArray: string[] = new Array('JavaScript','Python','Java','TypeScript','C#');

function funcaoLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}

funcaoLinguagens(['A','B','C','D','E','F','G','H']);