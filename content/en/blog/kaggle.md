---
title: "Harmony on Kaggle"
date: 2024-02-01
image: "/images/world.png"
---

## Harmony launches on Kaggle!

We are proud to have launched our first competition on Kaggle!

The primary challenge of this competition is to develop a tool or method that can accurately extract questionnaire questions from documents, primarily PDFs.

This competition offers a unique opportunity for participants to contribute to the field of natural language processing and document analysis while developing solutions that have real-world applications. We encourage participants to think creatively, leverage available resources, and push the boundaries of current technologies.

Try your hand at our competition here: https://www.kaggle.com/competitions/harmony-pdf-and-word-questionnaires-extract

You can also check out the Github repo associated with the Kaggle competition and the tagged PDF data here: https://github.com/harmonydata/pdf-questionnaire-extraction


# Entering the Kaggle competition

Requirements: Python 3.10 or greater

1. Create an account on [Kaggle](https://www.kaggle.com/).

2. Install Kaggle on your computer:

```
pip install kaggle
```

3. On the Kaggle website, download your `kaggle.json` file and put it in your home folder under `.kaggle/kaggle.json`.

4. Download and unzip the competition data:

```
kaggle competitions download -c harmony-pdf-and-word-questionnaires-extract
unzip harmony-pdf-and-word-questionnaires-extract.zip 
```

5. Run [create_sample_submission.py](https://github.com/harmonydata/pdf-questionnaire-extraction/blob/main/data/create_sample_submission.py) in the folder containing your data to create your train and test predictions:

To generate predictions for the training data and write to train_predictions.csv:

```
python create_sample_submission.py train
```

To evaluate the train predictions:

```
python evaluate_train_results.py
```

6. To modify the prediction logic or inject your own model, you can edit the function `dummy_extract_questions`.

7. To generate predictions for the test data and write to submission.csv:

```
python create_sample_submission.py test
```

8. Submit your CSV file to Kaggle

```
kaggle competitions submit -c harmony-pdf-and-word-questionnaires-extract -f submission.csv -m "Message"
```
