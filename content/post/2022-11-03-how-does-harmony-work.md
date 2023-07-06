---
id: 2371
title: 'How does Harmony work?'
date: '2022-11-03T14:05:14+00:00'
author: Thomas
layout: post
guid: 'https://harmonydata.org/?p=2371'
permalink: /how-does-harmony-work/
ast-featured-img:
    - disabled
theme-transparent-header-meta:
    - ''
adv-header-id-meta:
    - ''
stick-header-meta:
    - ''
image: /wp-content/uploads/2022/11/harmony-1.png
categories:
    - Harmony
    - Technical
---

When you input two questionnaires into Harmony, such as the [GAD-7](https://en.wikipedia.org/wiki/Generalized_Anxiety_Disorder_7) and [Beck’s Anxiety Inventory](https://res.cloudinary.com/dpmykpsih/image/upload/great-plains-health-site-358/media/1087/anxiety.pdf), Harmony is able to match similar questions and assign a number to the match. (I have written another blog post on [how we measured Harmony’s performance in terms of AUC](https://harmonydata.org/measuring-the-performance-of-nlp-algorithms/)).

So how does Harmony achieve this?

Harmony uses techniques from the field of [natural language processing](https://fastdatascience.com/what-is-nlp/) to identify when two questions deal with a similar topic. Natural language processing, or NLP, is the field of study concerning interactions between humans and computers via human language.

## Introduction to natural language processing: the Bag of Words

<figure class="wp-block-image size-full">![](https://harmonydata.org/wp-content/uploads/2022/11/GAD-7-vs-Becks.drawio-min-1.png)</figure>There are a number of approaches to quantify the similarity between strings of text. The simplest approach is known as the Bag-of-Words approach. This is *not* how Harmony currently works, but it is one of the first things we tried!

If we want to compare the GAD-7 question 4 (*Trouble relaxing*) to the Beck’s Anxiety Inventory question 4 (*Unable to relax*), we would break down each text into the words present. We usually remove suffixes like *ing* at this stage (this is called lemmatisation).

<figure class="wp-block-table">|  | GAD-7 Q4 | Beck Q4 |
|---|---|---|
| trouble | 1 | 0 |
| relax(ing) | 1 | 1 |
| unable | 0 | 1 |
| to | 0 | 1 |
| nervous | 0 | 0 |
| anxious | 0 | 0 |
| … | … | … |

</figure>In total there are 4 words between the two questions. One word (*relax*) occurs in both questions. We can calculate a similarity metric using a formula called the Jaccard similarity coefficient, which is defined as the number of words in both questions, divided by the number of words in either question, so in our case

![J(\text{``trouble relaxing''}, \text{``unable to relax''}) = \frac{1}{4} = 0.25](https://harmonydata.org/wp-content/ql-cache/quicklatex.com-1481bf052e6ff61e1fd6451407f06954_l3.png "Rendered by QuickLaTeX.com")

It is easy to see that the Jaccard similarity coefficient would come to 1 if the documents were identical and 0 if the documents were completely different.

The obvious drawbacks of the Jaccard method are that

- It ignores syntax (the order of the words in the texts).
- It cannot cope with synonyms.
- It won’t notice negation (*I was not happy* and *I was very happy* both equally match *you were happy*).
- Most crucially, our remit for the Harmony project is that we want to harmonise data from different languages, such as Portuguese and English. Clearly the bag-of-words approach would not work when the texts are in different languages, unless you translated them first.

<figure class="wp-block-image size-full is-resized">![](https://harmonydata.org/wp-content/uploads/2022/11/Jaccard-checklist.drawio-min.png)</figure>## Vector spaces

The next approach that we tried was a vector space model.

Vector space models allow us to represent words and concepts as numbers or points on a graph. For example, if *anxious* could be (2, 3), *worried* is (3, 4) and *relax* is (8, 2). The coordinates of each concept are themselves meaningless, but if we calculate the distance between them we would see that *anxious* and *worried* are closer to each other than either is to *relax*.

<figure class="wp-block-image size-large">![](https://harmonydata.org/wp-content/uploads/2022/11/Word-vectors.drawio-min-1024x557.png)<figcaption class="wp-element-caption">It’s important to note that the values of the vectors are completely arbitrary. There’s no meaning at all to where a concept is assigned on the *x* or *y* axes, but there is meaning in the distances.</figcaption></figure>Now we have a way to handle synonyms. This approach is called *word vector embeddings*

<figure class="wp-block-image size-full">![](https://harmonydata.org/wp-content/uploads/2022/11/image.png)<figcaption class="wp-element-caption">Some real word vector values for terms occurring in our data. Typically the vectors are large, potentially up to 500 dimensions.</figcaption></figure>Word vector embeddings became popular in 2013 after the Czech computer scientist Tomáš Mikolov [proposed a way that an AI can generate vectors](https://arxiv.org/abs/1310.4546) for every word in the English language simply from a huge set of documents.

<figure class="wp-block-image size-full">![](https://harmonydata.org/wp-content/uploads/2022/11/newplot-28-min.png)<figcaption class="wp-element-caption">To visualise the word vectors, we can squash them down into two or three dimensions. This is a 2D visualisation of the terms in the table above. I used an algorithm called [t-SNE](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding) to squash them into a flat surface.</figcaption></figure>If you would like to experiment with word vectors yourself, you can visit the [Nordic Language Processing Laboratory’s website](http://vectors.nlpl.eu/explore/embeddings/en/#) and try it yourself.

If you want to use word vector embeddings to find synonyms, you could calculate the average vector of each question, and calculate the distances between vectors in this way. This will not handle things like negation (*I do not feel anxious*) but it is much more powerful than the bag-of-words approach. Words such as *bank*, which has a different meaning depending on context, will always be represented as the same vector.

With the Harmony data, I found that the vector space models did not correctly identify the relationship between *child bullies others* and *child is bullied by others* – which are clearly very different questions and should not be harmonised together.

<figure class="wp-block-image size-full is-resized">![](https://harmonydata.org/wp-content/uploads/2022/11/Vector-checklist.drawio-min.png)</figure>## Transformer models

In 2017 a team of researchers at Google published a paper titled [Attention Is All You Need](https://arxiv.org/abs/1706.03762), where they proposed a special kind of neural network called a Transformer network which is able to move along a string of text and output a vector at each point in the document, taking into account the context in the rest of the document.

The transformer neural network uses an *attention mechanism*, which is a component that causes it to pay extra attention to words in the sentence which are strongly linked to the word it’s looking at.

For example, when parsing the text *Feeling afraid as if something awful might happe*n, an attention mechanism would pay strong attention to the word *something* when parsing the word *awful*.

 <script src="https://cdn.plot.ly/plotly-latest.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script><div id="myDiv"></div> <script type="text/javascript">
      
      d3.csv('https://raw.githubusercontent.com/fastdatascience/logos/master/data/harmony_tsne.csv', // 'https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv',
         function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}
	
	var labels = unpack(rows, 'label');
	var sources = unpack(rows, 'source');
	var clusters = unpack(rows, 'category');
	
	var colourMap = ['#00784a', '#ff7f0e'];
	var pointColours = clusters.map(function (i) { return colourMap[i] } );

	
	var complete_labels = labels.map(function (label, idx) {
  		return label + ".<br>Source: " + sources[idx];
		});

var trace1 = {
	x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'), text: complete_labels,
	mode: 'markers',
	marker: {
               color: pointColours, // 'rgb(34, 87, 122)',
		size: 5,
		line: {
		color: '#000000',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'
};

/*
var trace2 = {
	x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
	mode: 'markers',
	marker: {
		color: 'rgb(127, 127, 127)',
		size: 12,
		symbol: 'circle',
		line: {
		color: 'rgb(204, 204, 204)',
		width: 1},
		opacity: 0.8},
	type: 'scatter3d'};
*/

var data = [trace1 /*, trace2 */ ];
var layout = {
  title: {
		text: 'Vector representations of the GAD-7 and Beck\'s Anxiety Inventory<br>Calculated using GPT-2<br>Collapsed to three dimensions using t-SNE.',
		font: {
		    family: 'PT Sans',
		    size: 20
		},
		//xref: 'paper',
		//x: 0.05,
	    }, 
   margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 50
  }
  
  };
Plotly.newPlot('myDiv', data, layout);

/*
// begin hover stuff
var myPlot = document.getElementById('myDiv');

myPlot.on('plotly_hover', function (eventdata){
    var points = eventdata.points[0],
        pointNum = points.pointNumber;
    
    console.log(pointNum);

    Plotly.Fx.hover('myDiv',[
        { curveNumber:0, pointNumber:414 },
      //  { curveNumber:1, pointNumber:pointNum },
       // { curveNumber:2, pointNumber:pointNum },
    ]);
});
*/

});
</script>As an aside, transformers can also be used for machine translation (in fact Google Translate now uses transformers), and this attention enables a noun+adjective phrase to be translated to another language with the correct gender.

<figure class="wp-block-image size-large">![](https://harmonydata.org/wp-content/uploads/2022/11/English-Portuguese-translations.drawio-1024x269.png)<figcaption class="wp-element-caption">The word *red* could be translated in various different ways into Portuguese depending on the gender and the noun to be modified. Transformer models are adept at taking these clues into context and outputting the correct translation of a phrase.</figcaption></figure>For Harmony we are using an open-source AI transformer model called GPT-2, which was [developed by OpenAI in 2019](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf).

GPT-2 converts the text of each question into a vector in 1600 dimensions.

The distance between any two questions is measured according to the cosine similarity metric between the two vectors. Two questions which are similar in meaning, even if worded differently or in different languages, will have a high degree of similarity between their vector representations. Questions which are very different tend to be far apart in the vector space.

<figure class="wp-block-image size-full is-resized">![](https://harmonydata.org/wp-content/uploads/2022/11/Transformer-checklist.drawio-min.png)</figure>## Converting to a network graph

When Harmony receives two or more questionnaires, the text of each question is compared to each question in every other document. For example, GAD-7 question 1 would be vectorised and compared to all of the questions in the PHQ-9, but not to any other questions in GAD-7.

We then find the closest matches and link them together in a graph.

Because this approach is potentially error-prone, we have provided the facility for a user to edit the network graph and add and remove edges if they disagree with Harmony’s decisions.

<figure class="wp-block-image size-large">![](https://harmonydata.org/wp-content/uploads/2022/11/image-2-1024x416.png)<figcaption class="wp-element-caption">The user has an option to add or remove edges from the graph.</figcaption></figure>## Open Data and Open Science

With an aim to make our research as accessible to the public as possible, we have made Harmony and its source code and data public. The source code and source data are on [GitHub](https://github.com/harmonydata) and runs in Python. If you have some basic knowledge of Python, feel free to download it and you can even contribute to the project, by making a branch and submitting a pull request.

## What’s next for Harmony?

### Likert scale matching

The questions often come with a set of options such as *definitely not, somewhat anxious*, and the like. These are often a form of [Likert scale](https://en.wikipedia.org/wiki/Likert_scale). We would like to apply the same logic to match the candidate answers in a question, and identify when questions have opposite polarity (*I often feel anxious* vs *I rarely feel anxious*).

### PDF processing

Harmony is designed to process input files in Excel or PDF format. Extracting the questions from a PDF is fraught with difficulty because of the huge variety of formats and numbering systems. We would like to add better support for different PDF formats.

### Data calibration

At present Harmony only processes the question texts but does not handle survey responses. After harmonisation, survey data calibration is the next step in the process of consolidating research from different sources. We would like to add a facility to process raw survey data into the tool.

### Priming, anchoring, and other effects

We have so far ignored the order of the questions in an instrument. In the real world, people respond differently to a question depending on the questions which have come beforehand. There may be an opportunity to model these effects in Harmony at a later stage of the project.

## References

1. Mikolov, Tomas; Sutskever, Ilya; Chen, Kai; Corrado, Greg S.; Dean, Jeff (2013). Distributed representations of words and phrases and their compositionality. Advances in Neural Information Processing Systems. arXiv:1310.4546. Bibcode:2013arXiv1310.4546M.
2. Vaswani, Ashish; Shazeer, Noam; Parmar, Niki; Uszkoreit, Jakob; Jones, Llion; Gomez, Aidan N.; Kaiser, Lukasz; Polosukhin, Illia (2017-06-12). “Attention Is All You Need”. arXiv:1706.03762 \[cs.CL\].
3. Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei,Ilya Sutskever, Language Models are Unsupervised Multitask Learners (2019)

<div class="alignleft wp-block-avatar">![Thomas Avatar](https://secure.gravatar.com/avatar/083f5f1b2c5592f452dbbf8d630db1a5?s=96&d=mm&r=g)</div>Thomas Wood is a data scientist specialising in natural language processing. He is responsible for the technical side of the Harmony project. He offers consulting in NLP via his company [Fast Data Science](http://fastdatascience.com/).