---
title: How Far Can We Go With Harmony? Testing On Kufungisisa, A Cultural Concept Of Distress From Zimbabwe
description: Many psychologists believe that mental illnesses can vary across cultures. In 1904, Emil Kraepelin initiated the field of comparative psychiatry after studying mental health disorders in Java....
date: 2023-04-02
categories: ["nlp"]
image: /images/blog/ccd.png


aliases:
  - "/blog/how-far-can-we-go-with-harmony-testing-on-kufungisisa-a-cultural-concept-of-distress-from-zimbabwe"
  - "/how-far-can-we-go-with-harmony-testing-on-kufungisisa-a-cultural-concept-of-distress-from-zimbabwe/"
url: "/nlp-semantic-text-matching/harmony-on-kufungisisa-a-cultural-concept-of-distress-from-zimbabwe/"
---

Many psychologists believe that mental illnesses can vary across cultures. In 1904, [Emil Kraepelin](https://en.wikipedia.org/wiki/Emil_Kraepelin) initiated the field of comparative psychiatry after studying mental health disorders in Java, writing that _“Die Eigenart eines Volkes wird auch in der Häufigkeit und klinischen Gestaltung seiner Geistesstörungen zum Ausdruck kommen,”_ meaning “The peculiarity of a people[ethnic group] will also be expressed in the frequency and clinical form of its mental disorders.”[1]

More than a century later, the emergence of global mental health research [projects](/projects-partners) has opened a number of debates about the applicability of psychiatric categories to different cultural settings, such as those in the Diagnostic and Statistical Manual of Mental Disorders (DSM) series[2].

In 2013, the publication of DSM-5 included for the first time Cultural Concepts of Distress (CCD), referring to “ways that cultural groups experience, understand, and communicate suffering, behavioral problems, or troubling thoughts and emotions”[2].

Examples of cultural concepts of distress include:

- “Los nervios” or “ataque de nervios” (Spanish) – literally “attack of nerves”, a concept of severe distress, often linked to interpersonal disputes in Latino and Spanish-speaking cultures[3]. “Los nervios” are associated with physical and functional impairments.
- “Kufungisisa” (Shona) – literally “thinking too much”, this is a term used in Zimbabwe to describe both the cause and the symptoms of mental health problems such as [anxiety](/harmonisation-validation/patient-reported-outcome-measure-information-system-promis-anxiety-subscale) and [depression](/harmonisation-validation/promis-depression-subscale). Patel et al[4] suggested describing this as “feeling stressed” or as a “non-specific neurotic mental illness”.
- “Hikikomori” (Japanese) – a form of severe social withdrawal whereby an adolescent or young adult becomes a recluse in their parents’ home and does not work or attend school for long periods of time[5].

Can we use Harmony to harmonise mental health instruments designed for different cultural settings where some disorders may have no direct equivalent in one culture?

## Using Harmony in Google Colab

> Zvaita sei kuti chembere yorasika, bere rorutsa imvi? (How is it that the old woman is missing and the hyena is vomiting grey hairs?)

{{< image src="images/blog/pexels-bigworldinalens-11307036-1024x682.jpg" alt="img" >}}


> Shona proverb (similar to English “there’s no smoke without fire”)

If you are a [Python](https://www.python.org/) user, you can follow my experiment in this Jupyter Notebook, which you can open in Google Colab: https://github.com/harmonydata/

Shona (_chiShona_) is spoken in Zimbabwe and belongs to the Bantu language family, which also includes Zulu, Xhosa, and Swahili.

| Shona       | English                                                                      |
| ----------- | ---------------------------------------------------------------------------- |
| funga       | think                                                                        |
| kufunga     | to think                                                                     |
| ndofunga    | I think                                                                      |
| -isa        | (causative suffix: “to cause to do”)                                         |
| -isisa      | (intensive suffix: “to do quickly”)                                          |
| kufungisisa | think deeply, think too much; a Shona idiom for non-psychotic mental illness |

In Shona, derived verbs can be created from simple verbs by attaching suffixes to the verb stem.

I tried using Harmony to see how it would harmonise “kufungisisa” (thinking too much) to a Western instrument such as [GHQ-12](/gad-7-vs-ghq-12).

Although English is the best-resource language for [natural language processing](https://naturallanguageprocessing.com/), [multilingual NLP techniques](https://fastdatascience.com/multilingual-natural-language-processing/) are catching up even for lower-resourced [languages](/harmony-supports-over-8-languages). There exist some [NLP](https://fastdatascience.com/portfolio/nlp-consultant/) [models](https://harmonydata.ac.uk/semantic-text-matching-with-deep-learning-transformer-models) for Shona. I used the sentence [transformer](https://harmonydata.ac.uk/how-does-harmony-work) model `Davlan/xlm-roberta-base-finetuned-shona` which is a modification of ROBERTA trained on Shona texts[7]. I plugged one into Harmony and tried to match the [Shona symptom questionnaire for the detection of depression and anxiety](https://depts.washington.edu/edgh/zw/hit/web/project-resources/shona_symptom_questionnaire.pdf), which is used in Zimbabwe[6].

{{< image src="images/blog/Screenshot-from-2023-07-13-12-34-30.png" alt="img" >}}


Above: the text of the Shona symptom questionnaire for the detection of depression and anxiety.

A problem I encountered was that the [transformer model](/nlp-semantic-text-matching/) didn’t work for both Shona and English (it’s not multilingual, like Harmony’s default transformer model). I Google translated [GHQ-12](/ghq-12-vs-beck-anxiety-inventory) into Shona as a temporary measure.

Also, the transformer model did not operate as a sentence transformer, but rather as a token-level transformer, so my sentence vectors were made by averaging token vectors across an input.

My model’s output is below:

{{< image src="images/blog/image-1-b.png" alt="img" >}}


Harmony and the Shona transformer model matched the question about “kufungisisa” to GHQ-12 question 1 “been able to concentrate on whatever you’re doing?” which seems approximately OK. However, I would need a Shona native speaker to validate my results.

Also, when we are using English and Portuguese texts, which has until now been our go-to bilingual combination, we have had the advantage that some multilingual models cover both languages and so it’s possible to directly compare in both source languages. In the absence of an LLM (large language model) which can handle both Shona and English, it’s not possible to directly compare English and Shona text, but my experiment above shows that Harmony can work on monolingual Shona text.

## Further reading

You may want to read about my [experiments with semantic text matching with deep learning transformer models](/nlp-semantic-text-matching/).

## References

1. E. Kraepelin: Vergleichende Psychiatrie. Zentralblatt für Nervenheilk. u. Psychiat. Nr. 174, 433-437. 1904 (39)
2. American Psychiatric Association (2013) Diagnostic and statistical manual of mental disorders, 5th Edition. Washington, D.C.: American Psychiatric Publishing, Inc.
3. Kohrt, Brandon A., et al. “Cultural concepts of distress and psychiatric disorders: literature review and research recommendations for global mental health epidemiology.” International journal of epidemiology 43.2 (2014): 365-406.
4. Patel, Vikram, Essie Simunyu, and Fungisai Gwanzura. “Kufungisisa (thinking too much): a Shona idiom for non-psychotic mental illness.” The Central African journal of medicine 41.7 (1995): 209-215.
5. Teo, Alan Robert, and Albert C. Gaw. “Hikikomori, a Japanese culture-bound syndrome of social withdrawal? A proposal for DSM-V.” The Journal of nervous and mental disease 198.6 (2010): 444.
6. Shona symptom questionnaire, https://depts.washington.edu/edgh/zw/hit/web/project-resources/shona_symptom_questionnaire.pdf, retrieved 13 July 2023
7. Alabi, Jesujoba O., et al. “[Adapting pre-trained language models to African languages via multilingual adaptive fine-tuning](https://arxiv.org/abs/2204.06487).” arXiv preprint arXiv:2204.06487 (2022).
