---
title: "Harmony updates in March 2025"
description: Harmony updates in March 2025
date: 2025-03-11
categories: ["development"]
image: "/images/harmony-change-model.png"

url: "/open-source-for-social-science/harmony-updates-r-and-fine-tuned-llm/"
---

We have a number of exciting updates to Harmony including:

* some improvements to the R library which have been asked for by researchers around the world who have been using Harmony on studies in lots of different topics as well as
* making our own fine tuned large language model available in the web UI, which is José's winning model from the [DOXA challenge which ended on 10 January 2025](/matching-challenge-winner-announcement/).

## Harmony has its own Large Language Model!

Over a period of a few months ending in January 2025 we made a dataset public and available for people all over the world to download and fine tune their own sentence transformer model. We ran this as a challenge on [DOXA AI](https://doxaai.com/competition/harmony-matching).

The motivation for this challenge was that users were reporting that Harmony often lacked psychology specific domain knowledge and tends to group items together if they appear superficially similar, e.g. items to do with the topic of "sleep", and a mental health specific model with needed which would better differentiate topics within the mental health domain. We found that Harmony and other open weights and proprietary LLMs had [varying performances on different datasets](/nlp-semantic-text-matching/measuring-the-performance-of-nlp-algorithms/) and we thought it would be nice to try making our own LLM - or rather, asking our community to do it!

We received a fantastic number of submissions to the matching challenge, including a flurry of changes to our model leaderboard in the last few hours before the competition closed the [winner was announced](/matching-challenge-winner-announcement/) as José Inés Martínez Berard and the second place was awarded to Rafi Ahmed Riyaz Ahmed Patel. Both received prizes. We also appreciate the many runners up who submitted models to the challenge.

## Using the model on the web tool

You can now try José's winning model on Harmony on the web. Just select `harmonydata/mental_health_harmonisation_1` from the model dropdown.

{{< youtube mD5ZyDV8RDU >}}


## Using José's model from your code

If you are coding in Python, you can run this command to set an environment variable before you import Harmony
```
export HARMONY_SENTENCE_TRANSFORMER_PATH=harmonydata/mental_health_harmonisation_1
```

then you can use  Harmony as usual in the Python terminal

```
import harmony
instruments = [harmony.example_instruments["CES_D English"],
               harmony.example_instruments["GAD-7 Portuguese"]]
match_response = harmony.match_instruments(instruments)
similarity = match_response.similarity_with_polarity
for cluster in match_response.clusters:
    print (f"Cluster #{cluster.cluster_id}: {cluster.text_description}")
    for question in cluster.items:
        print ("\t", question.question_text)
```


The model is also available on HuggingFace Hub under the model ID [harmonydata/mental_health_harmonisation_1](https://huggingface.co/harmonydata/mental_health_harmonisation_1). The model converts English texts to 768 dimensions and has been trained by José to better differentiate mental health specific items.



## Updates to the R library

Here are the updates to the R library from Omar Hassoun. The R library is on CRAN at: https://cran.r-project.org/web/packages/harmonydata/index.html

Check out the example R notebook in Google Colab:  https://colab.research.google.com/github/harmonydata/experiments/blob/main/Harmony_R_example.ipynb

The new library:

1. lets you see clusters found by Harmony
2. shows instrument to instrument similarities
3. has an easier way to create an instrument from a list or something similar
4. outputs crosswalk tables
5. allows users to turn the negation on/off
6. allows users to turn within-instrument matches on/off

We would be grateful if you could give it a try and let us know if anything's unclear

There are a few other issues that we are working on, such as allowing users to harmonise response options and choose their own topics. We also welcome your contributions in these areas - check out the repo and issue board for the [Harmony R library](https://github.com/harmonydata/harmony_r)!

## Would you like to improve Harmony?

If you missed the DOXA competition, don't worry... there's another one! We're running a competition with £1000 in vouchers as first prize, where the challenge is to improve Harmony's questionnaire parsing. [Find out more here](/doxa-parsing/).

## Find us at AI UK

If you'd like to meet us in person, Harmony is an official sponsor of AI UK 2025, run by the Alan Turing Institute, and we will have a [stand at the event](https://harmonydata.ac.uk/ai-uk/) from 17 to 18 March at the QEII Conference Centre in London.
