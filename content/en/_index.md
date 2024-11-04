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
  mode: dark #dark mode, leave blank for light mode
  overlay: true #used together with navbar overlay: true option to show background image behind the navbar
  background_image: images/globe-min.svg
  heading: "Harmonise questionnaire items with **Harmony**."
  subheading: Harmony is a tool for retrospective harmonisation of questionnaire items.
  copy: |-
    Do you need to [compare questionnaire items across studies](/compare-harmonise-instruments/gad-7-vs-beck-anxiety-inventory/)? Do you want to find the best match for a set of items? Are there are different versions of the same questionnaire floating around and you want to make sure [how compatible they are](/harmonisation-validation/patient-health-questionnaire-9-phq-9/)? Are the questionnaires [written in different languages](/psychology-ai-tool/harmony-many-languages/) that you would like to compare?

    The Harmony project is a data harmonisation project that uses [Natural Language Processing](https://fastdatascience.com/guide-natural-language-processing-nlp/) to help researchers make better use of existing data from different studies by supporting them with the harmonisation of various measures and items used in different studies. Harmony is a collaboration project between [Ulster University](https://ulster.ac.uk/), [University College London](https://ucl.ac.uk/), the [Universidade Federal de Santa Maria](https://www.ufsm.br/), and [Fast Data Science](http://fastdatascience.com/).  Harmony has been funded by the [Economic and Social Research Council (ESRC)](https://www.ukri.org/councils/esrc/) and by [Wellcome](https://wellcome.org/) as part of the [Wellcome Data Prize in Mental Health](https://wellcome.org/grant-funding/schemes/wellcome-mental-health-data-prize).
    
    In 2024, we published a paper validating Harmony on real world mental health data:
    
    &nbsp;1. McElroy, Wood, Bond, Mulvenna, Shevlin, Ploubidis, Scopel Hoffmann, Moltrecht, *[Using natural language processing to facilitate the harmonisation of mental health questionnaires: a validation study using real-world data](/ai-in-mental-health/bmc-psychiatry-paper/)*. BMC Psychiatry 24, 530 (2024).

 
  links:
  - heading: Contribute
    copy: Harmony is in active development and you can contribute.
    url: "https://github.com/harmonydata/harmony"
  - heading: Raise NLP issue
    copy: Raise an issue with Harmony's natural language understanding.
    url: "https://github.com/harmonydata/harmony/issues"
  - heading: Raise UI issue
    copy: Rise an issue with Harmony's user interface and graphics.
    url: "https://github.com/harmonydata/app/issues"
  - heading: Discord
    copy: Join our Discord server.
    url: "https://discord.gg/harmonydata"
    
  buttons:
  - text: Try Harmony Now!
    url: "https://harmonydata.ac.uk/app"
    style: gradient
    size: large
  - text: Newsletter signup
    url: "#feature-4"
    style: outline
    size: large

- block: video
  padding: top
  superheading: "**Harmony**"
  heading: Introduction to Harmony
  subheading: Item harmonisation with natural language processing
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
    url: "https://harmonydata.ac.uk/app"
    size: large
    style: secondary

- block: feature-2
  padding: top
  align: right 
  heading: "Use Harmony in Python"
  subheading: We've released Harmony as an easy-to-use Python library on Pypi, so you can incorporate Harmony into your data harmonisation workflow.
  links: 
  - text: Python package on Pypi
    url: https://pypi.org/project/harmonydata/
  - text: Source Code on Github
    url: http://github.com/harmonydata/harmony
  - text: Google Colab notebook
    url: https://colab.research.google.com/github/harmonydata/harmony/blob/main/Harmony_example_walkthrough.ipynb
  - text: Windows installation video
    url: https://www.youtube.com/watch?v=Okk8tUMDr6g
  - text: Linux (Ubuntu) installation video
    url: https://www.youtube.com/watch?v=enWh0-4I0Sg
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
  subheading: R users can now import Harmony as an R package for data harmonisation.
  links: 
  - text: R package on Github
    url: https://github.com/harmonydata/harmony_r
  - text: Documentation
    url: /open-source-for-social-science/harmony-r-package/
  - text: Google Colab notebook
    url: "https://github.com/harmonydata/experiments/blob/main/Harmony_R_example.ipynb"
  - text: R markdown notebook for R Studio
    url: "/harmony_r_example.nb.html"
  - text: CRAN
    url: "https://cran.r-project.org/web/packages/harmonydata/index.html"
  - text: Windows installation video
    url: "https://www.youtube.com/watch?v=hFqg6T_BqZc"
  code: |
    ```vshell
    # install.packages("devtools") # If you don't have devtools installed already or CRAN is down.
    # library(devtools)
    # devtools::install_github("harmonydata/harmony_r")
    install.packages("harmonydata")
    library(harmonydata)
    instrument = load_instruments_from_file(path = "examples/GAD-7.pdf")
    instrument_2 = load_instruments_from_file("https://medfam.umontreal.ca/wp-content/uploads/sites/16/GAD-7-fran%C3%A7ais.pdf") 
    instruments = append(instrument, instrument_2)
    match = match_instruments(instruments)
    names(match)
    ```

- block: feature-2
  # padding: top
  align: right 
  heading: "Harmony Docker container/API"
  subheading: We've released Harmony as a Docker container on [Dockerhub](https://hub.docker.com/), running a REST API using FastAPI.
  links: 
  - text: Dockerhub
    url: https://hub.docker.com/r/harmonydata/harmonyapi
  - text: REST API
    url: http://github.com/harmonydata/harmonyapi
  - text: REST API Documentation (PDF/Swagger)
    url: https://raw.githubusercontent.com/harmonydata/harmonyapi/main/docs/API_reference.pdf
  code: |
    ```vshell
    docker pull harmonydata/harmonyapi
    docker run -p 8000:8000 -p 3000:3000 harmonydata/harmonyapi
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
  - alt: ukllc
    image: /images/ukllc.svg
    url: https://ukllc.ac.uk/
  - alt: datamind
    image: /images/datamind.svg
    url: https://datamind.org.uk
  - alt: "Mental Health Catalogue"
    image: /images/mental_health_catalogue.png
    url: https://www.cataloguementalhealth.ac.uk/
  - alt: "UKRI ESRC"
    image: /images/ukri_esrc.png
    url: https://www.ukri.org/councils/esrc/
  - alt: "CLS"
    image: /images/cls_logo_red.svg
    url: https://cls.ucl.ac.uk/
    
- block: newsletter
  image: images/multilingual.jpg
  padding: top

- block: testimonial-2
  padding: top
  copy: Really useful! Would have been a great tool and saved me a lot of time when I was trying to externally validate my risk prediction model in two cohorts.
  author:
    name: Researcher at Kings College London
    title: on using Harmony the first times
    image: /images/testimonial-user.svg

- block: feature-2
  padding: top
  align: right
  image: images/gad-7-scanned-min.webp
  copy: |
    Our tool, [Harmony](https://fastdatascience.com/harmony-wellcome-data-prize/), allows researchers to upload a set of mental health questionnaires in PDF or Excel format, such as the [GAD-7 anxiety questionnaire](https://adaa.org/sites/default/files/GAD-7_Anxiety-updated_0.pdf). It identifies which questions among questionnaires are identical, similar in meaning, or antonyms of each other, and generates a network graph. This allows researchers to harmonise datasets.

    Uniquely, Harmony relies on [Transformer neural network architectures](https://deepai.org/machine-learning-glossary-and-terms/transformer-neural-network) and is not dependent on a dictionary approach or word list. This allows for [multilingual data harmonisation](/psychology-ai-tool/harmony-many-languages/) (English and Portuguese are our languages of focus), and Harmony is able to correctly map the GAD-7 used in the UK to the [GAD-7 used in Brazil](https://pesquisa.bvsalud.org/portal/resource/pt/lil-788637), despite the Brazilian questionnaire being in Brazilian Portuguese.

    Using Harmony, our team was able to harmonise multilingual datasets and conduct groundbreaking research into social isolation and anxiety with NLP supplying a quantitative measure of the equivalence of the different mental health datasets.
    
- block: feature-4
  superheading: "**HARMONY**"
  heading: A global platform for contextual harmonisation, translation and cooperation in mental health research
  copy: |
    We aim to promote better integration of data harmonisation in mental health research through a natural language processing harmonisation tool (Harmony), allowing researchers to compare data from existing studies to investigate the active ingredients of mental health. Led by Dr Eoin McElroy from Ulster University and Dr Bettina Moltrecht from University College London, the team will develop and demonstrate Harmony to answer research questions around human connection and its influence on the development of depression and anxiety in young people.

---

