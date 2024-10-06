---
title: "Survey Data Harmonisation - The steps and expected results"
Discription: "Data harmonisation is a cornerstone of modern biopharmaceutical research and development. By standardizing data from disparate sources, the industry can improve the quality and efficiency of drug development processes, ensure regulatory compliance, and ultimately enhance patient outcomes."
date: 2024-05-06
#date: 2024-03-05
draft: true
image: "/images/07- Survey data harmonisation - the steps and expected results.svg"
categories: ["data"]
---

# Survey Data Harmonisation – Overview

Surveys have become very important data sources for both social and natural sciences. In fact, in most cases, they are the primary data sources which are relied upon for scientific research.

The process of drawing information from multiple surveys – all of which may very well have been conducted across different locations and/or time zones – can notably enhance the inferential capacity of those surveys. However, this demands major data processing and statistical processing efforts to begin with.

If this is your first time working with survey data harmonisation and automated data harmonisation or auto harmonisation questionnaires – you can use [Harmony](https://harmonydata.ac.uk/app) to meet the underlying objectives in an easier, more practical and cost-effective way.

At the basic level, survey data harmonisation is a collection of procedures which are used to improve either the data comparability or inferential capacity (or both) of multiple surveys. In this regard, Harmony offers a variety of documentation, data processing, and file/type conversion aspects of multiple workflows pertaining to automated data harmonisation for surveys. It’s a great way to pick things up quickly from a technical standpoint as you begin your research.

From a purely technical standpoint, survey data harmonisation aims to create a single, tidy, unified, and ‘harmonised’ dataset – which is in the form of a data frame containing a row identifier. This identifier is completely unique across all observations, and contains both the concatenated variables as well as the harmonised ones.

Therefore, harmonisation of survey data creates fresh opportunities for research by extending the geographical and time coverage of analyses. Researchers today are required to combine data from multiple survey projects in order to analyse them all as a single dataset – and even though teams engaged in survey data harmonisation are continually expanding the information they must provide to their respective end users, commonly agreed standards still do not exist when it comes to the documentation of data processing.

While survey projects at the international multi-wave level are a significant advancement within the social sciences infrastructure in terms of cross-national research – their country and time coverage continue to remain limited due to specific organisational conditions, availability of funding, interests or motivations of principal investigators, and more.

auto harmonisation questionnaires or surveys can help to overcome these limitations, creating larger datasets within both global coverage and time series needed for longitudinal analyses. This can then pave the way for stronger testing of theoretical mechanisms. It’s no surprise then that automated data harmonisation for existing data to exploit its potential to the fullest has become a common initiative in empirical social sciences.

With that said, current survey data harmonisation projects still tend to choose recode scripts which are, for the most part, quite hard to read, modify, and resuse. However, by using Harmony’s flexible and software-agonistic set of tools which include the programming language R, you can easily explore, recode, and document all your survey data harmonisation efforts. Many social scientists are already taking advantage of it, with fantastic results to report.

## What does a typical survey data harmonisation workflow look like?

The ordering in a survey harmonisation workflow is flexible. In fact, it is quite likely that the same researcher will choose a different workflow when it comes to simpler harmonisation tasks versus more complex ones.

However, from a data science aspect, a successful survey harmonisation task will always see the creation of a consistent data frame containing harmonised information from several surveys. This also means that practically all auto harmonisation questionnaires (PDF) are mapped into variables using consistent numerical coding, thus, handling missing as well as special values – and descriptive metadata which contains both variable and value labels.

This may sound like a laborious task at a glance, especially with surveys being conducted in different years, saved in multiple file formats across different metadata structures, missing and special values being handled differently, or the metadata containing possibly different natural language descriptions/spellings altogether. However, using Harmony, you can make your auto harmonisation questionnaires consistent no matter what the parameters may be.

Let’s start with a simple example. Survey no.1 has labels for the respondents’ genders as “Male” and “Female”, but also has cases that are neither _Male_ nor _Female_, and we do not know why (yet):


```
library(labelled)
survey_1 <- data.frame(
  sex = labelled(c(1,1,0, NA_real_), c(Male = 1, Female = 0))
)
attr(survey_1, "id") <- "Survey 1"

survey_2 <- data.frame(
  gender = labelled(c(1,3,9,1,2), c(male = 1, female = 2, other = 3, declined = 9))
)
attr(survey_2, "id") <- "Survey 2"

library(dplyr, quietly = TRUE)
#> 
#> Attaching package: 'dplyr'
#> The following objects are masked from 'package:stats':
#> 
#>     filter, lag
#> The following objects are masked from 'package:base':
#> 
#>     intersect, setdiff, setequal, union
survey_1 %>%
  mutate ( sex_numeric = as_numeric(.data$sex), 
           sex_factor = as_factor(.data$sex))
#>   sex sex_numeric sex_factor
#> 1   1           1       Male
#> 2   1           1       Male
#> 3   0           0     Female
#> 4  NA          NA       <NA>
```


Survey no.2 records gender containing the very same gender information as Survey no. 1 but also allows people to identify the ‘Other’ aspect; it also labels cases when people decline to choose any of the gender categories:

```
survey_2 %>%
  mutate ( gender_numeric = as_numeric(.data$gender), 
           gender_factor  = as_factor(.data$gender))
#>   gender gender_numeric gender_factor
#> 1      1              1          male
#> 2      3              3         other
#> 3      9              9      declined
#> 4      1              1          male
#> 5      2              2        female
```

In essence, you should try to arrive at the following joining representation of the survey:

```
survey_joined  <- data.frame(
  id = c(1,2,3,4,1,2,3,4,5),
  survey = c(rep(1,4), rep(2, 5)),
  gender = labelled(c(1,1,0,9, 1,3,9,1,0), c(male = 1, female = 0, other = 3, declined = 9))
)

survey_joined %>%
  mutate ( id = paste0("survey_", .data$survey, "_", .data$id),
           gender_numeric = c(1,1,0,NA_real_, 1,3,NA_real_,1,0), 
           gender_factor  = as_factor(.data$gender), 
           is_female = ifelse (.data$gender_numeric == 0, 1, 0))
#>           id survey gender gender_numeric gender_factor is_female
#> 1 survey_1_1      1      1              1          male         0
#> 2 survey_1_2      1      1              1          male         0
#> 3 survey_1_3      1      0              0        female         1
#> 4 survey_1_4      1      9             NA      declined        NA
#> 5 survey_2_1      2      1              1          male         0
#> 6 survey_2_2      2      3              3         other         0
#> 7 survey_2_3      2      9             NA      declined        NA
#> 8 survey_2_4      2      1              1          male         0
#> 9 survey_2_5      2      0              0        female         1
```

### Understanding harmonisation of concepts

Effective automated data harmonisation and survey data harmonisation starts with creating a mental map of the measured concepts which need to be harmonised. For instance: what are the variables which contain reasonably similar information to be harmonised?

In our rather basic example above, the objective was to harmonise a binary sex with missing cases and a 4-level categorical variable on gender identification – as well as concatenate the harmonised vectors by binding/joining the data frames for Survey no. 1 and 2.

The metadata function in Harmony will help to map the information stored in the file representations of all the different surveys. This will, in turn, help to create a straightforward inventory containing all the various value ranges, numerical codes, variable labels, and missing cases.

### How variable names come into play

Data measuring reasonably or sufficiently similar concepts – that is, data that can be harmonised to begin with – is stored in variables having the same name in different data frames representing the survey. This means that they can be joined or bind together. For example, we may want to join / bind the rows of Survey_1 with Survey_2, or, we may wish to concatenate Survey_2$gender with Survey_1$sex.

Descriptive metadata pertaining to the variable – like “variable labels” in the SPSS files – can be recorded for documentation and, if required, harmonised across all surveys. So, for example, in SPSSS, Survey_1$sex may come with variable such as SEX of PARTICUPANT and Survey_2$gender may have the label GENDER IDENTIFICATION. This label needs to be harmonised either, _Gender_, _Sex_, or _The Respondent_.

### How variable coding & labels come into play

Variables measuring or recording the same concept (the respondents’ gender, for example) are coded exactly in the same way – for instance, males with 1, females with 0, non-binary respondents with 3, and participants refusing to mention their gender with 9. So, this would mean that our observations in Survey_2$gender coded by using numeric 2 must now be changed to a numeric 0.

Furthermore, variable labels have to be used consistently and in the exact same way: Survey_2$gender _female_ respondents and Survey_1$sex _female_ respondents will both be consistently labelled as ‘Female’.

### How variable types come into play

Variables measuring or recording the same concept are also stored in precisely the same R type, so that they are consistently concatenated across multiple surveys – or that they can be subsetting and, therefore, cross-cutting surveys. For example: female respondents from Survey 1 and 2 may be subsetted into a single female vector.

The labelled class within ‘labelled’ is not reasonably strict, as it allows inconsistent missing values. Harmony’s inherited labelled SPSS survey consistently contains all the necessary codes and labels, as well as the missing ranges and values, and so, it can be concatenated.

Technically, the numeric/factor representation of Survey_2$gender and Survey_1$sex can be concatenated, but this has to be done after harmonisation. Before harmonisation, this will lead to errors because females will be coded with ‘0’ or ‘2’. The ‘`as_factor()`’ and ‘`as_numeric()`’ methods within Harmony’s labelled SPSS survey class can handle any consistency issues easily.

### Reproducibility of the survey

The checking, revision, external review and audit of your data requires the individual steps to be replicated by a third party. This, naturally, will require documentation of the harmonisation steps – e.g. 1 = Women in Survey 1 and 0 = Female in Survey 2 resulted in 0 = Females in the harmonised dataset.

Our survey class is derived using \[_name of the relevant tool_\] which uses data.frame() as a base. It contains all the descriptive metadata about the survey among attributes.

The above is a very generic workflow example of survey data harmonisation where you’re utilising auto harmonisation questionnaires. With Harmony, your automated data harmonisation for surveys can become simple in a number of ways:

- Data importing functionality ensure that the survey data and metadata are accurately translated to R data classes as well as variable types.
- Metadata functionality help with analysis, normalisation and joining of the various metadata aspects across surveys – i.e. original variable names, variable & value labels, unique identifiers, etc.
- Multiple harmonisation functions help with the harmonisation of survey responses to questionnaire items, thus, ensuring that the labelling of values, coded values, and missing data are all handled consistently across all the different surveys.

Harmony has been tested extensively on multiple, international, harmonised surveys, including leading survey programs like \[_name 1_\] and \[_name 2_\]. Different survey data harmonisation and different users require different workflows, and this is where Harmony’s flexibility and versatility truly shine to assist with various workflows through unique ‘helper’ functions.

## Harmony for Auto Harmonisation Questionnaires PDF and more

Just to quickly reiterate the above steps:

### 1\. Importing of data

Survey data is typically in the form of stored databases, converted to complex files which retain (at the minimum) the coding, after which metadata is labelled together with the data. The underlying data is usually derived from systematic data collection or auto harmonisation questionnaires – for example, recording prices at shops or inspecting objects in nature.

Both the metadata and the data must be imported to the language R, allowing the necessary harmonisation tasks to be performed with the relevant R types.

### 2\. Harmonisation of concepts

Once the data has been imported with its respective metadata (like numerical coding and labelling), a map of the information in the R session must be created. This helps us prepare the survey data harmonisation plan.

So, we need to find information pertaining to sufficiently or reasonably similar concepts, as pointed out earlier, which can be harmonised to be joined into a single variable and, ultimately, a table of similar variables can then be joined.

We also create a map of the measured concepts which must be harmonised – for instance, a binary sex variable with missing cases and a 4-level categorical variable on gender identification which has both _other_ and _declined_ options. Harmony will help you understand how mapping the metadata of the various surveys can help to get started with this initial step.

### 3\. Harmonisation of variable names

We must then ensure that `Survey_2$gender` and `Survey_1$sex` can be concatenated into a gender vector or “survey_joined$gender”. If you’ve never worked with a Crosswalk Table, the Harmony app will make it really simple to understand and help you get started.

### 4\. Harmonisation of variable numerical codes & labels

Female=0 (`survey_1$sex`) and female=2 (`survey_2$gender`) will consistently become female=0. So, this means that missing and _declined_ values will be handled consistently.

### 5\. Keeping types consistent

In order to use the statistical functions in R with the concatenated version of `survey_2$gender` and `survey_1$sex`, the latter should have the same R type. In most cases, this is either `_number_` or `_factor_`, and in the context of data visualisation specifically, `_character_`. Harmony can help you quickly understand how to harmonise value tables.

### 6\. Survey reproducibility and documentation

If you want to review the statistical results as well as model results acquired from the joined data frame or concatenated variable, both have to be comparable with survey_2$gender and survey_1$sex. In addition, there must be a new and unique row ID for each observation.

If you’re interested in making your survey results available outside R through a different piece of software, for example, then the joined longitudinal data frame has to be exported in a fully consistent manner. Harmony has you covered in that aspect too.

## Conclusion: The Cross-Walk Workflow for Survey Data Harmonisation and its results

In this article, we’ve shed a good deal of light on a crosswalk-based workflow for survey data harmonisation where data typically comes in from multiple cross-national survey projects.

This procedure namely includes:

- Variable selection
- Variable recording
- Recording of variable or survey metadata which are needed from the given analysis’ perspective

This workflow based on crosswalk tables for the purpose of mapping source variables to target variables (including those for selected variables) and source to target values, constitutes a feasible alternative to the usual harmonisation scripts containing thousands of lines for documentation.

While the crosswalk approach does have its limitations (most of those apply equally to recode scripts too), it offers clear advantages too. For example, its readability and format encourages better transparency as well as replicability of data transformations.

Furthermore, machine-readable documentation which is based on crosswalks helps in collaboration, especially since this automated data harmonisation workflow may be used for recording variables through any programming language.

Even outside the context of harmonisation, the ability to provide variable-level metadata as tables provides for a more convenient, practical, and machine-readable alternative of survey documentation, compared to the typical PDF codebooks. These metadata tables can be extended through additional information in order to enable automated data processing – something which has already been proposed by 2019’s [Fragile Families and Child Wellbeing Study](https://journals.sagepub.com/doi/10.1177/20597991221077923#bibr16-20597991221077923).

Additionally, variable metadata tables act as a crucial source for secondary data users – they facilitate the latter with exploration and selection of the best-suited data sources.

In conclusion, all aspects of your survey’s planning, collection & dissemination process need to be taken into account when producing automated data harmonisation files or creating the necessary documentation – irrespective of whether you’re utilising input or output harmonisation as your main strategy. A key thing to always remember (we can’t stress on this enough!) is that users must have access to not just the harmonised end result but also the detailed information about the steps taken by the original producers – as well as the source materials – allowing users to fully understand the decisions made throughout the survey data harmonisation process.

Finally, keep these procedural steps in the back of your mind:

- Define the key elements of the survey data harmonisation – document everything from the beginning to ensure that each decision is captured so that a public-use data file exists at all times.
- Document every target variable to the greatest extent with information coming from all source variables, including transformation algorithms, and any deviations from the original harmonisation approach.
- While not entirely necessary, it would be a good idea to provide users with the code/syntax you used while creating new variables for the harmonised file. However, direct access to the original data may not be permissible in some cases because of confidentiality concerns – simply implement procedures to assist users in check-backs or re-transformations. Additionally, you may want to implement a restricted-use data agreement in order to provide access under controlled conditions.
- Provide your users with the most comprehensive documentation possible (including crosswalks especially), which describe all the respective relationships between variables in each one of the data files and their counterparts in the harmonised file. Harmony can help you present this level of documentation.
- Include the original auto harmonisation questionnaires PDF and any information about the data collection.
- Report on the most number of elements within the data lifecycle as each one applies to the specific harmonisation process, for example:
  - Study design & operational structure
  - Sample design, questionnaire design & instrument technical design
  - Adaptation of survey instruments and translation
  - Data collection
  - Data processing & statistical adjustment
  - Data dissemination

The number of survey data harmonisation projects are constantly increasing, which unfortunately, means that a general lack of commonly adhered to documentation standards for the harmonisation process negatively affects the reusability of the survey harmonisation materials and collaboration efforts.

Most harmonisation initiatives often document data processing using recode scripts – they’re hard to read, reuse and modify and can be very lengthy, containing thousands of lines.

While we have discussed at length the challenges involved in documenting the survey data harmonisation process, we have also presented crosswalks as one effective method for mapping the original coding scheme into a harmonised (common) one everyone can use without breaking a sweat.

The key approach described in this expansive article include automated data harmonisation which ensure efficiency in data processing, thus, allowing the flexibility needed to deal with the varying and often diverse standards found within survey datasets. Download the Harmony app and try it free for a limited trial period – it should help you see how simple it can be to complete the often complex processes revolving around survey data harmonisation.
