---
title: "Data Harmonisation in Healthcare: From Public to Private Records"
Discription: "Data harmonisation in healthcare is a critical process aimed at integrating disparate data sources to streamline patient care and enhance research quality. This blog explores the essence, methodologies, impacts, and initiatives surrounding data harmonisation, highlighting its pivotal role in the healthcare sector."
date: 2024-03-19
author: "Vidhya Sudani"
categories: ["data"]
image: "/images/20- Data harmonisation in healthcare - from public to private records.svg"

aliases:
  - "/data-harmonisation-in-healthcare-from-public-to-private-records/"
url: "/data-harmonisation/data-harmonisation-in-healthcare/"

---

## Introduction

In the realm of healthcare, integrating and harmonising data across public and private records is crucial for advancing patient care, research, and policy-making. 
[Data harmonisation](/data-harmonisation/) in healthcare is a pivotal process for integrating diverse data sources, ranging from public health records to private medical data. This endeavor aims to standardize and unify data for more comprehensive insights, enhancing patient care, research capabilities, and policy-making. This blog explores the concept, significance, and methodologies of data harmonisation in healthcare, referencing key sources and projects in the field.

---

## Understanding Data Harmonisation

Data harmonisation involves the alignment of datasets from various sources to create a coherent, unified view of information. It encompasses three primary dimensions: syntax (data format), structure (conceptual schema), and semantics (intended meaning of words). Syntax refers to the technical formats of data, such as CSV, JSON, or HTML. The structure pertains to how variables relate within a dataset, ranging from highly organized structured data to unstructured data with no fixed format. Semantics involve the interpretation of variables to ensure they measure the intended concepts consistently across datasets.

---

## The Importance of Data Harmonisation in Healthcare
{{< image src="/images/The Importance of Data Harmonisation in Healthcare.webp" alt="The Importance of Data Harmonisation in Healthcare" title="The Importance of Data Harmonisation in Healthcare" >}}

Data harmonisation significantly enhances the quality of research by enabling the aggregation of data from various sources for more robust analysis. When data from different studies or healthcare systems can be combined and compared, it increases the statistical power of research findings, leading to more reliable and generalizable conclusions. This is particularly important in healthcare, where research findings often inform clinical guidelines and treatment protocols. [Harmonised data](/harmonised-data) can reveal trends and patterns that might be obscured in smaller, fragmented datasets, facilitating breakthroughs in understanding diseases, treatments, and patient [outcomes](/harmonisation-validation/medical-outcomes-survey-sleep-quality-subscale).
Data harmonisation is a critical endeavor in healthcare, underpinning efforts to improve research, enhance interoperability, achieve cost efficiencies, and support the implementation of evidence-based policies and practices. Through careful methodological planning and collaboration among stakeholders, harmonised data can serve as a powerful tool for advancing health outcomes and operational excellence in healthcare systems.

---
### Methodological Considerations

Harmonisation methods in data science and healthcare research aim to standardize disparate data sources to ensure consistency, comparability, and reliability across datasets. These methods are critical in the context of big data and the increasing reliance on electronic health records (EHRs), where data is often collected from various sources with different standards and formats. Harmonisation can be approached retrospectively, after data collection, or prospectively, before data collection begins. The choice between these approaches depends on the constraints of the existing datasets and the theoretical [frameworks](/data-harmonisation/data-harmonisation-tools-frameworks/
) guiding the research or clinical objectives.

---
## Key Strategies for Harmonisation
{{< image src="/images/Key Strategies for Harmonisation.webp" alt="Key Strategies for Harmonisation" title="Key Strategies for Harmonisation" >}}

### Ensuring Reliable Data for Algorithms

#### Quality Over Quantity
In the realm of data harmonisation, the emphasis on quality over quantity cannot be overstated. Accurate and reliable data is paramount for developing algorithms that are truly effective and can lead to meaningful insights and outcomes. The focus should be on ensuring that each data point collected and integrated into larger datasets meets a high standard of quality, as this will significantly impact the [performance](/nlp-semantic-text-matching/measuring-the-performance-of-nlp-algorithms/) of machine learning models and AI algorithms. Poor-quality data can lead to inaccurate predictions, biased outcomes, and ultimately, decisions that may not be in the best interest of patients or research objectives.


#### Role of Machine Learning and AI
Machine learning and AI play a pivotal role in the cleaning and harmonising of data, making it more usable for predictive analytics. These technologies can automatically detect inconsistencies, outliers, and errors that would be time-consuming and challenging to identify manually. By employing advanced algorithms, AI can also suggest harmonisation strategies, such as normalization techniques and data transformation methods, to ensure that disparate data sources are compatible and can be analysed together. This not only improves the quality of the data but also accelerates the harmonisation process, enabling researchers and clinicians to focus on deriving insights and making informed decisions.


### Managing Volumes of Disparate Data

#### Interoperability Standards
Interoperability standards, such as Health Level Seven International's Fast Healthcare Interoperability Resources (HL7 FHIR), are critical in enabling data exchange and integration across different healthcare systems. These standards provide a framework for the representation and exchange of healthcare information, facilitating the seamless sharing of patient data among providers, researchers, and other stakeholders. By adhering to such standards, healthcare organizations can ensure that data from various sources can be harmonised more efficiently, enabling more comprehensive and accurate analyses.


#### Advanced Data Management Technologies
The management of large volumes of disparate data is made possible through advanced data management technologies, including cloud-based platforms and electronic health records (EHRs). Cloud-based solutions offer scalable and flexible environments for storing and processing vast amounts of data, providing the infrastructure needed for effective data harmonisation. EHRs, on the other hand, are crucial for collecting and organizing patient data in a structured format, making it more accessible for analysis and harmonisation. These technologies not only support the integration of diverse data sources but also enhance the security and privacy of sensitive health information.


### Adopting SDOH Standards to Advance Health Equity

#### Social Determinants of Health (SDOH)
The Social Determinants of Health (SDOH) refer to the conditions in which people are born, grow, live, work, and age, including factors like socioeconomic status, [education](/data-harmonisation/data-harmonisation-in-education), neighborhood and physical environment, employment, and social support networks, as well as access to healthcare. SDOH significantly impact health outcomes, with a growing body of evidence suggesting that they may account for a substantial part of health disparities and inequities observed across different populations.


#### ONC Gravity Project
The Office of the National Coordinator for Health Information Technology (ONC) Gravity Project is an initiative focused on developing consensus-driven standards for documenting, coding, and exchanging SDOH data within health records. By incorporating SDOH data into EHRs, the project aims to improve health outcomes by enabling healthcare providers to consider and address the broader social and environmental factors affecting their patients' health. The standards developed by the Gravity Project are expected to facilitate more holistic approaches to patient care and [contribute](/open-source-for-social-science/contributing-to-harmony-nlp-project/) to advancing health equity by identifying and addressing the root causes of health disparities.


---
## Challenges and Benefits
{{< image src="/images/Challenges and Benefits.webp" alt="Challenges and Benefits" title="Challenges and Benefits" >}}

Harmonising health data presents a complex set of challenges, reflecting the diversity and intricacy of healthcare information systems. Addressing these challenges is critical for ensuring that data harmonisation efforts lead to improved healthcare outcomes, enhanced research capabilities, and more informed policy-making. Here's a closer look at some of the primary challenges involved in healthcare data integration:

### Challenges in Healthcare Data Integration

- **Diverse Data Sources:** The complexity of healthcare data arises from its diverse sources, varying formats, and the different standards employed by public and private health records. Data collected from hospitals, clinics, laboratories, and patient-reported outcomes can differ significantly, not just in format but also in the detail and context of the information captured. Public health records may focus on population-level data, while private health records often contain detailed individual patient data. Harmonising these sources requires a deep understanding of the context and purpose of each data type and the development of methods to reconcile these differences without losing the nuances that make the data valuable.

- **Data Privacy and Security:**
Data privacy and security are paramount concerns in the sharing and integration of health information. Legal frameworks such as the Health Insurance Portability and Accountability Act (HIPAA) in the United States set strict guidelines for handling personal health information. The ethical considerations of maintaining patient confidentiality and ensuring data is used responsibly complicate the harmonisation process. Addressing these concerns involves implementing robust security measures, ensuring compliance with legal requirements, and often navigating complex consent and data governance frameworks to enable the ethical use of data.


- **Technological Barriers:**
Technological barriers pose significant challenges to healthcare data integration. Many healthcare systems still rely on legacy systems that were not designed with interoperability in mind, making it difficult to extract, share, and integrate data across different platforms. The need for interoperable solutions that can communicate across various healthcare information systems is critical. Overcoming these barriers requires investment in technology upgrades and the adoption of standards like HL7 FHIR, which facilitate the seamless exchange of health information. However, the cost and complexity of implementing these solutions can be prohibitive for many organizations.

### **Addressing the Challenges**
To address these challenges, a systematic and collaborative approach is essential. This includes:

- **Defining Harmonisation Objectives:** 
Clearly articulating the goals of data harmonisation efforts helps to align strategies and methodologies across different stakeholders.
- **Understanding Data Variation:** 
A thorough analysis of the sources of data variation is crucial for developing effective harmonisation strategies that can accommodate diverse data types and structures.
- **Employing Flexible Methodologies:** 
Adopting adaptable methodologies that can be tailored to the specific needs of different datasets is key to overcoming variations in data collection and standards.
- **Collaboration Among Stakeholders:** 
Engaging a wide range of stakeholders, including healthcare providers, researchers, technology developers, and policymakers, is vital for agreeing on common standards and definitions. This collaboration ensures that the harmonised data retains the integrity and accuracy of the original datasets.

Despite these challenges, the benefits of harmonising health data are substantial. Successful harmonisation efforts can lead to more comprehensive and accurate datasets, enabling advanced research, more personalized patient care, and informed healthcare policies that can ultimately lead to improved health outcomes and reduced healthcare disparities.


---
## Implementing Data Harmonisation

Data harmonisation can be implemented retrospectively, after data collection, or prospectively, before data is collected. [Retrospective harmonisation](/data-harmonisation/back-to-the-future-retrospectively-harmonising-questionnaire-data/), also known as ex-post or output harmonisation, aligns existing datasets. Prospective harmonisation, or ex-ante/input harmonisation, involves planning data collection methods and standards in advance to ensure compatibility. Each approach has its merits, and the choice between them often depends on the goals of the harmonisation effort and the nature of the data involved.

The process involves defining the scope of harmonisation, identifying relevant data sources, standardizing data formats and terminologies, and employing technologies such as natural language processing (NLP) to ensure data quality and consistency. Numerous initiatives support data harmonisation efforts, such as the Common Data Model Harmonisation project, which aims to enhance data utility and interoperability across healthcare networks. Tools and technologies like CDASH and the NIH's Common Data Elements facilitate registry interoperability.


---
## Case Studies on Data Harmonisation in Healthcare
{{< image src="/images/Case Studies on Data Harmonisation in Healthcare.webp" alt="Case Studies on Data Harmonisation in Healthcare" title="Case Studies on Data Harmonisation in Healthcare" >}}

### Case Study 1: The Global Alliance for Genomics and Health (GA4GH) and the BRCA Challenge

### Objective
The BRCA Challenge, under the umbrella of the Global Alliance for Genomics and Health (GA4GH), aims to harmonise genetic data related to the BRCA1 and BRCA2 genes, known for their link to breast and ovarian [cancer](/harmonisation-validation/functional-assessment-of-cancer-therapy-general-fact-g-with-fact-head-and-neck-fact-hn-subscale) risk. The project seeks to aggregate and standardize genetic variants to improve the understanding and clinical interpretation of BRCA mutations globally.

### Process
- **Global Data Collection:** Engage with international consortia, research institutions, and clinical labs to contribute genetic data related to BRCA1 and BRCA2 mutations.
- **Data Standardization:** Implement the GA4GH’s data sharing standards and frameworks to ensure consistent reporting of genetic variants, including the use of standardized nomenclature for mutations.
- **Variant Interpretation Harmonisation:** Utilize shared guidelines, such as those from the American College of Medical Genetics and Genomics (ACMG), for the classification of genetic variants to harmonise interpretations of mutation significance.
- **Data Sharing Platform Development:** Develop and deploy the BRCA Exchange platform, a publicly accessible database that aggregates global BRCA data, providing researchers and clinicians with access to variant information and clinical annotations.
- **Community Engagement and Education:** Facilitate workshops, webinars, and conferences to engage the global community, including scientists, clinicians, and patients, in the use and contribution to the BRCA Exchange.
- **Privacy and Ethics Consideration:** Address ethical and privacy concerns by ensuring data sharing complies with local and international regulations, and by securing patient consent where necessary.


### Example Data Tables

### Table 1: Global Data Collection

| Institution                                 | Country | Number of BRCA1/2 Variants |
|---------------------------------------------|---------|----------------------------|
| International Cancer Genome Consortium (ICGC) | Global  | 10,000                     |
| The Cancer Genome Atlas (TCGA)              | USA     | 5,000                      |
| UK Biobank                                  | UK      | 2,000                      |


### Table 2: Data Standardization

| Original Variant Name | Standardized Variant Name     |
|-----------------------|-------------------------------|
| c.181T>G (BRCA1)      | NM_000059.3:c.181T>G          |
| p.Val61Leu (BRCA2)    | NP_000056.3:p.Val61Leu        |


### Table 3: Variant Interpretation Harmonisation

| Variant            | ACMG Classification     | Clinical Significance         |
|--------------------|-------------------------|-------------------------------|
| c.181T>G (BRCA1)   | Pathogenic              | High risk                     |
| p.Val61Leu (BRCA2) | Uncertain significance  | Further investigation needed  |


### Table 4: Data Sharing Platform Development

| Platform Feature | Description                                      |
|------------------|--------------------------------------------------|
| Variant search   | Find specific BRCA1/2 variants by gene, position, or ID. |
| Clinical annotations | View clinical data associated with specific variants. |
| Download options | Download variant data in different formats.      |



### Case Study 2: Pediatric Acute Care Data Harmonisation through PEDSnet

### Objective
PEDSnet, a pediatric learning health system, aims to harmonise electronic health record (EHR) data from multiple pediatric hospitals across the United States to facilitate research and improve pediatric care.

### Process
- **Collaboration Across Institutions:** Form a consortium of pediatric hospitals willing to share and harmonise their EHR data for research and quality improvement purposes.
- **Common Data Model Adoption:** Adopt a common data model (CDM) that allows for the standardization of EHR data across different [hospital](/harmonisation-validation/hospital-anxiety-and-depression-scale-hads) systems, including demographics, diagnoses, procedures, medications, and outcomes.
- **Data Transformation and Mapping:** Work with data analysts at each institution to map their local EHR data to the CDM, ensuring that data from different sources becomes comparable and analyzable.
- **Quality Assurance Processes:** Implement continuous data quality checks to ensure the accuracy, completeness, and consistency of the harmonised data set.
- **Data Sharing and Access Infrastructure:** Develop a secure infrastructure that allows researchers to access and analyse the harmonised data while protecting patient privacy and adhering to data use agreements.
- **Engagement and Governance:** Establish a governance structure that includes representatives from all participating institutions, researchers, and patient advocacy groups to oversee the project and ensure its alignment with patient care improvement goals.

These case studies provide tangible examples of how harmonisation efforts in healthcare can leverage real data to advance research, improve clinical care, and facilitate global collaboration. The BRCA Challenge and PEDSnet demonstrate the potential of harmonised data to impact patient care and outcomes significantly by enabling more informed research and clinical decisions.

### Example Data Tables

### Table 5: Collaboration Across Institutions

| Participating Hospital               | Location           | Number of Pediatric Beds |
|--------------------------------------|--------------------|--------------------------|
| Children's Hospital of Philadelphia  | Philadelphia, USA  | 500                      |
| Seattle Children's Hospital          | Seattle, USA       | 300                      |
| Boston Children's Hospital           | Boston, USA        | 400                      |


### Table 6: Common Data Model Adoption

| CDM Element         | Description                                      |
|---------------------|--------------------------------------------------|
| Patient demographics| Age, gender, ethnicity, etc.                     |
| Diagnoses           | ICD-10 codes for medical conditions.              |
| Procedures          | CPT codes for medical procedures.                 |
| Medications         | Medications administered during hospitalization. |
| Length of stay      | Number of days spent in the hospital.            |


### Table 7: Data Transformation and Mapping

| Hospital                              | Local EHR Data Element | CDM Element          | Mapping Process                 |
|---------------------------------------|------------------------|----------------------|---------------------------------|
| Children's Hospital of Philadelphia   | "Patient Age"          | "Patient_Age_Years"  | Convert date of birth           |



## The Role of Public and Private Sectors in Health Data Harmonisation
{{< image src="/images/The Role of Public and Private Sectors in Health Data Harmonisation.webp" alt="The Role of Public and Private Sectors in Health Data Harmonisation" title="The Role of Public and Private Sectors in Health Data Harmonisation" >}}

The harmonisation of health data involves contributions and responsibilities from both the public and private sectors, each bringing unique resources and perspectives to the process.

### Public Sector Contributions and Responsibilities

#### Setting Standards and Regulations
- **Developing Data Standards**: Public agencies lead in establishing data standards for consistency and interoperability of health data.
- **Regulatory Frameworks**: Provide legal frameworks governing data privacy, security, and sharing, such as HIPAA in the United States.

#### Funding and Research Support
- **Grants and Funding**: Organizations like the NIH support research projects on data harmonisation through funding.
- **Research Initiatives**: Launch large-scale initiatives for scientific research and public health monitoring using harmonised data.

#### Public Health Surveillance and Policy Development
- **Surveillance Programs**: Use harmonised data for disease surveillance and monitoring public health interventions.
- **Policy Development**: Inform policy-making based on insights from harmonised data to improve healthcare delivery.

### Private Sector Contributions and Responsibilities

#### Technological Innovation and Solutions
- **Technology Development**: Develop technology and software for data harmonisation, including EHR systems and data analytics tools.
- **Innovation and Efficiency**: Bring innovation to the harmonisation process, pioneering new methods for data integration and analysis.

#### Partnership and Collaboration
- **Collaboration with Public Sector**: Engage in partnerships with government agencies and academic institutions to support health initiatives.
- **Cross-Sector Data Sharing**: Participate in consortia to improve health data interoperability and access.

#### Privacy, Security, and Ethical Management of Data
- **Data Privacy and Security**: Implement standards of data privacy and security to protect health information.
- **Data Stewardship**: Ensure responsible and ethical use of patient data, respecting consent and preferences.


Collaboration between these sectors is essential for advancing healthcare research, improving patient care, and informing health policy beneficially for society.


---
## Future Prospects of Data Harmonisation in Healthcare
{{< image src="/images/Future Prospects.webp" alt="Future Prospects" title="Future Prospects" >}}

The integration of AI and ML in data harmonisation processes offers promising prospects for healthcare. These technologies can automate the identification and resolution of discrepancies across diverse data sources, reducing the time and resources required for manual data cleaning and standardization. This automation will not only speed up research and analysis but also improve the reliability of data-driven decisions in healthcare settings.

### Enhancing Healthcare Efficiency and Equity

#### Predictive Analytics and Personalized Medicine
Harmonised health data, enriched through AI-driven analyses, has the potential to revolutionise predictive analytics and personalized medicine. By aggregating and standardizing vast amounts of health data, researchers and clinicians can develop more accurate predictive models for disease risk, treatment outcomes, and health trends. This, in turn, enables the creation of tailored treatment plans that consider the unique genetic makeup, lifestyle, and environmental factors of individual patients, moving healthcare closer to a truly personalized approach.

#### Policy and Regulation Changes
The evolving landscape of data harmonisation will likely necessitate changes in policy and regulation. Future policy directions may focus on enhancing data sharing frameworks while ensuring patient privacy and data security. Regulations may evolve to encourage the adoption of standardized data models across healthcare systems, promoting interoperability and reducing silos in healthcare data. However, these changes must balance the need for open, collaborative research with the imperative to protect sensitive health information.

### The Potential Impact on Healthcare Efficiency and Equity

The promise of data harmonisation extends beyond technological advancements, touching on key aspects of healthcare efficiency and equity. By making it easier to combine and analyse data from varied sources, harmonisation efforts can help identify and address disparities in healthcare access and outcomes. This can lead to more equitable healthcare systems where decisions are informed by comprehensive, high-quality data reflecting diverse patient populations.

Moreover, the efficiency gains from streamlined data processes can reduce healthcare costs and improve patient outcomes. As data harmonisation facilitates quicker, more accurate analyses, healthcare providers can make informed decisions faster, leading to better health outcomes and more efficient use of resources.


---
## Conclusion

Data harmonisation in healthcare is a complex but essential process for integrating public and private health records. By standardizing data across different sources, healthcare providers and researchers can improve patient care, enhance research capabilities, and support effective public health interventions. While challenges exist, the strategic implementation of data harmonisation, along with collaboration among stakeholders, can lead to significant advancements in healthcare information management and utilization.
The future of healthcare lies in leveraging technology to make sense of vast amounts of data. As we look ahead, the role of data harmonisation in realizing the potential of predictive analytics, personalized medicine, and equitable healthcare cannot be understated. With ongoing advances in AI and ML, coupled with thoughtful policy and regulation changes, the harmonisation of health data stands as a cornerstone of future healthcare innovations.


---
## References
For further reading on data harmonisation and its impact on healthcare, [source1](#source1), [source2](#source2), and [source3](#source3) provide comprehensive insights.


- Nature. "A General Primer for Data Harmonisation." [Source](https://www.nature.com/articles/sdata201828)
- BMC Medical Informatics and Decision Making. "Definitions, components and processes of data harmonisation in healthcare: a scoping review." [Source](https://bmcmedinformdecismak.biomedcentral.com/articles/10.1186/s12911-020-1022-9)
- HealthIT.gov. "Common Data Model Harmonisation." [Source](https://www.healthit.gov/topic/scientific-initiatives/common-data-model-harmonisation)
- NCBI. "Data Harmonisation and Standardization Efforts - Tools and Technologies for Registry Interoperability." [Source](https://www.ncbi.nlm.nih.gov/books/NBK493614/)

This exploration into data harmonisation in healthcare highlights the intricate process and its significant impact on healthcare management and patient care. The concerted effort of all stakeholders in this domain is vital for achieving a more integrated, effective, and equitable healthcare system.


---

This blog synthesizes information from comprehensive sources on the topic of data harmonisation in healthcare. For detailed insights and methodologies, refer to the original articles on Nature and BMC Medical Informatics and Decision Making.


