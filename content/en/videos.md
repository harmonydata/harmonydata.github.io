---
title: Harmony Videos
---

# Videos

## Harmony orientation session 19 Feb 2024

{{< youtube WAWRgCHSV5I >}}

Interested in contributing to an open source project involving psychology and natural language processing? Whether you're new to Harmony or looking to dive deeper into our projects, this event is for you.


* Introduction to Harmony
* Overview of Current Projects
* How to Get Involved

Key points from the video 
* Harmony is free to use under the MIT license and aims to build a community of developers for further development.
* The tool parses questionnaire items from PDFs and allows psychologists to export the data as Excel.
* Key areas needing help:
    * **PDF processing:** Extracting text from PDFs is currently challenging.
    * See [Kaggle competition for PDF data extraction](/open-source-for-social-science/kaggle/)
* Ways to contribute:
    * Fork the code on GitHub (3 repositories: library, API, front-end).
    * Add a new feature (e.g., GPT support).
    * Create a pull request with unit tests.
    * Discuss ideas on Discord.
* Resources:
    * Website: harmonydata.ac.uk
    * GitHub: [https://github.com/harmonydata/harmony](https://github.com/harmonydata/harmony)
    * Discord: [https://discord.gg/harmonydata](https://discord.gg/harmonydata)
    * [Ideas list](/ideas/)
    * [Kaggle competition for PDF data extraction](/open-source-for-social-science/kaggle/)

* The video includes a demonstration of the tool and the contribution process.
* The team welcomes any ideas and contributions from the community.

## Install Harmony R library on Windows 10:

{{< youtube hFqg6T_BqZc >}}

[Click here to download an example notebook in R markdown](/open-source-for-social-science/harmony-r-notebook-r-markdown-example/).

* Launch a web browser and go to the [CRAN](/open-source-for-social-science/harmony-cran) website.

* Find the download link for R for Windows.
* Download the R installer file and open it.

* Accept all the conditions, choose the installation language, and read the terms and conditions.

* Click Next and choose your local installation location.

* Go through all the options and press Next again and again until the installation is complete.

* Click Finish to exit the installer.

To install the Harmony package:

Open R.

Type the following command:

```
install.packages("harmonydata")
```

Select where on your local machine you want to install Harmony.

Also, you can choose a CRAN mirror that is close to your location.

Once the installation is complete, you can import Harmony into your R session:

```
library(harmonydata)
```

To harmonise two PDFs:

* Download the two PDFs that you want to harmonise.
* Load the two PDFs into R using the load_instruments_from_file() function.
* Append the two instruments into a list of instruments.
* Call the match() function to harmonise the two instruments.
* Export the results to a CSV file.
* Here is an example of how to harmonise two PDFs in R:


### Load the two PDFs
```
instrument_1 <- load_instruments_from_file("PHQ-9.pdf")
instrument_2 <- load_instruments_from_file("GAD-7.pdf")
```
### Append the two instruments into a list
```
instruments <- list(instrument_1, instrument_2)
```
### Harmonise the two instruments
```
matches <- match(instruments)
```

### Export the results to a CSV file

```
write.csv(matches, "harmonised_instruments.csv")
```
This will create a CSV file called harmonised_instruments.csv that contains the harmonised instruments.



## Introduction to Harmony: Data harmonisation with [natural language processing](https://naturallanguageprocessing.com/)

{{< youtube cEZppTBj1NI >}}

**Summary**

Harmony is a tool that helps researchers harmonise and compare questionnaires and instruments across social sciences, market research, and political polling. The video shows how to use Harmony to integrate data from different sources.

The video begins by showing how to upload a PDF or Excel file of a questionnaire into Harmony. If the file is a PDF, Harmony will extract the questions from it. If the extraction fails, the user can edit or delete rows.

The video then shows how to select multiple questionnaires to be harmonised. In this example, the user selects the CES-D, SCARED English questionnaire, and [GAD-7](https://adaa.org/sites/default/files/GAD-7_Anxiety-updated_0.pdf) Portuguese questionnaire collected in Brazil.

Once the questionnaires have been selected, Harmony will match the questions from each questionnaire to the questions in the other questionnaires. The user can then adjust the match threshold percentage to control how strict or lenient the question match is.

The video concludes by showing how to export the harmonised data from Harmony.

Here are some of the key features of Harmony:

* It can harmonise [questionnaires](/data-harmonisation/harmonising-questionnaire-data-consistency) in PDF or Excel format.
* It can match questions from different questionnaires based on their meaning, not just their exact wording.
* It allows the user to adjust the match threshold percentage to control how strict or lenient the question match is.
* It can export the harmonised data in a variety of formats, including Excel, CSV, and JSON.
* Harmony is a powerful tool that can help researchers harmonise and compare questionnaires and instruments across different sources. It is easy to use and can be customised to meet the specific needs of the user.

## Installing Harmony [Python](https://www.python.org/) library and getting started with French and English instruments

{{< youtube enWh0-4I0Sg >}}

**Summary**

This video is about how to install and use Harmony, a tool for [harmonising](/data-harmonisation/back-to-the-future-retrospectively-harmonising-questionnaire-data/) and comparing questionnaires and instruments. The video starts by explaining what Harmony is and how it can be used. Then, the video walks through the steps of installing Harmony, including installing Python, Anaconda, Tika, and Java. Once Harmony is installed, the video shows how to use it to match questionnaires. The video also shows how to download an instrument from a PDF and how to work with a [multilingual](https://fastdatascience.com/multilingual-natural-language-processing/) model.

Here are some of the key points from the video:

* Harmony is a Python library that can be used to harmonise and compare questionnaires and instruments.
* Harmony can be used to match questionnaires across different languages.
* Harmony can be used to extract instrument texts from PDFs.
* Harmony works with multilingual documents - in fact, it supports over eight [languages](/psychology-ai-tool/harmony-many-languages)!

The video is a good introduction to Harmony and how it can be used. The video is clear and easy to follow, and it provides a good overview of the features of Harmony.

Here are some of the specific steps that are shown in the video:

* Installing Python and Anaconda.
* Installing Tika and Java.
* Downloading Harmony.
* Loading example instruments.
* [Matching](/nlp-semantic-text-matching/) questionnaires.
* Downloading an instrument from a PDF.
* Working with a multilingual model.
  
The video also includes some helpful tips, such as how to use the `match_instruments_with_function` function to use a different matching function such as OpenAI.

This video is a good resource for anyone with some Python programming knowledge, who wants to learn more about Harmony and become an advanced user of the tool. The video is clear, easy to follow, and provides a good overview of the features of Harmony.

## How easy is it to harmonise questionnaires?

{{< youtube uHjPNKb8SI4 >}}

## How to harmonise questionnaire data in psychology using Harmony at [harmonydata.ac.uk](https://harmonydata.ac.uk)

{{< youtube IxRDAU84ACU >}}


