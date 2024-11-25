---
title: "GESIS using Harmony for the EU-funded project Infra4NextGen"
---

## Harmony case study: GESIS using Harmony for the EU-funded project Infra4NextGen

{{< htmlcode >}}
<img src="/images/gesis.jpg" />
{{</ htmlcode >}}


[Dr. Insa Bechert](https://www.gesis.org/en/institute/about-us/staff/person/insa.bechert), [Dr. Rabia Karatoprak Ersen](https://www.gesis.org/en/institute/about-us/staff/person/Rabia.KaratoprakErsen), and [Nidanur Baştürk](https://www.gesis.org/en/institute/about-us/staff/person/Nidanur.Bastuerk) at the [GESIS - Leibniz Institute for the Social Sciences](https://www.gesis.org/en/institute) are using Harmony for the initial phase of identifying similar questions administered across international survey programs. These items constitute a Variable Database which is an entry point to harmonized cross-national survey data on the five [NextGenEU youth policy topics](https://next-generation-eu.europa.eu/): Make it Green; Make it Digital; Make it Healthy; Make it Strong; and Make it Equal as part of the EU-funded project [Infra4NextGen](https://infra4nextgen.com/).


Nidanur Baştürk is a research associate and PhD candidate and needed to identify similar questions across surveys. Together with Ms. Baştürk, we have been exploring ways to improve the [Harmony R library](/open-source-for-social-science/harmony-r-package/). We identified some limitations of the current version of the tool around large numbers of question items which we are currently addressing to enable better handling of large datasets.  For example, it became apparent that, although Harmony could process smaller questionnaires well, the large dataset used at GESIS was causing the tool to crash, so Harmony is currently being modified to batch questionnaire items in order to handle larger datasets.

Ms. Baştürk also prepared an R notebook as a walkthrough of how the GESIS team would find similar questions across surveys, and she wrote code to generate a crosswalk table from Harmony’s similarity matrix, as well as a collection of string cleaning rules to remove question introductions. All these contributions are making the tool more robust.

Ms. Baştürk wrote to us;

> I've been testing the Harmony website tool, and the results are really promising—thank you so much for this incredible initiative!
