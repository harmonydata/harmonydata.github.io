---
title: "Easy issues to get started on in Harmony: Python and R"
description: Want to help develop Harmony?
date: 2024-10-29
categories: ["development"]
image: /images/join-open-source-project.png


url: "/open-source-for-social-science/good-first-issues-python-and-r/"
---

We have a few more issues that have been added to the issue trackers.

If you are new and would like to make a pull request in either the Python or R libraries feel free to pick these up - they should be quite small.

## Easy issues in Python library

We would like to expose the "between instrument matches" and the "negation" switches in the Python library and then from the API side. Ultimately this will allow the R library to expose this functionality.

* https://github.com/harmonydata/harmony/issues/60: Allow user to turn on/off the "within instrument matches" behaviour
* https://github.com/harmonydata/harmony/issues/59: Allow user to turn on/off the negation behaviour

## Moderate issue in Python

* https://github.com/harmonydata/harmony/issues/56 - users are having real problems processing large lists of items. So this would have to be batched to send to the LLM. The tricky part is, you will need to make the batch size configurable and choose a sensible default, and then expose it through the API, but also not allow a user to overload the API.

## Easy issues for R library

* https://github.com/harmonydata/harmony_r/issues/4  Can we have a built in function to turn the matching scores into a crosswalk table (e.g. a table like the website produces) and output as a dataframe? 
* https://github.com/harmonydata/harmony_r/issues/5 Expose an easy and idiomatic R-like way to create instruments in R

## How else can I contribute?

First of all have a look at our [Large Language Model training and fine tuning challenge](/doxa/)! This is an online competition to train a Large Language Model for mental health data and improve Harmony. You don't need any experience training a Large Language Model before. We provide data. First prize for most accurate LLM is £500 in vouchers!

Secondly, keep an eye out for our next [hackathon](/open-source-for-social-science/hackathon/). We have already run one in 2024 but we are planning more for the future.

Please also take a look at the issue trackers on our repositories. There are issues tagged as `good first issue` which you can pick up
   * [Python](https://github.com/harmonydata/harmony) - the main core library and the Python package which is on [Pypi](https://pypi.org/project/harmonydata/)
   * [R](https://github.com/harmonydata/harmony_r) - the R port is on [CRAN](https://cran.r-project.org/web/packages/harmonydata/index.html) and it is slightly less mature than Python so we really appreciate if you can give the R package some TLC.
   * [API](https://github.com/harmonydata/harmonyapi) - the Python API runs with Pydantic and Fast API and is running on an on-prem server enabling the web app to work
   * [Web front end](https://github.com/harmonydata/app) - we welcome feedback and contributions on front end and UX issues
* If you're doing research and found Harmony useful, please [cite us](/ai-in-mental-health/bmc-psychiatry-paper/)!
* If you're a researcher trying to use the tool, and you encounter a problem, a bug, or a feature which you would like us to implement, please [raise an issue on Github](https://github.com/harmonydata/harmony) or [message us on Discord](https://discord.gg/harmonydata).
