---
title: Até onde podemos ir com o Harmony? Testando em Kufungisisa, um conceito cultural de angústia do Zimbábue
description: Many psychologists believe that mental illnesses can vary across cultures. In 1904, Emil Kraepelin initiated the field of comparative psychiatry after studying mental health disorders in Java....
date:
image: /images/blog/ccd.png
---

Muitos psicólogos acreditam que as doenças mentais podem variar entre as culturas. Em 1904, Emil Kraepelin iniciou o campo da psiquiatria comparada depois de estudar distúrbios de saúde mental em Java, escrevendo que _“Die Eigenart eines Volkes wird auch in der Häufigkeit und klinischen Gestaltung seiner Geistesstörungen zum Ausdruck kommen,”_ que significa “A peculiaridade de um povo [grupo étnico] também se expressará na frequência e na forma clínica de seus transtornos mentais.”[1]

Mais de um século depois, o surgimento de projetos globais de pesquisa em saúde mental abriu uma série de debates sobre a aplicabilidade de categorias psiquiátricas a diferentes contextos culturais, como os da série Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM)[2] .

Em 2013, a publicação do DSM-5 incluiu pela primeira vez os Conceitos Culturais de Distress (CCD), referindo-se a “maneiras pelas quais grupos culturais experimentam, compreendem e comunicam sofrimento, problemas comportamentais ou pensamentos e emoções perturbadoras”[2].

Exemplos de conceitos culturais de angústia incluem:

- “Los nervios” ou “ataque de nervios” (espanhol) – literalmente “ataque de nervos”, um conceito de sofrimento severo, muitas vezes ligado a disputas interpessoais nas culturas latinas e de língua espanhola[3]. “Los nervios” estão associados a deficiências físicas e funcionais.
- “Kufungisisa” (Shona) – literalmente “pensar demais”, este é um termo usado no Zimbábue para descrever tanto a causa quanto os sintomas de problemas de saúde mental, como ansiedade e depressão. Patel et al [4] sugeriram descrever isso como “sentir-se estressado” ou como uma “doença mental neurótica não específica”.
- “Hikikomori” (japonês) – uma forma de retraimento social severo em que um adolescente ou jovem adulto se torna recluso na casa de seus pais e não trabalha ou frequenta a escola por longos períodos de tempo[5].

Podemos usar o Harmony para harmonizar instrumentos de saúde mental projetados para diferentes contextos culturais onde alguns distúrbios podem não ter equivalente direto em uma cultura?

## Usando o Harmony no Google Colab

> Zvaita sei kuti chembere yorasika, bere rorutsa imvi? (How is it that the old woman is missing and the hyena is vomiting grey hairs?)

{{< image src="images/blog/pexels-bigworldinalens-11307036-1024x682.jpg" alt="img" >}}


> Shona proverb (similar to English “there’s no smoke without fire”)

Se você é um usuário Python, pode acompanhar meu experimento neste Jupyter Notebook, que pode ser aberto no Google Colab: https://github.com/harmonydata/

Shona (_chiShona_) é falado no Zimbábue e pertence à família linguística bantu, que também inclui zulu, xhosa e suaíli.

| Shona | Inglês |
| ----------- | ---------------------------------------------------------------------------- |
| fungos | pense |
| kufunga | pensar |
| ndofunga | eu acho |
| -isa | (sufixo causativo: “causar fazer”) |
| -isisa | (sufixo intensivo: “fazer rapidamente”) |
| kufungisisa | pense profundamente, pense demais; um idioma Shona para doenças mentais não psicóticas |

Em Shona, verbos derivados podem ser criados a partir de verbos simples anexando sufixos ao radical do verbo.

Tentei usar o Harmony para ver como harmonizaria “kufungisisa” (pensar demais) com um instrumento ocidental como o GHQ-12.

Embora o inglês seja o idioma com melhor recurso para o processamento de linguagem natural, as [técnicas de PNL multilíngue](https://fastdatascience.com/multilingual-natural-language-processing/) estão alcançando até mesmo para idiomas com recursos mais baixos. Existem alguns modelos de PNL para Shona. Eu usei o modelo de transformador de sentença `Davlan/xlm-roberta-base-finetuned-shona` que é uma modificação do ROBERTA treinado em textos Shona[7]. Conectei um ao Harmony e tentei corresponder ao [questionário de sintomas Shona para detecção de depressão e ansiedade](https://depts.washington.edu/edgh/zw/hit/web/project-resources/shona_symptom_questionnaire.pdf), que é usado no Zimbábue[6].

{{< image src="images/blog/Screenshot-from-2023-07-13-12-34-30.png" alt="img" >}}


Acima: o texto do questionário de sintomas Shona para detecção de depressão e ansiedade.

Um problema que encontrei foi que o modelo do transformador não funcionava tanto para Shona quanto para o inglês (não é multilíngue, como o modelo de transformador padrão do Harmony). O Google traduziu GHQ-12 para Shona como uma medida temporária.

Além disso, o modelo do transformador não operava como um transformador de sentença, mas sim como um transformador de nível de token, então meus vetores de sentença foram feitos pela média de vetores de token em uma entrada.

A saída do meu modelo está abaixo:

{{< image src="images/blog/image-1-b.png" alt="img" >}}


Harmony e o modelo do transformador Shona combinaram a pergunta sobre “kufungisisa” com a pergunta 1 do GHQ-12 “conseguiu se concentrar no que quer que esteja fazendo?” o que parece aproximadamente OK. No entanto, eu precisaria de um falante nativo de Shona para validar meus resultados.

Além disso, quando usamos textos em inglês e português, que até agora era nossa combinação bilíngue preferida, tivemos a vantagem de alguns modelos multilíngues cobrirem os dois idiomas e, portanto, é possível comparar diretamente nos dois idiomas de origem. Na ausência de um LLM (large language model) que possa lidar com Shona e Inglês, não é possível comparar diretamente o texto em Inglês e Shona, mas meu experimento acima mostra que o Harmony pode funcionar em texto Shona monolíngue.

## Referências

1. E. Kraepelin: Vergleichende Psychiatrie. Zentralblatt für Nervenheilk. você. psiquiatra. Nº 174, 433-437. 1904 (39)
2. Associação Americana de Psiquiatria (2013) Manual diagnóstico e estatístico de transtornos mentais, 5ª edição. Washington, DC: American Psychiatric Publishing, Inc.
3. Kohrt, Brandon A., e outros. “Conceitos culturais de sofrimento e transtornos psiquiátricos: revisão da literatura e recomendações de pesquisa para epidemiologia global da saúde mental.” Jornal internacional de epidemiologia 43.2 (2014): 365-406.
4. Patel, Vikram, Essie Simunyu e Fungisai Gwanzura. “Kufungisisa (pensar demais): um idioma Shona para doenças mentais não psicóticas.” The Central African Journal of Medicine 41.7 (1995): 209-215.
5. Teo, Alan Robert e Albert C. Gaw. “Hikikomori, uma síndrome de retraimento social ligada à cultura japonesa? Uma proposta para o DSM-V.” O Jornal de doenças nervosas e mentais 198,6 (2010): 444.
6. Questionário de sintomas Shona, https://depts.washington.edu/edgh/zw/hit/web/project-resources/shona_symptom_questionnaire.pdf, recuperado em 13 de julho de 2023
7. Alabi, Jesujoba O., et al. “[Adaptando modelos de linguagem pré-treinados para idiomas africanos por meio de ajuste fino adaptável multilíngue](https://arxiv.org/abs/2204.06487).” pré-impressão arXiv arXiv:2204.06487 (2022).
