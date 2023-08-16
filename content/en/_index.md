---
title: A global platform for contextual data harmonisation
layout: blocks
description: 
image: 
navbar:
  mode: dark #dark mode, leave blank for light mode
  overlay: true #used together with hero overlay: true option to show background image behind the navbar
blocks:
- block: hero
  layout: left
  # padding: top #applies only top padding not bottom
  mode: dark #dark mode, leave blank for light mode
  overlay: true #used together with navbar overlay: true option to show background image behind the navbar
  # layout: left
  # image: images/startup-launch-2.svg
  background_image: images/globe-min.svg
  heading: "Harmonise questionnaire items with **Harmony**."
  subheading: Harmony is a tool for retrospective harmonisation of questionnaire items.
  copy: |-
    Do you need to compare questionnaire data across studies? Do you want to find the best match for a set of items? Are there are different versions of the same questionnaire floating around and you want to make sure how compatible they are? Are the questionnaires written in different languages that you would like to compare?

    The Harmony project is a data harmonisation project that uses [Natural Language Processing](/guide-natural-language-processing-nlp/) to help researchers make better use of existing data from different studies by supporting them with the harmonisation of various measures and items used in different studies. Harmony is a collaboration project between [Ulster University](https://ulster.ac.uk/), [University College London](https://ucl.ac.uk/), the [Universidade Federal de Santa Maria](https://www.ufsm.br/), and [Fast Data Science](http://fastdatascience.com/).

  buttons:
  - text: Try Harmony Now!
    url: "/app/"
    style: gradient-1 #primary secondary muted
    size: large

- block: video
  padding: top
  superheading: "**Harmony**"
  heading: Introduction to Harmony
  subheading: Data harmonisation with natural language processing
  youtube: cEZppTBj1NI
  image: images/bg-video.jpg

- block: feature-2
  padding: top
  image: images/bg-video.jpg
  heading: "Use Harmony in the browser"
  subheading: You can use Harmony on the web.
  youtube: CqAsrY74zNM
  button:
    text: Try Harmony App
    url: "/app/"
    size: large
    style: primary

- block: feature-2
  padding: top
  align: right 
  heading: "Use Harmony in Python"
  subheading: We've released Harmony as an easy-to-use Python library on Pypi.
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
  heading: "Use Harmony in R"
  subheading: R users can now import Harmony as an R package.
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
  # padding: top
  align: right 
  heading: "Harmony Docker container"
  subheading: We've released Harmony as a Docker container on Dockerhub.
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
  # padding: top
  mode: muted
  superheading: "**Our Partners**"
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
  copy: Really useful! Would have been a great tool and saved me a lot of time when I was trying to externally validate my risk prediction model in two cohorts.
  author:
    name: Researcher at UCL
    title: on using Harmony the first time
    image: /images/testimonial-user.svg

- block: feature-2
  # padding: top
  align: right
  image: images/gad-7-scanned-min.webp
  copy: |
    Our tool, Harmony, allows researchers to upload a set of mental health questionnaires in PDF or Excel format, such as the GAD-7 anxiety questionnaire. It identifies which questions among questionnaires are identical, similar in meaning, or antonyms of each other, and generates a network graph. This allows researchers to harmonise datasets.

    Uniquely, Harmony relies on Transformer neural network architectures and is not dependent on a dictionary approach or word list. This allows for multilingual support (English and Portuguese are our languages of focus), and Harmony is able to correctly map the GAD-7 used in the UK to the GAD-7 used in Brazil, despite the Brazilian questionnaire being in Brazilian Portuguese.

    Using Harmony, our team was able to conduct groundbreaking research into social isolation and anxiety with NLP supplying a quantitative measure of the equivalence of the different mental health datasets.

- block: feature-4
  mode: muted
  superheading: "**HARMONY**"
  heading: A global platform for contextual harmonisation, translation and cooperation in mental health research
  copy: |
    This team will support better integration of mental health research through a natural language processing harmonisation tool (Harmony), allowing researchers to compare data from existing studies to investigate the active ingredients of mental health. Led by Dr Eoin McElroy from Ulster University and Dr Bettina Moltrecht from University College London, the team will develop and demonstrate Harmony to answer research questions around human connection and its influence on the development of depression and anxiety in young people.

---

  

  

