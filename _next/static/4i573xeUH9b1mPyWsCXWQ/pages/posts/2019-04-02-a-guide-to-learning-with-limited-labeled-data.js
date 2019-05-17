(window.webpackJsonp=window.webpackJsonp||[]).push([["4987"],{"4hKx":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2019-04-02-a-guide-to-learning-with-limited-labeled-data",function(){var e=a("awgM");return{page:e.default||e}}])},awgM:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return l}),a.d(t,"default",function(){return c});var n=a("kOwS"),i=a("qNsG"),o=(a("q1tI"),a("E/Ix")),l={title:"A Guide to Learning with Limited Labeled Data",date:"2019-04-02 14:04 -0400",preview_image:"/images/2019/03/fig_15-1553784931001.png",feature:!0,published:!0,post_type:"Featured post",author:"Shioulin and Nisha"},r={frontMatter:l},s="wrapper";function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(s,Object(n.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are excited to release ",Object(o.b)("em",{parentName:"p"},"Learning with Limited Labeled Data"),", the latest report and prototype from Cloudera Fast Forward Labs."),Object(o.b)("p",null,"Being able to learn with limited labeled data relaxes the stringent labeled data requirement for supervised machine learning. Our report focuses on active learning, a technique that relies on collaboration between machines and humans to label smartly."),Object(o.b)("p",null,"Active learning makes it possible to build applications using a small set of labeled data, and enables enterprises to leverage their large pools of unlabeled data. In this blog post, we explore how active learning works. (For a higher level introduction, please see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.fastforwardlabs.com/2019/03/20/learning-with-limited-labeled-data.html"}),"our previous blogpost"),"."),Object(o.b)("h2",null,"The active learning loop"),Object(o.b)("p",null,"Active learning takes advantage of the collaboration between humans and machines to smartly select a small subset of datapoints for which to obtain labels. It is an iterative process, and ideally access is available to some initial labels to start. These initial labels allow a human to build a baseline machine learning model, and use it to predict outputs for all the unlabeled datapoints. The model then looks through all its predictions, flags the one with which it has the most difficulty, and requests a label for it. A human steps in to provide the label, and the newly labeled data is combined with the initial labeled data to improve the model. Model performance is recorded, and the process repeats."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2019/03/fig_15-1553784931001.png",alt:null}))),Object(o.b)("h5",null,Object(o.b)("em",{parentName:"h5"},"The active learning loop")),Object(o.b)("h2",null,"How to select datapoints"),Object(o.b)("p",null,"At the heart of active learning is a machine (",Object(o.b)("em",{parentName:"p"},"learner"),") that requests labels\nfor datapoints that it finds particularly hard to predict. The learner follows a\n",Object(o.b)("em",{parentName:"p"},"strategy"),", and uses it to identify these datapoints. To evaluate the\neffectiveness of the strategy, a simple approach for choosing datapoints needs\nto be defined. A good starting point is to remove the intelligence of the\nlearner; the datapoints are chosen independently of what the learner thinks."),Object(o.b)("h3",null,"Random sampling"),Object(o.b)("p",null,"When we take the learner out of the picture, what is left is a pool of unlabeled\ndata and some labeled data from which a model can be built. To improve the\nmodel, the only reasonable option is to randomly start labeling more data. This\nstrategy is known as ",Object(o.b)("em",{parentName:"p"},"random sampling"),", and selects unlabeled datapoints from\nthe pool according to no particular criteria. You can think of it as being akin\nto picking a card from the top of a shuffled deck, then reshuffling the deck without the\npreviously chosen card and repeating the action. Because the learner does not help with the\nselection process, random sampling is also known as ",Object(o.b)("em",{parentName:"p"},"passive learning"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2019/03/fig_19-1553784863589.png",alt:null}))),Object(o.b)("h5",null,Object(o.b)("em",{parentName:"h5"},"Random sampling is like picking the top card from a shuffled deck")),Object(o.b)("h3",null,"Uncertainty sampling"),Object(o.b)("p",null,"A slightly more complex strategy is to select datapoints that the model is\nuncertain about. In ",Object(o.b)("em",{parentName:"p"},"uncertainty sampling"),", the learner looks at all unlabeled\ndatapoints and surfaces the ones about which it is uncertain. Labels are then\nprovided by a human, and fed back into the model to refine it."),Object(o.b)("p",null,"But how do we quantify uncertainty? One way is to use the ",Object(o.b)("em",{parentName:"p"},"distance between the\ndatapoint and the decision boundary"),". Datapoints far away from the decision\nboundary are safe from changes in the decision boundary. This implies that the\nmodel has high certainty in these classifications.  Datapoints close to the\nboundary, however, can easily be affected by small changes in the boundary. The\nmodel (learner) is not certain about them; a slight shift in the decision\nboundary will cause them to be classified differently. The ",Object(o.b)("em",{parentName:"p"},"margin sampling")," strategy\ntherefore dictates that we surface the datapoint closest to the boundary and\nobtain a label for it."),Object(o.b)("p",null,"There are many other selection strategies that can be used with active\nlearning. Our report explores some of them in detail."),Object(o.b)("h2",null,"When to stop"),Object(o.b)("p",null,"Because active learning is an iterative process, when should we stop? Each label comes with a cost of acquisition - the amount of money and time it takes to acquire the label. With this cost in mind, the stopping criteria can either be static or dynamic. A static criteria sets a budget limit or performance target in the beginning. A dynamic criteria looks at the incremental gain in performance over each round of active learning and stops when it is no longer worthwhile to acquire more labels (the incremental performance plateaus)."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2019/03/fig_9-1553784742213.png",alt:null}))),Object(o.b)("h5",null,Object(o.b)("em",{parentName:"h5"},"Stopping criteria for active learning")),Object(o.b)("h2",null,"Does it work for deep learning?"),Object(o.b)("p",null,"Deep learning introduces a couple of wrinkles that make direct application of\nactive learning ineffective. The most obvious issue is that adding a single\nlabeled datapoint does not have much impact on deep learning models, which train\non batches of data. In addition, because the models need to be retrained until\nconvergence after each point is added, this can become an expensive undertaking --\nespecially when viewed in terms of the performance improvement vs. acquisition\ncost (time and money) trade-off. One straightforward solution is to select a\nvery large subset of datapoints to label. But depending on the type of\nheuristics used, this could result in correlated datapoints. Obtaining labels\nfor these datapoints is not ideal -- datapoints that are independent and diverse\nare much more effective at capturing the relationship between input and output."),Object(o.b)("p",null,"The second problem is that existing criteria used to help select datapoints do\nnot translate to deep learning easily. Some require computation that does not\nscale to models with high-dimensional parameters. These approaches are rendered\nimpossible with deep learning. For the criteria that are computationally viable,\nreinterpretation under the light of deep learning is necessary."),Object(o.b)("p",null,"In our report, we take the idea of uncertainty and examine it in the context of\ndeep learning."),Object(o.b)("h2",null,"Practical considerations"),Object(o.b)("p",null,"Active learning sounds tempting - with this approach, it is possible to build\napplications previously constrained by lack of labeled data. But active learning\nis not a silver bullet."),Object(o.b)("h3",null,"Choosing a learner and a strategy"),Object(o.b)("p",null,"Active learning relies on a small subset of labeled data at the beginning to\nchoose both the learner and strategy. The learner is used to make predictions\nfor all the unlabeled data and the strategy selects the datapoints that are\ndifficult. Choosing a learner (or model) for any machine learning problem is\ndifficult, but it is made even more difficult with active learning for two\nreasons. First, the choice of a learner needs to be made very early on when we\nonly have a small subset of labeled data. Second, the learner is not just used\nto make predictions, it is used in conjunction with the strategy to surface\ndatapoints that will help refine itself. This tight feedback loop amplifies the\neffect of a wrong learner."),Object(o.b)("p",null,"In addition, some selection strategies result in a labeled dataset that is\nbiased. Margin sampling, for example, surfaces datapoints right around the\ndecision boundary to be labeled. Most datapoints far from the boundary might not\neven be used in building the model, resulting in a labeled dataset that may not be\nrepresentative of the entire pool of unlabeled data."),Object(o.b)("h3",null,"Human biases"),Object(o.b)("p",null,"Because a human needs to step in to provide labels, this restricts the type of\nuse cases to which active learning can be applied. Humans can label images and\nannotate text, but we cannot tell if a financial transaction is fraudulent just\nby looking at the data."),Object(o.b)("p",null,"In addition, the data that requires human labeling is by definition more\ndifficult. Under these circumstances, it is easy for a human to inject his own\nbias and judgement when making labeling decisions."),Object(o.b)("h3",null,"A pause between iterations"),Object(o.b)("p",null,"When applying active learning in real life, surfaced datapoints will need to be\nsent to a human for labeling. The next round of active learning cannot proceed\nuntil the newly labeled datapoints are ready."),Object(o.b)("p",null,"The length of time between each active learning iteration varies depending on\nwho provides the label. In a research scenario, a data scientist who builds the\nmodel and also creates labels will be able to iterate through each round of\nactive learning quickly. In a production scenario, an outsourced labeling team\nwill need more time for data exchange and label (knowledge) transfer to occur."),Object(o.b)("p",null,"For active learning to be successful, the pause between iterations should be as\nsmall as practically possible. In addition to considering different types of\nlabeling workforce, an efficient pipeline needs to be set up. This pipeline\nshould include a platform for exchanging unlabeled datapoints, a user interface\nfor creating labels, and a platform for transferring the labeled datapoints."),Object(o.b)("h2",null,"Active Learner"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2019/04/clip0-1554230510947.gif",alt:"A GIF showing the Active Learner prototype"}))),Object(o.b)("h5",null,"We built the ",Object(o.b)("a",Object(n.a)({parentName:"h5"},{href:"https://activelearner.fastforwardlabs.com/"}),"Active Learner prototype")," to accompany this report."),Object(o.b)("p",null,"Every Cloudera Fast Forward Labs report comes with a prototype. We don't just\nwrite about a new exciting capability in machine learning; we also experiment with\nit to understand what it can and cannot do."),Object(o.b)("p",null,"The prototype for our report on Learning with Limited Labeled Data is called Active\nLearner. It is a tool that sheds light on and provides intuition for how and why\nactive learning works. The prototype allows one to visualize the process of\nactive learning over different types of datasets and selection strategies. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://activelearner.fastforwardlabs.com/"}),"We hope you\nenjoy exploring it"),"."),Object(o.b)("h2",null,"Conclusion"),Object(o.b)("p",null,"Active learning makes it possible to build machine learning models with a small\nset of labeled data. It offers one way for enterprises to leverage their large\npools of unlabeled data for building new products, but it is not the only\nsolution to learning with limited labeled data."),Object(o.b)("p",null,"Our report goes into much more detail (including strategies specific to deep\nlearning, resources and recommendations for setting up an active learning\nproduction environment, and technical and ethical implications). Join our\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cloudera.com/about/events/webinars/learning_with_limited_labeled_data.html?utm_medium=organicsocial&utm_source=blog&utm_campaign=ml&src=organicsocial&cid=70134000001YifA&utm_content=FF10_Blog_AMER_Webinar_2019-04-03"}),"webinar")," to learn more, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://activelearner.fastforwardlabs.com/"}),"explore the\nprototype")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cloudera.com/products/fast-forward-labs-research.html"}),"get in\ntouch")," if you\nare interested in accessing the full report (which is available by subscription\nto our research and advising services).\n"))}c.isMDXComponent=!0}},[["4hKx","5d41","9da1"]]]);