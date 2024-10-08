---
title: "Harmony: Natural Language Processing Tool for Item Harmonisation is now on CRAN"
description: Semantic text matching is a task in natural language processing involving estimating the semantic similarity between two texts
date: 2023-09-06
categories: ["development"]
image: "https://raw.githubusercontent.com/harmonydata/.github/main/profile/harmony_cran.gif"

aliases:
  - "/blog/harmony-cran/"
  - "/harmony-cran/"
  - "/harmony-natural-language-processing-tool-for-item-harmonisation-is-now-on-cran/"
url: "/open-source-for-social-science/harmony-cran/"
---


We are excited to announce that Harmony, an [open source](/open-source-for-social-science/) Natural Language Processing tool for data harmonisation, is now available on the Comprehensive R Archive Network [CRAN](https://cran.r-project.org/)!

Previously, [Harmony R](/open-source-for-social-science/harmony-r-package/) could be installed using [devtools](https://www.r-project.org/nosvn/pandoc/devtools.html).

Harmony can be used to compare questionnaire items across studies, find the best match for a set of items, and identify different versions of the same questionnaire. Harmony is a collaboration project between [Ulster University](https://ulster.ac.uk), [University College London](https://ucl.ac.uk), the [Universidade Federal de Santa Maria](https://ufsm.br), and [Fast Data Science](https://fastdatascience.com/harmony-wellcome-data-prize/). It has been funded by Wellcome as part of the [Wellcome Data Prize](https://wellcome.org/what-we-do/data-science-and-health-trustworthy-data-science/wellcome-data-prizes) in [Mental Health](/ai-in-mental-health/), as well as UKRI.

To install Harmony, you can use the following command in your [R console](https://docs.posit.co/ide/user/ide/guide/code/console.html) or [R Studio](https://posit.co/download/rstudio-desktop/):

```			
install.packages("harmonydata")
```

We encourage you to try Harmony and let us know what you think! You can also follow us on Twitter @harmonydata for updates.

{{< image src="images/cran.png" alt="cran" title="cran" >}}


## Are you excited to use Harmony to harmonise your instruments?

Here is a quick walkthrough on how to do it:

1. Import the Harmony library:

``` 
library(harmonydata)
```

2. Load the instruments from a file or URL:

``` r
instrument = load_instruments_from_file(path = "examples/GAD-7.pdf")
instrument_2 = load_instruments_from_file("https://medfam.umontreal.ca/wp-content/uploads/sites/16/GAD-7-fran%C3%A7ais.pdf") 
instruments = append(instrument, instrument_2)
```

3. Match the instruments:

``` r
match = match_instruments(instruments)
```

4. Get the results of the match:

``` r
names(match)
#> [1] "questions"        "matches"          "query_similarity"
```

As you can see, the `match` object contains a lot of information about the best match for each question in the query instrument. This information can be used to harmonise the instruments and make them more comparable.

We hope this walkthrough is helpful. Let us know if you have any other questions.

I'm so excited to see what you can do with Harmony!
