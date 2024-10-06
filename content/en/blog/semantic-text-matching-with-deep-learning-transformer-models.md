---
title: Semantic Text Matching With Deep Learning Transformer Models
description: Semantic text matching is a task in natural language processing involving estimating the semantic similarity between two texts. For exam...
date: 2023-02-08
categories: ["nlp"]
image: /images/blog/gad7-becks.jpg
aliases: ['/semantic-text-matching-with-deep-learning-transformer-models/']

url: "/nlp-semantic-text-matching/"
---

Semantic text matching is a task in [natural language processing](https://naturallanguageprocessing.com/) involving estimating the semantic [similarity](https://fastdatascience.com/finding-similar-documents-nlp/) between two texts. For example, if we had to quantify the similarity between “I feel nervous” and “I feel anxious”, most people would agree that these are closer together than either sentence is to “I feel happy”. A semantic text matching algorithm would be able to place a number on the similarity, such as 79%.

A semantic text matching algorithm is distinct from a simple text similarity algorithm, which merely looks at the surface form of a text. A semantic matching must be aware of the similarity of meaning between “nervous” and “anxious”.

## Why do we need semantic text matching?

The main applications of semantic text matching are in areas such as web search or information retrieval, question answering, and recommendation systems. However, there are other, more niche, applications. For example, in the Harmony [project](https://fastdatascience.com/starting-a-data-science-project), we are using semantic text matching for harmonisation of datasets in the social sciences. 

A semantic text matching problem is usually framed as matching a source text to many target texts.

In an information retrieval system, this would mean that the documents to be searched must be indexed efficiently. So, if you have a query like “What is data harmonisation?” and 1000 documents to search, you would not necessarily calculate the semantic similarity between all pairs, as this would be inefficient. More probably, you would use a less sophisticated tool, such as text-level matching, to generate a shortlist of candidate documents.

In the case of Harmony, we want to measure the similarity of every item in a questionnaire, to every item in another questionnaire. The simplest way to do this is to convert every questionnaire item to a semantic representation, and then calculate the *n*×*n* matrix of similarities for all *n* items.

## Semantic text matching with Transformers

Recent advancements in deep learning have enabled a new type of semantic text matching technique through [Transformer models](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)), such as [BERT](https://en.wikipedia.org/wiki/BERT_%28language_model%29), [GPT-3](https://openai.com/api/), and the recently announced [Google BARD](https://blog.google/technology/ai/bard-google-ai-search-updates/).

[Transformer](/how-does-harmony-work) models operate on sequences of words, and transform entire sentences in many languages into a vector representation in high-dimensional space. Then we can quantify the similarity between sentences with a simple metric such as Euclidean or cosine distance. This enables us to measure the similarity between words.

In developing Harmony, the most performant algorithm tested so far was GPT-3, however, as the field is evolving so rapidly, this is likely to be out of date very soon. So please watch our blog, and in the meantime you can [test out Harmony](https://harmonydata.ac.uk/app/) on your data.

Transformer models have proven to be very effective in semantic text matching. They are also very efficient in terms of computational resources and can easily scale to large datasets. This makes them a great choice for applications related to text matching tasks.

## See also

* [Harmony on "kufungisisa": a cultural concept of distress from Zimbabwe](/nlp-semantic-text-matching/harmony-on-kufungisisa-a-cultural-concept-of-distress-from-zimbabwe/)
