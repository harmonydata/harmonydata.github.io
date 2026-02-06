---
title: AI-driven Data Discovery and Harmonisation
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
  heading: "Find existing research data with [**Harmony Meta**](https://harmonydata.ac.uk/search/) and retrospectively harmonise questionnaire items with [**Harmony**](https://harmonydata.ac.uk/app/)"
  subheading: Our AI-driven tools help social scientists discover, compare, and unlock existing research data.
  copy: |-
    Research data is often siloed and difficult to find. Once found, it is even harder to compare. Harmony provides two powerful tools to bridge this gap:
  
    [Harmony Meta](https://harmonydata.ac.uk/search/) - Our new discovery engine that helps you search through vast catalogues of longitudinal studies to find the variables you need.

    [Harmony](https://harmonydata.ac.uk/app/) - Our flagship tool that uses Large Language Models to automatically match items from different questionnaires, even across different languages.

  links:
  - heading: Harmony Meta
    copy: Try the beta version of our new search tool Harmony Meta.
    url: "https://harmonydata.ac.uk/search/"
  - heading: Harmonise
    copy: Automatically match items across questionnaires.
    url: "https://harmonydata.ac.uk/app/"
  - heading: Contribute
    copy: Harmony is in active development and you can contribute.
    url: "/open-source-for-social-science/contributing-to-harmony-nlp-project/"
  - heading: Raise NLP issue
    copy: Raise an issue with Harmony's natural language understanding.
    url: "https://github.com/harmonydata/harmony/issues"

    
  buttons:
  - text: Try Harmony Meta Now
    url: "https://harmonydata.ac.uk/search/"
    style: gradient
    size: large
  - text: Harmonise your questionnaires
    url: "https://harmonydata.ac.uk/app/"
    style: gradient
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
  image: images/Harmony Meta.png
  heading: "Introducing Harmony Meta"
  subheading: A simpler way to discover research metadata. Harmony Meta is designed for the discovery phase of research. Instead of manually checking across multiple repositories or data dictionaries, use our semantic search tool to explore metadata across thousands of variables.
  youtube: yvaM3PXropQ
  buttons:
    text: Discover with Harmony Meta
    url: "https://harmonydata.ac.uk/search/"
    size: large
    style: secondary

- block: feature-2
  padding: top
  image: images/bg-video.jpg
  heading: "Harmonise items in the browser"
  subheading: You can use Harmony to compare questionnaire items directly on the web.
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
  - text: Example scripts and Jupyter notebooks
    url: https://github.com/harmonydata/harmony_examples/
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
  subheading: R users can now import Harmony as an R package for data harmonisation. By default, Harmony R connects to the Harmony API but you can also point it to Harmony API running on Docker and then you can run Harmony R on a computer without internet (see below).
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
  - text: Example notebooks for RStudio
    url: https://github.com/harmonydata/harmony_examples/
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
  subheading: We've released Harmony as a Docker container on [Dockerhub](https://hub.docker.com/), running a REST API using FastAPI. Check [Dockerhub](https://hub.docker.com/r/harmonydata/harmonyapi/tags) for the latest tag. You can run these commands in Windows Command Prompt or Terminal on Mac/Linux.
  links: 
  - text: Dockerhub
    url: https://hub.docker.com/r/harmonydata/harmonyapi
  - text: REST API
    url: http://github.com/harmonydata/harmonyapi
  - text: REST API Documentation (PDF/Swagger)
    url: https://raw.githubusercontent.com/harmonydata/harmonyapi/main/docs/API_reference.pdf
  code: |
    ```vshell
    docker run -p 8000:80 harmonydata/harmonyapi
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
    We aim to promote better integration of data harmonisation in mental health research through a natural language processing harmonisation tool (Harmony), allowing researchers to compare data from existing studies to investigate the active ingredients of mental health. Led by Dr Eoin McElroy from Ulster University and Dr Bettina Moltrecht from University College London, the team will develop Harmony to answer research questions around human connection and its influence on the development of depression and anxiety in young people.

- block: connect
  heading: More ways to connect
  cards: 
  - heading: AI Challenges
    copy: Contribute to real-world AI and coding challenges.
    button:
      text: Learn more
      url: https://harmonydata.ac.uk/challenges/
    icon: sparkles
  - heading: Discord Community
    copy: Join discussions with fellow researchers and developers.
    button:
      text: Join
      url: https://discord.com/invite/harmonydata
    icon: discord-2
  - heading: GitHub
    copy: Access our latest code, tools, and contributions. Become a certified contributor
    button:
      text: Join
      url: https://github.com/harmonydata/harmony
    icon: github
  - heading: Connect with us on Socials
    social:
      - text: LinkedIn
        url: https://www.linkedin.com/company/harmonydata/about/?viewAsMember=true
      - text: Bluesky
        url: https://bsky.app/profile/harmonydata.bsky.social
    icon: users

---
