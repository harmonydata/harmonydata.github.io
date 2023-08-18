---
title: Uma plataforma global para harmonização de dados contextuais
layout: blocks
description: 
image: 
navbar:
  mode: dark #dark mode, leave blank for light mode
  overlay: true #used together with hero overlay: true option to show background image behind the navbar
blocks:
- block: hero
  layout: left
  mode: dark #dark mode, leave blank for light mode
  overlay: true #used together with navbar overlay: true option to show background image behind the navbar
  background_image: images/globe-min.svg
  heading: "Harmonize os itens do questionário com **Harmony**."
  subheading: O Harmony é uma ferramenta para harmonização retrospectiva dos itens do questionário.
  copy: |-
    Você precisa comparar os dados do questionário entre os estudos? Você quer encontrar a melhor correspondência para um conjunto de itens? Existem versões diferentes do mesmo questionário flutuando e você quer ter certeza de quão compatíveis elas são? Os questionários estão escritos em idiomas diferentes que você gostaria de comparar?

    O projeto Harmony é um projeto de harmonização de dados que usa [Natural Language Processing](/guide-natural-language-processing-nlp/) para ajudar os pesquisadores a fazer melhor uso dos dados existentes de diferentes estudos, apoiando-os com a harmonização de várias medidas e itens usados em diferentes estudos. Harmony é um projeto de colaboração entre a [Ulster University](https://ulster.ac.uk/), [University College London](https://ucl.ac.uk/), a [Universidade Federal de Santa Maria]( https://www.ufsm.br/) e [Fast Data Science](http://fastdatascience.com/).

  buttons:
  - text: Try Harmony Now!
    url: "/app/"
    style: gradient
    size: large

- block: video
  padding: top
  superheading: "**Harmonia**"
  heading: Introdução à Harmonia
  subheading: Harmonização de dados com processamento de linguagem natural
  youtube: cEZppTBj1NI
  image: images/bg-video.jpg

- block: feature-2
  padding: top
  image: images/bg-video.jpg
  heading: "Use o Harmony no navegador"
  subheading: Você pode usar o Harmony na web.
  youtube: CqAsrY74zNM
  button:
    text: Experimente o aplicativo Harmony
    url: "/app/"
    size: large
    style: secondary

- block: feature-2
  padding: top
  align: right 
  heading: "Use Harmony em Python"
  subheading: Lançamos o Harmony como uma biblioteca Python fácil de usar no Pypi.
  links: 
  - text: Pypi
    url: https://pypi.org/project/harmonydata/
  - text: Python package
    url: https://pypi.org/project/harmonydata/
  - text: Source Code
    url: http://github.com/harmonydata/harmony
  - text: REST API
    url: http://github.com/harmonydata/harmonyapi
  - text: API Documentation (PDF)
    url: https://raw.githubusercontent.com/harmonydata/harmonyapi/main/docs/API_reference.pdf
  code: |
    ```vshell
    pip install harmonydata
    import harmony
    harmony.download_models()
    instruments = harmony.example_instruments["CES_D English"], 
    harmony.example_instruments["GAD-7 Portuguese"]
    questions, similarity, query_similarity, _ = harmony.match_instruments
    (instruments) 
    # How to load a PDF, Excel or Word into an instrument
    harmony.load_instruments_from_local_file("gad-7.pdf")
    ```

- block: feature-2
  padding: top
  heading: "Use Harmonia em R"
  subheading: Os usuários do R agora podem importar o Harmony como um pacote do R.
  links: 
  - text: R Package
    url: https://github.com/harmonydata/harmony_r
  code: |
    ```vshell
    install.packages("harmonydata")
    library(harmonydata)
                
    instruments <- harmony.example_instruments["CES_D English"],
    harmony.example_instruments["GAD-7 Portuguese"]
    similarity <- harmony.match_instruments(instruments) 
    ```

- block: feature-2
  # preenchimento: superior
  align: right 
  heading: "Contêiner Harmony Docker"
  subheading: Lançamos o Harmony como um contêiner do Docker no Dockerhub.
  links: 
  - text: Docker
    url: https://www.docker.com/
  - text: Dockerhub
    url: https://hub.docker.com/r/harmonydata/harmonywithtika
  code: |
    ```vshell
    docker pull harmonydata/harmonywithtika
    docker run -p 8000:8000 -p 3000:3000 harmonydata/harmonywithtika
    ```

- block: logos
  # preenchimento: superior
  mode: muted
  superheading: "**Nossos Parceiros**"
  logos:
  - alt: ulster
    image: /images/clients/client-1.png
    url: https://www.ulster.ac.uk/
  - alt: ucl
    image: /images/clients/client-2.png
    url: https://www.ucl.ac.uk/
  - alt: ufsm
    image: /images/clients/client-3.png
    url: https://www.ufsm.br/
  - alt: fastdatascience
    image: /images/clients/client-4.png
    url: https://fastdatascience.com/
  - alt: wellcome
    image: /images/clients/wellcome.gif
    url: https://wellcome.org/

- block: feature-4
  image: images/multilingual.jpg
  padding: top

- block: testimonial-2
  padding: top
  copy: Muito útil! Teria sido uma ótima ferramenta e me pouparia muito tempo quando estava tentando validar externamente meu modelo de previsão de risco em duas coortes.
  author:
    name: Pesquisador da UCL
    title: ao usar o Harmony pela primeira vez
    image: /images/testimonial-user.svg

- block: feature-2
  # preenchimento: superior
  align: right
  image: images/gad-7-scanned-min.webp
  copy: |
    Nossa ferramenta, Harmony, permite que os pesquisadores carreguem um conjunto de questionários de saúde mental em formato PDF ou Excel, como o questionário de ansiedade GAD-7. Ele identifica quais perguntas entre os questionários são idênticas, semelhantes em significado ou antônimas umas das outras e gera um gráfico de rede. Isso permite que os pesquisadores harmonizem os conjuntos de dados.

    Excepcionalmente, o Harmony depende de arquiteturas de rede neural Transformer e não depende de uma abordagem de dicionário ou lista de palavras. Isso permite suporte multilíngue (inglês e português são nossos idiomas de foco) e o Harmony é capaz de mapear corretamente o GAD-7 usado no Reino Unido para o GAD-7 usado no Brasil, apesar do questionário brasileiro estar em português do Brasil.

    Usando o Harmony, nossa equipe conseguiu realizar pesquisas inovadoras sobre isolamento social e ansiedade com a PNL, fornecendo uma medida quantitativa da equivalência dos diferentes conjuntos de dados de saúde mental.

- block: feature-4
  mode: muted
  superheading: "**HARMONY**"
  heading: Uma plataforma global para harmonização contextual, tradução e cooperação em pesquisa em saúde mental
  copy: |
    Essa equipe apoiará uma melhor integração da pesquisa em saúde mental por meio de uma ferramenta de harmonização de processamento de linguagem natural (Harmony), permitindo que os pesquisadores comparem dados de estudos existentes para investigar os ingredientes ativos da saúde mental. Liderada pelo Dr. Eoin McElroy, da Ulster University, e pela Dra. Bettina Moltrecht, da University College London, a equipe desenvolverá e demonstrará o Harmony para responder a perguntas de pesquisa sobre a conexão humana e sua influência no desenvolvimento de depressão e ansiedade em jovens.

---

  

  

