// 20/10/2023
function retornarElementosRandomicos<T>(items: T[]): T {
    const itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico];
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandomicos);

const estados = ["Paraíba", "Alagoas", "Pernambuco", "Sergipe", "Ceará", "Maranhão", "Bahia", "Rio Grande do Norte", "Piauí"];
const estadosRandomicos = retornarElementosRandomicos<string>(estados);
console.log(estadosRandomicos);