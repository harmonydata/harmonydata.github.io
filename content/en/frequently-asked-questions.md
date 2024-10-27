---
title: Frequently Asked Questions
---

{{< htmlcode >}}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Harmony",
  "applicationCategory": "Research Tool",
  "url": "https://harmonydata.ac.uk/app",
  "publisher": "Ulster University",
  "producer": "Fast Data Science Ltd, Delosis",
  "maintainer": "Thomas Wood",
  "license": "https://github.com/harmonydata/harmony?tab=MIT-1-ov-file#readme",
  "keywords": "data harmonisation, item harmonisation, natural language processing",
  "isAccessibleForFree": true,
  "funder": "Wellcome Trust, ESRC",
  "dateCreated": "2023-05-02",
  "citation": "https://doi.org/10.1186/s12888-024-05954-2",
  "offers": {
    "@type": "Offer",
    "price": 0,
    "priceCurrency": "USD"
  },
  "operatingSystem": "WINDOWS MAC LINUX",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "bestRating": 5,
    "ratingCount": 3
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      },
      "author": {
        "@type": "Person",
        "name": "Matthew Doyle"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      },
      "author": {
        "@type": "Person",
        "name": "Nathan Lutala"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      },
      "author": {
        "@type": "Person",
        "name": "Kunru Song"
      }
    }
  ]
}
</script>
{{< /htmlcode >}}

## What is harmonisation?

Harmonisation means taking variables from [different studies](/item-harmonisation/harmony-a-free-ai-tool-to-merge-cohort-studies) and manipulating them to make them comparable.

For example, if we have datasets of depression from different countries, which is typically measured using a questionnaire, how can we harmonise two depression questionnaires? Typically this is a manual process – we would look at the content and find common elements between the questionnaires.

For an example of a pre-existing harmonisation tool, please see:

McElroy, E., Villadsen, A., Patalay, P., Goodman, A., Richards, M., Northstone, K., Fearon, P., Tibber, M., Gondek, D., & Ploubidis, G.B. (2020). [Harmonisation and Measurement Properties of Mental Health Measures in Six British Cohorts](https://www.closer.ac.uk/wp-content/uploads/210715-Harmonisation-measurement-properties-mental-health-measures-british-cohorts.pdf). London, UK: CLOSER.

## What does Harmony do?

Harmony is a tool that helps researchers automate the process of harmonisation using [natural language processing](https://fastdatascience.com/what-is-nlp/).

## How do I cite Harmony?

If you would like to cite our [validation study](/ai-in-mental-health/bmc-psychiatry-paper/), published in BMC Psychiatry, you can cite:

* McElroy, E., Wood, T.A., Bond, R., Mulvenna M., Shevlin M., Ploubidis G., Scopel Hoffmann M., Moltrecht B., [Using natural language processing to facilitate the harmonisation of mental health questionnaires: a validation study using real-world data](https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-024-05954-2#citeas). BMC Psychiatry 24, 530 (2024). https://doi.org/10.1186/s12888-024-05954-2


A BibTeX entry for LaTeX users is

```
@article{mcelroy2024using,
  title={Using natural language processing to facilitate the harmonisation of mental health questionnaires: a validation study using real-world data},
  author={McElroy, Eoin and Wood, Thomas and Bond, Raymond and Mulvenna, Maurice and Shevlin, Mark and Ploubidis, George B and Hoffmann, Mauricio Scopel and Moltrecht, Bettina},
  journal={BMC psychiatry},
  volume={24},
  number={1},
  pages={530},
  year={2024},
  publisher={Springer}
}
```

If you would like to cite the Harmony tool alone, you can cite:

Wood, T.A., McElroy, E., Moltrecht, B., Ploubidis, G.B., Scopel Hoffmann, M., Harmony [Computer software], Version 1.0, accessed at https://harmonydata.ac.uk/app. [Ulster University](https://ulster.ac.uk) (2022)

A BibTeX entry for LaTeX users is

```vshell
@unpublished{harmony,
    AUTHOR = {Wood, T.A., McElroy, E., Moltrecht, B., Ploubidis, G.B., Scopel Hoffman, M.},
    TITLE  = {Harmony (Computer software), Version 1.0},
    YEAR   = {2022},
    Note   = {To appear},
    url = {https://harmonydata.ac.uk/app}
}
```

You can also cite the wider Harmony [project](https://fastdatascience.com/starting-a-data-science-project) which is registered with the [Open Science Foundation](https://osf.io/bct6k/):

McElroy, E., Moltrecht, B., Scopel Hoffmann, M., Wood, T. A., & Ploubidis, G. (2023, January 6). Harmony – A global platform for contextual harmonisation, translation and cooperation in mental health research. Retrieved from osf.io/bct6k

```vshell
@misc{McElroy_Moltrecht_Scopel Hoffmann_Wood_Ploubidis_2023,
  title={Harmony - A global platform for contextual harmonisation, translation and cooperation in mental health research},
  url={osf.io/bct6k},
  publisher={OSF},
  author={McElroy, Eoin and Moltrecht, Bettina and Scopel Hoffmann, Mauricio and Wood, Thomas A and Ploubidis, George},
  year={2023},
  month={Jan}
}
```

## Does Harmony store my data?

If you upload a questionnaire or instrument, Harmony does not store or save it. You can read more on our [Privacy Policy page](/privacy-policy/).

## How does Harmony work?

Harmony passes the [text](/nlp-semantic-text-matching/) of each questionnaire item through a [neural network](https://fastdatascience.com/how-similar-are-neural-networks-to-our-brains) called Sentence-[BERT](https://en.wikipedia.org/wiki/BERT_%28language_model%29), in order to convert it into a vector. The [similarity](https://fastdatascience.com/finding-similar-documents-nlp) of two texts is then measured as the similarity between their vectors. Two identical texts have a similarity of 100% while two completely different texts have a similarity of 0%. You can read more in this [technical blog post](https://harmonydata.ac.uk/how-does-harmony-work/) and you can even download and run Harmony’s [source code](https://github.com/harmonydata/harmony).

## How reliable is Harmony?

Harmony was able to reconstruct the matches of the questionnaire harmonisation tool developed by McElroy et al in 2020 with the following AUC scores: childhood **84%**, adulthood **80%**. Harmony was able to match the questions of the English and Portuguese [GAD-7](https://adaa.org/sites/default/files/GAD-7_Anxiety-updated_0.pdf) instruments with AUC **100%** and the Portuguese [CBCL](https://www.apa.org/depression-guideline/child-behavior-checklist.pdf) and SDQ with AUC **89%**. You can read more in [this blog post](/nlp-semantic-text-matching/measuring-the-performance-of-nlp-algorithms/).

## What do the numbers mean?

The numbers are the cosine similarity of document vectors. The cosine similarity of two vectors can range from -1 to 1 based on the angle between the two vectors being compared. We have converted these to percentages. We have also used a preprocessing stage to convert positive sentences to negative and vice-versa (e.g. _I feel anxious_ → _I do not feel anxious_). If the match between two sentences improves once this preprocessing has been applied, then the items are assigned a negative similarity.

## Does Harmony give p-values?

At this time Harmony does not give p-values. Harmony matches vectors using a cosine score and p-values are not applicable in this context.

## How should I report the numbers from Harmony in my paper?

Items were matched on content using the online tool [Harmony](https://harmonydata.ac.uk/), which matches items by converting text to vectors using a transformer neural network ([Reimers & Gurevych, 2019](https://arxiv.org/abs/1908.10084)). Harmony produces a cosine score ranging from +/- 1, with values closer to 1 indicating a closer match.

## How does Harmony compare to human harmonisation?

If you imagine as a human, trying to match items in a questionnaire, you might decide that “I feel depressed” and “I feel sad” are similar. If you had to place them on the surface of a sphere, you might place them close to each other. Whereas different concepts might be far from each other.

We can represent [any concept](/nlp-semantic-text-matching/harmony-on-kufungisisa-a-cultural-concept-of-distress-from-zimbabwe/) as a vector of length 1, pointing to the surface of a sphere. Concepts that are similar have vectors close together. The cosine score of two vectors that are close together is close to 1.

{{< image src="/images/sphere.svg" alt="sphere" >}}

*You can try playing with a large language model in your browser [in this blog post](https://fastdatascience.com/natural-language-processing/semantic-similarity-with-sentence-embeddings/). Input two sentences and you can see the vector values and the cosine similarity.*

## Who made Harmony?

The [Python](https://www.python.org/) code of Harmony was written by [Thomas Wood](https://freelancedatascientist.net/) (Fast Data Science) in collaboration with Eoin McElroy, Bettina Moltrecht, George Ploubidis, and Mauricio Scopel Hoffman.

## Does Harmony comply with FAIR data principles?

We have developed Harmony as an open-source and open science initiative, paying attention to the [FAIR Guiding Principles for scientific data management and stewardship](https://www.go-fair.org/fair-principles/) (**F**indability, **A**ccessibility, **I**nteroperability, and **R**euse of digital assets). You can read more on our [FAIR data page](/fair-data/).

## What do other researchers say about Harmony?

We recently did a user-testing at [UCL](https://ucl.ac.uk)’s [Centre for Longitudinal Studies (CLS)](https://cls.ucl.ac.uk/) with psychology researchers from several universities. After the session, one postdoctoral researcher said:

{{< image src="/images/quote.png" alt="quote" >}}

