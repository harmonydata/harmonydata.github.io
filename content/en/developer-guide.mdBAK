---
title: Developer guide
---

If you're a researcher and you found Harmony useful for your research, please [cite us](/ai-in-mental-health/bmc-psychiatry-paper/). If you encounter a problem, a bug, or a feature which you would like us to implement, please [raise an issue on Github](https://github.com/harmonydata/harmony) or [message us on Discord](https://discord.gg/harmonydata).

## Git and GitHub workflow

The preferred workflow for contributing to Harmony’s repository is to fork the [main repository](https://github.com/harmonydata/harmony/) on GitHub, clone, and develop on a new branch.

Please read our general guide about [contributing to Harmony](/open-source-for-social-science/contributing-to-harmony-nlp-project/). 

We have four main repositories on Github under the `harmonydata` organisation:

* Harmony Python library: https://github.com/harmonydata/harmony - this is everything to do with the NLP logic of Harmony. This is the main core library and the Python package which is on [Pypi](https://pypi.org/project/harmonydata/).
* Harmony API: https://github.com/harmonydata/harmonyapi - the Python API runs with Pydantic and Fast API and is running on an on-prem server enabling the web app to work
* Harmony front end: https://github.com/harmonydata - this is everything to do with the front end and graphical interface of Harmony. We welcome feedback and contributions on front end and UX issues.
* R: https://github.com/harmonydata/harmony_r - the R port is on [CRAN](https://cran.r-project.org/web/packages/harmonydata/index.html) and it is slightly less mature than Python so we really appreciate if you can give the R package some TLC.

This contributor guide focuses on the Python library, but you could follow the same steps for the other repositories.

## Testing what you've done

After you've made a change, please run the unit tests in any part of the code base that your changes might have affected, either directly or indirectly, to see if anything is broken:

* the Harmony module https://github.com/harmonydata/harmony/tree/main/tests

*  the API  https://github.com/harmonydata/harmonyapi/tree/main/tests

Please try and run the tool e.g. front end and back end to check if you can get the tool working still with your changes:

* [Python on Windows installation video](https://www.youtube.com/watch?v=Okk8tUMDr6g) (only relevant if you were working on Python)
* [Python on Linux (Ubuntu) installation video](https://www.youtube.com/watch?v=enWh0-4I0Sg) (only relevant if you were working on Python)
* [R on Windows installation video](https://www.youtube.com/watch?v=hFqg6T_BqZc) (only relevant if you were working on R)


## Hackathons, coding challenges and events

Please contribute to our [hackathons](/open-source-for-social-science/hackathon/) and [coding challenges](/doxa/) to help improve the tool.  We appreciate coming to give talks at events such as [Women In Data™️](/open-source-for-social-science/women-in-data/), [AI|DL](/psychology-ai-tool/aidl-meetup/), [MethodsCon Futures](/ai-in-mental-health/harmony-at-methodscon-futures/), [Pydata](/open-source-for-social-science/pydata-meetup/), [Lifecourse](/ai-in-mental-health/harmony-at-lifecourse-seminar/), and [AI Camp](/psychology-ai-tool/aicamp-meetup/). If you run a similar meetup or community group we are willing to come and talk.

## Process of forking and making a pull request

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

```
git add <modified_files>

git commit
```

8. When finished, push the changes to your GitHub account with:

```
git push --set-upstream origin my-feature-branch
```

9. Follow [these instructions](https://help.github.com/articles/creating-a-pull-request-from-a-fork) to create a pull request from your fork. If your work is still work in progress, open a draft pull request.

Note

We recommend to open a pull request early, so that other contributors become aware of your work and can give you feedback early on.

10. To add more changes, simply repeat steps 7 - 8. Pull requests are updated automatically if you push new changes to the same branch.

Note

If any of the above seems like magic to you, look up the [Git documentation](https://gitscm.com/documentation). If you get stuck, chat with us on [Discord](https://discord.gg/harmonydata), or contact us at [harmonydata.ac.uk](https://harmonydata.ac.uk/contact).

