# Type Annotation

## Sintaxes

- let variavel: `TypeAnnotation` = valor;
- function nomeFuncao(parametro: `TypeAnnotation`, ...)

## Existem alguns tipos (Type Annotation) em JavaScript

- number
- string
- boolean
- Object
- Array

## Tuple
- Coleção heterogênea de valores
- Armazenamento de campos de diferentes tipos
- Podem ser passadas como parâmetros para funções
- Considerada um array com número fixo de elemento

### Sintaxe
- let nomeTupla = [valor1, valor2, valor3, ... valor n];

## Enums
- Enumerar os valores
- Estruturas de dados não ordenadas
- Mapeiam chaves para valores
- Suporta Enums numéricos e baseados em String

### Sintaxe

`
Enum TypeName {
    constant1,
    constant2,
    ...
}
`

### E, por que usar Enums?
- Facilidade em mudar valores
- Reduz erros
- Funciona somente em tempo de compilação
- O tempo de execução (compile-time) será mais preciso e rápido
- Permite criar constantes
- Permite criar constantes personalizadas

### Tipos de Enums
Enums podem ser: Numeric Enums ou String Enums

