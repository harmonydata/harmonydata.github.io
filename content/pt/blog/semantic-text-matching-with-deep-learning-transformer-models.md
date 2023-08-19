---
title: Correspondência semântica de texto com modelos transformadores de aprendizado profundo
description: Semantic text matching is a task in natural language processing involving estimating the semantic similarity between two texts. For exam...
date: 2023-02-08
image: /images/blog/gad7-becks.jpg
---

A correspondência semântica de texto é uma tarefa no processamento de linguagem natural que envolve estimar a semelhança semântica entre dois textos. Por exemplo, se tivéssemos que quantificar a semelhança entre “sinto-me nervoso” e “sinto-me ansioso”, a maioria das pessoas concordaria que essas duas frases estão mais próximas do que “sinto-me feliz”. Um algoritmo de correspondência semântica de texto seria capaz de colocar um número na similaridade, como 79%.

Um algoritmo de correspondência semântica de texto é diferente de um algoritmo simples de similaridade de texto, que meramente examina a forma superficial de um texto. Uma correspondência semântica deve estar ciente da semelhança de significado entre “nervoso” e “ansioso”.

## Por que precisamos de correspondência semântica de texto?

As principais aplicações da correspondência semântica de texto estão em áreas como pesquisa na Web ou recuperação de informações, respostas a perguntas e sistemas de recomendação. No entanto, existem outras aplicações mais específicas. Por exemplo, no projeto Harmony , estamos usando correspondência semântica de texto para harmonização de conjuntos de dados nas ciências sociais. 

Um problema de correspondência semântica de texto geralmente é enquadrado como correspondência de um texto de origem para muitos textos de destino.

Em um sistema de recuperação de informações, isso significaria que os documentos a serem pesquisados devem ser indexados de forma eficiente. Portanto, se você tiver uma pergunta como "O que é harmonização de dados?" e 1000 documentos para pesquisar, você não necessariamente calcularia a similaridade semântica entre todos os pares, pois isso seria ineficiente. Mais provavelmente, você usaria uma ferramenta menos sofisticada, como correspondência em nível de texto, para gerar uma lista restrita de documentos candidatos.

No caso do Harmony , queremos medir a similaridade de cada item de um questionário com cada item de outro questionário. A maneira mais simples de fazer isso é converter cada item do questionário em uma representação semântica e, em seguida, calcular a matriz *n*×*n* de similaridades para todos os *n* itens.

## Correspondência semântica de texto com Transformers

Avanços recentes em aprendizado profundo permitiram um novo tipo de técnica de correspondência semântica de texto por meio de [ Modelos de transformadores ](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model) ), como BERT, [ GPT-3 ](https://openai.com/api/) e o recentemente anunciado [ Google BARD ](https://blog.google/technology/ai/bard-google-ai-search-updates/) .

Os modelos transformadores operam em sequências de palavras e transformam sentenças inteiras em vários idiomas em uma representação vetorial no espaço de alta dimensão. Em seguida, podemos quantificar a semelhança entre as sentenças com uma métrica simples, como distância euclidiana ou cosseno. Isso nos permite medir a semelhança entre as palavras.

No desenvolvimento do Harmony , o algoritmo de melhor desempenho testado até agora foi o GPT-3, no entanto, como o campo está evoluindo tão rapidamente, é provável que fique desatualizado muito em breve. Portanto, assista ao nosso blog e, enquanto isso, você pode [ testar o Harmony ](https://harmonydata.ac.uk/app/) em seus dados.

Os modelos Transformer provaram ser muito eficazes na correspondência semântica de texto. Eles também são muito eficientes em termos de recursos computacionais e podem facilmente escalar para grandes conjuntos de dados. Isso os torna uma ótima opção para aplicativos relacionados a tarefas de correspondência de texto.
