---
title: O workshop Harmony e TIDAL
description: Collaborating with another team in the Wellcome Trust Data Prize
date: 2023-08-18
image: /images/harmony-tidal-workshop.jpg
---


Na quinta-feira, 17 de agosto de 2023, as equipes Harmony e [ TIDAL ](https://github.com/AmeliaES/TIDAL) se uniram para realizar um workshop na [ University College London ](https://www.ucl.ac.uk/) para permitir que os pesquisadores experimentem suas ferramentas de software. O workshop contou com a participação de pesquisadores interessados em usar essas ferramentas para estudar a saúde mental de crianças e adolescentes e outras áreas de pesquisa em ciências sociais, desde os efeitos do vício em jogos de azar até perguntas sobre natureza versus criação em estudos de gêmeos.

{{< image src="/images/tidal.png" alt="TIDAL" title="TIDAL" >}}


{{< image src="/images/logo-dark-blue.png" alt="Harmony" title="Harmony" >}}

## Objetivo da oficina

O objetivo do workshop foi proporcionar aos participantes uma experiência prática com o Harmony e o TIDAL e demonstrar como eles podem ser usados para responder a perguntas de pesquisa sobre saúde mental, abrangendo os seguintes tópicos.

* Como usar o Harmony para harmonizar questionários e criar medidas comparáveis de sintomas de saúde mental.
* Como usar o TIDAL para explorar trajetórias de problemas de saúde mental ao longo do tempo.

Os participantes tiveram a oportunidade de praticar usando o Harmony e o TIDAL em um conjunto de dados simulado. Eles também tiveram a chance de tirar dúvidas e obter ajuda das equipes Harmony e TIDAL.

## Dados usados no workshop

Os dados usados no workshop foram dados sintéticos que foram simulados com base nos dois estudos de coorte do Reino Unido a seguir:

* Estudo Longitudinal Avon de Pais e Filhos (ALSPAC)
* Estudo de coorte britânico de 1970 (BCS70)

O ALSPAC é um estudo de mais de 14.000 crianças que nasceram no início dos anos 1990 na região de Avon, na Inglaterra. O BCS70 é um estudo de cerca de 17.000 pessoas nascidas na Inglaterra, Escócia e País de Gales em uma única semana de 1970.

Ambas as coortes administraram questionários semelhantes (mas não idênticos) para estudar as mães em vários momentos à medida que seus filhos cresciam. No BCS70, o questionário de comportamento dos pais de Rutter foi administrado, enquanto no ALSPAC, a escala de Rutter foi administrada inicialmente, mas o Questionário de Pontos Fortes e Dificuldades (SDQ) foi usado a partir da avaliação dos 7 anos de idade. Em ambas as coortes, houve idades em que a aplicação desses questionários se sobrepôs, particularmente as idades de 5 e 10 anos.

Os dados sintéticos foram criados para imitar os dados reais dessas duas coortes. Ele foi criado usando um método estatístico chamado bootstrapping. Bootstrapping envolve amostragem repetida de dados a partir dos dados reais e, em seguida, uso dos dados amostrados para criar um novo conjunto de dados. Este processo é repetido várias vezes para criar um grande número de conjuntos de dados simulados.

## Resultado do workshop

Depois de se familiarizar com o Harmony e o TIDAL, os participantes foram capazes de usar o Harmony e o TIDAL para harmonizar os itens Rutter e SDQ dentro do ALSPAC, para criar trajetórias de dificuldades/problemas totais. Coletamos os itens harmonizados manualmente dos participantes e planejamos compará-los com a pontuação do cosseno do Harmony para entender o desempenho do Harmony em comparação com especialistas humanos.

## Conclusão

O workshop foi um grande sucesso e os participantes aprenderam muito sobre como usar essas ferramentas poderosas. Também reunimos uma grande experiência de teste de usuário em ambas as ferramentas. Se você estiver interessado em usar o Harmony ou o TIDAL para estudar a saúde mental de crianças e adolescentes, visite [ harmonydata.ac.uk ](https://harmonydata.ac.uk) e [ o repositório TIDAL ](https://github.com/AmeliaES/TIDAL) e [ aplicativo TIDAL ](https://tidal.shinyapps.io/tidalapp/) para mais informações.

## Sobre o Harmony

O Harmony é uma ferramenta de software que usa processamento de linguagem natural e modelos Transformer (LLMs) que podem ser usados para harmonizar questionários e criar medidas comparáveis de sintomas de saúde mental. É uma ferramenta valiosa para pesquisadores que desejam estudar a saúde mental em diferentes populações e contextos.

O Harmony usa processamento de linguagem natural para identificar e combinar itens em questionários. Este processo é mais preciso e eficiente do que os métodos tradicionais de harmonização. o Harmony também fornece vários recursos que facilitam o uso, como uma interface amigável, design responsivo e ligações Python e R e API REST.

Se você estiver interessado em saber mais sobre o Harmony , confira alguns de nossos [ vídeos ](/videos) e [ postagens de blog ](/blog) .

## Sobre o TIDAL

TIDAL significa Ferramenta para Implementar Análises de Desenvolvimento de Dados Longitudinais. O TIDAL foi concebido para facilitar trajetórias de trabalho e remover barreiras à implementação de pesquisas longitudinais para pesquisadores sem formação estatística especializada, permitindo-lhes abordar questões como:

* Como a saúde mental está mudando em períodos específicos de tempo.
* Quando a saúde mental está melhorando ou piorando no ritmo mais rápido (pontos de aceleração).
* Quão variáveis são as respostas de saúde mental ao longo do tempo dentro dos indivíduos (estabilidade).
