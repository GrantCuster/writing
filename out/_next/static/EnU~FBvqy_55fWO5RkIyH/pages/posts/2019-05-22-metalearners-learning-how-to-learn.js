(window.webpackJsonp=window.webpackJsonp||[]).push([["3878"],{PUnw:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return r}),t.d(a,"default",function(){return h});var n=t("kOwS"),s=t("qNsG"),i=(t("q1tI"),t("E/Ix")),r={title:"Meta-Learners - learning how to learn",date:"2019-05-22 15:05 -0400",preview_image:"/images/2019/05/fig1-1558038180094.png",feature:!0,published:!0,author:"Shioulin and Nisha",post_type:"Post"},o={frontMatter:r},l="wrapper";function h(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.fastforwardlabs.com/2019/04/02/a-guide-to-learning-with-limited-labeled-data.html"}),"Active learning"),"\nallows us to be smart about picking the right set of datapoints for which to create labels. Done properly, this approach results in models that are trained on less data\nperforming comparatively to models trained on much more data. In the world of meta-learning, we do not focus on label acquisition; rather, we attempt to build a\nmachine that learns quickly from a small number of training data."),Object(i.b)("p",null,"Training meta-learners is a two-step process involving a ",Object(i.b)("em",{parentName:"p"},"learner")," and a\n",Object(i.b)("em",{parentName:"p"},"trainer"),". The goal of the learner (model) is to quickly learn new tasks from a\nsmall amount of new data; hence, it is sometimes called a ",Object(i.b)("em",{parentName:"p"},"fast learner"),". A task\nhere refers to any supervised machine learning problem - e.g., predicting a class\ngiven a small number of examples. This learner is trained, by the\nmeta-learner, to be able to learn from a large number of different tasks. The\nmeta-learner accomplishes this by repeatedly showing the learner hundreds and\nthousands of different tasks. Learning then, happens at two levels. The first\nlevel focuses on quick acquisition of knowledge within each task. The second\nlevel slowly pulls and digests information across all tasks."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2019/05/fig2-1558038262452.png",alt:"Training meta-learners is a two-step process."}))),Object(i.b)("p",null,"Let's use a concrete example: our goal is to train a model to classify images\ninto four classes (cat, bear, fish. and bird), where each class only has a small\nnumber of labeled datapoints. To do so, we first define a learner whose task is to\npredict one out of two classes when given three examples of each class. We then\ndefine a meta-learner. Its job is to show many different combinations of any\ntwo classes, each with three examples, to the learner."),Object(i.b)("p",null,"In contrast to regular deep learning, where training data is one large labeled\ndataset split into batches, the training data for meta-learning is in the form of ",Object(i.b)("em",{parentName:"p"},"sets"),". First we need a set of examples, or a ",Object(i.b)("em",{parentName:"p"},"support set"),". This\nconsists of a couple of images belonging to a subset of classes. Going back to\nour example, a support set could be comprised of three images of cats and three images of\nbears. We also need to specify images that we would like to classify; they form\na ",Object(i.b)("em",{parentName:"p"},"target set"),". In our example, a target set would be a set of images of cats or\nbears. Together, the support and the target sets form a training episode. The\nmeta-learner takes many many episodes and shows them to the learner,\nepisode by episode. The learner's job is to learn to classify the images in the\ntarget set correctly, episode by episode."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2019/05/fig1-1558038180094.png",alt:"Meta-learning datasets"}))),Object(i.b)("p",null,"Papers in this field often use the notation of ",Object(i.b)("em",{parentName:"p"},"k")," and ",Object(i.b)("em",{parentName:"p"},"N"),", where ",Object(i.b)("em",{parentName:"p"},"k")," represents the\nnumber of opportunities the fast learner is given to learn, and ",Object(i.b)("em",{parentName:"p"},"N")," represents the number of\nclasses it is required to be able to classify. Our running example,\nwith ",Object(i.b)("em",{parentName:"p"},"N=2")," and ",Object(i.b)("em",{parentName:"p"},"k=3"),", illustrates a two-way three-shot (N-way, k-shot) meta-learning setting."),Object(i.b)("p",null,"Astute readers will notice that while our goal is to train a model to classify four\nclasses (cat, bear, fish, and bird), each training episode only consist of two\nclasses. This is a feature of meta-learning. The training procedure for meta-learning, first proposed by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1606.04080"}),"Oriol Vinyals in his seminal paper on matching\nnetworks")," is based on the principle that testing\nand training conditions must match. We do not show all classes to the fast learner\nat once because we expect the model to predict correctly (during inference) when shown a couple of\nimages from a small number of classes. In addition, not all\nclasses are used as training data. In our example, we might just use three classes,\nand expect the model to be able to make predictions accurately about the final\nclass. Meta-learners can do that because they are trained to be able to\ngeneralize to other datasets. Each time the fast learner is shown an episode of\ndata, it is exposed to a small subset of classes. The meta-learner cycles\nthrough many, many episodes, each exposing the fast learner to a different subset\nof classes. As a result, the fast learner not only learns to quickly classify\neach subset of classes, it also extracts the commonality and differences across\nall the classes."),Object(i.b)("h2",null,"Similarity between classes"),Object(i.b)("p",null,"If you were given a set of example images and were asked to classify a new\nimage, the natural thing to do would be to compare the new image to the examples, find\nthe one that is the most similar, and use its class as the new image's\nlabel. This is the idea behind similarity-based approaches. To classify a new\n(target) image based on the examples available (the support set), first find its\nclosest image from the examples, then use that image's label as a prediction. In\nmatching networks, images are represented by their embeddings, and distance\nbetween images is simply cosine distance between image embeddings. Embeddings,\nwhich we discussed in the context of languages in our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cloudera.com/products/fast-forward-labs-research/fast-forward-labs-research-reports.html"}),'"Summarization" and "Semantic\nRecommendations"\nreports'),",\nare rich numerical representations of text that a computer can understand. For\nimages, embeddings can be thought of as a group of features (lines, edges) that\nrichly represent images. The goal of the matching networks approach, then, is to\nconverge to embeddings that will result in the following: target image being\nclosest to the support set image with the correct label."),Object(i.b)("p",null,"When an image in the target set belongs to a new unseen class, the matching\nnetwork model treats it like any other image. It links the new image to the\nclosest image in the support set, and uses that image's label as a\nprediction. The matching network works with new and unseen classes!"),Object(i.b)("h2",null,"Internal representation"),Object(i.b)("p",null,"In essence, the previous approach takes advantage of a ",Object(i.b)("em",{parentName:"p"},"distance metric based on\nembeddings")," to compare new images to example images in the support set. The\nmodel is trained such that we can correctly, in a probabilistic sense, link new\nimages to one of the example images. Post-training, we end up with a model\ncapable of generating representation of images (through embeddings) that\ncaptures both the difference and commonality between images. This suggests\nanother approach to teaching machines to learn quickly with little training\ndata. We start by finding a internal representation that can be adjusted easily\nwith new tasks; the model can then rapidly adapt to new tasks using only a few\ndatapoints."),Object(i.b)("p",null,'In the context of deep learning, internal representation typically manifests\nitself as a set of parameters for the neural network. A "good" internal\nrepresentation is one that is broadly suitable for many tasks. Small tweaks to\nthis representation will produce a model that works well for new tasks. These\ntweaks are usually performed under the framework of ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.fastforwardlabs.com/2018/09/17/deep-learning-is-easy-an-introduction-to-transfer-learning.html"}),"transfer\nlearning"),". Training\nthe network using a small number of new datapoints while only adjusting weights at the\nfinal layers is an example of a feature extraction using transfer\nlearning. Larger tweaks, where the entire model (or parameters) are re-trained\nusing new datapoints is also possible, and is known as fine-tuning."),Object(i.b)("p",null,"But where does this magical internal representation come from? In transfer\nlearning, it is a pre-trained neural network from another task which has ample\ntraining data. Once initialized, the new, small dataset is used to re-train the\nnetwork either fully or partially (just the final layers). An alternative way to\narrive at this internal representation is through an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1703.03400"}),"initial set of network\nparameters"),". Once the network is initialized\nwith the right parameters, it becomes quick and easy to adjust using a small\nnumber of new data. This implies that the initial set of network parameters\nshould be sensitive to changes in the new tasks; small changes in the\nparameters will result in large improvements on the loss function of any task."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2019/05/sensitivity-1558127068935.png",alt:"The optimal initial set of network parameters is sensitive to changes in new tasks."}))),Object(i.b)("p",null,"The general idea behind this approach is the following. We start with a model\nand its ",Object(i.b)("em",{parentName:"p"},"initial set of parameters"),". We train this model on a new task using\ndata from an episode. During training, the initial set of parameters gets\nupdated; it becomes an ",Object(i.b)("em",{parentName:"p"},"updated set of parameters"),". The goal is to find an\n",Object(i.b)("em",{parentName:"p"},"initial set of parameters")," such that the loss, when measured on the ",Object(i.b)("em",{parentName:"p"},"new task,\nusing the new set of parameters"),", is small."),Object(i.b)("p",null,"This approach is inspired by transfer learning, but while transfer learning\nworks for moderately sized datasets, it often becomes less effective in cases\nwhere datasets are too small or are too different from the original dataset used\nto create the pre-trained network. Optimization approaches in meta learning -\noptimizing for a set of initial parameters, or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://openreview.net/pdf?id=rJY0-Kcll"}),"optimizing for the model to\nconverge to a good solution rapidly on each\ntask")," - attempt to come up with a\nsystematic way to learn a common initialization that would serve as a good\nstarting point for the possibly diverse tasks at hand."),Object(i.b)("h2",null,"The state of meta learning"),Object(i.b)("p",null,'Meta-learning is promising because it gets to the heart of the problem of\nlearning with limited labeled data. Meta-learning, though, requires a different\ndata collection paradigm. In traditional machine learning, we focus on\ncollecting many examples of a class. In meta-learning, the focus changes to\ncollecting many tasks. Indirectly, this implies the need to collect data for\nmany diverse classes. In our example, we used four classes (cat, bear, fish, and\nbird) and defined a task to be "predicting one out of two classes when given three\nexamples each". This gives a maximum of six (four choose two) different tasks and is\nobviously insufficient for much learning to happen. Thus, in meta-learning, even\nthough we do not need many examples of cats, we do need examples of many types\nof animals. Further, during inference, support and target sets typically need to\nbe constructed as well. It is a different type of data requirement (or\nconstraint) and can be expensive for certain use cases. Even within research,\nthe datasets are limited to Omniglot and miniImagenet. The Omniglot dataset has\na total of 1623 handwritten characters, each with 20 examples. The miniImageNet\ndataset consists of 100 classes from the original ImageNet dataset, each with\n600 examples.'),Object(i.b)("p",null,"Meta-learning is an area that is quickly evolving, but it is not dominated by a\nsingle algorithm. The most promising class of algorithms seems to be based on\noptimization approaches; they are inspired by transfer learning and might see\nrelatively quicker adoption. We expect meta-learning to become more important as\nthe underlying algorithms become mature, particularly for use cases such as\nproduct classification or rare disease classification, where data exhibits many\nclasses, but each class merely has a few examples."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Acknowledgement: We'd like to thank Oriol Vinyals for his insights.")))}h.isMDXComponent=!0},"Y+c/":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2019-05-22-metalearners-learning-how-to-learn",function(){var e=t("PUnw");return{page:e.default||e}}])}},[["Y+c/","5d41","9da1"]]]);