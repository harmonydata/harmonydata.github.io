---
title: "Improving Harmony's PDF extraction with user testing"
date: 2025-10-30
categories: ["data"]
image: "/images/improve-pdf-graph.png"

url: "/development/improved-pdf-model/"
---

Since we built Harmony, a common complaint has been that it frequently identifies the wrong questions in PDFs. The original algorithm for finding questions in PDFs was a mixture of rule based heuristics and some hand coded logic to look for e.g. lines in the document which begin with numbers. This was very fragile and worked fine on short questionnaires such as the GAD-7, but failed on larger documents.

We decided to run a [competition with our partner DOXA AI](/doxa-parsing/) where members of the public could train their own model to extract questions from PDFs.

We provided a few hundred examples of manually annotated training data and there was some held back test data for evaluating the PDFs.

The competition was won by Aashvin Chandru Relwani, with Siddhant in second place.

However, we then needed to do some user testing of the new PDF model in the Harmony app so that it could be compared and confirmed that the new model is better.

We deployed two versions of Harmony side by side: the original Harmony, and the new PDF extraction model on a new URL.

A user at Ulster University evaluated the new model against the old model on a number of new questionnaires and counted which questions were correctly extracted.

We have then run a statistical analysis on the two models. The analysis is here: https://github.com/harmonydata/test_new_pdf_model

You can view the results of our analysis as an R markdown notebook here: https://rpubs.com/fastdatascience/harmony-pdf

From doing a matched pairs t-test, we found that the old model had accuracy 41% and the new model had accuracy 95%, with *p* = 0.00039.

## Next actions

Coming soon - we will update the web Harmony with the new PDF model.
