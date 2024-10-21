---
title: "Data harmonisation tools and frameworks in 2024"
description: "Harmonised data refers to the standardisation of disparate data formats, schemas, and structures across different sources to enable seamless integration and analysis. It's crucial for enhancing data quality, facilitating integration, improving decision-making, and increasing operational efficiency."
date: 2024-04-02
categories: ["data"]
image: "/images/06- Data harmonisation tools and frameworks in 2024.svg"
aliases:
  - "/data-harmonisation-tools-frameworks/"
url: "/data-harmonisation/data-harmonisation-tools-frameworks/"
---

# Data Harmonisation Tools – Overview

Organisations typically collect data from multiple sources and for many different reasons. This data comes in various forms and formats – for example, it may be coming from market research, customer research or inter-organisation departments.

[Data harmonisation](/harmonised-data), an advanced technique used to make sense of all the raw data collected and uses for research purposes, becomes necessary in this case, but unless it is incorporated effectively, organisations might miss the full, holistic view of business performance that they wish to gain.

So, if the [data is not harmonised](/data-harmonisation/) using the proper tools and frameworks, for example, organisations are bound to miss some very critical data pieces which will indefinitely affect business performance at some point. Plus, management might miss potential opportunities as the data (at this point, before the harmonisation) is in disparate forms and quite widespread.

[Harmony](/app) is a data harmonisation tool which has been developed for cases where datasets have variables with differing names, for example disparate questionnaires with questions in different formats.

If you collected data using two questionnaires, such as GAD-7 and Becks Anxiety Inventory as in the below image, you would need to harmonise the datasets, by identifying correspondences between variables (the arrow in the image)

{{< image src="/images/GAD-7-vs-Becks.drawio-min.png" alt="dog" title="dog" >}}

*Data harmonisation of GAD-7 and Becks Anxiety Inventory - this is what a data harmonisation tool such as Harmony would produce.*

Here's a video of how the data harmonisation tool Harmony works:

{{< youtube cEZppTBj1NI >}}

{{< card heading="Try Harmony" copy="Compare CES-D and SMFQ " url="https://harmonydata.ac.uk/app/#/import/W3siaW5zdHJ1bWVudF9uYW1lIjogIkNFU19EIEVuZ2xpc2giLCAicXVlc3Rpb25zIjogW3sicXVlc3Rpb25fdGV4dCI6ICJJIHdhcyBib3RoZXJlZCBieSB0aGluZ3MgdGhhdCB1c3VhbGx5IGRvblx1MjAxOXQgYm90aGVyIG1lLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBkaWQgbm90IGZlZWwgbGlrZSBlYXRpbmc7IG15IGFwcGV0aXRlIHdhcyBwb29yLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IHRoYXQgSSBjb3VsZCBub3Qgc2hha2Ugb2ZmIHRoZSBibHVlcyBldmVuIHdpdGggaGVscCBmcm9tIG15IGZhbWlseSBvciBmcmllbmRzLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IEkgd2FzIGp1c3QgYXMgZ29vZCBhcyBvdGhlciBwZW9wbGUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGhhZCB0cm91YmxlIGtlZXBpbmcgbXkgbWluZCBvbiB3aGF0IEkgd2FzIGRvaW5nLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IGRlcHJlc3NlZC4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgZmVsdCB0aGF0IGV2ZXJ5dGhpbmcgSSBkaWQgd2FzIGFuIGVmZm9ydC4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgZmVsdCBob3BlZnVsIGFib3V0IHRoZSBmdXR1cmUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIHRob3VnaHQgbXkgbGlmZSBoYWQgYmVlbiBhIGZhaWx1cmUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGZlbHQgZmVhcmZ1bC4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIk15IHNsZWVwIHdhcyByZXN0bGVzcy4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgd2FzIGhhcHB5LiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSB0YWxrZWQgbGVzcyB0aGFuIHVzdWFsLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IGxvbmVseS4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIlBlb3BsZSB3ZXJlIHVuZnJpZW5kbHkuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGVuam95ZWQgbGlmZS4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgaGFkIGNyeWluZyBzcGVsbHMuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGZlbHQgc2FkLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IHRoYXQgcGVvcGxlIGRpc2xpa2UgbWUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGNvdWxkIG5vdCBnZXQgXHUyMDFjZ29pbmcuXHUyMDFkIn1dfSwgeyJpbnN0cnVtZW50X25hbWUiOiAiU2hvcnQgTW9vZCAmIEZlZWxpbmdzIFF1ZXN0aW9ubmFpcmUgKDEzLWl0ZW0pIChTTUZRKSIsICJxdWVzdGlvbnMiOiBbeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBtaXNlcmFibGUgb3IgdW5oYXBweSJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSBkaWRuXHUyMDE5dCBlbmpveSBhbnl0aGluZyBhdCBhbGwifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBzbyB0aXJlZCB0aGF0IHMvaGUganVzdCBzYXQgYXJvdW5kIGFuZCBkaWQgbm90aGluZyJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSB3YXMgdmVyeSByZXN0bGVzcyJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSBmZWx0IHMvaGUgd2FzIG5vIGdvb2QgYW55IG1vcmUifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgY3JpZWQgYSBsb3QifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZm91bmQgaXQgaGFyZCB0byB0aGluayBwcm9wZXJseSBvciBjb25jZW50cmF0ZSJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSBoYXRlZCBoZXJzZWxmL2hpbXNlbGYifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBzL2hlIHdhcyBhIGJhZCBwZXJzb24ifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBsb25lbHkifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgdGhvdWdodCBub2JvZHkgcmVhbGx5IGxvdmVkIGhlciJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSB0aG91Z2h0IHMvaGUgY291bGQgbmV2ZXIgYmUgYXMgZ29vZCBhcyBvdGhlciBraWRzIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJTL2hlIGZlbHQgcy9oZSBkaWQgZXZlcnl0aGluZyB3cm9uZyJ9XX1d" >}}



With the data harmonisation frameworks and especially the right data harmonisation tools in your arsenal, more informed organisational decision-making can be supported as well as data processing that’s far more efficient. This means that business decisions will ultimately be more accurate and reliable, whilst the quality of the business data on which those decisions are made is also enhanced. Since the now processed and harmonised data is up to date, your organisation is already in an agile state and ready to respond to market changes.

As mentioned at the beginning, organisations must take data from a variety of sources although these sources may not be the same every single time. They must then process it which in itself can be a cumbersome, time-consuming and often complex process where the chances of inaccuracies can be high.

However, with a robust data harmonisation process supported by the appropriate tools and frameworks, an organisation’s data can be quickly centralised and up to date. Naturally, less time will be required to index, verify, and track it, thus, enabling swift decision-making according to shifting consumer demand, for example, or evolving market conditions.




## Some examples of data harmonisation with Harmony

* <a href="https://harmonydata.ac.uk/app/#/import/W3siaW5zdHJ1bWVudF9uYW1lIjogIkNFU19EIEVuZ2xpc2giLCAicXVlc3Rpb25zIjogW3sicXVlc3Rpb25fdGV4dCI6ICJJIHdhcyBib3RoZXJlZCBieSB0aGluZ3MgdGhhdCB1c3VhbGx5IGRvblx1MjAxOXQgYm90aGVyIG1lLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBkaWQgbm90IGZlZWwgbGlrZSBlYXRpbmc7IG15IGFwcGV0aXRlIHdhcyBwb29yLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IHRoYXQgSSBjb3VsZCBub3Qgc2hha2Ugb2ZmIHRoZSBibHVlcyBldmVuIHdpdGggaGVscCBmcm9tIG15IGZhbWlseSBvciBmcmllbmRzLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IEkgd2FzIGp1c3QgYXMgZ29vZCBhcyBvdGhlciBwZW9wbGUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGhhZCB0cm91YmxlIGtlZXBpbmcgbXkgbWluZCBvbiB3aGF0IEkgd2FzIGRvaW5nLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IGRlcHJlc3NlZC4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgZmVsdCB0aGF0IGV2ZXJ5dGhpbmcgSSBkaWQgd2FzIGFuIGVmZm9ydC4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgZmVsdCBob3BlZnVsIGFib3V0IHRoZSBmdXR1cmUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIHRob3VnaHQgbXkgbGlmZSBoYWQgYmVlbiBhIGZhaWx1cmUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGZlbHQgZmVhcmZ1bC4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIk15IHNsZWVwIHdhcyByZXN0bGVzcy4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgd2FzIGhhcHB5LiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSB0YWxrZWQgbGVzcyB0aGFuIHVzdWFsLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IGxvbmVseS4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIlBlb3BsZSB3ZXJlIHVuZnJpZW5kbHkuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGVuam95ZWQgbGlmZS4ifSwgeyJxdWVzdGlvbl90ZXh0IjogIkkgaGFkIGNyeWluZyBzcGVsbHMuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGZlbHQgc2FkLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSSBmZWx0IHRoYXQgcGVvcGxlIGRpc2xpa2UgbWUuIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJJIGNvdWxkIG5vdCBnZXQgXHUyMDFjZ29pbmcuXHUyMDFkIn1dfSwgeyJpbnN0cnVtZW50X25hbWUiOiAiU2hvcnQgTW9vZCAmIEZlZWxpbmdzIFF1ZXN0aW9ubmFpcmUgKDEzLWl0ZW0pIChTTUZRKSIsICJxdWVzdGlvbnMiOiBbeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBtaXNlcmFibGUgb3IgdW5oYXBweSJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSBkaWRuXHUyMDE5dCBlbmpveSBhbnl0aGluZyBhdCBhbGwifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBzbyB0aXJlZCB0aGF0IHMvaGUganVzdCBzYXQgYXJvdW5kIGFuZCBkaWQgbm90aGluZyJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSB3YXMgdmVyeSByZXN0bGVzcyJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSBmZWx0IHMvaGUgd2FzIG5vIGdvb2QgYW55IG1vcmUifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgY3JpZWQgYSBsb3QifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZm91bmQgaXQgaGFyZCB0byB0aGluayBwcm9wZXJseSBvciBjb25jZW50cmF0ZSJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSBoYXRlZCBoZXJzZWxmL2hpbXNlbGYifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBzL2hlIHdhcyBhIGJhZCBwZXJzb24ifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgZmVsdCBsb25lbHkifSwgeyJxdWVzdGlvbl90ZXh0IjogIlMvaGUgdGhvdWdodCBub2JvZHkgcmVhbGx5IGxvdmVkIGhlciJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiUy9oZSB0aG91Z2h0IHMvaGUgY291bGQgbmV2ZXIgYmUgYXMgZ29vZCBhcyBvdGhlciBraWRzIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJTL2hlIGZlbHQgcy9oZSBkaWQgZXZlcnl0aGluZyB3cm9uZyJ9XX1d" target="harmonyapp">Import CES-D and SMFQ into Harmony and harmonise them</a> - find similarities between the two instruments using our AI platform
* <a href="https://harmonydata.ac.uk/app/#/import/W3siaW5zdHJ1bWVudF9uYW1lIjogIlN0cmVuZ3RocyBhbmQgRGlmZmljdWx0aWVzIFF1ZXN0aW9ubmFpcmUgKDUtaXRlbSkgKFNEUSkiLCAicXVlc3Rpb25zIjogW3sicXVlc3Rpb25fdGV4dCI6ICJNeSBjaGlsZC4uLiJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiWW91ciBjaGlsZCBvZnRlbiBjb21wbGFpbnMgb2YgaGVhZGFjaGVzLCBzdG9tYWNoLWFjaGVzLi4uIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJZb3VyIGNoaWxkIGhhcyBtYW55IHdvcnJpZXMsIGFuZCBvZnRlbiBzZWVtcyB3b3JyaWVkIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJZb3VyIGNoaWxkIGlzIG9mdGVuIHVuaGFwcHksIGRvd25oZWFydGVkLCBvciB0ZWFyZnVsIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJZb3VyIGNoaWxkIGlzIG5lcnZvdXMgb3IgY2xpbmd5IGluIG5ldyBzaXR1YXRpb25zIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJZb3VyIGNoaWxkIGhhcyBtYW55IGZlYXJzLCBhbmQgaXMgZWFzaWx5IHNjYXJlZCJ9XX0sIHsiaW5zdHJ1bWVudF9uYW1lIjogIlVudGl0bGVkIGluc3RydW1lbnQiLCAicXVlc3Rpb25zIjogW3sicXVlc3Rpb25fdGV4dCI6ICJOdW1ibmVzcyBvciB0aW5nbGluZyAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkZlZWxpbmcgaG90ICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiV29iYmxpbmVzcyBpbiBsZWdzICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiVW5hYmxlIHRvIHJlbGF4ICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiRmVhciBvZiB3b3JzdCBoYXBwZW5pbmcgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJEaXp6eSBvciBsaWdodGhlYWRlZCAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkhlYXJ0IHBvdW5kaW5nIC8gcmFjaW5nICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiVW5zdGVhZHkgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJUZXJyaWZpZWQgb3IgYWZyYWlkICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiTmVydm91cyAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkZlZWxpbmcgb2YgY2hva2luZyAifSwgeyJxdWVzdGlvbl90ZXh0IjogIkhhbmRzIHRyZW1ibGluZyAifSwgeyJxdWVzdGlvbl90ZXh0IjogIlNoYWt5IC8gdW5zdGVhZHkgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJGZWFyIG9mIGxvc2luZyBjb250cm9sICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiRGlmZmljdWx0eSBpbiBicmVhdGhpbmcgIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJGZWFyIG9mIGR5aW5nICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiU2NhcmVkICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSW5kaWdlc3Rpb24gIn0sIHsicXVlc3Rpb25fdGV4dCI6ICJGYWludCAvIGxpZ2h0aGVhZGVkICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiRmFjZSBmbHVzaGVkICJ9LCB7InF1ZXN0aW9uX3RleHQiOiAiSG90IC8gY29sZCBzd2VhdHMifV19XQ==" target="harmonyapp">Import SDQ and Beck Anxiety Inventory into Harmony and harmonise them</a> - find similarities between the two instruments using our AI platform
* [See CES-D in PDF](https://nida.nih.gov/sites/default/files/Mental_HealthV.pdf)
* [Download Beck Anxiety Inventory in PDF form](https://res.cloudinary.com/dpmykpsih/image/upload/great-plains-health-site-358/media/1087/anxiety.pdf)



## Data Harmonisation Tools and Frameworks – Before beginning

Effective data harmonisation is all about using the right mix of manual and automated techniques. At times, more manual techniques may be needed and vice-versa, depending on your business needs, although both need to be incorporated.

To make data harmonisation at automated process, for instance, AI and a technician’s skills must be collaboratively used. AI, in fact, can be very useful when it comes to data harmonisation as the probability of errors can be greatly reduced along with processing data at a much faster rate.

Before we can start to use the various data harmonisation frameworks or tools, we need to understand this from the outset: the important of establishing an institutional mechanism for managing data once it is harmonised. A common mechanism is needed, after all, which is easy to manage and update, and one which can also be easily understood by everyone – from the data technicians themselves to management, directors, CEOs and stakeholders.

Additionally, the data model needs to be “smart” – that is, it is able to easily meet ongoing and future demands, so it doesn’t have to be changed every time, but rather, requires only a few changes or tweaks before being deployed. This will help your business perform at a consistent pace.

Finally, before kicking off data harmonisation, the key objectives must be established. This means, clearly defining what the business objectives are and the underlying requirements for using data harmonisation. We will expand on this a bit more towards the end of the article.

So, in short, understand the purpose and specific outcomes you want with the harmonised data.

We can then discuss some of the specific data harmonisation tools and frameworks you should be using in 2024:

## Which Tools and Frameworks to use in 2024 for Data Harmonisation?

As you may already know, data harmonisation refers to a process where disparate data of varying formats, sources and types is integrated via certain tools and frameworks, in order for businesses to make key decisions.

Data harmonisation in the context of research, for example, refers to an organisation’s ability to connect with external data-based clinical and translational research projects, where patient data across multiple institutions and often different parts of the world (with different languages being spoken) is involved.

Before we get on with the best tools and frameworks to use for data harmonisation, we should quickly understand the distinction between data harmonisation and data standardisation. While both are used to achieve the same goal (data homogeneity) – the former revolves around data consistency while the latter is about data conformity.

The Cambridge Biomedical Research Centre based in the UK has a very good definition in this regard:

_“Standardisation refers to the implementation of uniform processes for prospective collection, storage and transformation of data. Harmonisation is a more flexible approach that is more realistic than standardisation in a collaborative context. Harmonisation refers to the practices which improve the comparability of variables from separate studies, permitting the pooling of data collected in different ways, and reducing study heterogeneity.”_

## Best Data Harmonisation Tools and Data Harmonisation Frameworks

### Federated Query

A federated query lets one coordinating group publish an executable algorithm (case and control cohorts typically) using analytics, which can then be independently executed by international consortium members.

The federated query method ensures that no patient-level data is handled outside the organisation, thus, preserving its confidentiality and obviating disclosure. While this is what it does at the basic level, other, more complex federated query models can specify an entire matrix of covariates, tabulations or features – a benchmark in the sequence to come up with a parameter estimate and variance – as well as a merger of matrices to arrive at more robust meta-analyses.

Since the federated query system only returns cell aggregate sub-totals in the matrix, patient-level data stays in the organisation and never gets exposed.

### Common Data Models (CDM)

When it comes to the widespread adoption of EHRs (electronic health records) and the need to reuse clinical data through clinical care, claims, and environmental integration, as well as other data, a very robust approach to data modelling is needed to satisfy the sheer complexity and demand for maximum usability involved in research.

We understand that data modelling involves determining which data elements are to be stored and how they are to be stored, including their respective relationships as well as constraints. The underlying structure as well as definitions of a data model indicate how the data can be stored, how the values will be interpreted, and how easily that data can be queried.

Significant efforts have been made to date in order to address some of the issues and challenges involved in data standardisation and effective data modelling – both of which are required for data harmonisation. This has led to a number of widely accepted and prominent CDMs, such as OMOP, i2b2, and PCORnet – all of which have been well-described in Jeffrey G. Khan’s work on data model harmonisation – the [“All of Us” Research Program](https://pubmed.ncbi.nlm.nih.gov/38374255/), to be specific.

We’ve handpicked a specific section from the publication to help you better understand the CDM landscape:

The **PCORnet** CDM is actively supported by all networks in the Patient Centered Outcomes Research Institute (PCORI), so it has a wide base of support. In fact, more than 80 institutions have already transformed their data into this exact model, which was originally derived from the Mini-Sentinel data model, which in turn, has had a steadily increasing uptake in data analysis pertaining to claims.

PCORnet CDM boasts a traditional relational database design – i.e. each of the 15 tables corresponds to a clinical domain, such as labs, medications, diagnosis, etc. The tables feature multiple columns, including the table key (which includes _encounter identifier_ and _patient identifier_, e.g.) and additional details (_medical frequency_, e.g.). As PCORnet CDM received more updates, new clinical elements could be added – for instance, changes in data presentation (_smoking status_, e.g.) and new domains (_lab values_, e.g.).

Another notable CDM is **i2b2** or ‘Informatics for integration biology in the bedside’. It was initially developed in 2004 through a grant by the NIH (National Institutes of Health), and to this day, is very popular. At present, i2b2 is used in well over 200 sites across the world, including multiple large-scale networks, such as the NCATS’ ACT (Accrual to Clinical Trials) network. It integrates the star-schema format (pioneered by General Mills more than three decades ago) and is a common choice for retail data warehouses.

The i2b2 star-schema incorporates one large “fact” table which contains individual observations. It’s a narrow table containing several rows per patient encounter. Ontology tables, for example, offer a window into the data, which are typically developed by local implementers.

The underlying data model is only modified once core features have been added to the platform.

**OMOP** (Observational Medical Outcomes Partnership) was developed as a shared analytics model from day one. It has been adopted by the OHDSI (Observational Health Data Sciences and Informatics, pronounced “Odyssey”) international consortium, a diverse collaborative effort dedicated to improving data research and quality.

This CDM is now increasingly being utilised – at present, over 90 sites around the world – owing to OHDSI’s fairly large community and plethora of analytical tools. OMOP utilises a hybrid model providing domain tables in a similar vein to PCORnet, including a “fact” table which contains individual atomic observations (along the same lines as i2b2).

However, the OMOP schema is fairly more complicated than PCORnet’s, where some domain tables are actually derived values for certain analytical purposes (_drug_era_ or _visit_cost_, e.g.). Unlike PCORnet, however, OMOP offers metadata tables which contain information on terminology & concept relationships (similar to the ontology system in i2b2).

While each of the above CDMs offer creatively executed solutions to support research, they do come with limitations of their own. Therefore, organisations engaged in strategising their data harmonisation efforts and implementing data warehouses should choose a CDM based on their individual research needs.

With that said, more and more sites are realising that to participate in multi-site research, they may very well need the support of all of the above data models in order to achieve data interoperability with their chosen collaborator.

## FHIR: Clinical Data Rendering & Exchange

Pronounced “Fire”, FHIR (Fast Healthcare Interoperability Resources) is a vital standard pertaining to interoperability created by the HL7 (Health Level 7) International Healthcare Standards organisation.

The standard consists of data formats and elements – referred to as “resources” – along with an API for exchanging EHRs. Perhaps, FHIR’s greatest benefit is that it outputs natively out of EHRs through different APIs which are required for regulatory purposes.

The FHIR community is an open and collaborative one, tirelessly working with governments, academia, healthcare, payers, EHR vendors, and patient groups to define a health data exchange specification commonly shared across all groups involved. It builds upon the previous work and standard, while still retaining enough flexibility to make the specification usable and understandable.

The majority of practical demonstrations of FHIR have proven that it is highly effective at interoperability in open ‘connect-a-thons’ (events aimed at proving the efficacy of the standard). Any organisation engaged in data organisation and harmonisation needs to sit up and take notice because FHIR really matters. Here’s why:

FHIR is unique when it comes to health IT standards as it has enjoyed very positive responses universally; from health systems, governments, and academics to pharma, payers, and most EHR vendors, if not all. In fact, a number of communities have come up with FHIR Accelerators to enrich the standard’s rapid progress and maturation. Most interestingly, FHIR is widely adopted by the system developers for whom it was originally designed. This has resulted in FHIR’s proliferation throughout the clinical community at large.

The translational research community stands to benefit exponentially from the generous investments clinical communities make who are already using FHIR. Instead of reinventing specific data standards around research, it would make more sense to leverage the structure, tooling, infrastructure, detail, and specification coming forward from the said clinical communities. Pending approval from the ONC (Office of the National Coordinator) for Health IT, regulations will demand that all EHRs support FHIR APIs, which will drastically simplify data access and delivery in a way that conforms to FHIR’s parameters. Naturally, this will do away with the need for complex data extraction and translation while creating FHIR-based repositories.

The NIH is actively investing in FHIR, not only for the exchange of EHRs but also for research purposes, from academia to industry. NIH is also encouraging its researchers to explore the use of FHIR’s standard to facilitate in the capturing, integration, and exchanging of clinical data for research, and to enhance capabilities around sharing that researched data.

FHIR’s modular data models carry a flexible payload and reusable “containers” which can easily be assembled into working systems. This model allows for the exchange of well-defined and structured data in discrete units.

## Tools and Frameworks: A general overview of how Data Harmonisation works

As pointed out earlier, data harmonisation is a semi-automated process involving a set of activities which are customised according to a specific business model.

In order to effectively use the various data harmonisation frameworks and data harmonisation tools, it’s equally important to get a gist of how harmonisation of data works in itself:

### Acquire the data

First, the relevant data sources must be identified. Data can then be acquired from these sources, after which data sets are created.

The source of the data could be anything from market research to consumer research to business documents, for example. Or, all of the above.

### Data mapping

A single schema must be created for the entire data to follow. The schema will contain all the required fields and validations.

### Ingest and clean the data

Data is always ingested by a system as raw data. The ingested data must, therefore, be evaluated in terms of integrity and validity. Inaccurate, incorrect, or inconsistent parts of the data are then identified as per the schema and modified, if need be.

Cleaning of data is also required to maintain quality, consistency, and uniformity.

### Harmonise and evaluate the data

At this point, the defined schema is applied to the raw data and then harmonised data is obtained. Analyses must be carried out to ensure that the harmonised data complies with the quality standards, along with no loss to its accuracy and originality.

Harmonisation will always occur according to a business’s unique needs and the processes it follows.

### Deploy and monitor

At last, the harmonised data is deployed on the system and made available to all parties or groups involved for further processing.

The up-to-date data can be accessed across all organisational levels, and modified as and when needed. Teams and departments do not need to develop their own datasets, which can be very expensive, error-prone, conflicting, and time-consuming.

## The most common types of Data Harmonisation Tools, Techniques, and Frameworks

While being familiar with some of the specific data harmonisation tools or data harmonisation frameworks available, it is also important to know the different categories of tools, techniques, and frameworks available. For example:

### Tools for data integration

Data integration tools are software-based tools which help in combining and transforming data from a variety of sources and formats, into a single unified data set.

These tools can help in performing many different tasks – for example, data transformation, data extraction, data mapping, data loading, and data synchronisation.

Data integration tools are designed to help handle different kinds of data like semi-structured, structured and unstructured data, as well as streaming data. Common examples include Apache NiFi, SQL Server Integration Services by Microsoft, and Pentaho Data Integration.

### Tools for data quality

Data integration tools are also software-based and designed to help in the assessment, monitoring, and improvement of data when it comes to completeness, accuracy, consistency, validity, and timeliness of that data.

They can help in identifying and resolving data errors like duplicates, outliers, missing values, and other inconsistencies. Data quality tools also help to enrich, standardise, and normalise data; for example, by adding metadata, converting units, and applying specific rules.

Some common examples are Talend Data Quality, InfoSphere QualityStage by IBM, and OpenRefine.

### Tools for data mapping

These software-powered tools are designed to help in establishing and visualising the various connections and transformations between the data elements of different data sources as well as formats.

Data mapping tools also help in defining and managing the rules and logic around the transferring, conversion, and validation of data. In addition, they can help to automate and monitor the entire data mapping process, generating documentation and reports on the data mapping results.

Examples include Informatica PowerCenter, CloverDX Data Mapper, and Altova MapForce.

### Tools for data visualisation

With data visualisation tools, you can present and explore data in multiple graphical and interactive forms – e.g. maps, graphs, charts, dashboards, and stories.

Data visualisation tools are designed to aid you in communicating and sharing data insights with your audience, such as your coworkers, managers, and customers. They can also help you in discovering and analysing the trends, patterns, and outliers associated with your data.

Examples: Qlik Sense, Power BI, and Tableau.

### Tools for data modelling

Data modelling tools are used in the designing, creation, and managing of the data structure and relationships. They can help to define and document the various data attributes, types, elements, rules, and constraints.

Data modelling tools can also help in generating and executing the code and scripts needed to create as well as modify your data tables, keys, views, and indexes.

Typical examples of such tools include: Oracle SQL Developer, PowerDesigner, Data Modeler, and ER/Studio Data Architect.

## Closing thoughts

As we have learned, there are many options available when it comes to choosing specific data harmonisation frameworks and data harmonisation tools.

There’s no “good” or “bad” when it comes to using the best ones for harmonising data in 2024. We’re going to quickly reiterate that the choice, ultimately, comes down to your specific business goals and the outcomes you wish to achieve via data harmonisation.

In any case, you’re halfway there by choosing the right tools and frameworks!

## Data harmonisation examples with data harmonisation tool Harmony

* [Adult ADHD Self-Report Scale vs MacLean Screening Instrument for BPD](/compare-harmonise-instruments/adult-adhd-self-report-scale-vs-maclean-screening-instrument-for-bpd)
* [Beck Anxiety Inventory vs De Jong Gierveld Loneliness Scale](/compare-harmonise-instruments/beck-anxiety-inventory-vs-de-jong-gierveld-loneliness-scale)
* [Beck Anxiety Inventory vs GHQ-12](/compare-harmonise-instruments/beck-anxiety-inventory-vs-ghq-12)
* [Beck Anxiety Inventory vs GHQ-28](/compare-harmonise-instruments/beck-anxiety-inventory-vs-ghq-28)
* [Beck Anxiety Inventory vs GHQ-30](/compare-harmonise-instruments/beck-anxiety-inventory-vs-ghq-30)
* [Beck Anxiety Inventory vs MFQ](/compare-harmonise-instruments/beck-anxiety-inventory-vs-mfq)
* [Beck Anxiety Inventory vs PSF](/compare-harmonise-instruments/beck-anxiety-inventory-vs-psf)
* [Beck Anxiety Inventory vs RCADS](/compare-harmonise-instruments/beck-anxiety-inventory-vs-rcads)
* [Beck Anxiety Inventory vs SCARED (adult)](/compare-harmonise-instruments/beck-anxiety-inventory-vs-scared)
* [Beck Anxiety Inventory vs SMFQ](/compare-harmonise-instruments/beck-anxiety-inventory-vs-smfq)
* [CES-D vs Beck Anxiety Inventory](/compare-harmonise-instruments/ces-d-vs-beck-anxiety-inventory)
* [CES-D vs CBCL](/compare-harmonise-instruments/ces-d-vs-cbcl)
* [CES_D vs De Jong Gierveld Loneliness Scale](/compare-harmonise-instruments/ces-d-vs-de-jong-gierveld-loneliness-scale)
* [CES-D vs GAD-7](/compare-harmonise-instruments/ces-d-vs-gad-7)
* [CES-D vs GHQ 12](/compare-harmonise-instruments/ces-d-vs-ghq-12)
* [CES-D vs GHQ-30](/compare-harmonise-instruments/ces-d-vs-ghq-30)
* [CES-D vs MFQ](/compare-harmonise-instruments/ces-d-vs-mfq)
* [CES-D vs PHQ](/compare-harmonise-instruments/ces-d-vs-phq)
* [CES-D vs PHQ-9](/compare-harmonise-instruments/ces-d-vs-phq-9)
* [CES-D vs PSS-10](/compare-harmonise-instruments/ces-d-vs-pss-10)
* [CES-D vs RCADS](/compare-harmonise-instruments/ces-d-vs-rcads)
* [CES-D vs SCARED (adult)](/compare-harmonise-instruments/ces-d-vs-scared)
* [CES-D vs SDQ](/compare-harmonise-instruments/ces-d-vs-sdq)
* [CES-D vs SMFQ](/compare-harmonise-instruments/ces-d-vs-smfq)
* [De Jong Gierveld Loneliness Scale vs SCARED](/compare-harmonise-instruments/de-jong-gierveld-loneliness-scale-vs-scared)
* [GAD-7 vs Beck Anxiety Inventory](/compare-harmonise-instruments/gad-7-vs-beck-anxiety-inventory)
* [GAD-7 vs CBCL](/compare-harmonise-instruments/gad-7-vs-cbcl)
* [GAD-7 vs De Jong Gierveld Loneliness Scale](/compare-harmonise-instruments/gad-7-vs-de-jong-gierveld-loneliness-scale)
* [GAD-7 vs GHQ 12](/compare-harmonise-instruments/gad-7-vs-ghq-12)
* [GAD-7 vs GHQ-30](/compare-harmonise-instruments/gad-7-vs-ghq-30)
* [GAD-7 vs MFQ](/compare-harmonise-instruments/gad-7-vs-mfq)
* [GAD-7 vs PHQ-9](/compare-harmonise-instruments/gad-7-vs-phq-9)
* [GAD-7 vs PSS-10](/compare-harmonise-instruments/gad-7-vs-pss-10)
* [GAD-7 vs RCADS](/compare-harmonise-instruments/gad-7-vs-rcads)
* [GAD-7 vs SCARED (adult)](/compare-harmonise-instruments/gad-7-vs-scared)
* [GAD-7 vs SDQ](/compare-harmonise-instruments/gad-7-vs-sdq)
* [GAD-7 vs SMFQ](/compare-harmonise-instruments/gad-7-vs-smfq)
* [GHQ 12 vs Beck Anxiety Inventory](/compare-harmonise-instruments/ghq-12-vs-beck-anxiety-inventory)
* [GHQ-12 vs CBCL](/compare-harmonise-instruments/ghq-12-vs-cbcl)
* [GHQ 12 vs De Jong Gierveld Loneliness Scale](/compare-harmonise-instruments/ghq-12-vs-de-jong-gierveld-loneliness-scale)
* [GHQ-12 vs GHQ-30](/compare-harmonise-instruments/ghq-12-vs-ghq-30)
* [GHQ 12 vs MFQ](/compare-harmonise-instruments/ghq-12-vs-mfq)
* [GHQ 12 vs PHQ-9](/compare-harmonise-instruments/ghq-12-vs-phq-9)
* [GHQ-12 vs PSS-10](/compare-harmonise-instruments/ghq-12-vs-pss-10)
* [GHQ-12 vs RCADS](/compare-harmonise-instruments/ghq-12-vs-rcads)
* [GHQ 12 vs SCARED (adult)](/compare-harmonise-instruments/ghq-12-vs-scared)
* [GHQ 12 vs SDQ](/compare-harmonise-instruments/ghq-12-vs-sdq)
* [GHQ 12 vs SMFQ](/compare-harmonise-instruments/ghq-12-vs-smfq)
* [PHQ-9 vs Beck Anxiety Inventory](/compare-harmonise-instruments/phq-9-vs-beck-anxiety-inventory)
* [PHQ-9 vs CBCL](/compare-harmonise-instruments/phq-9-vs-cbcl)
* [PHQ-9 vs De Jong Gierveld Loneliness Scale](/compare-harmonise-instruments/phq-9-vs-de-jong-gierveld-loneliness-scale)
* [PHQ-9 vs MFQ](/compare-harmonise-instruments/phq-9-vs-mfq)
* [PHQ-9 vs PSS-10](/compare-harmonise-instruments/phq-9-vs-pss-10)
* [PHQ-9 vs RCADS](/compare-harmonise-instruments/phq-9-vs-rcads)
* [PHQ-9 vs SCARED (adult)](/compare-harmonise-instruments/phq-9-vs-scared)
* [PHQ-9 vs SMFQ](/compare-harmonise-instruments/phq-9-vs-smfq)
* [SDQ vs Beck Anxiety Inventory](/compare-harmonise-instruments/sdq-vs-beck-anxiety-inventory)
* [SDQ vs CBCL](/compare-harmonise-instruments/sdq-vs-cbcl)
* [SDQ vs De Jong Gierveld Loneliness Scale](/compare-harmonise-instruments/sdq-vs-de-jong-gierveld-loneliness-scale)
* [SDQ vs MFQ](/compare-harmonise-instruments/sdq-vs-mfq)
* [SDQ vs PHQ-9](/compare-harmonise-instruments/sdq-vs-phq-9)
* [SDQ vs PSS-10](/compare-harmonise-instruments/sdq-vs-pss-10)
* [SDQ vs RCADS](/compare-harmonise-instruments/sdq-vs-rcads)
* [SDQ vs SCARED (adult)](/compare-harmonise-instruments/sdq-vs-scared)
* [SDQ vs SMFQ](/compare-harmonise-instruments/sdq-vs-smfq)

## [Autism](/compare-harmonise-instruments/autism) 

The most commonly used instruments for assessing autism spectrum disorder (ASD) include:

**ADOS (Autism Diagnostic Observation Schedule):** This is a semi-structured observation tool that assesses communication, social interaction, and play behaviors in individuals with suspected ASD. It is considered the gold standard for diagnosing ASD in young children.

**ADI-R (Autism Diagnostic Interview-Revised):** This is a structured interview conducted with parents or caregivers to gather information about the individual's developmental history, social communication, and repetitive behaviors. It is often used in conjunction with the ADOS for diagnosis.

**AQ (Autism Quotient):** This is a self-report questionnaire that assesses autistic traits in adults. It is not a diagnostic tool but can be used as a screening measure.

**CHAT (Checklist for Autism in Toddlers):** This is a screening tool for early identification of ASD in children aged 18-30 months.

**BAPQ (Behavior Assessment for Preschoolers):** This is a standardized assessment tool for preschool-aged children that measures social skills, communication, and adaptive behaviors.

The choice of instrument depends on the age of the individual, the purpose of the assessment, and the specific needs of the clinician. Here are some comparisons which you can do with Harmony:

* [ADOS vs BAPQ](/compare-harmonise-instruments/autism/ados-vs-bapq)
* [AOSI vs ADOS](/compare-harmonise-instruments/autism/aosi-vs-ados)
* [AOSI vs AQ-10](/compare-harmonise-instruments/autism/aosi-vs-aq-10)
* [AOSI vs AQ-20](/compare-harmonise-instruments/autism/aosi-vs-aq-20)
* [AOSI vs BAPQ](/compare-harmonise-instruments/autism/aosi-vs-bapq)
* [AOSI vs CHAT](/compare-harmonise-instruments/autism/aosi-vs-chat)
* [AQ-10 vs ADOS](/compare-harmonise-instruments/autism/aq-10-vs-ados)
* [AQ-10 vs AQ-20](/compare-harmonise-instruments/autism/aq-10-vs-aq-20)
* [AQ-10 vs BAPQ](/compare-harmonise-instruments/autism/aq-10-vs-bapq)
* [AQ-20 vs ADOS](/compare-harmonise-instruments/autism/aq-20-vs-ados)
* [AQ-20 vs BAPQ](/compare-harmonise-instruments/autism/aq-20-vs-bapq)
* [CHAT vs ADOS](/compare-harmonise-instruments/autism/chat-vs-ados)
* [CHAT vs AQ-10](/compare-harmonise-instruments/autism/chat-vs-aq-10)
* [CHAT vs AQ-20](/compare-harmonise-instruments/autism/chat-vs-aq-20)
* [CHAT vs BAPQ](/compare-harmonise-instruments/autism/chat-vs-bapq)

## [Alcoholism](/compare-harmonise-instruments/alcoholism) 

The most commonly used instruments for assessing alcohol consumption and abuse include:

**AUDIT-10 (Alcohol Use Disorders Identification Test):** A 10-item questionnaire that assesses alcohol consumption, dependence, and risk behaviors.

**MAST (Michigan Alcoholism Screening Test):** A 24-item questionnaire that assesses alcohol dependence and abuse.

**ESPAD (European School Survey Project on Alcohol and Drugs):** A survey that collects data on alcohol and drug use among adolescents.

**ASSIST (Alcohol, Smoking and Substance Involvement Screening Test):** A 12-item questionnaire that assesses alcohol, tobacco, and other substance use.

The choice of instrument depends on the purpose of the assessment, the age and demographic characteristics of the individual, and the specific needs of the researcher or clinician.


* [AUDIT-10 vs ASSIST](/compare-harmonise-instruments/alcoholism/audit-10-vs-assist)
* [AUDIT-10 vs DTC](/compare-harmonise-instruments/alcoholism/audit-10-vs-dtc)
* [AUDIT-10 vs DUDIT](/compare-harmonise-instruments/alcoholism/audit-10-vs-dudit)
* [AUDIT-10 vs ESPAD](/compare-harmonise-instruments/alcoholism/audit-10-vs-espad)
* [AUDIT-10 vs HAS](/compare-harmonise-instruments/alcoholism/audit-10-vs-has)
* [AUDIT-10 vs MAST](/compare-harmonise-instruments/alcoholism/audit-10-vs-mast)
* [AUDIT-10 vs RAPI](/compare-harmonise-instruments/alcoholism/audit-10-vs-rapi)
* [AUDIT-10 vs TFLB](/compare-harmonise-instruments/alcoholism/audit-10-vs-tflb)
* [AUDIT vs ASSIST](/compare-harmonise-instruments/alcoholism/audit-vs-assist)
* [AUDIT vs DASI](/compare-harmonise-instruments/alcoholism/audit-vs-dasi)
* [DASI vs ASSIST](/compare-harmonise-instruments/alcoholism/dasi-vs-assist)
* [DTC vs AUDIT](/compare-harmonise-instruments/alcoholism/dtc-vs-audit)
* [DTC vs ESPAD](/compare-harmonise-instruments/alcoholism/dtc-vs-espad)
* [DTC vs MAST](/compare-harmonise-instruments/alcoholism/dtc-vs-mast)
* [DTC vs RAPI](/compare-harmonise-instruments/alcoholism/dtc-vs-rapi)
* [DUDIT vs ASSIST](/compare-harmonise-instruments/alcoholism/dudit-vs-assist)
* [DUDIT vs AUDIT](/compare-harmonise-instruments/alcoholism/dudit-vs-audit)
* [DUDIT vs DTC](/compare-harmonise-instruments/alcoholism/dudit-vs-dtc)
* [DUDIT vs ESPAD](/compare-harmonise-instruments/alcoholism/dudit-vs-espad)
* [DUDIT vs MAST](/compare-harmonise-instruments/alcoholism/dudit-vs-mast)
* [DUDIT vs RAPI](/compare-harmonise-instruments/alcoholism/dudit-vs-rapi)
* [ESPAD vs ASSIST](/compare-harmonise-instruments/alcoholism/espad-vs-assist)
* [ESPAD vs DASI](/compare-harmonise-instruments/alcoholism/espad-vs-dasi)
* [ESPAD vs MAST](/compare-harmonise-instruments/alcoholism/espad-vs-mast)
* [ESPAD vs RAPI](/compare-harmonise-instruments/alcoholism/espad-vs-rapi)
* [MAST vs ASSIST](/compare-harmonise-instruments/alcoholism/mast-vs-assist)
* [MAST vs DASI](/compare-harmonise-instruments/alcoholism/mast-vs-dasi)
* [MAST vs HAS](/compare-harmonise-instruments/alcoholism/mast-vs-has)
* [MAST vs RAPI](/compare-harmonise-instruments/alcoholism/mast-vs-rapi)
* [RAPI vs ASSIST](/compare-harmonise-instruments/alcoholism/rapi-vs-assist)
* [RAPI vs DASI](/compare-harmonise-instruments/alcoholism/rapi-vs-dasi)

## Topic summaries

* [Harmonisation of alcoholism related instruments](/compare-harmonise-instruments/alcoholism)
* [Harmonisation of autism related instruments](/compare-harmonise-instruments/autism)
