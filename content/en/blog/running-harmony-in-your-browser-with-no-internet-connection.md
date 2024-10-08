---
title: Running Harmony In Your Browser With No Internet Connection
description: Here’s a quick start guide to running Harmony. These instructions are for the complete version of Harmony including the graphical browser-based tool which is available onlin...
date: 2023-07-12
categories: ["development"]
image: /images/blog/Screenshot-from-2023-07-12-21-28-48-1536x933.png

aliases:
  - "/blog/running-harmony-in-your-browser-with-no-internet-connection/"
  - "/running-harmony-in-your-browser-with-no-internet-connection/"
url: "/open-source-for-social-science/running-harmony-in-your-browser-with-no-internet-connection/"
---

Here’s a quick start guide to running Harmony, an [open source tool for social science research](/open-source-for-social-science/). These instructions are for the complete version of Harmony including the graphical browser-based tool which is available online at https://harmonydata.ac.uk/app/. If you only need the [Python](https://github.com/harmonydata/harmonyapi) or [R](https://www.r-project.org/) libraries, or the [REST API](https://github.com/harmonydata/harmonyapi), please refer to our [Github page](https://github.com/harmonydata).

You will need to first download and install a couple of programs that Harmony needs to run.

You need a computer with at least 16 GB RAM – in other words, a fairly high-end computer. This is because Harmony does two things that need some computational heavy lifting:

- extracting question texts from PDFs (including OCR on scanned PDFs) – this is done using the library [Apache Tika](https://tika.apache.org/), with the [natural language processing](https://naturallanguageprocessing.com/) library [spaCy](https://spacy.io/).
- turning texts into vectors, using a [transformer](https://harmonydata.ac.uk/how-does-harmony-work) [neural network](https://fastdatascience.com/how-similar-are-neural-networks-to-our-brains) from [HuggingFace](https://huggingface.co/).

In addition, the browser-based front end is running in [Node.js](https://nodejs.org/en) to make the nice graphics that you can see on our web tool.

If you don’t need all of this functionality, you may prefer to install the [Harmony Python library](https://github.com/harmonydata/harmonyapi), R library, [REST API](https://github.com/harmonydata/harmonyapi) or even run our Docker container available from [our DockerHub page](https://hub.docker.com/r/harmonydata).

## 1. Download and install Java, Node.js and NPM

Download and install Java, Node.js, and NPM if you don’t have them already.

- [Windows/Mac/Linux link](https://www.java.com/en/download/) (Java)
- [Link for Node.js](https://nodejs.org/en/download)

If you are a Mac user and you use Homebrew, you can run this in the Terminal.

```
brew install java nodejs npm
```

If you use Ubuntu, you can run this in the console:

```
apt-get update
apt-get install default-jre npm nodejs
```

Please ensure you have Java version 11 or later, NPM version 6.14.4 or later, and Node.js version 10.19.0 or later

## 2. Download Apache Tika.

Download Apache Tika from this link: https://tika.apache.org/download.html

Then, in the console or Terminal, type:

```
java -jar tika-server-standard-2.3.0.jar
```

(the numbers at the end of the file name may change)

Please ensure you have Tika 2.3.0 or later.

## 3. Download and install [Python](https://www.python.org/)

If you don’t already have Python on your computer, we recommend to download it from [Anaconda](https://www.anaconda.com/download). Please ensure you have Python 3.9 or later.

## 4. Download the Harmony [API](https://harmonydata.ac.uk/releasing-harmony-api)

Visit the [API Github page](https://github.com/harmonydata/harmonyapi) and click Code -> Download ZIP. Unzip it on your computer.

## 5. Download the machine learning [models](https://harmonydata.ac.uk/semantic-text-matching-with-deep-learning-transformer-models) and Python dependencies

In the terminal or console, type

```
pip install -r requirements.txt
python harmony/src/harmony/util/model_downloader.py 
```

## 6. Run the Harmony API

In the terminal or console, type

```
python main.py
```

## 7. Download and run the Harmony front end

Visit our [front end Github page](https://github.com/harmonydata/harmonydata.github.io) and click Code -> Download ZIP. Unzip it on your computer.

In the Terminal, go inside the folder and type

```
export REACT_APP_API_URL=http://localhost:8000/
npm install
npm start
```

Visit your browser at http://localhost:3000 and you should see Harmony running there.
