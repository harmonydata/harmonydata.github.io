---
title: Harmony supports over 8 languages!
description: How we are handling multiple languages in the Harmony project
date: 2023-08-19
categories: ["nlp"]
image: /images/multilingual.png


aliases:
  - "/harmony-supports-8-languages/"
  - "/harmony-supports-over-8-languages/"
url: "/psychology-ai-tool/harmony-many-languages/"
---

> Привет Гармония! 哈莫尼可以让中英文和谐！ שלום הרמוני Harmony peut aussi harmoniser les instruments en français.

We're happy to share some exciting news with you. Harmony now supports at least 8 languages: Portuguese, French, German, Spanish, Russian, Chinese, and Hebrew. This means that you can use Harmony to compare and harmonise questionnaire data across studies that are written in different languages. 

I evaluated Harmony's ability to match the [GAD-7](https://adaa.org/sites/default/files/GAD-7_Anxiety-updated_0.pdf) in 11 languages to the English version. I found that Harmony was able to achieve >95% AUC for 7 of the 11 non-English languages. 

{{< image src="images/multilingual_aucs.png" alt="Multilingual AUCs" title="Multilingual AUCs" >}}

You can follow my working [in the `experiments` repo in our Github](https://github.com/harmonydata/experiments/blob/main/README.md).

{{< image src="images/multilingual_gad.png" alt="Multilingual GAD-7" title="Multilingual GAD-7" >}}

## More about Harmony

Harmony is a data harmonisation [project](https://fastdatascience.com/starting-a-data-science-project) that uses [Natural Language Processing](https://naturallanguageprocessing.com/) to help researchers make better use of existing data from different studies by supporting them with the harmonisation of various measures and items used in different studies. Harmony is a collaboration project between [Ulster University](https://ulster.ac.uk), University College London, the Universidade Federal de Santa Maria, and [Fast Data Science](https://fastdatascience.com). 

Harmony can help you with the following tasks: 

• Find the best match for a set of items from a pool of existing questionnaires 

• Compare the compatibility of different versions of the same questionnaire 

• Translate questionnaire items from one language to another 

• Generate harmonised items that capture [similar concepts or culturally specific concepts](https://harmonydata.ac.uk/how-far-can-we-go-with-harmony-testing-on-kufungisisa-a-cultural-concept-of-distress-from-zimbabwe) across languages 

Harmony is easy to use and accessible online. You can upload your own questionnaires or use the ones available in the Harmony database. You can also choose the language of your input and output items. Harmony will then analyse the [semantic](https://harmonydata.ac.uk/semantic-text-matching-with-deep-learning-transformer-models) [similarity](https://fastdatascience.com/finding-similar-documents-nlp) and linguistic quality of the items and provide you with a list of possible matches and suggestions for harmonisation. 

By supporting [multiple languages](https://fastdatascience.com/multilingual-natural-language-processing/), Harmony can also help you reach a wider audience and collaborate with researchers from different countries and cultures. Harmony is constantly being updated and improved to provide you with the best service possible. 

If you are interested in using Harmony or learning more about it, please visit [the Harmony website](https://harmonydata.ac.uk) or [contact us](/contact). We would love to hear from you and [get your feedback](/open-source-for-social-science/what-features-would-you-like-to-see-in-harmony/) on our [tool](/psychology-ai-tool/). 

{{< image src="images/reiwa.svg" alt="Reiwa in Japanese" title="Reiwa in Japanese" >}}

_The Japanese characters above are pronounced "reiwa" and mean "beautiful harmony". [Reiwa](https://en.wikipedia.org/wiki/Reiwa_era) is the name of the current era in the Japanese official calendar, corresponding to Emperor Naruhito's reign as 126th Emperor of Japan, which began in 2019. The second character, [和](https://en.wiktionary.org/wiki/%E5%92%8C), signifies "peaceful" or "harmonious" in both Chinese and Japanese. In Chinese it's pronounced "hé", and in Japanese, "wa", as well as many other pronunciations._
