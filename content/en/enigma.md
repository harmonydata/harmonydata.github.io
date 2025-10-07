---
title: "ENIGMA Consortium"
url: /enigma/
---


## Case Study: ENIGMA Consortium

The [ENIGMA Consortium](https://enigma.ini.usc.edu/) (Enhancing NeuroImaging Genetics through Meta Analysis) is a global research initiative involving over thousand researchers across 43 nations and 50 specialized working groups who focus on brain studies. The [Parkinson’s Disease working group](https://enigma.ini.usc.edu/ongoing/enigma-parkinsons/) (ENIGMA-PD) is currently running a project which investigates brain morphological correlates of neuropsychiatric symptoms in Parkinson’s patients. 

Julia-Katharina Pfarr (McGill, Montreal) and Eva van Heese (Amsterdam UMC) are working with Harmony and other large language models to harmonise mental health questionnaire items in order to identify common dimensions of different psychiatric constructs. The challenge for this retrospective data pooling is that the data in the consortium is split across multiple sites which administered different instruments.

{{< image src="/images/questionnaires_overview.jpg" alt="Available mental-health questionnaires" >}}

*Figure 1: Available mental health questionnaires in the ENIGMA-PD consortium.*

For the brain imaging analysis this means that a simple sumscore transformation between the scales is not feasible since not all questionnaires of one construct measure the same underlying latent symptoms, hence the approach of harmonisation on a dimensional level has been chosen.

{{< image src="/images/workflow_overview.jpg" alt="Workflow overview" >}}

*Figure 2: Harmonisation workflow overivew (example: Anxiety).*

The researchers evaluated a number of off-the-shelf generalist and domain-specific large language models for the purposes of harmonisation and found that our fine-tuned mental health model outperformed a number of generalist models and even some mental health specific models such as MentalRoberta.

{{< image src="/images/similarity_comparison_anxiety_heatmap.png" alt="similarity comparison anxiety heatmap" >}}

*Figure 3: Semantic similarity scores for some example question pairs.*

The researchers are sharing their code and progress on [GitHub](https://github.com/ENIGMA-infra/psych-in-harmony). This project is a collaborative effort and all members of the ENIGMA-PD consortium are involved. Julia-Katharina Pfarr and Eva van Heese are supervised by Ysbrand van der Werf, Odile van den Heuvel, and Jean-Baptiste Poline.
