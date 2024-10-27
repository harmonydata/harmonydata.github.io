---
title: "International cancer data harmonisation in 2024"
categories: ["data"]
image: "/images/18- International cancer data harmonisation - the state of 2024.svg"
date: 2024-10-27
url: "/data-harmonisation/international-cancer-data-harmonisation/"
---

International cancer data harmonisation – The state of 2024

If we look at the last decade alone, biomedical sciences have changed a lot. The data they must gather on a daily basis has also evolved to be vaster, more natively web-based, more interdependent, and more distributed.

It’s a transformation that has fundamentally diversified not only the actors responsible for conducting analyses but also the types of data accessed.

In order to find the answers to some incredibly complex scientific questions posed by the entire range of stakeholders in healthcare, we need to have specific systems and standards implemented in order to address the challenge of using data that is both unified and meaningful. While pooling data from multiple sources strengthens its underlying power, that information is only useful once it is meaningfully and purposefully connected.

By just aggregating the data, you can’t extract the necessary insights to make important business decisions. A firm foundation must be established so that the huge volumes of data generated from cancer research and reports can all be combined, analysed, and turned into useful pieces of information which can benefit the research community at large.

This is where international data harmonisation for cancer comes in.

## What is data harmonisation for cancer?

Any process pertaining to the harmonisation of data begins with careful organisation. This may be as simple as standardising names in a table so that every single source of data uses the same terms. Or, it may see the setting up of data “fields”, allowing each piece of information in a new data source to be easily merged with existing data.

However, harmonising data can get increasingly complex as we try to consolidate information from multiple sources, such as the information stored in a public or private [healthcare](/data-harmonisation/data-harmonisation-in-healthcare) business’s cancer research database. These storehouses of data lend clinicians, researchers and other medical professionals the opportunity to blend findings which may be as diverse as genetics and histology, and match them with data from demographics and epidemiology, for example.

Visualise this scenario if you will:

You want to run an analysis to find out the total number of PMP (post-menopausal) women who have been diagnosed with HER2 breast cancer in order to better understand how they responded to a specific cancer medication. A query like this would need to reach into databases which store tissue, proteomic, genomic, and demographic data – and then extract the required data to generate meaningful results.

The National Cancer Institute (NCI) came up with a new initiative (CCDH or Centre for Cancer Data Harmonisation) to help link the datasets we described above. The CCDH draws on established data standards and feedback from the research community to come up with new methods of organising data.

## How data is harmonised for international data harmonisation in cancer: A basic example

Today’s data landscape in healthcare has repositories in different places which contain a broad range of information. Sometimes referred to as “data communities”, these are usually build around key healthcare initiatives – for example, such as those around collecting information on demographics, proteins, genes, and clinical characteristics.

Distributed data, for example, is rich, high-quality data where conceptual frameworks vary. They may be used in data-type-specific or species-specific lines of inquiry.

Aggregated data involves large-scale indexing like ‘+/-‘ heuristics and is typically used for general research and retrieval.

Integrated data is where distributed data is carefully aligned with shared conceptual frameworks, and for using consistent identifiers. Typical use cases include cross-domain insight by humans and machines, gap detection, and ‘big picture’ views.

As for how data is harmonised in a healthcare setting, consider the following steps:

**Standardisation of names.** This first step ensures that everyone involved refers to specific concepts or data in the very same way. The NCI, for instance, has drawn on many existing data standards to accomplish this, such as CDISC Terminology, CNI Thesaurus, and DICOM.

**Assign durable identifiers.** An identifier (also referred to as a GUID or globally unique identifier) is kind of like a fingerprint. It allows users to uniquely identify data items from many different sources to combine them for stronger, more consistent analysis.

**Curate data.** Annotation of data is needed to meet specific standards like adherence to certain data models or annotation to ontologies.

**Harmonise data.** In order to be able to use together as a unified body, we must harmonise it so that individual datasets are more than just the sum of parts. However, this can prove to be laborious because different sources will use different schemas or models, naturally. A fine line must be treaded to see what best fits for the purpose. Researches like FHIR (Fast Healthcare Interoperability Resources) and CDISC, for example, can provide a reasonably solid backbone for harmonising fields, value sets, and common data elements.

**Test and then test some more.** Now, we need to further filter our data to remove any information that’s out of step – outliers, for example, or data that was entered incorrectly or processed through a sub-standard channel. Testing extensively also helps to evaluate how reproducible the data is.

**Share, attribute & document.** Making the harmonised data available within the individual commons and the different Data Commons ensures that it is ready for analysis. Provenance with regard to the original source of the information, when it came in, and who interacted with it, is very important for using data in aggregate.

It’s also important to provide attribution when using new systems, such as the National Center for Data to Health’s Contributor Attribution Model (CAM).

## A practical example of international data harmonisation for cancer

The following is an example of cancer data quality and harmonisation in Europe, where international benchmarking of childhood cancer survival by stage was done through a specific project (BENCHISTA):

The variation in different stages of childhood cancers (CC) diagnosis may explain the different survival rates observed across multiple geographic regions. The International Benchmarking of Childhood Cancer Survival by Stage (BENCHISTA Project) sets out to understand these differences and to also encourage the application of the Toronto Staging Guidelines according to Population-Based Cancer Registries or PBCRs to the most common child cancers.

PBCRs from both in and outside Europe were invited to take part and identify all cases of different types of child cancers in a 3-year consecutive period (2014-2017) and apply the Toronto Staging Guidelines (TG) at diagnosis. Other non-stage prognostic factors, progression or recurrence, treatment, and cause of death-related information was also collected as optional variables.

To understand the main role of data availability and quality, a survey was conducted, focusing on data collection and sharing processes, as well as a quality assurance exercise. To support data harmonisation and query resolution, an email and Q-and-A answers bank were created.

Across 28 countries, 67 PBCRs participated, providing a fully de-personalised, patient-level dataset. For 26 of these PBCRs, data format and ethical approval was obtained by the UCL and INT, two sponsoring institutions, which was sufficient for data sharing; 41 of the participating PBCRs needed a DTA or Data Transfer Agreement to comply with specific data protection regulations. Owing to the heterogeneity found in legal aspects, 18 months transpired on finalising the DTA.

The data collection survey saw 68 participants taking part from 63 PBCRs – 44% of them said ‘yes’ when asked in their ability to re-consult a clinician in cases where stage ascertainment was either difficult or uncertain. Moreover, out of all the PBCRs that participated, 75% completed the staging QA (quality assurance) exercise, where the median correct answer portion was 92% (range: 70%-100%, rhabdomyosarcoma to Wilms tumour).

The differences in interpretation and processes demanded the harmonisation of general data protection regulations (GDPRs) across different countries which caused delays in the data transfer. Despite these challenges, the BENCHISTA Project was able to establish a large collaboration between clinicians and PBCRs in order to collect detailed and standardised TG (Toronto Staging Guidelines) at a population-level. This enhanced the understanding of the reasons for variation in overall survival rates for childhood cancers, stimulating further research and improving child healthcare plans at both the national and regional level.

Here is another, more in-depth example of how international data harmonisation (cancer) was utilised at the Fred Hutchinson Cancer Research Center in Seattle, Washington on data sets from multiple projects, including the Genetics and Epidemiology of Colorectal Cancer Consortium (GECCO), the Early Detection Research Network (EDRN), Population-based Research Optimizing Screening through Personalized Regimens (PROSPR), and the Asia Cohort Consortium (ACC).

The harmonisation process was varied for each project, yet there were commonalities. Below, we attempt to show an idealised overview of the process, including examples of specific harmonisation efforts that were made throughout. Not every project followed the exact same steps, while some also iterated through them in a varying order – although most of the projects engaged in the following activities at some point during data harmonisation:

### 1\. Identify the questions the harmonised data set must answer

A data set must always be harmonised for a specific project in order to answer specific questions. Everyone involved must agree on the project’s aims and the questions it should ask, as these command the steps that must follow.

The primary research questions are responsible for driving the statistical analysis plan through the identification of the dependent and key independent variables as well as their required properties – e.g. the timing of collection. However, it is almost always good to think about all the other related questions that can be answered with a data set which is harmonised.

The ACC incorporated this exact approach in its initial harmonisation project, where the focus was on body mass index in Asian populations. Being the ACC’s first collaborative project, project leaders employed a ‘less is more’ approach, focusing on data points which were critical to answering the association between mortality and body mass index among Asian populations. Early discussions also explored the questions which may be built on this foundation – e.g. additional projects on rare cancers and diabetes, which were actually pursued subsequently.

### 2\. Identify high-level data concepts needed to answer the questions

After all participants have unanimously agreed to the overarching goals of the project within the scope of the harmonised data set, they focus on the kinds of data which must be harmonised to answer questions of interest.

In GECCO, for instance, investigators required a wide range of epidemiologic data to utilise with genome-wide association study data, in order to investigate interactions. These included data on [tobacco](/discover-data/tobacco-use-datasets-and-studies) and alcohol use, hormone use, use of NSAIDs (non-steroidal anti-inflammatory drugs), and dietary exposures – all categories of data that were well-established risk factors for colorectal cancer.

Similarly, PROSPR started off with conceptualised models of the screening process for cervical, breast, and colon cancer, where they identified elements of the process which may be utilised for future analyses – like patient demographic characteristics, time since last screening, and disease risk factors.

Identifying these high-level data concepts, however, is not a straightforward process. It requires researchers to take a break, step back from all that detailed data, attempt to think conceptually about the research questions they’re working with, and then negotiate around those concepts with their fellow researchers until they all agree on what’s important.

Investigators and researchers used to moving straight to individual data points, may feel this to be a waste of time – i.e. starting at such a high level – although time spent on this step can make the work that follows significantly quicker and smoother. Such conversations must involve people at all levels, from the PIs (Principal Investigators) of the original studies to their respective data managers who collectively have a firm understanding of the subtle variations and nuances within the data that’s collected and managed – including questions pertaining to data availability and reliability. Answers to such questions can shape the final form of the scientific questions.

### 3\. Assess data availability for the data concepts

Data concepts have to be compared to the data available in the original studies because what doesn’t exist cannot be harmonised. One way of investigating data availability is to have the study’s PIs come up with a list of all available data, after which the harmonisation team can categorise that data and match the data sets to the respective data concepts.

Another approach is to collect the original study instruments like interview protocols, questionnaires or data dictionaries, for example, which offers the advantage of clearly laying out which questions the participants answered. During the course, however, the participants’ answers may be changed or transformed between the data collection and existing database in specific ways that may be difficult or impossible to document, creating confusion for the harmonisation team.

One more way of accomplishing the above is to send the data concepts to the PIs, where they return a list of the available data points which may potentially be useful in exploring each one of the concepts. This may offer the advantage of people knowing the data well and reviewing their respective data while choosing the concepts that best match.

A harmonisation project may utilise all three of these approaches where feasible.

### 4\. Develop CDEs for every data concept

This step, perhaps, requires the most in-depth knowledge of not only the existing datasets to be harmonised but also the underlying scientific purpose of the harmonised data.

Much like data-availability analysis, developing CDEs is an iterative process and can take up a lot of time. The main objective is to produce individual data points which represent the data concepts covered in the previous step.

The ACC investigators, for example, were focused on the participants’ disease history, and so they developed CDEs which included possible values of ‘yes/no’ and ‘unknown/refused’, which were relatively straightforward for participating cohort studies to produce.

GECCO’s work on CDEs pertaining to red meat consumption, one of the risk factors of cancer, took on a more challenging area of harmonisation, where the goal was to harmonise data on red meat intake across more than13 studies.

In any case, there may be multiple acceptable answers and ways to produce a CDE, which can help to answer a project’s key questions, although all involve assumptions and decisions which have to be extensively explored in order to understand the ramifications of the analyses.

Once you have established the CDEs, you must document the harmonisation project as meticulously and critically as possible, as that is crucial to its overall success.

### 5\. Map and transform the individual data points to CDEs

After you have developed a list of CDEs, you must map the original study data in order to produce the required CDEs. You might employ two key routes to mapping:

- Send the original study data to the harmonisation team, where they map the data to the CDEs;
- The original study team might map the data to the CDEs first and then send the harmonised data to the harmonisation team.

The key thing to remember is that the process must take advantage of each original study’s team’s keen understanding of its own data, quirks, and nuances, all the while leveraging the harmonisation team’s knowhow on the CDEs.

In PROSPR’s case, the second route to mapping and harmonisation was taken. Each year, PROSPR research centres received a Data Request Packet which contained data dictionaries of CDEs as well as CDE definitions – the research centre took the responsibility of mapping and transforming data from their repositories into the defined CDEs.

A key reason for carrying out harmonisation this was that many of the participating studies pulled data directly from electronic medical records (EMRs), where data can be easily distributed across several data systems, as opposed to being stored in a single study database.

### 6\. Put quality control procedures in place

The next logical step in an international data harmonisation cancer project is quality control, which is, in fact, the case with any data set.

Here, the harmonisation team must assess the harmonised data to ensure that the format is correct and that every value falls within the expected ranges. It’s important to identify any potential issues early on, such as:

- Incorrect data types
- Illogical data distributions
- Missing data
- Unexpected values which are not a part of the CDE definition
- Unexpected duplicates or orphan records

Moreover, eligibility logic checks need to be done if eligibility criteria has been set for inclusion within the harmonised data set. If your data fails any of the above checks, you can contact the study investigators to discuss all the data issues and clarify mapping logic. This may very well lead to more iterations of data delivery, transformation and quality control, that is, until the harmonisation team is fully satisfied with the fact that they are working with high-quality data.

## Closing thoughts

Data harmonisation can often be a slow, highly nuanced, complex, and painfully difficult process. It requires the elucidation of tactic knowledge and digging deep into study archives to uncover how the original study was done.

With more pooled analyses being conducted, there are always ways to cut down the overall burden of carrying out international data harmonisation in cancer by getting answers to many of the questions up front, thus, cutting down the back-and-forth which is typically required of busy investigators.

However, it’s not quite possible to anticipate all future uses of a specific data set and to then document meticulously for all of them. With that said, by asking certain questions which are typically asked when conducting pooled analyses, we can definitely increase the efficiency of our research:

- Can the harmonisation process be standardised and harmonised to increase rigour while minimising cost, both from a scientific and organisational standpoint?
- What measures are available to judge how successful and complete the harmonisation has been?
- What’s the minimal, ideal, and optimal level of harmonisation needed to ensure correct inferences in every case?
- What level and types of documentation are required from collaborating studies to ensure that maximum efficiency is achieved through the harmonisation process?

If you want to examine your own data harmonisation process through an easy-to-use tool where you can develop more rigorous and consistent methods of international data harmonisation for cancer, then the Harmony app is all you need. It’s also available to try for free for a limited time.
