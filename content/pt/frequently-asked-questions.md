---
title: Perguntas frequentes
---

## O que é harmonização?

Harmonização significa pegar variáveis de diferentes estudos e manipulá-las para torná-las comparáveis.

Por exemplo, se tivermos conjuntos de dados de depressão de diferentes países, que normalmente são medidos por meio de um questionário, como podemos harmonizar dois questionários de depressão? Normalmente, este é um processo manual – olharíamos para o conteúdo e encontraríamos elementos comuns entre os questionários.

Para um exemplo de uma ferramenta de harmonização pré-existente, consulte:

McElroy, E., Villadsen, A., Patalay, P., Goodman, A., Richards, M., Northstone, K., Fearon, P., Tibber, M., Gondek, D., & Ploubidis, GB ( 2020). [ Propriedades de harmonização e medição de medidas de saúde mental em seis coortes britânicas ](https://www.closer.ac.uk/wp-content/uploads/210715-Harmonisation-measurement-properties-mental-health-measures-british-cohorts.pdf) . Londres, Reino Unido: CLOSER.

## O que o Harmony faz?

O Harmony é uma ferramenta que ajuda os pesquisadores a automatizar o processo de harmonização usando [ processamento de linguagem natural ](https://fastdatascience.com/what-is-nlp/) .

## Como faço para citar o Harmony ?

Caso queira citar apenas a ferramenta, você pode citar:

Wood, TA, McElroy, E., Moltrecht, B., Ploubidis, GB, Scopel Hoffmann, M., o Harmony [Software de computador], Versão 1.0, acessado em https://harmonydata.ac.uk/app. Universidade do Ulster (2022)

Uma entrada BibTeX para usuários LaTeX é

```vshell
@unpublished{harmony,
    AUTHOR = {Wood, T.A., McElroy, E., Moltrecht, B., Ploubidis, G.B., Scopel Hoffman, M.},
    TITLE  = {Harmony (Computer software), Version 1.0},
    YEAR   = {2022},
    Note   = {To appear},
    url = {https://harmonydata.ac.uk/app}
}
```

Você também pode citar o projeto Harmony mais amplo que está registrado na [ Open Science Foundation ](https://osf.io/bct6k/) :

McElroy, E., Moltrecht, B., Scopel Hoffmann, M., Wood, TA e Ploubidis, G. (2023, 6 de janeiro). o Harmony – Uma plataforma global para harmonização contextual, tradução e cooperação em pesquisa em saúde mental. Recuperado de osf.io/bct6k

```vshell
@misc{McElroy_Moltrecht_Scopel Hoffmann_Wood_Ploubidis_2023,
  title={Harmony - A global platform for contextual harmonisation, translation and cooperation in mental health research},
  url={osf.io/bct6k},
  publisher={OSF},
  author={McElroy, Eoin and Moltrecht, Bettina and Scopel Hoffmann, Mauricio and Wood, Thomas A and Ploubidis, George},
  year={2023},
  month={Jan}
}
```

## A Harmony guarda os meus dados?

Se você carregar um questionário ou instrumento, o Harmony não o armazena ou salva. Você pode ler mais em nossa [ página de Política de Privacidade ](https://harmonydata.ac.uk/privacy-policy/) .

## Como funciona o Harmony ?

O Harmony passa o texto de cada item do questionário por uma rede neural chamada Sentence-BERT, a fim de convertê-lo em um vetor. A similaridade de dois textos é então medida como a similaridade entre seus vetores. Dois textos idênticos têm uma semelhança de 100%, enquanto dois textos completamente diferentes têm uma semelhança de 0%. Você pode ler mais nesta [ postagem do blog técnico ](https://harmonydata.ac.uk/how-does-harmony-work/) e você pode até baixar e executar o [ código-fonte] do Harmony ](https://github.com/harmonydata/harmony) .

## Quão confiável é o Harmony ?

O Harmony conseguiu reconstruir as correspondências da ferramenta de harmonização do questionário desenvolvida por McElroy et al em 2020 com as seguintes pontuações AUC: infância **84%**, idade adulta **80%**. o Harmony foi capaz de igualar as questões dos instrumentos GAD-7 em inglês e português com AUC **100%** e o CBCL e SDQ em português com AUC **89%**. Você pode ler mais em [ esta postagem no blog ](https://harmonydata.ac.uk/measuring-the-performance-of-nlp-algorithms/) .

## O que os números significam?

The numbers are the cosine similarity of document vectors. The cosine similarity of two vectors can range from -1 to 1 based on the angle between the two vectors being compared. We have converted these to percentages. We have also used a preprocessing stage to convert positive sentences to negative and vice-versa (e.g. _I feel anxious_ -> _I do not feel anxious_). If the match between two sentences improves once this preprocessing has been applied, then the items are assigned a negative similarity.

## O Harmony fornece valores-p?

Neste momento, o Harmony não fornece valores-p. os vetores de correspondências Harmony usando uma pontuação de cosseno e valores-p não são aplicáveis neste contexto.

## Como devo reportar os números do Harmony no meu jornal?

Os itens foram combinados no conteúdo usando a ferramenta online [ Harmony ](https://harmonydata.ac.uk/) , que combina itens convertendo texto em vetores usando uma rede neural transformadora ( [ Reimers & Gurevych, 2019 ](https://arxiv.org/abs/1908.10084) ). o Harmony produz uma pontuação de cosseno variando de +/- 1, com valores mais próximos de 1 indicando uma correspondência mais próxima.

## Como o Harmony se compara à harmonização humana?

Se você se imaginar como um ser humano, tentando combinar os itens de um questionário, poderá concluir que “sinto-me deprimido” e “sinto-me triste” são semelhantes. Se você tivesse que colocá-los na superfície de uma esfera, poderia colocá-los próximos uns dos outros. Considerando que diferentes conceitos podem estar distantes uns dos outros.

Podemos representar qualquer conceito como um vetor de comprimento 1, apontando para a superfície de uma esfera. Conceitos semelhantes têm vetores próximos. A pontuação do cosseno de dois vetores que estão próximos é próxima de 1.

{{< image src="/images/sphere.svg" alt="sphere" >}}

## Quem fez o Harmony ?

O código Python do Harmony foi escrito por [ Thomas Wood ](https://freelancedatascientist.net/) (Fast Data Science) em colaboração com Eoin McElroy, Bettina Moltrecht, George Ploubidis e Mauricio Scopel Hoffman.

## O Harmony está em conformidade com os princípios de dados FAIR?

Desenvolvemos o Harmony como uma iniciativa de código aberto e ciência aberta, prestando atenção aos [ Princípios orientadores FAIR para gerenciamento e administração de dados científicos ](https://www.go-fair.org/fair-principles/) (* *F**indabilidade,**A**acessibilidade,**I**interoperabilidade e**R**uso de ativos digitais). Você pode ler mais em nossa [ página de dados FAIR ](https://harmonydata.ac.uk/fair-data/) .

## O que outros pesquisadores dizem sobre o Harmony ?

Recentemente, fizemos um teste de usuário no Centro de Estudos Longitudinais da UCL com pesquisadores de psicologia de várias universidades. Após a sessão, um pesquisador de pós-doutorado disse:

{{< image src="/images/quote.png" alt="quote" >}}

