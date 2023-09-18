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
- Any
...

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

## Any

- Padrinho dos tipos
- Any é padrão no TypeScript
- Evitar ao máximo usar o tipo 'any'

### Sintaxe

`let valorVariavel: any;`

## Unknown

- Não sabe qual tipo definir
- Evitará problemas no código
- Any !== Unknown
- Verificação antes de realizar quaisquer operações quando formos executar o código do TypeScript
- Todos os tipos podem ser atribuídos a 'Unknown

### Sintaxe

`let valorVariavel: unknown;`

## Void

- Função retorna nenhum valor - void
- Tipo void oposto do Tipo Any
- Melhoria da clareza do código
- Garante a segurança de tipo
- Não retornará nenhum dado ou valor

### Sintaxe

`function exemploFuncao(mensagem): void {}`

## Tipo - Null

- É Objeto
- Ausência intencional de valor
- Variável valor é indefinido
- Só aceita apenas um valor

## Tipo - Undefined

- Variáveis não inicializadas
- Tem apenas um valor
- Função que não retorna um valor

## Tipo - Never

- Não contém valores
- Não podemos atribuir valor ao tipo Never
- Retorno de função que gera erro

## Tipo - Object

- Representa valores que não são primitivos
- Melhor forma de represntar dados
- Podem ser anônimos
- Ou também... São nomeados

### Diferença entre...

- object (minúsculo) - qualquer valor que não seja de tipo primitivo
- Object (maiúsculo) - uncionalidade disponível em todos os objetos (como alocação de memória)
- {} - objeto que não possui propriedade própria