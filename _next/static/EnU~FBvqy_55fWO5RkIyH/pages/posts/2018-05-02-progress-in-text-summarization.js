(window.webpackJsonp=window.webpackJsonp||[]).push([["f49e"],{lHv6:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2018-05-02-progress-in-text-summarization",function(){var e=a("p0is");return{page:e.default||e}}])},p0is:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"default",function(){return m});var n=a("kOwS"),r=a("qNsG"),o=(a("q1tI"),a("E/Ix")),i={title:"Progress in text summarization",date:"2018-05-02 12:10 -0400",preview_image:"/images/editor_uploads/2018-10-19-160814-pointer_gen.png",feature:"false",published:"true",author:"Mike",author_link:"https://twitter.com/mikepqr",post_type:"newsletter"},s={frontMatter:i},c="wrapper";function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We published our report on text summarization in 2016. Since then, we've\nenjoyed helping our clients make use of techniques such as topic modeling,\ndocument embedding, and recurrent neural networks to deal with text that ranges\nin scope from product reviews to insurance documents to call transcripts to news. "),Object(o.b)("p",null,"Our goal when we do research is to address capabilities and technologies that\nwe expect to become production-ready in one to two years. That focus on\nfast-moving areas means that new algorithmic ideas sometimes come along that\nallow our clients to extend or improve upon the work in our reports. Prompted in\npart by Yue Dong's March 2018 ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://arxiv.org/abs/1804.04589"}),"Survey on Neural Network-Based Summarization\nMethods")),", we thought we'd take some time to\ndescribe the developments in text summarization since our report was published. "),Object(o.b)("p",null,"Put simply: there's bad news and there's good news."),Object(o.b)("p",null,"The bad news is that we still don't think ",Object(o.b)("em",{parentName:"p"},"abstractive")," summarization is ready\nfor production prime time. ",Object(o.b)("em",{parentName:"p"},"Extractive")," summarization involves selecting a few\npassages from a document or corpus and stitching them together to form a\nsummary. As we discuss in our report, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://blog.fastforwardlabs.com/2016/04/11/new-tools-to-summarize-text.html"}),"this is a tough\nproblem"),".\nBut ",Object(o.b)("em",{parentName:"p"},"abstractive")," summarization is harder still. Not only must you identify the\nsalient ideas, but you must also generate new text that expresses those ideas\nconcisely."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2018-10-19-160814-pointer_gen.png",alt:null}))),Object(o.b)("h5",null,"Pointer network for summarization. Credit: ",Object(o.b)("a",Object(n.a)({parentName:"h5"},{href:"http://www.abigailsee.com/2017/04/16/taming-rnns-for-better-summarization.html"}),"Abigail See and collaborators")),Object(o.b)("p",null,"There has been considerable progress along these lines. The current state of\nthe art is 2017's attention-based pointer networks, e.g. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.abigailsee.com/2017/04/16/taming-rnns-for-better-summarization.html"}),"work from Abigail See\nand collaborators at Stanford and Google\nBrain"),"\nand ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://einstein.ai/research/your-tldr-by-an-ai-a-deep-reinforced-model-for-abstractive-summarization"}),"Salesforce Research's work lead by Romain\nPaulus"),"."),Object(o.b)("p",null,"However, those authors would concede what ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1803.07038"}),"Noah Weber and collaborators showed\nlast month"),': in practice, these abstractive\nnetworks work by "mostly, if not entirely, copying over phrases, sentences, and\nsometimes multiple consecutive sentences from an input paragraph, effectively\nperforming extractive summarization." So, for now at least, you get the training\ndata requirements and engineering complexity of cutting-edge deep learning\nwithout the practical performance increase. Which is not to say academic work\non abstractive summarization is at a dead end; we look forward to reporting on the\ninevitable breakthroughs in a year or two.'),Object(o.b)("p",null,"In the meantime, we promised good news!"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2018-10-19-160922-b11i8uw.png",alt:null}))),Object(o.b)("h5",null,"Extractive summarization with reinforcement learning. Credit: ",Object(o.b)("a",Object(n.a)({parentName:"h5"},{href:"https://arxiv.org/abs/1802.08636"}),"Shashi Narayan and collaborators")),Object(o.b)("p",null,"The good news is a couple of really nice papers that make concrete improvements\nto ",Object(o.b)("em",{parentName:"p"},"extractive")," summarization. Both are from the same Edinburgh group. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1704.04530"}),"Neural\nExtractive Summarization with Side\nInformation")," (2017) takes advantage of a very\nnatural heuristic that was used in classical summarization algorithms: titles\nand image captions are particularly strong signals of the important ideas in a\ndocument. This heuristic is incorporated into an attention-based\nencoder-decoder network, and they get ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://kinloch.inf.ed.ac.uk/sidenet.html"}),"really nice extractive\nresults"),". If your source documents\nhave that kind of structure, this approach is worth investigating. More\nambitiously, in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1802.08636"}),"Ranking Sentences for Extractive Summarization with\nReinforcement Learning")," (2018) the same group\nrecasts extractive summarization as a reinforcement learning task. Unusually,\nthey learn to ",Object(o.b)("em",{parentName:"p"},"rank")," sentences in the source document rather than score them in isolation, which they argue results in more coherent (and less verbose) overall\nsummaries."),Object(o.b)("p",null,"So, two years after our report, text summarization remains not only a useful\nbusiness capability, but a very vibrant area of research.\n"))}m.isMDXComponent=!0}},[["lHv6","5d41","9da1"]]]);