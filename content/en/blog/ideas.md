---
title: "Ideas"
date: 2024-02-04
image: "/images/world.png"
---

## Ideas for future development of Harmony

* Add p-values in output
* Add integration with other LLMs such as GPT-3, GPT-4
* Add processing of negation in languages other than English and Portuguese
* Fix processing of PDFs (see our [Kaggle competition](/harmony-on-kaggle/), also [issue](https://github.com/harmonydata/harmony/issues/11))
* Integrate with UK Data Archive, UKLLC, and other repositories
* Allow Harmony to process raw survey data so that social scientists have everything they need to run the statistical analyses
* Develop a feedback loop where users can handle bad matches
* Train a psychology specific model where Harmony predicts the similarity between items in the way that a factor model would quantify the similarity
* Harmony adds a new endpoint called `search` to Harmony's API which would allow third parties such as UKLLC to search for studies. This is basically a URL that would probably look something like https://api.harmonydata.ac.uk/search and which would allow Harmony to receive a text and find variables in UKLLC's database that are similar to it. The existing endpoints are [here](https://api.harmonydata.ac.uk/docs).
* In order to provide a lookup functionality, Harmony would need to index all the variables from a third party offline and do this every week or month. This means, converting them all to a vector and storing them somewhere so that we can quickly do a lookup. We might need an off the shelf tool such as [Pinecone](https://www.pinecone.io/) which would help us manage this lookup. Harmony is already doing this for the Mental Health Catalogue but the MHC case is simpler because there are fewer variables and we don't have a process for constantly updating the database.

 

## Other ideas for the project

* Training webinars
* Hackathon
* More Kaggle competitions
