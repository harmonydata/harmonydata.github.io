---
title: "What is data harmonisation - and why it matters in 2024"
description: While this data can be a valuable asset, it often comes in different formats, structures, and standards, making it challenging to analyse, share, and extract meaningful insights. This is where data harmonisation comes into play. In this article, we will explore what data harmonisation is, why it is important, and how it can benefit organisations and society as a whole.
date: 2024-01-23
categories: ["data"]
image: "/images/02- What is data harmonisation - and why it matters in 2024.svg"
aliases:
  - "/data-harmonisation-unifying-data-for-deeper-insights/"
url: "/data-harmonisation/"
---


# Data Harmonisation: Unifying Data for Deeper Insights

## What is Data Harmonisation?

In today's data-driven world, **data harmonisation** has become increasingly important. With data coming from disparate sources, it's essential to ensure that this information is consistent, accurate, and usable. For example, in a large study in social sciences, such as a [longitudinal study](/longitudinal-studies/) or meta-analysis, it is common that a researcher may want to combine data from different studies.

We can make data comparable by recoding variables from different studies, modifying them, or identifying which variables in one study match variables in another study. This is **data harmonisation**.

Data harmonisation involves bringing together data from different sources and transforming it into a unified, coherent format. This process involves standardising disparate data formats, scales, and conventions to make the data compatible and comparable. The goal is to create a dataset where differences in format or scale do not obscure the underlying information.

Essentially, it's about making different sets of data compatible with each other. This process is crucial in data management and analysis, particularly when dealing with large amounts of data from different sources.

### The Need for Data Harmonisation

There are many [cohort](/cohort-studies/) and [longitudinal](/longitudinal-studies/) studies available in the UK and around the world for researchers to use. However, researchers often need to draw comparisons between studies from different times and places, or studies conducted by different organisations. This may be in order to achieve the necessary sample size for statistical significance, or to determine whether results are consistent across studies or in different conditions.

In social sciences, therefore, data harmonisation is often used by researchers conducting longitudinal or cohort studies, or international studies. It is frequently necessary to [harmonise data from several different studies](/data-harmonisation/what-is-truly-harmonised-data/) to draw broader conclusions. For example, how studies report topics such as anxiety, household income, or limb function can vary even within professionals within a very narrow and specialised field.

Outside of science and research, data harmonisation is also needed in industry. For example, imagine trying to compare financial reports from different countries, each using its currency and accounting standards. The UK reports industries using the [Standard industrial classification of economic activities (SIC)](https://www.gov.uk/government/publications/standard-industrial-classification-of-economic-activities-sic) while other countries have their own standards. Without data harmonisation, it is very difficult to combine datasets using disparate schemas.

Data harmonisation enables better decision-making, more accurate analyses, and contributes to the advancement of knowledge and efficiency in multiple domains. Data harmonisation is therefore a critical step in leveraging the full potential of datasets in research and industry.


## An example of data harmonisation with Harmony

Psychologists often measure phenomena such as anxiety and depression with instruments, such as the GAD-7 (given below).

### Questions in GAD-7

|   No. | GAD-7 English                                                                                                                                      |
|------:|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | Feeling nervous, anxious, or on edge                                                                                                               |
|     2 | Not being able to stop or control worrying                                                                                                         |
|     3 | Worrying too much about different things                                                                                                           |
|     4 | Trouble relaxing                                                                                                                                   |
|     5 | Being so restless that it is hard to sit still                                                                                                     |
|     6 | Becoming easily annoyed or irritable                                                                                                               |
|     7 | Feeling afraid, as if something awful might happen                                                                                                 |
|     8 | If you checked any problems, how difficult have they made it for you to do your work, take care of things at home, or get along with other people? |

However, where multiple studies have been conducted using [different instruments](/harmonisation-validation/), such as the alternative Beck's Anxiety Inventory, things get a little complicated. For example, there is a manual process of matching question item 4 in the GAD-7 to question item 4 in Beck's, as illustrated below.

{{< image src="/images/GAD-7-vs-Becks.drawio-min.png" alt="dog" title="dog" >}}

We have developed Harmony, an AI-driven tool which uses large language models and natural language processing to help researchers with item and data harmonisation. Click on the link below to try Harmony on the [GAD-7 vs Beck's](/gad-7-vs-beck-anxiety-inventory/) example. (You can [read this blog post](/nlp-semantic-text-matching/how-does-harmony-work/) for a technical explanation of how Harmony works.)

* <a href="https://harmonydata.ac.uk/app/#/import/W3siaW5zdHJ1bWVudF9uYW1lIjogIkdBRC03IEVuZ2xpc2giLCAicXVlc3Rpb25zIjogW3sicXVlc3Rpb25fdGV4dCI6ICJGZWVsaW5nIG5lcnZvdXMsIGFueGlvdXMsIG9yIG9uIGVkZ2UifSwgeyJxdWVzdGlvbl90ZXh0IjogIk5vdCBiZWluZyBhYmxlIHRvIHN0b3Agb3IgY29udHJvbCB3b3JyeWluZyJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiV29ycnlpbmcgdG9vIG11Y2ggYWJvdXQgZGlmZmVyZW50IHRoaW5ncyJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiVHJvdWJsZSByZWxheGluZyJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiQmVpbmcgc28gcmVzdGxlc3MgdGhhdCBpdCBpcyBoYXJkIHRvIHNpdCBzdGlsbCJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiQmVjb21pbmcgZWFzaWx5IGFubm95ZWQgb3IgaXJyaXRhYmxlIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJGZWVsaW5nIGFmcmFpZCwgYXMgaWYgc29tZXRoaW5nIGF3ZnVsIG1pZ2h0IGhhcHBlbiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSWYgeW91IGNoZWNrZWQgYW55IHByb2JsZW1zLCBob3cgZGlmZmljdWx0IGhhdmUgdGhleSBtYWRlIGl0IGZvciB5b3UgdG8gZG8geW91ciB3b3JrLCB0YWtlIGNhcmUgb2YgdGhpbmdzIGF0IGhvbWUsIG9yIGdldCBhbG9uZyB3aXRoIG90aGVyIHBlb3BsZT8ifV19LCB7Imluc3RydW1lbnRfbmFtZSI6ICJVbnRpdGxlZCBpbnN0cnVtZW50IiwgInF1ZXN0aW9ucyI6IFt7InF1ZXN0aW9uX3RleHQiOiAiTnVtYm5lc3Mgb3IgdGluZ2xpbmcgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJGZWVsaW5nIGhvdCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIldvYmJsaW5lc3MgaW4gbGVncyAifSwgeyJxdWVzdGlvbl90ZXh0IjogIlVuYWJsZSB0byByZWxheCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkZlYXIgb2Ygd29yc3QgaGFwcGVuaW5nICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiRGl6enkgb3IgbGlnaHRoZWFkZWQgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJIZWFydCBwb3VuZGluZyAvIHJhY2luZyAifSwgeyJxdWVzdGlvbl90ZXh0IjogIlVuc3RlYWR5ICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiVGVycmlmaWVkIG9yIGFmcmFpZCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIk5lcnZvdXMgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJGZWVsaW5nIG9mIGNob2tpbmcgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJIYW5kcyB0cmVtYmxpbmcgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJTaGFreSAvIHVuc3RlYWR5ICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiRmVhciBvZiBsb3NpbmcgY29udHJvbCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkRpZmZpY3VsdHkgaW4gYnJlYXRoaW5nICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiRmVhciBvZiBkeWluZyAifSwgeyJxdWVzdGlvbl90ZXh0IjogIlNjYXJlZCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkluZGlnZXN0aW9uICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiRmFpbnQgLyBsaWdodGhlYWRlZCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkZhY2UgZmx1c2hlZCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkhvdCAvIGNvbGQgc3dlYXRzIn1dfV0=" target="harmonyapp">Import GAD-7 and Beck Anxiety Inventory into Harmony and harmonise them</a> - find similarities between the two instruments using our AI platform

{{< card heading="Try Harmony" copy="Compare GAD-7 and Beck Anxiety Inventory " url="https://harmonydata.ac.uk/app" >}}
{{< youtube cEZppTBj1NI >}}




### Key Steps in Data Harmonisation


1. **Data Discovery, Data Identification and Collection**: This step involves identifying the relevant data sources and gathering data from them. It's crucial to understand the type, format, and structure of the data being collected. This may include data from internal systems, external sources, databases, spreadsheets, or even unstructured data like text files.  [Harmony Discovery](/discover-data/) is planned to assist in the data discovery stage.

2. **Data Cleaning and Preprocessing**: This involves cleansing the data to ensure its quality. Common tasks include correcting errors, handling missing values, removing duplicates, and addressing outliers. Preprocessing also involves standardizing data, like ensuring consistent naming conventions and formats.

3. **Data Transformation**: Here, data is converted into a standardized format or structure. This could involve changing data types, normalizing values (like converting all currencies to a standard currency), standardizing date formats, [tabulating the data](/data-harmonisation/tabulate-questionnaire-survey-result-data/),  or [scaling measurements to a common unit](/item-harmonisation/find-matching-and-common-items-in-questionnaires-and-surveys/). The goal is to ensure that data from different sources can be compared and analysed together.

4. **Data Integration**: In this step, the cleaned and transformed data from various sources is merged into a single, unified dataset. This involves aligning data schemas, resolving any conflicts in data structure or content, and ensuring that data from different sources correctly corresponds and aligns with each other.

5. **Quality Assurance**: This ongoing process involves continuously monitoring and verifying the quality of the harmonised data. It ensures that the data remains accurate, consistent, and reliable for analysis. [Techniques](/data-harmonisation/data-harmonisation-steps-techniques-best-practices/) might include data validation checks, periodic reviews, and the use of [automated tools](/data-harmonisation/data-harmonisation-tools-frameworks/) to detect and correct data quality issues.

6. **Data Maintenance:** Data harmonisation is not a one-time task but an ongoing process. Data maintenance involves regularly updating the dataset with new data, ensuring that changes in source systems are reflected, and continuously managing the quality of the dataset. This step is crucial to ensure that the harmonised data remains current, relevant, and valuable over time.

Each of these steps is critical in the process of transforming diverse and disparate data sources into a cohesive, reliable, and valuable resource for analysis and decision-making.

[CLOSER](https://closer.ac.uk/research-fund-2/data-harmonisation/) has provided a number of guides for data harmonisation as well as some harmonised datasets.

## Harmony Discovery for data discovery

We are currently working on [Harmony Discovery](/discover-data/), which will extend the functionality of Harmony to allow researchers to discover datasets using semantic matching from large language models. Harmony Discovery is currently connected via API to the following UK-based data catalogues:

* [CLOSER](https://closer.ac.uk/)

* [ADR UK](https://www.adruk.org/data-access/data-catalogue/)

* [Catalogue of Mental Health Measures](https://www.cataloguementalhealth.ac.uk/)

* [UKLLC](https://explore.ukllc.ac.uk)

* [HDR UK](https://www.healthdatagateway.org/)


{{< youtube 2Fj-oBRXDiI >}}

*Video of Thomas Wood talking at [AI|DL](/psychology-ai-tool/aidl-meetup/) and demoing Harmony


## Benefits of Data Harmonisation



1. **Improved Data Quality**: Data harmonisation enhances the accuracy, consistency, and reliability of data. By cleaning and standardizing data, it reduces errors and discrepancies, ensuring that the data is trustworthy and valuable for decision-making. This improved quality is essential for any data-driven process, as it forms the foundation for reliable insights and conclusions.

2. **Better Data Analysis**: Harmonised data enables more effective and comprehensive data analysis. Since the data from different sources is brought into a uniform format, it becomes easier to compare, contrast, and analyse. This leads to deeper insights, as data analysts and scientists can work with a cohesive dataset that provides a more complete picture.

3. **Time and Cost Efficiency**: Harmonisation automates and streamlines the process of integrating data from various sources, reducing the need for manual data cleaning and adjustments. This efficiency saves significant amounts of time and resources, making data management processes more cost-effective and less labor-intensive.

4. **Enhanced Collaboration**: When data is harmonised, it creates a common language and format that can be understood and used across different departments, organizations, or even industries. This facilitates collaboration, as all parties are working with data in a format that is universally recognized and accepted.

5. **Accurate Reporting:** Inconsistent and fragmented data can lead to inaccurate reporting and misleading insights. Data harmonisation ensures that reports, analytics, and visualizations accurately reflect the underlying data, leading to more reliable and truthful representations of information.

6. **Regulatory Compliance**: Many industries are subject to strict data regulations and standards. Harmonised data is often a requirement for compliance, as it ensures that data is managed, stored, and processed in a way that meets regulatory guidelines. This is particularly important in sectors like [healthcare](/data-harmonisation/data-harmonisation-in-healthcare/), [pharma](/data-harmonisation/data-harmonisation-in-biopharma/), finance, and telecommunications.

7. **Enhanced Interoperability:** Data harmonisation standardizes data formats, making it easier to share and exchange information across various systems, departments, and organizations. This interoperability is crucial for effective data integration, collaboration, and for leveraging the full potential of digital technologies.

In summary, data harmonisation brings about significant improvements in the quality, usability, and value of data, leading to better decision-making, efficient operations, and compliance with regulatory standards.


## Challenges in Data Harmonisation

1. **Complexity of Data Sources**: Data often comes in a myriad of formats and structures from different sources, such as databases, spreadsheets, or even unstructured formats like text files. Harmonising such varied data requires understanding and addressing these complexities, making the process challenging.

2. **Maintaining Data Privacy**: Ensuring privacy and security is particularly challenging when dealing with sensitive or personal data. Compliance with data protection regulations (like GDPR) is crucial, and this adds a layer of complexity to the harmonisation process.

3. **Data Governance:** Establishing and enforcing clear data governance policies is essential to manage and use data responsibly. This includes setting standards for data quality, access, and usage, which can be complex in organizations with large or diverse data sets.

4. **Resource Intensiveness**: Data harmonisation often requires significant resources, including advanced software tools and skilled personnel. The complexity and scale of the task can demand considerable investment in both technology and training.

5. **Data Mapping:** Mapping data from various sources involves aligning different data models and structures, which can be particularly challenging. This requires a deep understanding of the semantics and context of the data in each source.

6. **Keeping Up with Changes**: Data sources, standards, and technologies are constantly evolving. Keeping the harmonised data up-to-date with these changes requires ongoing effort and adaptability.

7. **Diverse Data Sources**: Integrating data from diverse sources adds complexity due to varying formats, standards, and quality. Each source may have its unique characteristics and challenges that need to be addressed in the harmonisation process.

8. **Data Quality Concerns**: Ensuring the accuracy, consistency, and reliability of the harmonised data is crucial. This involves identifying and correcting errors in the data, which can be a significant hurdle, especially when dealing with [large volumes of data from multiple sources](/data-harmonisation/combine-multiple-survey-sources-best-practices/).

Each of these challenges represents a significant aspect of the data harmonisation process, requiring careful planning, skilled resources, and often sophisticated technological solutions to overcome.


## Real-World Applications of Data Harmonisation


Let's explore this need further in various sectors:

1. **Global Business Operations**: For [multinational companies, data harmonisation is essential](/data-harmonisation/10-data-harmonisation-examples-that-move-businesses-and-organisations-forward/). They deal with data from various countries, each with its regulations, currencies, and operational standards. Without harmonising this data, it becomes challenging to have a unified view of the company's performance, plan global strategies, or ensure compliance with international regulations.

2. **Healthcare and Medical Research**: Patient data from different hospitals, regions, or countries often use different formats and standards. Harmonising this data is vital for epidemiological studies, clinical trials, and public health initiatives. It allows for more accurate analyses, better understanding of diseases, and development of treatments that are effective across diverse populations.

3. **Environmental Studies and Climate Change Research**: Environmental data comes from myriad sources: satellite observations, ground-based monitoring stations, and various scientific experiments. To understand global environmental changes and model climate change accurately, this data must be harmonised to ensure consistency and comparability.

4. **Governmental and Public Policy Analysis**: Governments need to harmonise data across various departments (such as health, education, and transportation) to make [informed policy decisions](/data-harmonisation/data-harmonisation-in-public-sector/). Disparate data systems between local, regional, and national levels make it difficult to assess the overall situation and implement effective policies.

5. **Financial Markets and Economic Research**: Investors and economists analyse data from different markets and economies. Discrepancies in financial reporting standards, currency values, and economic indicators can lead to misunderstandings and poor decision-making. Harmonised data enables better comparison and understanding of global economic trends.

6. **Technology and Data Science**: With the growing field of big data and AI, harmonised data is fundamental for training machine learning models. Diverse data sources must be standardized to ensure that these models are accurate and unbiased.

7. **Supply Chain Management**: In global supply chains, harmonising data related to inventory levels, supplier performance, and logistics is crucial for efficiency. Differing data standards across countries and companies can lead to inefficiencies and disruptions.

8. **Education and Comparative Studies**: For educational research and international comparisons of educational systems, data harmonisation [helps in understanding the effectiveness of different educational approaches and in making cross-country comparisons](/data-harmonisation/data-harmonisation-in-education/).

9. **Telecommunications**: Telecom companies use data harmonisation to integrate customer data, usage patterns, and network data from various sources. This helps in improving network efficiency, customer service, and in developing new services.

These examples demonstrate the vast applicability and critical importance of data harmonisation in [extracting meaningful insights](/data-harmonisation/extract-process-data-from-questionnaires/), making informed decisions, and enhancing operational efficiency across different sectors.


## Data Harmonisation in Practice

Data harmonisation is not a theoretical concept but a practical necessity across various sectors. For instance, in healthcare, harmonising patient data from different hospitals leads to better patient care and research outcomes. In [marketing](/data-harmonisation/data-harmonisation-for-marketing-success-strategies-and-insights/), it helps in understanding consumer behavior by integrating data from diverse sources.

**[Harmony: A Specialised Tool for Data Harmonisation](https://harmonydata.ac.uk/)**




Tools like Harmony, designed specifically for the [retrospective harmonisation of questionnaire items](/data-harmonisation/back-to-the-future-retrospectively-harmonising-questionnaire-data/), are invaluable in research and data analysis. They allow for the comparison and combination of data from different studies or time periods, which is crucial in fields like social sciences, healthcare, and market research.

**Perspectives from EPAM and TIBCO**
Companies like EPAM and TIBCO highlight the strategic importance of data harmonisation. They emphasize how it can provide a competitive edge by ensuring data consistency across an organization, improving decision-making, and streamlining operations.

**Future and Role in AI and Machine Learning**
The future of data harmonisation is closely intertwined with advancements in AI and machine learning. These technologies have the potential to automate the harmonisation process, making it more efficient and accurate. AI can assist in identifying patterns, [inconsistencies](/data-harmonisation/harmonising-questionnaire-data-consistency/), and correlations in large datasets, while machine learning algorithms can learn from data to improve the harmonisation process over time, adapting to changes in data structures and formats.

In summary, data harmonisation is a critical and practical process in various industries, enhancing data quality, decision-making, and operational efficiency. The evolution of this field, particularly with the integration of AI and machine learning, holds significant promise for even more streamlined and effective data management in the future.


## Conclusion

Data harmonisation is a critical process in today's data-centric world. It allows organisations to leverage their data more effectively, leading to better decision-making and insights. While the process can be challenging, the benefits of having a unified, high-quality data set are immense. As we continue to generate more and more data, the importance of data harmonisation will only grow, making it an essential skill for data professionals and a critical process for organisations across industries.

Data harmonisation is more than a technical process; it's a strategic imperative in today's data-driven world. With tools like Harmony and insights from various resources, organizations can navigate the complexities of data harmonisation to unlock the full potential of their data assets.

---

Data harmonisation is more than just a technical process; it's a foundational element for unlocking the full potential of data in any field. By understanding and implementing data harmonisation, we pave the way for a more integrated, insightful, and efficient use of information in our increasingly data-driven world.

