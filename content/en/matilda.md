---
title: " Matilda Centre at the University of Sydney using Harmony"
---


{{< htmlcode >}}
<img src="/images/matilda.webp" />
{{</ htmlcode >}}


## Case Study: Harmonising Psychological Distress Measures with Harmony

Dr. Deanna Varley and Associate Professor Matthew Sunderland, both based at the [Matilda Centre at the University of Sydney](https://www.sydney.edu.au/matilda-centre/), have been using Harmony on a data harmonisation project with large population-based Australian surveys that have measured psychological distress with different scales and sometimes with different versions of the same scale.

Their goal was to identify pre-existing data in Australia that has measured psychological distress and to combine and harmonise multiple large-scale Australian population surveys, each employing various psychological distress measures, into a unified dataset. 

## The challenge

The primary challenge was the heterogeneity of the psychological distress measures used across the different surveys. While many surveys employed the [Kessler Psychological Distress Scale](https://www.tac.vic.gov.au/files-to-move/media/upload/k10_english.pdf) (K10), others used variations of the K10 or entirely different scales such as the [mental health component of the SF-36](/harmonisation-validation/sf-36-health-survey/).

Examples of the kinds of items Dr Varley was matching include

> During the past four weeks, have you accomplished less than you would like as a result of any emotional problems, such as feeling depressed or anxious?

and

> During the past four weeks, how much of the time have you had any of the following problems as a result of any emotional problems (such as feeling depressed or anxious)? Accomplished less than you would like.

## Data Collection and Preparation

Dr. Varley compiled a list of 282 surveys, each containing various psychological distress measures, from various sources including the [Australian Data Archive](/ada/).

She manually extracted the exact wording of each item from the survey instruments, and then used [Harmony’s R library](/open-source-for-social-science/harmony-r-package/) to match the items by pairs and identify which surveys contained matching or partially matching instruments.

Dr Varley also provided feedback on how to improve the tool and example R scripts which we have included in the [R examples repository](/open-source-for-social-science/example-repository/).

Dr Varley wrote to us on [the Harmony Discord server](/community/),

> Thanks so much for developing this great tool! It's been so useful for our research and has made our work significantly faster and easier.
