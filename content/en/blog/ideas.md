---
title: "Ideas"
date: 2024-02-04
categories: ["development"]
image: "/images/world.png"
---

## Project ideas for future development of Harmony

## Accepted project ideas

Below you can see the list of project ideas aligned with Harmony's standards, all designed to elevate the functionality and accessibility of Harmony. These proposals aim to fortify Harmony as a comprehensive tool for researchers navigating questionnaire item harmonisation across diverse studies. Each idea maintains a clear scope, typically avoiding extensive overhauls. Quick-start guidelines and beginner-friendly tasks are provided for each idea. We encourage contributors to join mentor teams and GSoC applicants to submit proposals aligned with these concepts.

### Integrate p-values in Harmony's output

We have a need to provide p-values instead of just the current Cosine similarity metric, in order to provide researchers with enhanced statistical insights, facilitating a more comprehensive analysis of harmonised questionnaire items

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Statistical analysis, data interpretation, software development

**Possible mentors:** Thomas Wood

**Expected size of the project:** 175 hours

**Difficulty:** medium


### Integrate with more LLMs

Extend Harmony's capabilities by integrating with advanced language models like GPT-3 and GPT-4, enabling more sophisticated natural language processing for improved harmonisation

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Natural Language Processing (NLP), API integration, and software development

**Possible mentors:** Thomas Wood

**Expected size of the project:** 175 hours

**Difficulty:** hard


### Multilingual negation

Enhance Harmony to process negation in languages other than English and Portuguese, expanding its applicability and utility for researchers working with [diverse language datasets](/nlp-semantic-text-matching/harmony-on-kufungisisa-a-cultural-concept-of-distress-from-zimbabwe/).

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Multilingual NLP, language processing, software development

**Possible mentors:** Thomas Wood

**Expected size of the project:** 90 hours

**Difficulty:** medium


### PDF data extraction

Address and fix issues related to processing PDFs within Harmony, as identified in the Kaggle competition. Improve PDF handling for more seamless integration

* Fix processing of PDFs (see our [Kaggle competition](/harmony-on-kaggle/), also [issue](https://github.com/harmonydata/harmony/issues/11))

**More information:** [https://github.com/harmonydata/harmony/issues/11](https://github.com/harmonydata/harmony/issues/11)

**Skills:** PDF processing, problem-solving, and software development

**Possible mentors:** Thomas Wood

**Expected size of the project:** 350 hours

**Difficulty:** hard


### External integrations (multiple projects)

Integrate Harmony with prominent repositories like the UK Data Archive, UKLLC, and others. Enable seamless access and harmonisation of questionnaire items from these repositories

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Data repository integration, software development

**Possible mentors:** John Rogers

**Expected size of the project:** 175 hours per integration

**Difficulty:** medium


### Develop a Study Search Endpoint for Harmony API

This project proposal aims to enhance the functionality of the Harmony project by implementing a new endpoint called "search" in Harmony's API. This endpoint will enable third-party users, such as the UK Longitudinal Life Course Studies Consortium (UKLLC), to search for studies based on specific criteria. By integrating advanced search capabilities into Harmony's API, users will be able to query the database and retrieve relevant studies efficiently.

* Harmony adds a new endpoint called `search` to Harmony's API which would allow third parties such as UKLLC to search for studies. This is basically a URL that would probably look something like https://api.harmonydata.ac.uk/search and which would allow Harmony to receive a text and find variables in UKLLC's database that are similar to it. The existing endpoints are [here](https://api.harmonydata.ac.uk/docs).

**Goals**

1. **Endpoint Development:** Design and develop the "search" endpoint for Harmony's API, allowing users to search for studies based on keywords, variables, or other search parameters.

2. **Integration with UKLLC Database:** Establish integration with the UKLLC database to enable seamless search functionality, ensuring compatibility and interoperability between Harmony and UKLLC data repositories.

3. **Search Algorithm:** Implement a robust search algorithm that efficiently identifies and retrieves studies matching the user's search criteria, considering factors such as relevance, similarity, and accuracy.

4. **Query Processing:** Develop mechanisms for processing user queries, parsing search parameters, and executing database queries to retrieve matching studies from the Harmonybase.

5. **Response Formatting:** Define data structures and formats for organizing and presenting search results in a user-friendly manner, including study metadata, variables, and relevant information.

6. **API Documentation:** Create comprehensive documentation for the new "search" endpoint, including usage instructions, query syntax, and examples, to facilitate seamless integration and usage by third-party developers.

**Expected Deliverables**

- Implemented "search" endpoint in Harmony's API, accessible via the specified URL.

- Integration with the UKLLC database to enable search functionality across studies.

- Efficient search algorithm capable of retrieving relevant studies based on user queries.

- Well-formatted search response containing detailed study information and metadata.

- Comprehensive API documentation outlining endpoint usage and functionality.

**More information:** [https://api.harmonydata.ac.uk/docs](https://api.harmonydata.ac.uk/docs)

**Skills:** Proficiency in web development, API design, and RESTful architecture. Familiarity with search algorithms, natural language processing, and information retrieval techniques

**Possible mentors:** Thomas Wood, Piyush Raj, John Rogers

**Expected size of the project:** 350 hours

**Difficulty:** medium


### Questionnaire-level similarity metric

Harmony should also show an H-score, a similarity metric between two questionnaires.

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Statistical analysis, software development

**Possible mentors:** Eve Cheng

**Expected size of the project:** 350 hours

**Difficulty:** medium


### Raw data handling

Allow Harmony to process raw survey data so that social scientists have everything they need to run the statistical analyses

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Statistical analysis, software development

**Possible mentors:** Eoin McElroy

**Expected size of the project:** 350 hours

**Difficulty:** hard


### User feedback loop

Develop a feedback loop where users can flag bad matches and these are fed back into the matching algorithm

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Statistical analysis, software development

**Possible mentors:** Thomas Wood

**Expected size of the project:** 350 hours

**Difficulty:** hard


### Simulate factor models

Train a psychology-specific model where Harmony predicts the similarity between items in the way that a factor model would quantify the similarity

**More information:** [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)

**Skills:** Statistical analysis, software development

**Possible mentors:** Eoin McElroy

**Expected size of the project:** 350 hours

**Difficulty:** hard


### Designing Kaggle Competitions for Questionnaire Item Harmonisation

This project aims to leverage the Harmony project, a tool designed for retrospective harmonisation of questionnaire items, to develop and manage Kaggle competitions focused on questionnaire item harmonisation. Design Kaggle competitions centered around questionnaire item harmonisation challenges, considering various aspects such as comparing items across studies, identifying the best match for item sets, assessing the compatibility of different questionnaire versions, and comparing items written in different languages.

**Goals**

1. **Dataset Preparation:** Prepare datasets for the competitions by curating diverse sets of questionnaire items from different studies, ensuring variability in item formats, languages, and versions.

2. **Task Formulation:** Define clear tasks and objectives for each competition, including specific harmonisation goals, evaluation metrics, and guidelines for participants.

3. **Competition Management:** Oversee the entire competition lifecycle, including registration, submission, evaluation, and leaderboard management. Ensure fairness, transparency, and integrity throughout the competition.

4. **Community Engagement:** Foster a supportive and collaborative community of participants, mentors, and stakeholders interested in questionnaire item harmonisation. Provide guidance, resources, and support to participants throughout the competition.

5. **Evaluation Framework:** Develop robust evaluation frameworks and scoring mechanisms to assess the effectiveness and quality of harmonisation solutions submitted by participants.

**Expected Deliverables**

- Well-designed Kaggle competitions addressing various aspects of questionnaire item harmonisation.

- Curated datasets representing diverse questionnaire items for use in competitions.

- Clear documentation outlining competition objectives, guidelines, and evaluation criteria.

- Managed competition platforms with active participation and engagement from the community.

- Evaluation framework and scoring metrics for assessing participant submissions.

**More information:** [https://harmonydata.ac.uk/harmony-on-kaggle/](https://harmonydata.ac.uk/harmony-on-kaggle/)

**Skills:** Proficiency in data science, machine learning, and natural language processing. Experience with Kaggle competition design, dataset preparation, and competition management. Excellent communication and collaboration skills to engage with participants and stakeholders effectively.

**Possible mentors:** Thomas Wood from the Harmony project and Kaggle competition organizers will guide and support the selected GSoC participants throughout the project duration.

**Expected size of the project:** 350 hours

**Difficulty:** hard


### Integrate Pinecone for Efficient Variable Lookup in Harmony

This project focuses on integrating Pinecone (subject to change), an off-the-shelf similarity search service, into the Harmony project to facilitate efficient variable lookup functionality. Harmony aims to provide a lookup feature by indexing all variables from third-party sources offline and updating them periodically to ensure accuracy and relevance. Pinecone's advanced search capabilities will enhance Harmony's ability to quickly retrieve similar variables, enabling seamless data harmonisation across studies.

In order to provide a lookup functionality, Harmony would need to index all the variables from a third party offline and do this every week or month. This means, converting them all to a vector and storing them somewhere so that we can quickly do a lookup. We might need an off the shelf tool such as [Pinecone](https://www.pinecone.io/) which would help us manage this lookup. Harmony is already doing this for the Mental Health Catalogue but the MHC case is simpler because there are fewer variables and we don't have a process for constantly updating the database.

**Goals**

1. **Pinecone Integration:** Integrate Pinecone into Harmony's infrastructure to support efficient variable lookup and similarity search functionalities.

2. **Offline Indexing:** Develop a process for offline indexing of variables from third-party sources, converting them into vectors, and storing them for rapid lookup.

3. **Periodic Updates:** Implement a mechanism for regularly updating the indexed variables to reflect changes and additions in the underlying data sources.

4. **Lookup Functionality:** Design and implement a lookup feature in Harmony's user interface, allowing users to search for variables based on similarity and relevance.

5. **Performance Optimization:** Optimize the indexing and search processes to ensure fast and accurate variable lookup, even for large datasets and complex variable structures.

**Expected Deliverables:**

- Pinecone integrated into Harmony's backend infrastructure for efficient variable lookup.

- Automated pipeline for offline indexing of variables from third-party sources and periodic updates.

- User-friendly lookup interface in Harmony, enabling users to search for variables based on similarity.

- Performance-optimized indexing and search algorithms for fast and accurate variable retrieval.

**Skills:** Proficiency in backend development, API integration, and experience with similarity search algorithms and vectorization techniques. Ability to work with off-the-shelf tools and services like Pinecone and integrate them into existing projects.

**Mentors:** Thomas Wood

**Expected size of the project:** 350 hours

**Difficulty:** hard


## Get Likert scale (response options)

TODO: write description

## Ongoing discussion

These are proposals in the mailing lists and Discord which have not been published as project ideas yet. The feasibility is yet to be defined, and the idea may be dismissed depending on the feedback. Everyone is welcome to participate in the discussion and to join as a potential mentor.

 

## Other ideas for the project

* Training webinars
* Hackathon
* More Kaggle competitions

List prepared in collaboration with [Piyush Raj](https://github.com/0x48piraj).
