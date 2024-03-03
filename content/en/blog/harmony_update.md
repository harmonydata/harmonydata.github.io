---
title: "Harmony update: new features and bug fixes"
description: "Harmony update: new features and bug fixes"
date: 2023-10-04
categories: ["development"]
image: "/images/blog/Screenshot-from-2023-07-12-21-28-48-1536x933.png"
---

## Harmony update: new features and bug fixes

We are pleased to announce the release of a new update to Harmony, our online platform for harmonising questions. This update includes a number of new features and bug fixes, designed to improve the user experience and make Harmony even more useful for researchers.

**New features:**

* **Complete reworking of the search functionality:** The search functionality in Harmony has been completely rewritten to support [Lucene-like queries](http://lucenetutorial.com/lucene-query-syntax.html). This means that you can now use wildcards, logical operators, parentheses, and negation to create precise and complex searches. You can also search by data field (instrument, question, or topic), and select matches by clicking them to build up a list of selected matches from multiple different queries.

* Three data fields are exposed: instrument, question and topic - allowing queries such as `<< instrument:RCAD and instrument:GAD >>` which will show matches in your results between these two instruments only.
* Data fields do not need to be specified and by default all are searched.
* Wildcards, logical operators, parentheses and negation are supported in addition to specifying data fields allowing precise complex searches to be performed. Proximity searches, fuzzy searches and search boosting are not currently supported.

* **Complete cosine similarity matrix:** The complete cosine similarity matrix for the model is now provided on a second sheet in every exported Excel file. This can be useful for researchers who want to perform more advanced analyses of their data.
* **Integration to the Catalogue of Mental Health Measures:** The integration to the MHC is now shown as a separate card at the top of the results list. This card shows topics for the entire results model, rather than individually for each match.
* **Rating popup:** We have added a 5-star rating popup to Harmony. This allows you to rate your experience with the tool and provide feedback to help us improve it. 

**Bug fixes:**

* A number of minor bugs have been fixed, including:
    * An issue with the export functionality has been fixed.
    * An issue with the search functionality has been fixed.
    * A number of typos have been fixed.

We hope that you enjoy using the new features and bug fixes in Harmony. Please let us know if you have any feedback or questions.

**How to try the updated tool:**

The update to Harmony is now available to all users. To try it, simply visit https://harmonydata.ac.uk/app.

Thank you for using Harmony!
