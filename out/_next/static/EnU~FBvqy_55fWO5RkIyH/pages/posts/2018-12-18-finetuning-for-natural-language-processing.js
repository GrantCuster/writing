(window.webpackJsonp=window.webpackJsonp||[]).push([["ba3c"],{UgSh:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2018-12-18-finetuning-for-natural-language-processing",function(){var e=a("d94F");return{page:e.default||e}}])},d94F:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"default",function(){return p});var n=a("kOwS"),r=a("qNsG"),o=(a("q1tI"),a("E/Ix")),i={title:"Fine-tuning for Natural Language Processing",date:"2018-12-28 14:01 -0500",preview_image:"/images/2018/12/Screen_Shot_2018_12_07_at_12_03_44_PM-1544202300577.png",feature:!1,published:!0,author:"Shioulin",author_link:"https://twitter.com/shioulin_sam",post_type:"newsletter"},s={frontMatter:i},d="wrapper";function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"2018 was a fun and exciting year for natural language processing. A series of papers put forth powerful new ideas that improve the way machines understand and work with language. They challenge the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://ruder.io/nlp-imagenet/"}),"standard way of using pretrained word embeddings like word2vec")," to initialize the first layer of a neural net, while the rest is trained on data of a particular task. Instead, these papers propose better embeddings (feature-based approach) and pre-trained models that can be fine-tuned for a supervised downstream task (fine-tuning approach)."),Object(o.b)("p",null,"Under feature-based approaches, where fixed features, in the form of vectors, are extracted from the pre-trained model, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1802.05365"}),"ELMo")," provides contextualized embeddings for a word. For example, the word ",Object(o.b)("em",{parentName:"p"},"bank"),' in "I want to deposit money into a ',Object(o.b)("em",{parentName:"p"},"bank"),'" and "I want to run by the river ',Object(o.b)("em",{parentName:"p"},"bank"),'" means different things. ELMo allows the word "bank" to have multiple embeddings depending on the context in which it is used. Under fine-tuning approaches, ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1810.04805"}),"BERT"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1801.06146"}),"ULM-FiT")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"}),"OpenAI GPT (pdf)")," propose various model architectures that are pre-trained on a language model objective (i.e., predict the next word). Among these models, BERT stands out because it provides representations that are jointly conditioned on both left and right context in all layers. In other words, it is deeply bidirectional, as opposed to ELMo (shallow bidirectional) and OpenAI GPT (one direction, left to right)."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2018/12/Screen_Shot_2018_12_07_at_12_03_44_PM-1544202300577.png",alt:"BERT is bidirectional in all layers and uses a bidirectional Transformer. OpenAI GPT uses a left-to-right Transformer. ELMo concatenates two independently trained left-to-right and right-to-left LSTMs. [Image credit](https://arxiv.org/abs/1810.04805)"}))),Object(o.b)("p",null,"BERT's architecture is based on a bidirectional ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1706.03762"}),"Transformer encoder"),". (We will not go into details of the Tranformer, but the paper is worth a read!) BERT's input representation is able to represent a single text sentence or a pair of text sentences (the reason will become apparent later on). Each token, or loosely, each word is represented by the summation of its word embedding, a learned positional embedding, and a learned segment embedding. The word embedding used in the paper is WordPiece embeddings. The positional embedding captures the order of the word in the sequence (or sentence). The learned segment embedding associates certain tokens with a particular sentence since the input can be a pair of text sentences. "),Object(o.b)("p",null,'BERT is not trained using a traditional left-to-right or right-to-left language model. In these approaches, the model is asked to predict the next word, given what it has seen so far either from the left or right. ELMo, for example, trains two models, one left-to-right, the other right-to-left, and concatenates them together. This results in a shallow bidirectional model. It is impossible to train a deep bidirectional model like a normal language model because that would create cycles where words can indirectly "see themselves." The prediction then becomes trivial. To overcome this, BERT trains using two clever unsupervised prediction tasks. First, it masks a percentage of words from the input and asks the model to predict these masked words from the context. An example would be to ask the model to predict ',Object(o.b)("em",{parentName:"p"},"[MASK1]"," = hairy")," from the input ",Object(o.b)("em",{parentName:"p"},'"my dog is ',"[MASK1]"),'". The second task teaches BERT to understand the relationship between two text sentences by pre-training a binarized next sentence prediction task (see image). This ability is not captured by language modeling, but is important for many important downstream tasks (e.g. Question Answering).'),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2018/12/Screen_Shot_2018_12_07_at_12_03_58_PM-1544202515836.png",alt:"Next sentence prediction task [Image credit](https://arxiv.org/abs/1810.04805)"}))),Object(o.b)("p",null,"Once BERT is pretrained, task-specific models are formed by adding one additional output layer, so a minimal number of parameters need to be learned from scratch. As an example, a classifier composed of a simple feed forward neural network and a softmax layer can be added to BERT for spam detectionn. This is akin to transfer learning for image recognition. Many of us at CFFL are excited about this capability, and some of our thoughts are captured in this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.fastforwardlabs.com/2018/08/29/breakthroughs-in-transfer-learning-for-nlp.html"}),"previous newsletter article"),". BERT can also be used as a feature extractor. By concatenating various hidden layers of the pretrained Transformer, the authors show that the best performing combination is only 0.3 F1 behind fine-tuning the entire model for named entity recognition task. BERT is open sourced, and we cannot wait to see it being used to solve problems outside of the research space!\n"))}p.isMDXComponent=!0}},[["UgSh","5d41","9da1"]]]);