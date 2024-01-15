---
title: Contributing to Harmony
description: Want to help develop Harmony?
date: 2023-12-22
image: /images/join-open-source-project.png
---

# Contribute to the Harmony open source NLP project

Are you a scientist, researcher, data wrangler, or language maestro? Harmony needs YOU! We're always looking for talented individuals to join our team.

* **Contribute to our open-source code:** Whether you're a seasoned developer or a curious newbie, your contributions are valued.
* **Join the conversation:** Share your ideas, suggestions, and feedback on our forum and social media channels.

# Coding Harmony

Harmony is mostly coded in Python. We use Pycharm IDE.

Please make sure all code you commit is linted using the Pycharm default linter. If you use a different one, this will make the code history hard to follow.

# Unit tests and code stability

The Harmony Python library [https://github.com/harmonydata/harmony](https://github.com/harmonydata/harmony) is the core Harmony functionality. Most of the logic is in this repo. This repo has unit tests which run automatically on commits to main.

However, the Harmony API repo [https://github.com/harmonydata/harmonyapi](https://github.com/harmonydata/harmonyapi) uses the Harmony Python library as a submodule. When you update the Python library, please run the unit tests in the API repo to check nothing is broken.

Since the API repo includes the Python library as a submodule, when you update the Python library, you will need to update the submodule (in the `harmonyapi` repo, `cd` into the submodule folder and do `git pull`, then `cd` out and do `git add`, commit and push).

Finally, the app repo [https://github.com/harmonydata/app](https://github.com/harmonydata/app) is the React front end. Please check you can run this repo locally also before you start contributing. To point the front end repo to a local copy of your API repo, please change the file [.env](https://github.com/harmonydata/app/blob/master/.env) to point to `http://localhost:8000`.

# Getting started

Please familiarise yourself with Git. You can [fork Harmony](https://github.com/harmonydata/harmony/fork) and [make a pull request](https://github.com/harmonydata/harmony/pulls) any time! We're glad to have your contribution.

**Come on, let's harmonise the world!**

