# Módulo 6

## Introdução à Interfaces m TypeScript

- Contrato sintático
- Entidade deve obedecer
- As interfaces definem: propriedades, métodos e eventos
- Declaração dos membros
- Estrutura padrão que as classes derivadas devem seguir

## Extensão entre Interfaces

## Intersection vs Union Types

- Combinação de vários tipos existentes
- Possui todas as características do tipo existente
- Operador & para Intersection
- Operador | para Union

## Type Guard

- Restringir tipo de uma variável
- typeof
- instanceof
- in

## Type Casting

- Cada variável em TypeScript tem um tipo
- Permite você converta variável de um tipo para outro
- Palavra-chave: 'as' e '<>'

## Type Assertion

- Sobre o tipo de uma variável
- Semelhante ao Type Casting
- Palavras-chave: 'as' e '<>'

## Conditional Types

- Definem tipos de valor em base nas condições
- Usado no fluxo de código
- ? (verdadeiro)
- : (falso)

## Mapped Types

- Obter um modelo existente
- Transformar cada propriedade
- Permanecer sicronizado com outro tipo
```
type MappedTypeName = { [K in UnionType]: ExistingType };
```

## Satisfies Operator

- Introdução na versão TS 4.9
- Capacidade de atribuir tipos mais específicos
- Impor uma restrição numa variável sem alterar seu tipo