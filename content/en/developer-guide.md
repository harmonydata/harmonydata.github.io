---
title: Developer guide
---

# Git and GitHub workflow

The preferred workflow for contributing to Harmony’s repository is to fork the [main repository](https://github.com/harmonydata/harmony/) on GitHub, clone, and develop on a new branch.

Please read our general guide about [contributing to Harmony](/contributing-to-harmony/). 

We have three main repositories on Github under the `harmonydata` organisation:

* Harmony Python library: https://github.com/harmonydata/harmony - this is everything to do with the NLP logic of Harmony
* Harmony API: https://github.com/harmonydata/harmonyapi
* Harmony front end: https://github.com/harmonydata - this is everything to do with the front end and graphical interface of Harmony

This contributor guide focuses on the Python library, but you could follow the same steps for the other repositories.

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
