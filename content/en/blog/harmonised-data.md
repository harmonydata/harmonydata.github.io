---
title: "Harmonised Data"
description: "Harmonised data refers to the standardisation of disparate data formats, schemas, and structures across different sources to enable seamless integration and analysis. It's crucial for enhancing data quality, facilitating integration, improving decision-making, and increasing operational efficiency."
date: 2024-03-26
image: "/images/05- What is truly harmonized data - the practical overview.svg"

---

# About Harmonised Data and The Harmony Project

If you’ve ever heard of data integration then you can easily understand what harmonised data or data harmonisation is: where disparate data sources are brought together into a single, unified location. But where harmonisation goes a step further is that it reorganises data according to the parameters set by a single schema.

Let’s say you want to combine surveys or questionnaires on mental health with different kinds of wording for similar questions, like “anxiety vs. I feel anxious”. In psychology, market research, or social sciences, for example, this is a common problem, particularly when surveys are run by different organisations or in different regions altogether.

A data harmonisation project like Harmony uses NLP (natural language processing) to help researchers make vastly better use of existing data extracted from multiple studies – by providing them with the ‘harmonisation’ of the various items and measures used across different studies.

So, for instance, if your goal is to:

- Find the absolute best match for a certain set of items which must be extracted from a pool of existing surveys/questionnaires
- Translate items in questionnaires from one language to another
- Take different versions of a particular questionnaire and compare their compatibility
- Or generate harmonised items which capture similar concepts or specific cultural concepts across different languages

Then Harmony’s ease-of-use and accessibility online can help you get the job done a lot more effectively, easily, and practically. Simply upload your own questionnaires or use the ones provided by Harmony’s extensive online database. Take it a step further by choosing the language of both your input and output items, after which Harmony analyses the semantic similarity and linguistic quality of the items you feed it.

It will then provide you with a complete list of possible matches and suggestions to be used as harmonised data.

Since Harmony supports multiple languages, it can help you reach a much wider audience during your research, where you can better collaborate with researchers across multiple cultures and countries. Since Harmony’s database is constantly being updated in real time and improved consistently to provide researchers with the most in-depth and easy-to-access services possible, it is an active development project where you can contribute however you can.

Harmony is an open source code academic project and non-profit software package which allows psychologists and researchers conducting mental health surveys to improve and aid their research by comparing trends in, say, ADHD, anxiety, or depression, across cultures or time. As a volunteer, you can join the project and help us develop it better, or even if you don’t wish to contribute for now, you can use it extensively (completely free of cost) to carry out your own research and cite it in publications.

## How does Data Harmonisation work?

Harmonisation is a process which allows all kinds of data to be used for business and research processes, such as business intelligence (BI) and analytics, but without any of the issues which typically arise due to variations in file types, data types, or naming conventions.

In the context of mental health research in particular, Harmony lets you upload a set of mental health questionnaires, like the GAD-7 anxiety questionnaire, for instance, where you can choose to upload these either in Excel or PDF format.

Harmony will pinpoint the questions among all the questionnaires which are identical, antonyms of each other, or similar in meaning, and then generate a network graph – after which you can harmonise datasets with unparalleled ease.

What makes the Harmony app truly unique is that it utilises Transformer neural network architectures, unlike other similar tools which rely on a word list or dictionary-based approach. So, this means that you can work with multilingual data harmonisation where Harmony will correctly map the GAD-7 used in the UK to the GAD-7 used in Portugal, for example, despite the Portuguese questionnaire being in a language other than English.

By using Harmony, you can harmonise multilingual datasets as you conduct in-depth research into anxiety and social isolation, for instance, where NLP will supply a quantitative measure of the equivalence involved in the different datasets for mental health.

When it comes to mental health research, our NLP-based harmonisation tool promotes better data harmonisation integration, letting you compare data from previous studies in order to investigate the active attributes or ingredients of mental health.

We specifically released Harmony on Pypi, providing you with a very easy-to-use Python library so you can straight away integrate Harmony into your data harmonisation workflow. However, if you’re an R user, you can even import Harmony as an R package to organise your harmonised data and start working without delay.

Harmony also contains a Docker container on Dockerhub, helping you run a REST API through FastAPI.

## If Harmonised Data is so great, why isn’t everyone doing it already?

Fair question!

While using harmonised categories can certainly make it easier to analyse ethnicity data no matter where it is collected, there can sometimes be barriers when it comes to changing harmonised classifications:

### Sample sizes are relatively small

At times, a small number of people are surveyed in specific ethnic groups. That means the data pertaining to those groups must be combined to make the results as reliable as possible, or to even protect the individual identities of the participants.

In some surveys, certain groups are often combined into one to save time and resources. This actually makes it harder for researchers to compare datasets where those groups are treated individually.

### Some groups are not collected at all

In most surveys, it is ideal to have the participants report their ethnicity themselves, rather than have someone report it on their behalf. However, this also means that some data may not be self-reported and this may limit the ethnicity classifications researchers can work with and, therefore, the ability to effectively harmonise data.

The Ministry of Justice and Home Office data is a good example where the ethnicity is sometimes recorded by a law enforcement officer based on visual appearance alone. In such cases, the only categories available are _White_, _Black_, _Asian_, and _Other_.

### Unique and varying requirements

While some departments may require data on specific ethnic groups, others might not. This may be for monitoring purposes alone.

The Department for Education (DfE), for example, relies on an extended set of codes in order to record teachers’ and students’ ethnicity according to the 2001 Census classifications; having detailed ethnicity codes is very important to the DfE.

However, these extended codes classify the Chinese group as a category other than ‘Asian’, where it is also complex to derive the harmonised ‘Arab’ category. Differences like these can make comparisons between datasets cumbersome and unnecessarily difficult.

### Classifications cannot be changed easily

Changing some datasets may prove to be rather complex, costly, and time-consuming, like large administrative ones, for example.

The NHS is still using the outdated 2001 harmonised Census categories. Significant changes need to be made to the large administrative systems used by the NHS which will require time.

### Maintaining consistency

A common theme present in all these barriers is the innate desire to maintain data consistency over time.

One the one hand, changing categories in order to align with every single Census gives researchers a minimum of 10 years’ worth of consistent data; on the other, the datasets themselves can actually change a lot over time, just to support the various classifications.

So, a data owner may want to keep these classifications unchanged in their dataset for the sake of maintaining a consistent time series throughout.

Harmonisation is certainly a good thing in theory although putting it into practice can take time and may even get tricky – that is, if you’re not using the right tool.

Harmony does away with all of these barriers and then some.

## Some great examples of Harmonised Data Practices over the years

We now understand that harmonised data refers to the efforts made to combine data from multiple sources, providing users with a very comparable and transparent view of data across different studies and even cultures as well as regions.

The process is now becoming more significant, especially in the field of sociology, demography and mental health research – unsurprisingly, the needs revolving around data harmonisation are growing very rapidly because the sheer volume of data and the need to readily share it is always in high demand.

Here are a few examples of data harmonisation efforts over the years:

**North Atlantic Population Project** – Harmonised data from consensuses of Great Britain, Canada, Sweden, Norway and the US dating back to the 1800s.

**Terra Populous** – Successfully integrated the world’s population and environmental data between 1960 till present.

**Integrated Health Interview Series** – Harmonised data collected on individuals who took the US national health interview survey between the 1960s till present.

**IPUMS CPS** – Successfully harmonised data each March between 1962 and present on individuals who took part in the Current Population Survey.

**American Time Use Survey** – Data was harmonised from 2003 onward on how adults in the US utilise their time.

**IPUMS International** – Data harmonisation from 1960 onward on individuals taking part in 130 consensuses from across the globe.

## Business Benefits of Harmonised Data and why ‘Single Source of Truth’ is Critical to Success

### How harmonised data benefits businesses

In plain terms, harmonised data boosts the value of data and the way it is utilised within a business.

This harmonisation of data also makes it possible for a business to transform fragmented and often inaccurate data into workable pieces of information, thus, helping them gain fresh insights, visualisations and analyses.

Practically, this translates to researchers using the harmonised data to reduce the time and effort needed to discover key insights, access the required business intelligence, and even detect early disruptions. Not only that but it can significantly reduce the overall cost associated with complex data analysis as well as the cost of processing and handling that data over the long term.

Think about it – if a business is spending less time scrambling around to identify the right sources of data, it can certainly spend that time far more effectively elsewhere – like priming itself for better growth and tweaking its strategy to make a larger revenue impact.

One thing is inevitable: whether a business has just started or it’s been around for decades, it will be gathering massive amounts of data from different sources. In that process is the possibility that the vast amount of information gathered from a complete range of sources will eventually introduce errors and misinformation. Additionally, the sheer volume of information a business may collect throughout its course can be very overwhelming, cumbersome, and at times, not that useful.

Now, with the use of data harmonisation tools or apps (such as Harmony), the same data can be transformed into a goldmine of BI and insights. It allows organisations to quickly learn new things about their customers and competitors as well as understand shifting market trends and forces.

Nearly every company across the world is now mining and storing data in some form or the other to make smarter, more informed business decisions and manage their customers as well as stakeholders more effectively. But before anything else, there is an acute need to harmonise the data.

It’s no secret that most companies are spending a ridiculous amount of time and resources on conducting surveys and focus group sessions, as well as gathering information from a variety of courses, such as social media networks, news channels, and the internet. However, all the information gathered does not simply come in a “ready to use” format available in a single, manageable, and cohesive body. Rather, it comes as a hotch-potch of raw data.

To make sense of this data as a whole, you must harmonise it. Many businesses believe that their data is harmonised but then wonder why they are not getting the required insights or business intelligence from it, for example. The truth is, that data is not fully harmonised and not quite ready for business analysis. There are still misleading values present in it, not to mention the possibility of duplicate statistics and irrelevant pointers.

When businesses use the correct data harmonisation methods, they can easily standardise their data and create a single source of verifiable and “ready to use” information – that’s very important, to begin with!

### Why a single source of truth is critical to success

The sheer amount and variety of data that businesses are churning out and storing each day is reaching gargantuan volumes, especially with the increased use of handhelds, wearable technology and IoT (Internet of Things) devices which seem to be growing all the time.

The massive amounts of data generated needs to be gathered and siloed, and then formatted into a clean, consistent body of information so that it can add real value to the business.

When organisations learn how to do data harmonisation effectively, they can easily understand the direction their business is headed in; they can stay a few steps ahead of the competition; and they can also position themselves more effectively to withstand market disruptions.

But to make it work, businesses must be able to access high-quality and “cleansed” data, so that it can:

- Analyse their sales and marketing efforts in a more in-depth way
- Quickly identify the pain points of its customers, stakeholders, and even staff members
- Discover any insights which it can use to understand whether specific aspects of the business are contributing to success or detracting from it.

Organisations and entrepreneurs who learn to manage their raw information and data successfully, can easily place themselves in a strategic winning position. Put another way, if you gain the ability to access data that’s updated regularly, you can save yourself plenty of time and resources which may be otherwise spent on re-verifying data from multiple sources.

This effectively puts you in a position where you can easily identify BI insights, making your organisation more agile and responsive to the various market conditions and triggers. So, to put it in a short, sweet, and simple way, harmonised data acts as a marker for business success because:

- Data is supplied to you in a form which allows you to quickly analyse it both internally and externally.
- You gain democratic access to hierarchies, enabling broad views across multiple data sources.
- You have more than enough usable information to drive data-based decisions, and that too without too much overwhelming or useless detail.

## What are some of the challenges associated with harmonising data?

As one might imagine, combining different sets of data across multiple systems, sources, and regions can be a challenging proposition for any organisation. Add to it the speed and scale at which businesses are now required to ingest raw data and make sense of it, and it can seem nearly impossible to achieve 100% accuracy once the data has been processed.

Rarely will you come across a business whose customers, partners, audience, or employees, for example, are not spread across different regions and cultures. For instance, we may have broad and wide-ranging variations in languages, regulations, naming conventions, and addressing – all of which can present some unique challenging with varying degrees of complexity as we attempt to unify data across global systems.

Using contact information alone, for example, transliteration must consider both cultural and regional differences in how names as well as addresses might be entered, formatted and organised – while maintaining the highest level of accuracy which anyone, irrespective of their region or language, can trust.

With businesses entering and re-entering an increasing number of records across their systems, a fail-proof way must exist to ensure that the data entered is matched as accurately and correctly as possible. So, unless there’s a proper data harmonisation tool or app in place, organisations will find it very hard, almost impossible, in fact, to obtain and maintain a centralised data governance strategy – because varying insights as well as values will be generated for the very same standard of data across different sources.

Unless there is a clear indication of which data source is the most trusted and relevant, research teams trying to make sense of multiple sources of data will find themselves dealing with the same issue: differing insights for the same data derived from different sources.

## Data harmonisation best practices

- Great data harmonisation is typically a mix of automated tasks and manual inputs. For example, calibrated AI (artificial intelligence) and ML (machine learning) combined with the skilled work of data scientists, can make a large portion of the overall process automated over time. By utilising AI, for example, the risk of errors may be reduced while the length of time to derive insights can also be cut down.
- More smart data models need to be conceived so that both today’s ongoing needs and future demands can be wholeheartedly met. By borrowing on the right industry and sector expertise, the process of data harmonisation can both save time as well as enable data analysts to harmonise data directly, rather than rely on a third party entity or group.
- One of the most pressing challenges in organisational data management is mapping the data in a way where it is easy to understand how and when the various data sources interact with the existing data infrastructure.
- This can be a very challenging task if the team of researchers and analysts are inexperienced to begin with, or even if they are, but don’t know which tools to use.

By using Harmony, you can safely eliminate such challenges while also adding the above best practices and your own into the mix.

## Closing thoughts

There are no two ways about it: data harmonisation is the future of business management success. It is the ultimate tool to support efficient data processing which ensures that businesses are making smart, fruitful, and profitable decisions from day one.

In the years ahead, harmonised data will be central to an organisation’s success and a prerequisite to ensure continued business efficiency and overall success.

Start your journey with Harmony today to stay ahead of the competitive curve and extract the desired insights quickly from your surveys and/or questionnaires.
