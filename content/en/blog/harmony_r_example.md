---
title: "Harmony R notebook R markdown example"
description: R notebook demo of Harmony
date: 2023-10-01
image: "/images/r_studio_screenshot.png"
---


This notebook shows how you can use Harmony to find the similarity matrix between two questionnaires: the CBCL and GOASSESS.

The Harmony project is a data harmonisation project that uses [Natural Language Processing](https://fastdatascience.com/guide-natural-language-processing-nlp/) to help researchers make better use of existing data from different studies by supporting them with the harmonisation of various measures and items used in different studies.

Harmony was developed as a collaboration between [Ulster University](https://ulster.ac.uk/), [University College London](https://ucl.ac.uk/), the [Universidade Federal de Santa Maria](https://www.ufsm.br/), and [Fast Data Science](http://fastdatascience.com/).  Harmony is funded by [Wellcome](https://wellcome.org/) as part of the [Wellcome Data Prize in Mental Health](https://wellcome.org/grant-funding/schemes/wellcome-mental-health-data-prize).

This code is provided as an [R Markdown](http://rmarkdown.rstudio.com) Notebook. When you execute code within the notebook, the results appear beneath the code. Click [here](/harmony_r_example.nb.html) to download this file in R Markdown notebook format which you can open in R Studio.

Alternatively, you can also run this notebook in Google Colab, or [download as Jupyter Notebook in R](https://github.com/harmonydata/experiments/blob/main/Harmony_R_example.ipynb): 
{{< htmlcode >}}

<a href="/harmony_r_example.nb.html" target="_parent"><img src="https://img.shields.io/badge/RStudio-4285F4" alt="Open in R Studio"/></a>

<a href="https://colab.research.google.com/github/harmonydata/experiments/blob/main/Harmony_R_example.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
{{< /htmlcode >}}

{{< youtube hFqg6T_BqZc >}}

_Installation of Harmony R package on Windows 10._

When you've [downloaded the .Rmd file](/harmony_r_example.Rmd), you can open it in [R Studio](https://posit.co/download/rstudio-desktop/). You can execute any chunk by clicking the *Run* button within the chunk or by placing your cursor inside it and pressing *Ctrl+Shift+Enter*. 

First let's import Harmony. If you haven't already, you need to install it with `install.packages("harmonydata")`.

```{r}
library(harmonydata)
```

Now we can create our instruments.

If you had everything in a PDF or Excel file, you could load the instruments directly from the file: `instrument = load_instruments_from_file(path = "CBCL_GOASSESS.xlsx")`. However, in this example we will code everything directly in the notebook.

```{r}
cbcl <- list(
instrument_name = "CBCL",
questions = list(
list(question_no = "CBCL_1", question_text="Acts too young for his/her age"),
list(question_no = "CBCL_2", question_text="Drinks alcohol without parents' approval"),
list(question_no = "CBCL_3", question_text="Argues a lot"),
list(question_no = "CBCL_4", question_text="Fails to finish things he/she starts"),
list(question_no = "CBCL_5", question_text="There is very little he/she enjoys"),
list(question_no = "CBCL_6", question_text="Bowel movements outside toilet"),
list(question_no = "CBCL_7", question_text="Bragging, boasting"),
list(question_no = "CBCL_8", question_text="Can't concentrate, can't pay attention for long"),
list(question_no = "CBCL_9", question_text="Can't get his/her mind off certain thoughts; obsessions"),
list(question_no = "CBCL_10", question_text="Can't sit still, restless or hyperactive"),
list(question_no = "CBCL_11", question_text="Clings to adults or too dependent"),
list(question_no = "CBCL_12", question_text="Complains of loneliness"),
list(question_no = "CBCL_13", question_text="Confused or seems to be in a fog"),
list(question_no = "CBCL_14", question_text="Cries a lot"),
list(question_no = "CBCL_15", question_text="Cruel to animals"),
list(question_no = "CBCL_16", question_text="Cruelty, bullying, or meanness to others"),
list(question_no = "CBCL_17", question_text="Daydreams or gets lost in his/her thoughts"),
list(question_no = "CBCL_18", question_text="Deliberately harms self or attempts suicide"),
list(question_no = "CBCL_19", question_text="Demands a lot of attention"),
list(question_no = "CBCL_20", question_text="Destroys his/her own things"),
list(question_no = "CBCL_21", question_text="Destroys things belonging to his/her family or others"),
list(question_no = "CBCL_22", question_text="Disobedient at home"),
list(question_no = "CBCL_23", question_text="Disobedient at school"),
list(question_no = "CBCL_24", question_text="Doesn't eat well"),
list(question_no = "CBCL_25", question_text="Doesn't get along well with other kids"),
list(question_no = "CBCL_26", question_text="Doesn't seem to feel guilty after misbehaving"),
list(question_no = "CBCL_27", question_text="Easily jealous"),
list(question_no = "CBCL_28", question_text="Breaks rules at home, school, or elsewhere"),
list(question_no = "CBCL_29", question_text="Fears certain animals, situations, or places, other than school"),
list(question_no = "CBCL_30", question_text="Fears going to school"),
list(question_no = "CBCL_31", question_text="Fears he/she might think or do something bad"),
list(question_no = "CBCL_32", question_text="Feels he/she has to be perfect"),
list(question_no = "CBCL_33", question_text="Feels or complains that no one loves him/her"),
list(question_no = "CBCL_34", question_text="Feels others are out to get him/her"),
list(question_no = "CBCL_35", question_text="Feels worthless or inferior"),
list(question_no = "CBCL_36", question_text="Gets hurt a lot, accident-prone"),
list(question_no = "CBCL_37", question_text="Gets in many fights"),
list(question_no = "CBCL_38", question_text="Gets teased a lot"),
list(question_no = "CBCL_39", question_text="Hangs around with others who get in trouble"),
list(question_no = "CBCL_40", question_text="Hears sounds or voices that aren't there"),
list(question_no = "CBCL_41", question_text="Impulsive or acts without thinking"),
list(question_no = "CBCL_42", question_text="Would rather be alone than with others"),
list(question_no = "CBCL_43", question_text="Lying or cheating"),
list(question_no = "CBCL_44", question_text="Bites fingernails"),
list(question_no = "CBCL_45", question_text="Nervous, highstrung, or tense"),
list(question_no = "CBCL_46", question_text="Nervous movements or twitching"),
list(question_no = "CBCL_47", question_text="Nightmares"),
list(question_no = "CBCL_48", question_text="Not liked by other kids"),
list(question_no = "CBCL_49", question_text="Constipated, doesn't move bowels"),
list(question_no = "CBCL_50", question_text="Too fearful or anxious"),
list(question_no = "CBCL_51", question_text="Feels dizzy or lightheaded"),
list(question_no = "CBCL_52", question_text="Feels too guilty"),
list(question_no = "CBCL_53", question_text="Overeating"),
list(question_no = "CBCL_54", question_text="Overtired without good reason"),
list(question_no = "CBCL_55", question_text="Overweight"),
list(question_no = "CBCL_56A", question_text="Aches or pains (not stomach or headaches)"),
list(question_no = "CBCL_56B", question_text="Headaches"),
list(question_no = "CBCL_56C", question_text="Nausea, feels sick"),
list(question_no = "CBCL_56D", question_text="Problems with eyes (not if corrected by glasses"),
list(question_no = "CBCL_56E", question_text="Rashes or other skin problems"),
list(question_no = "CBCL_56F", question_text="Stomachaches"),
list(question_no = "CBCL_56G", question_text="Vomiting, throwing up"),
list(question_no = "CBCL_56H", question_text="Other"),
list(question_no = "CBCL_57", question_text="Physically attacks people"),
list(question_no = "CBCL_58", question_text="Picks nose, skin, or other parts of body"),
list(question_no = "CBCL_59", question_text="Plays with own sex parts in public"),
list(question_no = "CBCL_60", question_text="Plays with own sex parts too much"),
list(question_no = "CBCL_61", question_text="Poor school work"),
list(question_no = "CBCL_62", question_text="Poorly coordinated or clumsy"),
list(question_no = "CBCL_63", question_text="Prefers being with older kids"),
list(question_no = "CBCL_64", question_text="Prefers being with younger kids"),
list(question_no = "CBCL_65", question_text="Refuses to talk"),
list(question_no = "CBCL_66", question_text="Repeats certain acts over and over; compulsions "),
list(question_no = "CBCL_67", question_text="Runs away from home"),
list(question_no = "CBCL_68", question_text="Screams a lot"),
list(question_no = "CBCL_69", question_text="Secretive, keeps things to self"),
list(question_no = "CBCL_70", question_text="Sees things that aren't there"),
list(question_no = "CBCL_71", question_text="Self-conscious or easily embarrassed"),
list(question_no = "CBCL_72", question_text="Sets fires"),
list(question_no = "CBCL_73", question_text="Sexual problems"),
list(question_no = "CBCL_74", question_text="Showing off or clowning"),
list(question_no = "CBCL_75", question_text="Too shy or timid"),
list(question_no = "CBCL_76", question_text="Sleeps less than most kids"),
list(question_no = "CBCL_77", question_text="Sleeps more than most kids during day and/or night"),
list(question_no = "CBCL_78", question_text="Inattentive or easily distracted"),
list(question_no = "CBCL_79", question_text="Speech problem"),
list(question_no = "CBCL_80", question_text="Stares blankly "),
list(question_no = "CBCL_81", question_text="Steals at home"),
list(question_no = "CBCL_82", question_text="Steals outside the home"),
list(question_no = "CBCL_83", question_text="Stores up too many things he/she doesn't need"),
list(question_no = "CBCL_84", question_text="Strange behavior"),
list(question_no = "CBCL_85", question_text="Strange ideas"),
list(question_no = "CBCL_86", question_text="Stubborn, sullen, or irritable"),
list(question_no = "CBCL_87", question_text="Sudden changes in mood or feelings"),
list(question_no = "CBCL_88", question_text="Sulks a lot"),
list(question_no = "CBCL_89", question_text="Suspicious"),
list(question_no = "CBCL_90", question_text="Swearing or obscene language"),
list(question_no = "CBCL_91", question_text="Talks about killing self"),
list(question_no = "CBCL_92", question_text="Talks or walks in sleep"),
list(question_no = "CBCL_93", question_text="Talks too much"),
list(question_no = "CBCL_94", question_text="Teases a lot"),
list(question_no = "CBCL_95", question_text="Temper tantrums or hot temper"),
list(question_no = "CBCL_96", question_text="Thinks about sex too much"),
list(question_no = "CBCL_97", question_text="Threatens people"),
list(question_no = "CBCL_98", question_text="Thumb-sucking"),
list(question_no = "CBCL_99", question_text="Smokes, chews, or sniffs tobacco"),
list(question_no = "CBCL_100", question_text="Trouble sleeping "),
list(question_no = "CBCL_101", question_text="Truancy, skips school"),
list(question_no = "CBCL_102", question_text="Underactive, slow moving, or lacks energy"),
list(question_no = "CBCL_103", question_text="Unhappy, sad, or depressed"),
list(question_no = "CBCL_104", question_text="Unusually loud"),
list(question_no = "CBCL_105", question_text="Uses drugs for nonmedical purposes (don't include alcohol or tobacco)"),
list(question_no = "CBCL_106", question_text="Vandalism"),
list(question_no = "CBCL_107", question_text="Wets self during the day"),
list(question_no = "CBCL_108", question_text="Wets the bed"),
list(question_no = "CBCL_109", question_text="Whining"),
list(question_no = "CBCL_110", question_text="Wishes to be of opposite sex"),
list(question_no = "CBCL_111", question_text="Withdrawn, doesn't get inolved with others"),
list(question_no = "CBCL_112", question_text="Worries")
)
)
```

Let's create an object for the GOASSESS:

```{r}
goassess <- list(
instrument_name = "GOASSESS",
questions = list(
list(question_no = "ADD011", question_text="have trouble paying attention on activities that you were doing"),
list(question_no = "ADD012", question_text="have problems following instructions or finishing things you meant to get done"),
list(question_no = "ADD013", question_text="dislike avoid or put off school or homework"),
list(question_no = "ADD014", question_text="make careless mistakes in school work or other activities"),
list(question_no = "ADD015", question_text="have trouble making plans doing things that had a lot of different steps"),
list(question_no = "ADD016", question_text="been told that you did not seem to be listening when they spoke to you "),
list(question_no = "ADD020", question_text="have difficulty sitting still for more than a few minutes at a time"),
list(question_no = "ADD021", question_text="interrupt people abruptly"),
list(question_no = "ADD022", question_text="have trouble waiting your turn"),
list(question_no = "AGR001", question_text="afraid of being in crowds "),
list(question_no = "AGR002", question_text="afraid of being in public places"),
list(question_no = "AGR003", question_text="afraid of being in an open field"),
list(question_no = "AGR004", question_text="afraid of going over bridges or through tunnels"),
list(question_no = "AGR005", question_text="afraid of traveling by yourself"),
list(question_no = "AGR006", question_text="afraid of traveling away from home"),
list(question_no = "AGR007", question_text="afraid of traveling in a car"),
list(question_no = "AGR008", question_text="afraid of using public transportation"),
list(question_no = "CDD001", question_text="got into trouble with adults like lying or stealing"),
list(question_no = "CDD002", question_text="skip school stay out later than you were supposed to or run away from home overnight"),
list(question_no = "CDD003", question_text="set fires break into cars or destroy someone else's property on purpose"),
list(question_no = "CDD004", question_text="have been on probation"),
list(question_no = "CDD005", question_text="often bully others"),
list(question_no = "CDD006", question_text="been physically cruel to an animal or person "),
list(question_no = "CDD007", question_text="try to hurt someone with a weapon"),
list(question_no = "CDD008", question_text="threaten someone"),
list(question_no = "DEP001", question_text="you felt sad or depressed most of the time"),
list(question_no = "DEP002", question_text="cried a lot or felt like crying"),
list(question_no = "DEP004", question_text="felt grouchy irritable or in a bad mood most of the time"),
list(question_no = "DEP006", question_text="nothing was fun for you and you just weren't interested in anything"),
list(question_no = "GAD001", question_text="Have been a worrier"),
list(question_no = "GAD002", question_text="worry a lot more than most people your age"),
list(question_no = "MAN001", question_text="were much more active excited or energetic than usual"),
list(question_no = "MAN002", question_text="felt so full of energy that you couldn't stop doing things"),
list(question_no = "MAN003", question_text="felt like you hardly needed sleep"),
list(question_no = "MAN004", question_text="racing thoughts or pressured speech"),
list(question_no = "MAN005", question_text="you felt much more happy than usual when there was nothing special going on"),
list(question_no = "MAN006", question_text="you felt like you could do almost anything"),
list(question_no = "MAN007", question_text="you felt unusually grouchy cranky or irritable"),
list(question_no = "OCD001", question_text="bothered by thoughts such as concern with harming others/self"),
list(question_no = "OCD002", question_text="bothered by thoughts such as pictures of violent things"),
list(question_no = "OCD003", question_text="bothered by thoughts such as thoughts about contamination/germs/illness"),
list(question_no = "OCD004", question_text="bothered by fear that you would do/say something bad without intending to"),
list(question_no = "OCD005", question_text="bothered by thoughts such as feelings that bad things that happened were your fault"),
list(question_no = "OCD006", question_text="bothered by thoughts such as forbidden/bad thoughts"),
list(question_no = "OCD007", question_text="bothered by thoughts such as need for symmetry/exactness"),
list(question_no = "OCD008", question_text="bothered by thoughts such as religious thoughts"),
list(question_no = "OCD011", question_text="repetitive cleaning or washing (for example your hands or house)"),
list(question_no = "OCD012", question_text="repretitive counting"),
list(question_no = "OCD013", question_text="repretitive checking (for example doors locks ovens)"),
list(question_no = "OCD014", question_text="repretitive etting dressed over and over again"),
list(question_no = "OCD015", question_text="repretitive going in and out a door over and over again"),
list(question_no = "OCD016", question_text="repretitive ordering or arranging things"),
list(question_no = "OCD017", question_text="repretitive doing things at bedtime arranging the pillows sheets or other things"),
list(question_no = "OCD018", question_text="you saved up so many things that they got in the way"),
list(question_no = "OCD019", question_text="you feel the need to do things just right"),
list(question_no = "ODD001", question_text="losing temper arguing with adults or being grouchy or irritable with them"),
list(question_no = "ODD002", question_text="breaking rules at home/school"),
list(question_no = "ODD003", question_text="annoying other people on purpose or blaming other people for your mistakes"),
list(question_no = "ODD005", question_text="getting even with other people by doing things to hurt them"),
list(question_no = "ODD006", question_text="irritable or grouchy or get angry because you thought that things were unfair"),
list(question_no = "PAN001", question_text="a panic attack"),
list(question_no = "PAN003", question_text="experienced a panic attack before"),
list(question_no = "PAN004", question_text="felt losing control something terrible was going to happen"),
list(question_no = "PHB001", question_text="afraid of animals or bugs like dogs snakes or spiders"),
list(question_no = "PHB002", question_text="afraid of being in really high palces like a roof or tall building"),
list(question_no = "PHB003", question_text="afraid of water or situations involving water such as a swimming pool lake or ocean"),
list(question_no = "PHB004", question_text="afraid of storms thunder or lightening"),
list(question_no = "PHB005", question_text="afraid of doctors needles or blood"),
list(question_no = "PHB006", question_text="afraid of closed spaces like elevators or closets"),
list(question_no = "PHB007", question_text="afraid of flying or airplanes"),
list(question_no = "PHB008", question_text="afraid of any other things or situations"),
list(question_no = "PSY001", question_text="heard voices when no one was there"),
list(question_no = "PSY029", question_text="have seen visions or seen things which other people could not see"),
list(question_no = "PSY050", question_text="smelled strange odors other people could not smell"),
list(question_no = "PSY060", question_text="strange feelings in your body like things were crawling on you"),
list(question_no = "PSY070", question_text="believed in things that most other people don't believe in"),
list(question_no = "PSY071", question_text="believed people being out to get you or controlling what you do or think"),
list(question_no = "PTD009", question_text="very upset by seeing a dead body or by seeing pictures of the dead body of somebody you knew well"),
list(question_no = "SCR001", question_text="sought mental health professional about your mood or behaviors"),
list(question_no = "SCR006", question_text="currently taking medication for emotions or behaviors"),
list(question_no = "SCR007", question_text="hospitalized because of problems with mood or behaviors"),
list(question_no = "SCR008", question_text="you or others  thought you needed psychiatric help"),
list(question_no = "SEP500", question_text="worries about  attachment figures and were very upset they were away"),
list(question_no = "SEP508", question_text="wanted to stay home or not leave without your attachment figures"),
list(question_no = "SEP509", question_text="very upset when finding out will be away from attachemnt figures"),
list(question_no = "SEP510", question_text="worried about something terrible preventing you from seeing attachment figures again"),
list(question_no = "SEP511", question_text="scared to be alone or  needed  attachment figure to stay while falling asleep"),
list(question_no = "SIP003", question_text="You have felt that there are odd or unusual things going on that I can't explain."),
list(question_no = "SIP004", question_text="I think that I might be able to predict the future."),
list(question_no = "SIP005", question_text="felt that something interrupting or controlling my thoughts feelings or action"),
list(question_no = "SIP006", question_text="doing something differently because of my superstitions."),
list(question_no = "SIP007", question_text="confused at times whether something may be real or may be just part of my imagination"),
list(question_no = "SIP008", question_text="other people can read my mind or that I can read others' minds"),
list(question_no = "SIP009", question_text="people may be planning to hurt me or even may be about to hurt me."),
list(question_no = "SIP010", question_text="I have special natural or supernatural gifts beyond my talents and natural strengths."),
list(question_no = "SIP011", question_text="my mind is \"playing tricks\" on me."),
list(question_no = "SIP012", question_text="heard sounds of people talking when there is no one near me."),
list(question_no = "SIP013", question_text="hear my own thoughts being said out loud."),
list(question_no = "SIP014", question_text="concerned that I might be \"going crazy.\""),
list(question_no = "SIP027", question_text="people tell you that they can't understand you"),
list(question_no = "SIP028", question_text="people ever seem to have difficulty understanding you"),
list(question_no = "SIP032", question_text="you feel a loss of sense of self or feel disconnected from yourself or your life"),
list(question_no = "SIP033", question_text="told that you are less emotional or connected to people than you used to be"),
list(question_no = "SIP038", question_text="Within the past 6 months you are having a harder time getting your work or schoolwork done"),
list(question_no = "SIP039", question_text="Within the past 6 months you are having a harder time getting normal activities done"),
list(question_no = "SOC001", question_text="really shy with people meeting new people going to parties or doing things in front of others"),
list(question_no = "SOC002", question_text="afraid of talking on the telephone or with people your own age who you don't know very well"),
list(question_no = "SOC003", question_text="afraid when you had to do something in front of a group of people like speaking in class"),
list(question_no = "SOC004", question_text="afraid of acting, giving a talk, playing a sport or doing a musical performance or taking an important test"),
list(question_no = "SOC005", question_text="afraid being the center of attention and were concerned something embarrassing might happen"),
list(question_no = "SUI001", question_text="you have thought a lot about death or dying"),
list(question_no = "SUI002", question_text="you have thought about killing yourself")
)
)
```

We can concatenate both objects together:

```{r}
instruments_list <- list(cbcl, goassess)
```

Let's call Harmony to calculate the match:

```{r}
match = match_instruments(instruments_list)
```

Check what has come out of the match:

```{r}
names(match)

		[1] "questions"        "matches"          "query_similarity"

```
The first question is CBCL question 1.

```{r}
match$questions[[1]]


		$question_no
		[1] "CBCL_1"

		$question_intro
		NULL

		$question_text
		[1] "Acts too young for his/her age"	
```


The total number of questions are:

```{r}
length(match$questions)

		[1] 231
```


The first three entries in the match array are:

```{r}
match$matches[[1]][c(1,2,3)]

		[[1]]
		[1] 1

		[[2]]
		[1] -0.2975802

		[[3]]
		[1] 0.2499672

```

## Saving to CSV/Excel

Let's convert to a dataframe so we can export to CSV:

```{r}
df <- data.frame(match$matches[[1]])
for (x in 1:length(match$matches)) {
    df[x, ] = match$matches[[x]]
}
```

Set the row and column names to something human readable:

```{r}
colnames(df) <- lapply(match$questions, function(x) paste(x$question_no,  x$question_text , sep=" ") )
rownames(df) <- lapply(match$questions, function(x) paste(x$question_no,  x$question_text , sep=" ") )
```

Now we can save to CSV:

```{r}
write.csv(df, "matches.csv")
```

If you open the CSV generated, you can see the complete matrix. You can also open in Excel.

{{< image src="images/csv_screenshot.png" alt="CSV screenshot" title="CSV screenshot" >}}

