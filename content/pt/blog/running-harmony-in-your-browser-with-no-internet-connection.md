---
title: Executando o Harmony em seu navegador sem conexão com a Internet
description: Here’s a quick start guide to running Harmony. These instructions are for the complete version of Harmony including the graphical browser-based tool which is available onlin...
date: 2023-07-12
image: /images/blog/Screenshot-from-2023-07-12-21-28-48-1536x933.png
---

Aqui está um guia de início rápido para executar o Harmony. Estas instruções são para a versão completa do Harmony, incluindo a ferramenta gráfica baseada em navegador que está disponível online em https://harmonydata.ac.uk/app/. Se você precisa apenas do [Python](https://github.com/harmonydata/harmonyapi) ou das bibliotecas R, ou da [API REST](https://github.com/harmonydata/harmonyapi), consulte nosso [ Página do Github](https://github.com/harmonydata).

Você precisará primeiro baixar e instalar alguns programas que o Harmony precisa para executar.

Você precisa de um computador com pelo menos 16 GB de RAM – em outras palavras, um computador bastante sofisticado. Isso ocorre porque o Harmony faz duas coisas que precisam de algum trabalho computacional pesado:

- extração de textos de perguntas de PDFs (incluindo OCR em PDFs digitalizados) – isso é feito usando a biblioteca [Apache Tika](https://tika.apache.org/), com a biblioteca de processamento de linguagem natural [spaCy](https:// space.io/).
- transformando textos em vetores, usando uma rede neural transformadora de [HuggingFace](https://huggingface.co/).

Além disso, o front-end baseado em navegador está sendo executado em [Node.js](https://nodejs.org/en) para criar os belos gráficos que você pode ver em nossa ferramenta da web.

Se você não precisa de todas essas funcionalidades, pode preferir instalar a [biblioteca Harmony Python](https://github.com/harmonydata/harmonyapi), biblioteca R, [API REST](https://github. com/harmonydata/harmonyapi) ou até mesmo executar nosso contêiner Docker disponível em [nossa página DockerHub](https://hub.docker.com/r/harmonydata).

## 1. Baixe e instale Java, Node.js e NPM

Baixe e instale Java, Node.js e NPM, caso ainda não os tenha.

- [link Windows/Mac/Linux](https://www.java.com/en/download/) (Java)
- [Link para Node.js](https://nodejs.org/en/download)

Se você é um usuário de Mac e usa o Homebrew, pode executá-lo no Terminal.

```
brew install java nodejs npm
```

Se você usa o Ubuntu, pode executar isso no console:

```
apt-get update
apt-get install default-jre npm nodejs
```

Certifique-se de ter o Java versão 11 ou posterior, NPM versão 6.14.4 ou posterior e Node.js versão 10.19.0 ou posterior

## 2. Baixe o Apache Tika.

Baixe o Apache Tika neste link: https://tika.apache.org/download.html

Em seguida, no console ou Terminal, digite:

```
java -jar tika-server-standard-2.3.0.jar
```

(os números no final do nome do arquivo podem mudar)

Certifique-se de ter o Tika 2.3.0 ou posterior.

## 3. Baixe e instale o Python

Se você ainda não possui o Python em seu computador, recomendamos baixá-lo em [Anaconda](https://www.anaconda.com/download). Certifique-se de ter o Python 3.9 ou posterior.

## 4. Baixe a API do Harmony

Visit the [API Github page](https://github.com/harmonydata/harmonyapi) and click Code -> Download ZIP. Unzip it on your computer.

## 5. Baixe os modelos de aprendizado de máquina e as dependências do Python

No terminal ou console, digite

```
pip install -r requirements.txt
python harmony/src/harmony/util/model_downloader.py 
```

## 6. Execute a API do Harmony

No terminal ou console, digite

```
python main.py
```

## 7. Baixe e execute o front-end do Harmony

Visit our [front end Github page](https://github.com/harmonydata/harmonydata.github.io) and click Code -> Download ZIP. Unzip it on your computer.

No Terminal, entre na pasta e digite

```
export REACT_APP_API_URL=http://localhost:8000/
npm install
npm start
```

Visite seu navegador em http://localhost:3000 e você verá o Harmony rodando lá.
