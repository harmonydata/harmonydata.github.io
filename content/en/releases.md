# Harmony Releases

## v1.0.3 (23 January 2025)
**Tag:** v1.0.3

What is new in this release:

The tool performs [clustering of question items](https://github.com/harmonydata/harmony/pull/70) both with k-means and by a deterministic algorithm (thanks Krithika!)

The Python library generates [crosswalks](https://github.com/harmonydata/harmony/pull/65)

There's a measure of instrument to instrument similarity

This is all updated in the [Walkthrough document](https://github.com/harmonydata/harmony/blob/main/Harmony_example_walkthrough.ipynb)

* We are allowing the user to turn on/off the [negation behaviour](https://github.com/harmonydata/harmony/issues/59)
* The tool has [batching](https://github.com/harmonydata/harmony/issues/63) added to cope with larger lists of instruments (thanks makrianast )


[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v1.0.3)

---

## v1.0.1 (26 November 2024)
**Tag:** v1.0.1

Update dependencies and fix to non-breaking versions (HuggingFace, Numpy, Lxml) - some third party dependencies had been updated and were breaking the install.

Also, we have just had three fantastic pull requests in the Python repository:

* Batch code courtesy of @makrianast: [Allow batching of items when sent to LLM](https://github.com/harmonydata/harmony/pull/66)  by Anastasia  [original issue](https://github.com/harmonydata/harmony/issues/56)
* Strip prefixes code courtesy of @abdullahwaqar [feat(utils): Add strip_prefixes function to remove common question prefix](https://github.com/harmonydata/harmony/pull/64)  by Abdullah [original issue](https://github.com/harmonydata/harmony/issues/61)
* Crosswalk table generation courtesy of @vkrithika25 [Added crosswalk table + unit tests](https://github.com/harmonydata/harmony/pull/65)  by Krithika [original issue](https://github.com/harmonydata/harmony/issues/62)

[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v1.0.1)

---

## v1.0.0 (27 August 2024)
**Tag:** v1.0.0

Add `match_instruments` functionality so that Harmony web API will now return matching items from catalogues such as UKLLC, Mental Health Catalogue
Updated PDF extraction to use Scikit-Learn instead of spaCy
Upgraded to Pydantic V2 (thanks to @op-cls)
Add integration function `create_instrument_from_list` so that user can import to web UI from Python (documentation here: https://harmonydata.ac.uk/integrating-with-harmony/ ) : 

```
from harmony import create_instrument_from_list, import_instrument_into_harmony_web

instrument = load_instrument_from_list(["Do you currently smoke or have you ever smoked?", "[Do you currently use] nicotine replacement therapy?"])
web_url = import_instrument_into_harmony_web(instrument)

print (web_url)
```

[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v1.0.0)

---

## v0.5.2 (14 March 2024)
**Tag:** v0.5.2

Return topic strengths (harmonydata/app#13)
Return Python package version from API harmonydata/harmonyapi#3 harmonydata/app#12

[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v0.5.2)

---

## v0.5.1 (16 January 2024)
**Tag:** v0.5.1

Refactoring of code (PR from Eve Cheng)
Adding unit tests
Minor bugfixes

[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v0.5.1)

---

## v0.5.0 (12 July 2023)
**Tag:** v0.5.0

Added caching

[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v0.5.0)

---

## v0.4.0 (11 July 2023)
**Tag:** v0.4.0



[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v0.4.0)

---

## v0.3.0-alpha (11 July 2023)
**Tag:** v0.3.0-alpha



[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v0.3.0-alpha)

---

## Test release to Pypi (2) (10 June 2023)
**Tag:** v0.2.0-alpha



[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v0.2.0-alpha)

---

## Test release to Pypi (10 June 2023)
**Tag:** v0.1.0-beta



[View on GitHub](https://github.com/harmonydata/harmony/releases/tag/v0.1.0-beta)

---

