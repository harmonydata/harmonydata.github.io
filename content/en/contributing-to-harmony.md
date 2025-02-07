---
title: "Guide to contributing to Harmony"
aliases:
  - "/contributing/"
  - "/contributing-to-harmony/"
  - "/developer-guide/"
url: "/open-source-for-social-science/contributing-to-harmony-nlp-project/"
---

Thank you for considering contributing to the Harmony project. This guide consolidates all the resources, tools, and tips you need to start contributing effectively. We value your input, no matter what skill set you have - whether you’re a developer, researcher, or data and AI enthusiast, or even if you’re in an entirely different field.
{{< youtube cEZppTBj1NI >}}


## Table of Contents

1. [Getting started with Harmony](#getting-started-with-harmony)
2. [Contributing to Harmony as a user](#contributing-to-harmony-as-a-user-eg-a-social-scientist-or-other-researcher)
-  [Using Harmony from Python and R libraries](#using-harmony-from-python-and-r-libraries)
-  [How you can help the Harmony project](#how-you-can-help-the-harmony-project)
3. [Contributing to Harmony as a developer](#contributing-to-harmony-as-a-developer)
-  [Where is the source code?](#where-is-the-source-code)
-  [Installing Harmony](#installing-harmony)
-  [What should I work on?](#what-should-i-work-on)
-  [Coding Standards](#coding-standards)
-  [Unit tests and code stability](#unit-tests-and-code-stability)
-  [Forking and Submitting a Pull Request (PR)](#forking-and-submitting-a-pull-request-pr)
-  [Troubleshooting the code base](#troubleshooting-the-code-base)
4. [Additional Resources](#additional-resources)

## Getting started with Harmony

We recommend that you try the free web tool: [Harmony App](https://harmonydata.ac.uk/app) to understand how the tool works and what it does.
Join our [Discord Server](https://discord.gg/harmonydata), where you can interact with users and contributors, ask questions, and collaborate on ideas.
Please also follow us on social media platforms: [Twitter](https://twitter.com/harmony_data), [LinkedIn](https://www.linkedin.com/company/harmonydata/), [Facebook](#Facebook-link), [YouTube](https://www.youtube.com/@harmonydata).

We’ve split this guide into two sections, depending on whether you are intending to use Harmony in research or contribute to the code base:
* I’m using Harmony 👉 see [Contributing to Harmony as a user](#contributing-to-harmony-as-a-user-eg-a-social-scientist-or-other-researcher)
* I would like to contribute to the code base of Harmony 👉 see [Contributing to Harmony as a developer](#contributing-to-harmony-as-a-developer)


## Contributing to Harmony as a user (e.g. a social scientist or other researcher)

There are two ways you can use Harmony in your work:

1. Using the Harmony web app from your browser at https://harmonydata.ac.uk/app
2. Using Harmony from code, via the Python or R library.

### Using Harmony from Python and R libraries

Some academic users start off on the web tool, and then switch to the [Python](https://github.com/harmonydata/harmony) or [R library](https://github.com/harmonydata/harmony_r) and work in Jupyter Notebooks or R Markdown to use the tool as part of their workflow.

#### Python installation

1. In your command line (terminal), type `pip install harmonydata`
2. In your Python code you can import Harmony with `import harmony`

#### R installation

1. Run `install.packages("harmonydata")` to install the package
2. Import it with `library(harmonydata)`

#### Example walkthrough notebooks in Python and R

We have some example notebooks to help you get started with the Python and R libraries:
* [Python Colab notebook](https://colab.research.google.com/github/harmonydata/harmony/blob/main/Harmony_example_walkthrough.ipynb)
* [R markdown](https://harmonydata.ac.uk/harmony_r_example.nb.html)
* [R Colab notebook](https://colab.research.google.com/github/harmonydata/experiments/blob/main/Harmony_R_example.ipynb)

### How you can help the Harmony project

Here’s how you can help the project:

1. Say hi on Discord (or [use our contact form](/contact/) if you don’t have Discord). If you are using Harmony in your work, please let us know on Discord as we’re always really excited to hear from new users around the world. We’d like to know what you’re using it for, and if there are any features that you would like added, or any pain points that you would like to see resolved. And of course we would love to know what came out of your research!
2. Create issues in Github. If you find a bug or would like to request a new feature, please visit the [issue board on Github](https://github.com/harmonydata/harmony/issues) and create a new issue. Before creating your issue, please check if the issue in question hasn’t already been created by somebody else. If so, it's often better to just leave a comment on an existing issue, rather than creating a new one.
3. Publicise the project. The project benefits from people sharing us on social media, giving us shout-outs at events, and generally spreading awareness about Harmony. If your project has a website, please link to harmonydata.ac.uk and describe how you used Harmony.
4. Cite us. If you use Harmony in your research, please cite the tool and the accompanying publication. [Citation details are here](/frequently-asked-questions/#how-do-i-cite-harmony). If you successfully used Harmony in your work, we'd appreciate it if we could feature your organisation as a case study on our website.
5. Attend events or invite us to talk. Please come to some of our in-person [events](/events/), and we are also interested in any opportunities to speak at your event.
6. Share data. If you have any data that you’re trying to harmonise with Harmony and it’s not sensitive or restricted, please share it with us so that we can see how people are using the tool and understand what kind of input it should expect.
7. Share example notebooks and scripts. If you have a Jupyter notebook, R markdown, R Studio files or similar, please upload them to https://github.com/harmonydata/harmony_examples and other people can see how you’ve been using Harmony.
8. Engage with the community - write posts on Discord, LinkedIn, etc, and share how you think the tool could be used or improved.


## Contributing to Harmony as a developer 

Harmony’s source code is all public and it’s under [source control](https://aws.amazon.com/devops/source-control/) in Github, so we can see which changes were done to the project at any date in the past.

You are welcome to make your contributions to the library at any time. You can also come to our hackathons and [other events](/events/) and contribute in person.

### Where is the source code?

We have four main repositories on Github under the [harmonydata](https://github.com/harmonydata/) organisation:


{{< image src="/images/harmony-repos.png" title="Harmony repos" >}}

1. Harmony Python library: https://github.com/harmonydata/harmony - this is everything to do with the NLP logic of Harmony. This is the main core library and the Python package which is on [Pypi](https://pypi.org/project/harmonydata/). We regularly release new versions of the Python package to Pypi from this repository using Github actions. The Python repository is included in the API repository as a submodule.
2. Harmony API: https://github.com/harmonydata/harmonyapi - the Python API runs with Pydantic and Fast API. You can run this locally. The public Harmony web app is running this application as a Docker container on an on-prem server (CentOS, 16 GB). Please note that the API repository **includes the Python repository as a submodule**. So when you clone this repository you need to include `--recurse-submodules`, e.g. `git clone --recurse-submodules git@github.com:harmonydata/harmonyapi.git`
3. Harmony front end: https://github.com/harmonydata - this is everything to do with the front end and graphical interface of Harmony. We welcome feedback and contributions on front end and UX issues.
4. R: https://github.com/harmonydata/harmony_r - the R port is on [CRAN](https://cran.r-project.org/web/packages/harmonydata/index.html) and it is slightly less mature than Python so we really appreciate if you can help move the R package forward.

### Installing Harmony

You can use Windows, Linux or Mac. We have made some videos to help you install Python and Harmony:


* [Python on Windows installation video](https://www.youtube.com/watch?v=Okk8tUMDr6g) (only relevant if you are working on Python)
* [Python on Linux (Ubuntu) installation video](https://www.youtube.com/watch?v=enWh0-4I0Sg) (only relevant if you are working on Python)
* [R on Windows installation video](https://www.youtube.com/watch?v=hFqg6T_BqZc) (only relevant if you are working on R)
* [Video on how to install the front end locally](https://www.youtube.com/watch?v=1xp3Uh6dptg)


Here are the steps to get started:

#### Working on Harmony in Python

If you just want to use the Python library without editing it, you can install it with `pip install harmonydata`. However, if you want to edit the source code, you will need to get it running from source.

* First clone the [Python repository](https://github.com/harmonydata/harmony) from Git: `git clone git@github.com:harmonydata/harmony.git`. If you're not familiar with Git and Github, we recommend you watch a tutorial on Git first ([example video tutorial on Git](https://www.youtube.com/watch?v=USjZcfj8yxE))
* Install Python 3.11 or later  (we recommend using Anaconda and Jupyter Notebook)
* Install Pycharm
* Install Jupyter Notebooks
* Run the [example Colab notebook](https://colab.research.google.com/github/harmonydata/harmony/blob/main/Harmony_example_walkthrough.ipynb) to get a feel for how Harmony can be used
* If the code is set up correctly, you should be able to run the unit tests in the Python repository correctly.


#### Working on Harmony API in Python

The API repository depends on the Python repository, which it contains as a submodule. So when you clone the API repository, please make sure to include `--recurse-submodules`:

```
git clone --recurse-submodules git@github.com:harmonydata/harmonyapi.git
```

The API builds as a Docker container, so in addition to the Python library's dependencies, you will need to install FastAPI and Docker. There is a separate `requirements.txt` file for the API repository.

You can run the API with 

```
python main.py
```

#### Working on Harmony front end

Clone the [front end repository](https://github.com/harmonydata/app):

```
git clone git@github.com:harmonydata/app.git
```

Follow the instructions in the `.env` file to connect it to the Harmony API - you can connect either to the remote API, or to a local API. 

#### Working on Harmony R

Clone the [R repository](https://github.com/harmonydata/harmony_r):

```
git clone git@github.com:harmonydata/harmony_r.git
```

Harmony R connects to an API instance. By default it will connect to the remote API at `https://api.harmonydata.ac.uk`, but you can configure this with

```
harmonydata::set_url()
```

### What should I work on?

Each of the repositories has its own issue tracker. Before taking on an issue, please check that nobody is already working on it. Please write a comment at the bottom of an issue that you would like to pick up, so that other people don’t duplicate your work.

{{< image src="/images/issue-tracker.png" title="Issue tracker" >}}

*Above: This is a preview of the issues board. You can see that some issues are tagged “good first issue”. So they are good for new people to pick up.*
* Issues for the core Python library are here: [https://github.com/harmonydata/harmony/issues](https://github.com/harmonydata/harmony/issues)
* Issues for the API are here: [https://github.com/harmonydata/harmonyapi/issues](https://github.com/harmonydata/harmonyapi/issues)
* Issues for the front end are here: [https://github.com/harmonydata/app/issues](https://github.com/harmonydata/app/issues)
* Issues for the R port are here: [https://github.com/harmonydata/harmony_r/issues](https://github.com/harmonydata/harmony_r/issues)

You can also ask on Discord if you have any questions about how best to contribute.

It’s a good idea to check the open pull requests to check that nobody has already worked on that issue and submitted code back to the main project. For example, here are the pull requests for the Python library: https://github.com/harmonydata/harmony/pulls

### Coding Standards

Harmony is mostly coded in Python. We use [Pycharm IDE](https://www.jetbrains.com/pycharm/) by JetBrains. Please ensure you are familiar with Python, [HuggingFace](https://huggingface.co/), and [FastAPI](https://fastapi.tiangolo.com/), or Javascript and [React](https://react.dev/) if you want to work on the front end.

* Please use  [Pycharm default linter](https://www.reddit.com/r/pycharm/comments/mm77el/what_is_the_default_linter_in_pycharm/) - this is a set of rules of how many whitespace characters are allowed in a line, and in general provides consistency for formatting of human readable code and comments. If you use a different one (such as VS Code's linter, or pylint), this will make the code history hard to follow, so please be consistent. If one person uses spaces and another uses tabs, it's hard to manage it and keep track of code changes. 

See the example screenshot below of Pycharm's formatter to format your code correctly:

{{< image src="/images/pycharm-lint.png" title="Pycharm Linter" >}}

* Please run unit tests before pushing. We use test driven development. That means that every commit gets tested automatically by Github and will get a green tick or red cross if the tests pass or fail. All the repos have tests in a folder called `tests` and you can run them on your computer and Github actions will run them when you commit. They will tell you if you break any functionality.
* Check your PR hasn’t got any extra files made by your IDE that shouldn’t be committed, such as .vscode or DS_Store (Mac). It's a common mistake for beginners to bulk commit the entire contents of a directory including files which are not part of the project. For example, Mac puts extra hidden files inside folders when you open them in the file browser. Try not to let them clutter our code base. They make code hard to manage and in some cases can break the tool.

### Unit tests and code stability

Harmony uses the [pytest](http://doc.pytest.org/) framework for testing. For more info on this, see the [pytest documentation](http://docs.pytest.org/en/latest/contents.html). To be interpreted and run, all test files and test functions need to be prefixed with `test_`.

The Harmony Python library [https://github.com/harmonydata/harmony](https://github.com/harmonydata/harmony) is the core Harmony functionality. Most of the logic is in this repo. This repo has unit tests which run automatically on commits to main.

However, the Harmony API repo [https://github.com/harmonydata/harmonyapi](https://github.com/harmonydata/harmonyapi) uses the Harmony Python library as a submodule. When you update the Python library, please run the [unit tests and integration tests in the API repo](https://github.com/harmonydata/harmonyapi/tree/main/tests) to check nothing is broken - including the Selenium tests which test the browser app end to end. You will need to [install Selenium](https://selenium-python.readthedocs.io/) to run the tests.

Since the API repo includes the Python library as a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), when you update the Python library, you will need to update the submodule (in the `harmonyapi` repo, `cd` into the submodule folder and do `git pull`, then `cd` out and do `git add`, commit and push). We recommend you [familiarise yourself with Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

Finally, the app repo [https://github.com/harmonydata/app](https://github.com/harmonydata/app) is the React front end. Please check you can run this repo locally also before you start contributing. To point the front end repo to a local copy of your API repo, please change the file [.env](https://github.com/harmonydata/app/blob/master/.env) to point to `http://localhost:8000`.


### Forking and Submitting a Pull Request (PR)

The preferred workflow for contributing to Harmony’s repository is to fork the repository that you’re working on, such as [the Python library](https://github.com/harmonydata/harmony/), on GitHub, clone, and develop on a new branch.

When you’re done, please run all unit tests and you can submit your changes back to the main project as a pull request. If you have worked on the core Python library, please also test your changes in the context of the Python API.

If you are able to fix an issue, please feel free to submit your code back to the project by [making a pull request](https://github.blog/developer-skills/github-education/beginners-guide-to-github-merging-a-pull-request) (PR) but if you don't know how to do that, don't worry! You can always send us your work on Discord or by email. Here's a brief overview of the steps for making a pull request.

1. Fork the [main project repository](https://github.com/harmonydata/harmony) by clicking on the ‘Fork’ button near the top right of the page. This creates a copy of the code under your GitHub user account. For more details on how to fork a repository see [this guide](https://help.github.com/articles/fork-a-repo/).
2. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) your fork of the Harmony repo from your GitHub account to your local disk:
```
git clone git@github.com:harmonydata/harmony.git
cd harmony
```
3. Configure and link the remote for your fork to the upstream repository:
```
git remote -v
git remote add upstream <https://github.com/harmonydata/harmony.git>
```

4. Verify the new upstream repository you’ve specified for your fork:

```
git remote -v
\> origin <https://github.com/<username>/Harmony.git> (fetch)
\> origin <https://github.com/<username>/Harmony.git> (push)
\> upstream <https://github.com/harmonydata/harmony.git> (fetch)
\> upstream <https://github.com/harmonydata/harmony.git> (push)
```

5. [Sync](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) the main branch of your fork with the upstream repository:
```
git fetch upstream
git checkout main
git merge upstream/main
```

6. Create a new feature branch from the main branch to hold your changes:
```
git checkout main
git checkout -b <feature-branch>
```

Always use a feature branch. It’s good practice to never work on the main branch! Name the feature branch after your contribution.
	
7. Develop your contribution on your feature branch. Add changed files using git add and then git commit files to record your changes in Git:
`git add <modified_files>`;
`git commit`
8. When finished, push the changes to your GitHub account with: `git push --set-upstream origin my-feature-branch`
9. Follow [these instructions](https://help.github.com/articles/creating-a-pull-request-from-a-fork) to create a pull request from your fork. If your work is still work in progress, open a draft pull request.

#### Making a good pull request

We recommend to open a pull request early, so that other contributors become aware of your work and can give you feedback early on.

Please make your pull requests atomic. That is, please try to fix only one issue per pull request. If your pull request addresses three separate issues, it is very hard for moderators to merge it.

Please don’t make huge changes, such as adding many third party dependencies to requirements.txt, as this can quickly make the project bloated and we would ideally discuss alternatives before any more dependencies are added.

If you introduce a new feature, please can you document it, for example by making a script example in the [script examples repository](https://github.com/harmonydata/harmony_examples) so that people will know how to use it.

Please write clear commit messages:

1. Structure your commit messages clearly and include the purpose of the change.
2. Use issue numbers for tracking, e.g., `Fix bug in NLP model (#54)`. Github will detect the # in the message and automatically display your commit under the corresponding issue, which means that anyone can easily see that a particular issue has related commits, and vice versa.


#### Help on Git and pull requests

If any of the above seems like magic to you, look up the [Git documentation](https://gitscm.com/documentation). If you get stuck, chat with us on [Discord](https://discord.gg/harmonydata), or contact us at [harmonydata.ac.uk](https://harmonydata.ac.uk/contact).

### Troubleshooting the code base

#### Errors from third party libraries when you try to run Harmony

When you first try running the code, you may encounter some errors. This is often because a 3rd party package such as Numpy, Pandas, Lxml or Huggingface has updated itself and broken a dependency somewhere. It’s a good idea to Google for the error and check if you can fix it with a simple change in version to the package that’s causing the issue.

#### Troubleshooting the API repository after git clone

After you have cloned the repository at https://github.com/harmonydata/harmonyapi, if the folder inside called `harmony` is empty, or at any point you get an error like the below, please check you have cloned with `--recurse-submodules` as below:
{{< image src="/images/error_no_submodules.png" title="Error for missing submodules" >}}

```
git clone --recurse-submodules https://github.com/harmonydata/harmonyapi.git
```



## Additional Resources

1. [FAQ](https://harmonydata.ac.uk/frequently-asked-questions/)
2. [Formatting Help](https://harmonydata.ac.uk/open-source-for-social-science/formatting-help/)
