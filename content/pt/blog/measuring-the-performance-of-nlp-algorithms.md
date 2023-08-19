---
title: Medindo o desempenho dos algoritmos de PNL
description: "Harmony was able to reconstruct the matches of the questionnaire harmonisation tool developed by McElroy et al in 2020 with the following AUC scores: chil..."
date:
image: /images/blog/roc.png
---

_Harmony conseguiu reconstruir as correspondências da ferramenta de harmonização do questionário desenvolvida por McElroy et al em 2020 com as seguintes pontuações AUC: infância **84%**, idade adulta **80%**. o Harmony foi capaz de igualar as questões dos instrumentos GAD-7 inglês e português com AUC **100%** e o CBCL e SDQ português com AUC **89%**. o Harmony também foi avaliado usando uma variedade de modelos transformadores, incluindo MentalBERT, um modelo de linguagem pré-treinado publicamente disponível para o domínio da saúde mental._

O conteúdo desta postagem no blog foi escrito como uma [ pré-impressão para publicação na OSF ](https://osf.io/9x5ej) .

O Harmony é uma ferramenta para comparar questões em linguagem natural de diferentes pesquisas ou instrumentos. Para desenvolver a ferramenta, tivemos que ser capazes de quantificar o quão bom é reconhecer questões equivalentes ou semelhantes. Você pode ler sobre como o Harmony funciona [ na minha postagem anterior no blog ](https://harmonydata.ac.uk/how-does-harmony-work/) .

Por exemplo, podemos considerar _Tenta acabar com brigas_ é equivalente a _É útil se alguém está ferido, chateado ou se sentindo mal_, mesmo que não haja palavras em comum entre os dois textos. Mas isso é subjetivo e, se estivermos usando IA para fazer esse tipo de correspondência, como podemos calcular o desempenho de nossa IA?

Estou descrevendo aqui como pude avaliar o Harmony . Você pode [ visualizar o código dos meus experimentos no Github ](https://github.com/harmonydata/harmony/tree/main/notebooks) e experimentar você mesmo.

## A escolha de um conjunto de dados padrão-ouro

### Usando uma ferramenta de harmonização existente

Eu usei uma ferramenta de harmonização existente desenvolvida por uma equipe da CLOSER ( [ Harmonização e propriedades de medição de medidas de saúde mental em seis coortes britânicas ](https://www.closer.ac.uk/wp-content/uploads/210715-Harmonisation-measurement-properties-mental-health-measures-british-cohorts.pdf) , McElroy et al, 2020) como padrão-ouro.

Esta ferramenta está disponível como um Excel e mostra uma variedade de instrumentos de diferentes lugares e épocas, e atribui as perguntas dentro deles a um conjunto definido de categorias.

{{< image src="images/blog/image-1536x502.png" alt="img" >}}

Uma captura de tela da ferramenta de harmonização de McElroy et al (2020). Você pode baixar a ferramenta no formato Excel [ em nosso repositório Github ](https://github.com/harmonydata/harmony/tree/main/data) .

Como o objetivo do Harmony é automatizar, ou pelo menos facilitar, a produção de ferramentas de harmonização como esta, uma maneira fácil de validar a saída do Harmony é fornecer esses dados ao Harmony e verificar se o Harmony produz algo semelhante ao a ferramenta existente.

A ferramenta existente de McElroy et al tem uma seção para questionários de saúde mental de adultos e outra seção para questionários de crianças. Decidi tratar esses dois como conjuntos de dados de validação separados.

### O Harmony pode combinar texto em diferentes idiomas?

Para testar a capacidade multilíngue do Harmony , adicionei também as sete questões do GAD-7 em inglês e português. Se o Harmony conseguiu corresponder corretamente a todas as sete perguntas, isso mostra como o Harmony pode lidar com texto multilíngue.

Por fim, incluí uma ferramenta de harmonização semelhante, apenas em português, listando semelhanças entre o SDQ (Questionário de pontos fortes e dificuldades) e CBCL (A lista de verificação do comportamento infantil) compilado por Hoffmann et al para validar o desempenho monolíngue do português.

### Visão geral do conjunto de dados de validação

O conjunto de dados de validação pode ser dividido da seguinte forma

| Conjunto de dados | Número de instrumentos | Número médio de questões por instrumento |
| -------------------------------- | --------------------- | ------------------------------------------ |
| Infância McElroy e outros | 47 | 23 |
| Idade adulta McElroy et al | 28 | 16 |
| GAD-7 Inglês vs Português | 2 | 7 |
| BHRCS SDQ/CBCL (somente em português) | 2 | 73 |

Detalhamento do meu conjunto de dados de validação

## Qual medida usar?

Uma vez que a tarefa do Harmony pode ser vista como uma classificação binária (cada par de perguntas deve ser correspondido ou não), uma métrica para medir o desempenho do Harmony é a curva característica de operação do receptor (ROC) e a área sob a Curva (AUC).

Por exemplo, para o conjunto de dados inglês x português do GAD-7 contém 7 × 7 = 49 possíveis correspondências. 7 deles são positivos (o Q1 no GAD-7 em português é equivalente ao Q1 no inglês), enquanto 42 são negativos (qualquer emparelhamento cruzado de perguntas).

## Comparando as versões do Harmony

No processo de desenvolvimento do Harmony , não ficou imediatamente claro qual tecnologia deveria ser usada. Antes de tentar a tecnologia de ponta, como redes neurais, era necessário estabelecer uma linha de base para desempenho usando uma ferramenta mais simples, como um modelo de saco de palavras (consulte minha [ postagem anterior no blog ](https://harmonydata.ac.uk/how-does-harmony-work/) para uma explicação das tecnologias exploradas neste post).

Testei os seguintes modelos candidatos:

1. Bolsa de palavras com pontuação Tf\*Idf e lematização
2. Bolsa de palavras com pontuação Tf\*Idf e lematização dependente do idioma e uma pesquisa de dicionário para mapear inglês para português
3. Pequeno modelo de vetor de palavras em inglês+português (usando o software spaCy)
4. Grande modelo de vetor de palavras somente em inglês (usando o software spaCy)
5. Modelo de rede neural de transformador de sentença multilíngue “ [ distiluse-base-multilingual-cased-v2 ](https://huggingface.co/sentence-transformers/distiluse-base-multilingual-cased-v2) ” usando similaridade de produto escalar (usando arquitetura BERT e software HuggingFace)
6. Modelo de rede neural de transformador de sentença multilíngue “ [ distiluse-base-multilingual-cased-v2 ](https://huggingface.co/sentence-transformers/distiluse-base-multilingual-cased-v2) ” com pré-processamento para sentenças negativas e produto escalar semelhança
7. Modelo de rede neural de transformador de sentença multilíngue “ [ distiluse-base-multilingual-cased-v2 ](https://huggingface.co/sentence-transformers/distiluse-base-multilingual-cased-v2) ” com pré-processamento para sentenças negativas e similaridade de cosseno
8. Modelo de rede neural de transformador de sentença multilíngue “ [ paraphrase-multilingual-MiniLM-L12-v2 ](https://huggingface.co/sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2) ” com pré-processamento para sentenças negativas e similaridade de cosseno
9. Modelo de rede neural de transformador de sentença multilíngue “ [ MSTSb_paraphrase-xlm-r-multilingual-v1 ](https://huggingface.co/AIDA-UPM/MSTSb_paraphrase-xlm-r-multilingual-v1) ” com pré-processamento para sentenças negativas e similaridade de cosseno
10. Modelo de rede neural de transformador de sentenças somente em inglês “ [ mental-bert-uncased ](https://huggingface.co/mental/mental-bert-base-uncased) ” com pré-processamento para sentenças negativas e similaridade de cosseno (treinado em textos de saúde mental )

Para cada projeto de modelo, gerei uma curva ROC, calculei a AUC e também imprimi alguns exemplos de falsos negativos e falsos positivos.

## Resultados

### Abordagens de saco de palavras

O modelo de linha de base, o Tf\*Idf, deu uma AUC de 71% e 67% nos conjuntos de dados da infância e da idade adulta, respectivamente. No inglês x português, obteve uma AUC de 49%, mostrando que não conseguiu realizar nenhuma correspondência. Isso não é surpreendente, pois não há palavras em comum entre os GAD-7s inglês e português.

{{< image src="images/blog/Model-1-1536x1303.png" alt="model 1" >}}


{{< image src="images/blog/Model-2-1-1536x1254.png" alt="Model 2 1" >}}


Com uma pesquisa de dicionário codificada manualmente para combinar palavras em inglês e português, o mesmo modelo foi capaz de pontuar 100% no conjunto de dados multilíngue GAD-7. (Arquivo CSV de dicionário disponível [ aqui ](https://github.com/harmonydata/harmony/blob/main/front_end/models/pt_en_map.csv) ).

O desempenho do modelo Tf\*Idf pode ser melhorado por uma pesquisa de dicionário bilíngüe.

### Abordagens do vetor de palavras

A próxima etapa foi tentar uma abordagem de similaridade de vetores de palavras. Usei o spaCy, um dos modelos mais fáceis de usar que permite gerar representações vetoriais de palavras e documentos e compará-los.

No geral, os menores modelos spaCy em inglês e português tiveram desempenho pior do que os modelos Tf\*Idf descritos acima. O desempenho do GAD-7 é essencialmente de 50% – o modelo não está realizando nenhuma classificação útil.

{{< image src="images/blog/Model-3-1536x1275.png" alt="Model 3" >}}


Isso é esperado, pois não esperaríamos que os vetores de palavras em inglês e português fossem equivalentes.

Em seguida, experimentei o modelo spaCy grande, usando a versão em inglês para os dois idiomas. Isso teve um desempenho marginalmente melhor.

{{< image src="images/blog/Model-4-1536x1303.png" alt="Model 4" >}}


### Passando para os transformadores

O que há de mais moderno em processamento de linguagem natural são os modelos transformadores. Como as abordagens de vetores de palavras acima, os transformadores convertem sentenças em representações vetoriais, permitindo-nos usar similaridade geométrica e medidas de distância para quantificar a similaridade semântica.

Usei o pacote de software HuggingFace com o [ modelo Sentence-BERT ](https://huggingface.co/sentence-transformers/distiluse-base-multilingual-cased-v2) , que é uma implementação do BERT projetada para gerar incorporações de sentenças semanticamente significativas que podem ser comparadas usando similaridade de cosseno.

{{< image src="images/blog/Model-50Adistiluse-base-multilingual-cased-v2-1536x1355.png" alt="Model 50 Adistiluse base multilingual cased" >}}


Testei o Sentence-BERT com vários parâmetros de métricas diferentes, alternando entre a similaridade de cosseno e produto de ponto e adicionando uma etapa de pré-processamento manual dependente do idioma para identificar quando duas frases podem ser semelhantes no sentido oposto. Também tentei vários modelos de vetores de documentos diferentes disponíveis no hub HuggingFace.

Consegui atingir 84% AUC nos questionários da infância, 80% AUC nos questionários da idade adulta e novamente 100% no GAD-7.

{{< image src="images/blog/Model-8-1536x1042.png" alt="Model 8" >}}


O modelo MentalBERT não teve um desempenho tão bom quanto os outros modelos transformadores de sentenças, apesar de ser específico de domínio. É claro que não esperaríamos que o MentalBERT tivesse um bom desempenho nos dois últimos conjuntos de dados, pois é apenas em inglês e não é multilíngue.

{{< image src="images/blog/Model-10-1536x898.png" alt="Model 10" >}}


### Uma prévia dos pares de perguntas que foram classificados erroneamente pelo Harmony

Se você olhar o código para as validações em [ Github ](https://github.com/harmonydata/harmony/tree/main/notebooks) , você pode ver as impressões das questões e como elas foram classificadas. Mostrarei alguns exemplos do meu experimento com o Modelo 7 (transformador Sentença-BERT). O experimento completo e as impressões para o Modelo 7 estão disponíveis [ aqui ](https://github.com/harmonydata/harmony/blob/main/notebooks/Evaluate_Model_07_HuggingFace_CosineSimilarity_On_Eoin_and_GAD7.ipynb) .

### Quão semelhante o Harmony avalia as questões de inglês e português do GAD-7?

Por exemplo, o Modelo 7 marcou claramente pares de perguntas equivalentes em português/inglês com valores de similaridade mais altos

{{< image src="images/blog/image-22.png" alt="img" >}}

Os pares de perguntas marcados como mais semelhantes no conjunto de dados GAD-7 pelo Modelo 7 (transformador)

{{< image src="images/blog/image-23.png" alt="img" >}}

Os pares de perguntas marcados como menos semelhantes no conjunto de dados GAD-7 pelo Modelo 7 (transformador)

### Falsos negativos

Da mesma forma, aqui está uma impressão dos 10 principais falsos negativos do conjunto de dados Childhood (os pares de perguntas marcados como semelhantes na ferramenta McElroy et al, mas que foram perdidos pelo Harmony ):

{{< image src="images/blog/image-24.png" alt="img" >}}

Os 10 principais falsos negativos no conjunto de dados da Infância, classificados pelo Modelo 7 (transformador)

Podemos ver que alguns deles são textos em que o significado é realmente muito diferente, mas em um contexto psicológico gostaríamos de agrupá-los. Por exemplo, _está nervoso ou pegajoso em novas situações, perde a confiança facilmente_ não salta imediatamente para mim como um não psicólogo como algo que agruparíamos com _um desafio demoníaco_, mas um psicólogo pode querer categorizá-los juntos.

### Falso-positivo

Vamos dar uma olhada nos falsos positivos – estes são pares de perguntas que McElroy et al categorizaram como diferentes, mas o Harmony pensou que eles são semelhantes.

{{< image src="images/blog/image-25.png" alt="img" >}}

Os 10 principais falsos positivos no conjunto de dados da Infância, classificados pelo Modelo 7 (transformador)

Podemos ver que alguns desses erros de classificação se devem a nuances muito sutis de sintaxe. Para a primeira pergunta acima, a palavra _diffident_ essencialmente nega todo o restante da frase - mas o Harmony classificou as duas frases como muito semelhantes.

Da mesma forma, _intimida outras crianças_ e _é intimidado por outras crianças_ compartilham as mesmas palavras-chave, mas referem-se a questões muito diferentes no contexto do desenvolvimento infantil.

Como poderíamos melhorar o desempenho do Harmony nesses casos? Há uma série de opções:

1. treine um modelo separado para ser executado após o estágio de vetor de documento, que deve identificar quando dois vetores de documento não devem ser agrupados.
2. Ajuste ou treine um modelo de vetor de documento (isso exigiria uma grande quantidade de dados de treinamento marcados).
3. Use um modelo separado, como spaCy, para identificar o sujeito gramatical de uma frase ou identificar a voz passiva.

## Resumo dos Resultados

| Modelo | Criança | Adulto | GAD-7 | CBCL/SDQ |
| --------------------------------------------------------------------------------------------------------- | ----- | ----- | ----- | -------- |
| 1. Saco-de-palavras | 70 | 69 | 49 | 63 |
| 2. Saco de palavras + pesquisa de dicionário | 70 | 69 | 100 | 69 |
| 3. Pequeno modelo spaCy EN+PT | 66 | 65 | 67 | 59 |
| 4. Modelo de grande espaço | 69 | 63 | 53 | 64 |
| 5. Transformador: distiluse-base-multilingual-case-v2 (semelhança de produto escalar) – pré-processamento sem negação | 81 | 77 | 100 | 86 |
| 6. Transformador: distiluse-base-multilingual-case-v2 (semelhança de produto ponto) | 81 | 77 | 100 | 86 |
| 7. Transformer: distiluse-base-multilingual-case-v2 (semelhança de cosseno) | 81 | 77 | 100 | 86 |
| **8.Transformer: paráfrase-multilíngue-MiniLM-L12-v2 (cosseno)** | 84 | 80 | 100 | 89 |
| 9. Transformador: MSTSb_paraphrase-xlm-r-multilingual-v1 (cosseno) | 83 | 75 | 100 | 92 |
| 10. Transformer: mental-bert-uncase (cosseno) | 75 | 69 | 72 | 62 |

Visão geral das pontuações de AUC em porcentagem nos três conjuntos de dados de validação para os modelos que experimentei

## Conclusões

O resultado de meus experimentos finais com o Sentence-BERT é reconfortante, pois mostra que um modelo baseado em transformador é capaz de lidar com vários idiomas prontos para uso, sem treinamento ou pré-processamento extra. É emocionante imaginar o potencial do Harmony para abranger ainda mais idiomas. Obviamente, os idiomas em questão devem estar presentes nos dados nos quais o modelo do transformador foi treinado.

Infelizmente, o modelo MentalBERT não teve um desempenho tão bom quanto os outros modelos de transformadores de sentenças, apesar de ser específico do domínio.

É claro que é possível adaptar um algoritmo como a similaridade Tf\*Idf para lidar com texto multilíngue com uma pesquisa de dicionário. No entanto, considero a abordagem do transformador mais escalável. A AUC aprimorada usando o Sentence-BERT é uma evidência de que os transformadores superam as alternativas por uma ampla margem. Escrevi outro post de blog sobre as diferentes abordagens para processamento de linguagem natural multilíngue [ aqui ](https://fastdatascience.com/multilingual-natural-language-processing/) .

Não tentei validar a capacidade do último modelo de reconhecer antônimos. Se você [ experimentar o Harmony na interface da web ](https://harmonydata.ac.uk/app/) , verá que os itens que são previstos como sentidos opostos (_criança briga frequentemente_ vs _criança raramente briga_) são marcados com linhas vermelhas. Como a ferramenta de harmonização existente não contém essa informação, não consegui validar o reconhecimento de antônimos. Mais trabalho é necessário nesta área.

O trabalho futuro pode envolver o treinamento de um algoritmo de processamento de linguagem natural nas ferramentas de harmonização existentes, a fim de reproduzir seu desempenho. Uma direção futura interessante seria treinar o Harmony para reproduzir os padrões encontrados na análise fatorial, que são derivados de dados de pesquisas numéricas.

## Referências

- McElroy, E., Villadsen, A., Patalay, P., Goodman, A., Richards, M., Northstone, K., Fearon, P., Tibber, M., Gondek, D., & Ploubidis, GB ( 2020). [ Propriedades de harmonização e medição de medidas de saúde mental em seis coortes britânicas ](https://www.closer.ac.uk/wp-content/uploads/210715-Harmonisation-measurement-properties-mental-health-measures-british-cohorts.pdf) . Londres, Reino Unido: CLOSER.
- Reimers, Nils e Gurevych, Iryna, [ Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks ](https://arxiv.org/abs/1908.10084) , _Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing_, Association for Linguística Computacional (2019)
- Goodman, R. (1997). Questionário de Capacidades e Dificuldades (SDQ) [Registro de Banco de Dados].
- Achenbach, TM, & Rescorla, LA (2001) Manual para Formulários e Perfis de Idade Escolar ASEBA. Burlington, VT: Centro de Pesquisa da Universidade de Vermont para Crianças, Jovens e Famílias.
- Ji et al, [ MentalBERT: modelos de linguagem pré-treinados publicamente disponíveis para saúde mental ](https://arxiv.org/abs/2110.15621) , Proceedings of LREC (2022)
- Reimers et al, [ Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks ](https://arxiv.org/abs/1908.10084) , Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing (2019)
- Hoffmann et al, ferramenta de harmonização do CBCL e SDQ no Brasil
