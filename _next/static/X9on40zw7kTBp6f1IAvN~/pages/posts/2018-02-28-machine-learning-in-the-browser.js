(window.webpackJsonp=window.webpackJsonp||[]).push([["0299"],{CCl1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2018-02-28-machine-learning-in-the-browser",function(){var e=a("NJlQ");return{page:e.default||e}}])},NJlQ:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return s}),a.d(t,"default",function(){return l});var n=a("kOwS"),r=a("qNsG"),o=(a("q1tI"),a("E/Ix")),s={title:"Machine Learning In The Browser",date:"2019-02-28 15:03 -0400",preview_image:"/images/editor_uploads/2019-02-21-221448-tfjs.jpg",feature:!1,published:!0,author:"Victor",author_link:"https://twitter.com/vykthur",post_type:"newsletter"},i={frontMatter:s},c="wrapper";function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The promise of Machine Learning (ML) on edge devices holds potential to enable new capabilities while reaping the benefits associated with on-device computation. As an environment that is frequently the source of data (user interactions, sensors such as cameras, acelerometers, etc.), the browser within PCs, mobile  and IoT devices represents an important edge “platform.” Deploying models in such environments can improve latency for interactive applications, reduce model distribution costs, and enable privacy as data is no longer sent to remote servers for analysis. "),Object(o.b)("p",null,"In recent times, advances in graphic acceleration in the browser (WebGL), increasing compute capabilities on edge devices, and the advent of JavaScript-based ML frameworks make ML in the browser particularly exciting. "),Object(o.b)("h3",null,"Why Machine Learning in the Browser?"),Object(o.b)("h4",null,"Latency"),Object(o.b)("p",null,"By bringing computation directly to the user, there is opportunity to improve application latency. This is especially true for tasks that may or may not be computationally intensive but have been traditionally performed on remote servers. For example, recommendation tasks such as predicting a user's next action (that previously involved roundtrip calls to a remote server (upload user data, process, download result)) can be performed in the browser with faster response times."),Object(o.b)("h4",null,"Privacy"),Object(o.b)("p",null,"Perhaps, one of the most compelling strategies for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sciencedirect.com/science/article/abs/pii/S0022435906000558"}),"building user trust"),' in a product is to offer objective notions of privacy. In many cases, systems designed to be provably private ("we do not store your data") can be more convincing than systems which offer privacy assurances ("we store your data, but only use it for specific known purposes"). With ML in the browser, it is possible to perform analysis on a client\'s data on their device via the browser and provide value to them without transmitting their data to any servers for processing. An example is the ability to offer language translation or image captioning or document classification services for sensitive content in the browser. Within the same framework, models can be trained on a user’s local data and used to provide improved, personalized services.'),Object(o.b)("h4",null,"Distribution"),Object(o.b)("p",null,"Setting up a traditional environment for running ML models can be tedious and challenging to deploy. While these issues can now be addressed  with the use of docker containers as well as dependency management packages, it is still challenging to package and distribute applications with ML models on end user devices. The process of bundling a client application that first installs frameworks such as Tensorflow or Pytorch, simply for the purpose of enabling ML capabilities, can be error prone, and varies with the distribution platform. "),Object(o.b)("p",null,"On the other hand, browser based deployments can leverage the standardized web environment with zero installation costs for the user and distribution costs for the developer. Costs associated with building for multiple platforms (e.g., CPU architectures, Operating Systems) are also avoided as mature web standards allow web applications to remain stable across these environments."),Object(o.b)("h3",null,"Libraries for Machine Learning in the Browser: Tensorflow.js"),Object(o.b)("p",null,"There are several open source libraries which provide a simple JavaScript API that allows users to build and train machine learning models in the browser. These include projects such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://js.tensorflow.org"}),"Tensorflow.js"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cs.stanford.edu/people/karpathy/convnetjs/"}),"ConvnetJS"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/BrainJS/brain.js"}),"Brain.js"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://caza.la/synaptic/#/"}),"Synaptic"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://wagenaartje.github.io/neataptic/"}),"Neataptic"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mil-tokyo/webdnn"}),"WebDNN")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stevenmiller888/mind"}),"Mind"),". "),Object(o.b)("p",null,"As of right now, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://js.tensorflow.org"}),"Tensorflow.js")," appears to be the most mature API in terms of maintenance, integration with the broader ML ecosystem, and community adoption. TensorFlow.js consists of two sets of APIs: the Ops API which provides lower-level linear algebra operations (e.g., matrix multiplication, tensor addition, etc.), and the Layers API, which provides higher-level model building blocks and best practices with emphasis on neural networks. The Layers API is modeled after the tf.keras namespace in TensorFlow Python, which is based on the widely adopted ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://keras.io,"}),"Keras API")," and supports rapid prototyping of complex ML models."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2019-02-21-221448-tfjs.jpg",alt:null}))),Object(o.b)("h5",null,"Figure shows the architecture of the Tensorflow.js library. ",Object(o.b)("a",Object(n.a)({parentName:"h5"},{href:"https://arxiv.org/abs/1901.05350"}),"source")),Object(o.b)("p",null,"TensorFlow.js is designed to run in-browser and server-side, as shown in the figure above. When running inside the browser, it utilizes the GPU of the device via WebGL to enable fast parallelized floating point computation. In Node.js, TensorFlow.js binds to the TensorFlow C library, enabling full access to TensorFlow. TensorFlow.js also provides a slower CPU implementation as a fallback (omitted in the figure for simplicity), implemented in plain JS. This fallback can run in any execution environment and is automatically used when the environment has no access to WebGL or the TensorFlow binary. (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1901.05350"}),"See the Tensorflow.js paper here."),")"),Object(o.b)("p",null,"Tensorflow.js integrates well with the broader Tensorflow ecosystem by providing a converter which also allows users to convert, load, and run existing Tensorflow models. Developers can build, train, optimize and test their models in Tensorflow (Python) and then export the resulting model for use in the browser.  "),Object(o.b)("h3",null,"Current Applications and Outlook"),Object(o.b)("p",null,"With Tensorflow.js, users can prototype and run models of varying complexity from simple ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://js.tensorflow.org/tutorials/fit-curve.html"}),"linear/polynomial regression")," to complex neural networks for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tensorflow/tfjs-models/tree/master/mobilenet"}),"image recognition"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd"}),"object detection"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tensorflow/tfjs-models/tree/master/posenet"}),"pose detection"),", and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder"}),"Natural Language Processing"),". "),Object(o.b)("p",null,"There have also been interesting applications ranging from prototyping ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://handsfree.js.org/"}),"handsfree interactions for increased accessiblity"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/victordibia/handtrackjs"}),"hand gesture interaction")," and numerous examples for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://teachablemachine.withgoogle.com/"}),"teaching")," ML concepts. Furthermore, and as we mention in an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.fastforwardlabs.com/2018/11/14/federated-learning.html"}),"earlier report"),", Tensorflow.js can enable Federated Learning where locally trained models (not data) from participating devices are shared with a central server. The server combines these into an updated federated model which is then shared with each device."),Object(o.b)("p",null,'While these usecases are still emergent, one important limitation for ML in the browser is related to the single-threaded nature of JavaScript applications in the browser. Browsers typically have a "main thread" where JavaScript code, event processing, and other instructions are run. It does not support a multi-threaded paradigm (though research in this area is ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"}),"active"),') and can be less performant than other programming environments. If designed incorrectly, a compute intensive ML operation can "block" the main thread, which can hamper the overall interaction experience for users.'),Object(o.b)("p",null,"As edge devices become more compute capable, it is likely that more processing, including model training and inference tasks, will be shifted to the browser. It is also likely that more third party libraries and design patterns will begin to integrate the use of ML models in the browser.\n"))}l.isMDXComponent=!0}},[["CCl1","5d41","9da1"]]]);