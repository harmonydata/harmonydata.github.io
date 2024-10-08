---
title: Contributing to Harmony
description: Want to help develop Harmony?
date: 2023-12-22
categories: ["development"]
image: /images/join-open-source-project.png


aliases:
  - "/contributing-to-harmony/"
url: "/open-source-for-social-science/contributing-to-harmony-nlp-project/"
---

## Contribute to the Harmony open source NLP project

Are you a scientist, researcher, data wrangler, or language maestro? Harmony needs YOU! We're always looking for talented individuals to join our team.

* **Contribute to our open-source code:** Whether you're a seasoned developer or a curious newbie, your contributions are valued.
* **Join the conversation:** Join our [Discord server](https://discord.com/invite/harmonydata), or follow us on [Twitter](https://twitter.com/harmony_data), [LinkedIn](https://www.linkedin.com/company/harmonydata/about/?viewAsMember=true), and other social media channels.




## Getting started

Participating in an open source project can be very rewarding. Read more about it [here](/how-can-i-contribute-to-an-open-source-project/)!

Please familiarise yourself with Git. You can [fork Harmony](https://github.com/harmonydata/harmony/fork) and [make a pull request](https://github.com/harmonydata/harmony/pulls) any time! We're glad to have your contribution.


{{< youtube WAWRgCHSV5I >}}

_Video of our orientation session on how to contribute to Harmony._

## Issues and bug reports

First, [do a quick search](https://github.com/issues?q=+is%3Aissue+user%3Aharmonydata) to see if the issue has already been reported. If so, it's often better to just leave a comment on an existing issue, rather than creating a new one. Old issues also often include helpful tips and solutions to common problems. You should also check the [troubleshooting guide](https://harmonydata.ac.uk/troubleshooting-harmony/) to see if your problem is already listed there.

If you're looking for help with your code, consider posting a question on the [GitHub Discussions board](https://github.com/orgs/harmonydata/discussions). Please
understand that we won't be able to provide individual support via email. We
also believe that help is much more valuable if it's **shared publicly**,
so that more people can benefit from it.

## Make your first contribution

There are lots of ways you can contribute to Harmony! You can work on code, improve the API, or add code examples.

* Write code
* Improve unit tests or integration tests
* Add [new functionality](/ideas/) to Harmony
* Improve Harmony's [documentation](/nlp-semantic-text-matching/how-does-harmony-work/)
* Add integrations to other LLMs or LLM providers such as OpenAI, IBM, or similar
* Add integrations from your website to Harmony - [please read our guide on how to serialise an instrument and pass it to Harmony as a query string](/integrating-with-harmony/).
* Publicise Harmony in web forums such as [Reddit](https://www.reddit.com/r/opensource/comments/18zq6cf/comment/kgmh3x7/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button), [HuggingFace forum](https://discuss.huggingface.co/t/open-source-psychology-project-using-hf-sentence-transformers/73174), Quora, or similar
* Create example notebooks, such as [Jupyter Notebook](https://github.com/harmonydata/harmony/blob/main/Harmony_example_walkthrough.ipynb), [RStudio](/harmony_r_example.nb.html), or [Google Colab](https://colab.research.google.com/github/harmonydata/harmony/blob/main/Harmony_example_walkthrough.ipynb)
* Investigate [bugs and issues in Harmony](https://github.com/harmonydata/harmony/issues)
* Review and comment on [pull requests](https://github.com/harmonydata/harmony/pulls)
* [Cite Harmony](/frequently-asked-questions/#how-do-i-cite-harmony) in your blogs, papers, and articles
* Talk about Harmony on social media. Don't forget to tag us on Twitter [@harmony_data](https://twitter.com/harmony_data), Instagram [@harmonydata](https://www.instagram.com/harmonydata/), Facebook [@harmonydata](https://www.facebook.com/harmonydata), LinkedIn [@Harmony](https://www.linkedin.com/company/harmonydata), and YouTube [@harmonydata](https://www.youtube.com/channel/UCraLlfBr0jXwap41oQ763OQ)!
* Starring and [forking](https://github.com/harmonydata/harmony/fork) Harmony on Github!

## Where do we need help in Harmony?

In particular, the [PDF extraction](/data-harmonisation/extract-process-data-from-questionnaires/) (converting PDFs to structured questionnaire items) is very hard and we have a separate Github repo with examples here: https://github.com/harmonydata/pdf-questionnaire-extraction

We are planning on running a [hackathon](/hackathon) focused on this aspect of the tool.

Also, other initiatives that could be really useful include:

* Better handling of active vs passive voice in questionnaire items
* Allowing Harmony to [switch LLMs](/nlp-semantic-text-matching/measuring-the-performance-of-nlp-algorithms/)
* Integration with other websites and tools (such as [via Harmony API](/releasing-harmony-api/), [discovering datasets from other sources](/discovery/), and [integrations allowing other tools to send instruments and data to Harmony](/integrating-with-harmony/).
* An h-score: a similarity measure between instruments

We started to make a new repo with training data to improve the PDF data processing. This repo has manually annotated training data:
https://github.com/harmonydata/pdf-questionnaire-extraction


One issue that would be really helpful would be, to handle active and passive voice, such as "child is bullied" vs "child bullies others" - these are harmonised as close together whereas they should be far apart.

Maybe a small task is easier to start with. Can you see any obvious bugs that you'd like to pick up?

We’ve been looking at integrations with other data repositories. One way forward is to make an npm package other sites can install that makes it easy for them to send data over to the app. Or possibly just to interact with [Harmony's API](/releasing-harmony-api/) directly.

## Raising issues and the issue tracker

The issue list is [in the Github repository](https://github.com/harmonydata/harmony/issues). You can view the open issues, pick one to fix, or raise your own issue. Even if you're not a coder, feel free to raise an issue.

* Issues for the core Python library are here: [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)
* Issues for the API are here: [https://github.com/harmonydata/harmonyapi/issues](https://github.com/harmonydata/harmonyapi/issues)
* Issues for the front end are here: [https://github.com/harmonydata/app/issues](https://github.com/harmonydata/app/issues)
* Issues for the R port are here: [https://github.com/harmonydata/harmony_r/issues](https://github.com/harmonydata/harmony_r/issues)

## Coding Harmony

Harmony is mostly coded in Python. We use [Pycharm IDE](https://www.jetbrains.com/pycharm/) by JetBrains. Please ensure you are familiar with Python, [HuggingFace](https://huggingface.co/), and [FastAPI](https://fastapi.tiangolo.com/), or Javascript and [React](https://react.dev/) if you want to work on the front end.

Please make sure all code you commit is [linted](https://stackoverflow.com/questions/8503559/what-is-linting) using the [Pycharm default linter](https://www.reddit.com/r/pycharm/comments/mm77el/what_is_the_default_linter_in_pycharm/). If you use a different one (such as VS Code's linter, or pylint), this will make the code history hard to follow, so please be consistent.

## Unit tests and code stability

Harmony uses the [pytest](http://doc.pytest.org/) framework for testing. For more info on this, see the [pytest documentation](http://docs.pytest.org/en/latest/contents.html). To be interpreted and run, all test files and test functions need to be prefixed with `test_`.

The Harmony Python library [https://github.com/harmonydata/harmony](https://github.com/harmonydata/harmony) is the core Harmony functionality. Most of the logic is in this repo. This repo has unit tests which run automatically on commits to main.

However, the Harmony API repo [https://github.com/harmonydata/harmonyapi](https://github.com/harmonydata/harmonyapi) uses the Harmony Python library as a submodule. When you update the Python library, please run the [unit tests and integration tests in the API repo](https://github.com/harmonydata/harmonyapi/tree/main/tests) to check nothing is broken - including the Selenium tests which test the browser app end to end. You will need to [install Selenium](https://selenium-python.readthedocs.io/) to run the tests.

Since the API repo includes the Python library as a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), when you update the Python library, you will need to update the submodule (in the `harmonyapi` repo, `cd` into the submodule folder and do `git pull`, then `cd` out and do `git add`, commit and push). We recommend you [familiarise yourself with Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

Finally, the app repo [https://github.com/harmonydata/app](https://github.com/harmonydata/app) is the React front end. Please check you can run this repo locally also before you start contributing. To point the front end repo to a local copy of your API repo, please change the file [.env](https://github.com/harmonydata/app/blob/master/.env) to point to `http://localhost:8000`.

## Pull requests

If you'd like to contribute to this project, you can contact us at https://harmonydata.ac.uk/ or [make a pull request](https://github.com/harmonydata/harmony/pulls) on our Github repository. You can also raise an issue.
