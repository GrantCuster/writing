(window.webpackJsonp=window.webpackJsonp||[]).push([["ec18"],{"4FPl":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return o}),a.d(t,"default",function(){return p});var n=a("kOwS"),i=a("qNsG"),s=(a("q1tI"),a("E/Ix")),o={title:"Multi-Task Learning",date:"2018-02-28 12:08",preview_image:"/images/2018/02/MTLNet-1517931635465.png",feature:!1,published:!0,post_type:"Newsletter"},r={frontMatter:o},l="wrapper";function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)(l,Object(n.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The common approach in machine learning is to train and optimize one task at a time. In contrast, multitask learning (MTL) trains related tasks in parallel, using a shared representation. One advantage of MTL is improved generalization - using information regarding related tasks prevents a model from being overly focused on a single task, while it is also learning to produce better results."),Object(s.b)("p",null,"MTL is an approach, and is not restricted to any particular algorithm. A straightforward application of MTL in a feed-forward network means that the model is trained using multiple tasks. Instead of having one output node to predict a single task, there are multiple output nodes (one for each task). Once trained, the network is used to predict outcome of the task we are most interested in. The prediction for other tasks are ignored but the shared representation (weights and the network architecture) is derived from all tasks used in training. In a decision tree, an MTL approach implies that multiple tasks are taken into consideration when deciding on a split that results in a maximum information gain.                                 "),Object(s.b)("p",null,Object(s.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2018/02/MTLNet-1517931635465.png",alt:null}))),Object(s.b)("h5",null,"Multitask Network with four tasks. Image credit: ",Object(s.b)("a",Object(n.a)({parentName:"h5"},{href:"https://pdfs.semanticscholar.org/3980/c955f95092e527c580f9cfe066a17f752c08.pdf"}),"Algorithms and Applications for Multitask Learning")),Object(s.b)("p",null,"Where do we get the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://pdfs.semanticscholar.org/3980/c955f95092e527c580f9cfe066a17f752c08.pdf"}),"training signals for the multiple related tasks (extra tasks)"),"? One possibility is to use future signals to predict the present. In offline systems, we can use future measurements (features that become available after the predictions must be made) as extra tasks during training. For example, results for lab tests administered after hospital admissions can be used as extra tasks when building a model to predict high risk patients ",Object(s.b)("em",{parentName:"p"},"at time of admissions"),". At deployment, predictions for the test results are ignored; test results are only used for training purposes. "),Object(s.b)("p",null,"Another possibility is to intentionally collect additional labels for each training pattern, and use those as extra tasks. In image recognition, this can be easily  accomplished. Instead of annotating an object of interest in an image, a human would also annotate several other objects surrounding it. When we choose to annotate objects that make up a small part of the image (lane markings on roads, for example) and use those as extra tasks, we force the model to focus attention on patterns that it might otherwise ignore."),Object(s.b)("p",null,"Are you (thinking about) using MTL in your organization? We would love to hear about use cases and applications!\n"))}p.isMDXComponent=!0},BLE1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2018-02-28-multitask-learning",function(){var e=a("4FPl");return{page:e.default||e}}])}},[["BLE1","5d41","9da1"]]]);