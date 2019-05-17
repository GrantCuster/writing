(window.webpackJsonp=window.webpackJsonp||[]).push([["ffcb"],{akIw:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2018-09-28-snorkel-rapid-training-data-creation-with-weak-supervision",function(){var e=a("vuvq");return{page:e.default||e}}])},vuvq:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return o}),a.d(t,"default",function(){return c});var n=a("kOwS"),i=a("qNsG"),r=(a("q1tI"),a("E/Ix")),o={title:"Snorkel: Rapid Training Data Creation with Weak Supervision",date:"2018-09-28 17:10 -0400",preview_image:"/images/editor_uploads/2018-09-05-182818-snorkel_workflow.png",feature:!1,published:!0,author:"Nisha",author_link:"https://twitter.com/NishaMuktewar",post_type:"newsletter"},s={frontMatter:o},l="wrapper";function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Machine learning (and more specifically, deep learning) techniques are recognized for their ability to obtain high accuracy for\na variety of classification problems. Deep learning models are more complex than most traditional models and often have\nthousands of parameters and commensurately require more labeled training data. Obtaining this data can be an expensive and time-consuming process, and often requires domain experts to help with the labeling process. Many areas of machine learning that are motivated by this bottleneck could be broadly categorized into four areas: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dl.acm.org/citation.cfm?id=3019233"}),"active learning"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dl.acm.org/citation.cfm?id=1841234"}),"semi-supervised learning"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dawn.cs.stanford.edu/2017/07/16/weak-supervision/"}),"weak supervision")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ieeexplore.ieee.org/document/5288526/"}),"transfer learning"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1711.10160"}),"Snorkel")," belongs to the ",Object(r.b)("em",{parentName:"p"},"weak supervision")," class and is effective for tasks like natural language processing. The basic idea is to allow users to provide supervision at a higher level than case-by-case labeling, and then to use various statistical techniques to deal with the noisier labels that are obtained. Working with domain experts, the Snorkel team has found that this type of supervision is easier and faster to provide. And surprisingly, by getting large volumes of lower-quality supervision in this way, one can train higher-quality models at a fraction of the time and cost. "),Object(r.b)("p",null,"Snorkel is a system built around the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://papers.nips.cc/paper/6523-data-programming-creating-large-training-sets-quickly"}),"data programming")," paradigm for rapidly creating, modeling, and managing training data. It lets one use weak supervision sources like heuristics, external knowledge bases, crowdsourced labels, and more. These are called weak supervision sources because they may be limited in accuracy and coverage. All of these get combined in a principled manner to produce a set of\nprobability-weighted labels. The end model is then trained on the generated labels."),Object(r.b)("h5",null,"Snorkel workflow"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2018-09-05-182818-snorkel_workflow.png",alt:null}))),Object(r.b)("p",null,"Snorkel's workflow has three main stages:\n1. ",Object(r.b)("strong",{parentName:"p"},"Writing Labeling Functions"),": Instead of hand-labeling large quantities of training data, users write labeling functions\nwhich capture patterns-based heuristics, connect with external knowledge bases (distant supervision), and so on. A labeling\nfunction is a Python method which, given an input, can either output a label or abstain. For instance, we can write a labeling function that checks if the word “causes” appears between the chemical and disease mentions. If it does, it outputs ",Object(r.b)("em",{parentName:"p"},"True")," if the chemical mention is first and ",Object(r.b)("em",{parentName:"p"},"False")," if the disease mention is first. If “causes” does not appear, it outputs ",Object(r.b)("em",{parentName:"p"},"None"),", indicating abstention. In addition, Snorkel includes a number of declarative labeling functions that can be used out of the box."),Object(r.b)("h5",null,"Example labeling function"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2018-09-05-182951-labeling_function.png",alt:null})),"\n2. ",Object(r.b)("strong",{parentName:"p"},"Modeling Accuracies and Correlations"),": Next, Snorkel automatically learns a generative model over the labeling functions, which allows it to estimate their accuracies and correlations. This step uses no ground-truth data, learning instead from the agreements and disagreements of the labeling functions.    "),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Training a Discriminative Model"),": The output of Snorkel is a set of probabilistic labels that can be used to train a\nwide variety of state-of-the-art machine learning models, such as popular deep learning models. While the generative model is\nessentially a re-weighted combination of the user-provided labeling functions — which tend to be precise but low-coverage - discriminative models can retain this precision while learning to generalize beyond the labeling functions, increasing\ncoverage and robustness on unseen data.   ")),Object(r.b)("p",null,"One thing to note is that it is quite possible for a user to write labeling functions that are statistically dependent (i.e., correlated). Modeling such dependencies is crucial because it affects the estimates of true labels. To help with this, Snorkel automatically selects which dependencies to model using an estimator that relies on a hyper-parameter - epsilon. With large values of epsilon, no correlations are included, and as we reduce the value progressively more correlations are added, starting with the strongest."),Object(r.b)("p",null,"Snorkel is currently being used on text extraction applications for medical records at the Deparment of Veterans Affairs, to mine scientific literature for adverse drug reactions in collaboration with the Federal Drug Administration, and to comb through everything from surgical reports to after-action combat reports for valuable structured data. More details about the project can be found ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://hazyresearch.github.io/snorkel/"}),"here"),".\n"))}c.isMDXComponent=!0}},[["akIw","5d41","9da1"]]]);