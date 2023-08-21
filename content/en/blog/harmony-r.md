---
title: Harmony R released!
description: You can run Harmony in R
date: 2023-08-21
image: /images/r.png
---

We have developed the R package for Harmony. To get started, you need R installed on your system.

[Click here](https://colab.research.google.com/github/harmonydata/experiments/blob/main/Harmony_R_example.ipynb) to try an example in Google Colab.

[Here's a Jupyter Notebook with an example using Harmony in R](https://github.com/harmonydata/experiments/blob/main/Harmony_R_example.ipynb)

## Installing R library

We are currently submitting the R library to CRAN.

In the meantime, you can install the development version of harmonydata from
[GitHub](https://github.com/harmonydata/harmony_r) (documentation in the [README](https://github.com/harmonydata/harmony_r/edit/master/README.md) file):

You also need `devtools` which will already be there if you are using R Studio. If not, you can install `devtools` with the following command in the R console:

```
install.packages("devtools") # If you don't have devtools installed already.
```

Next, to install Harmony, run:

```
library(devtools)
devtools::install_github("harmonydata/harmony_r")
```

## Parsing a raw file into an Instrument

Let's import Harmony and harmonise an instrument.

If you want to read in a raw (unstructured) PDF or Excel file, you can
do this via a POST request to the REST API. This will convert the file
into an Instrument object in JSON.It returns the instrument as a list.

``` r
library(harmonydata)
instrument = load_instruments_from_file(path = "examples/GAD-7.pdf")
names(instrument[[1]])
#>  [1] "file_id"         "instrument_id"   "instrument_name" "file_name"      
#>  [5] "file_type"       "file_section"    "study"           "sweep"          
#>  [9] "metadata"        "language"        "questions"
```

You can also input a url containing the questionnaire.

``` r
instrument_2 = load_instruments_from_file("https://medfam.umontreal.ca/wp-content/uploads/sites/16/GAD-7-fran%C3%A7ais.pdf") 
names(instrument_2[[1]])
#>  [1] "file_id"         "instrument_id"   "instrument_name" "file_name"      
#>  [5] "file_type"       "file_section"    "study"           "sweep"          
#>  [9] "metadata"        "language"        "questions"
```

## Matching instruments

You can get a list containing the results of the match.Here we can see a
list of similarity score for each question comapred to all the other
questions in th other questionaire.

``` r
instruments = append(instrument, instrument_2)
match = match_instruments(instruments)
names(match)
#> [1] "questions"        "matches"          "query_similarity"
```
