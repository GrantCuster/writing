(window.webpackJsonp=window.webpackJsonp||[]).push([["0b4a"],{FLWk:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",function(){return o}),t.d(a,"default",function(){return c});var n=t("kOwS"),i=t("qNsG"),r=(t("q1tI"),t("E/Ix")),o={title:"Supercharging Classification - The Value of Multi-task Learning",date:"Tue Jun 26 2018 20:00:00 GMT-0400 (Eastern Daylight Time)",preview_image:"/images/2018/06/02_03-1530032857031.png",feature:!1,published:!0,layout:"post",author:"Manny",author_link:"https://twitter.com/mannymoss"},s={frontMatter:o},l="wrapper";function c(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Today's machines can identify objects in photographs, predict loan repayments or\ndefaults, write short summaries of long articles, or recommend movies you may\nlike. Up until now, machines have achieved mastery through laser-like focus; most\nmachine learning algorithms today train models to master one task, and one task only.\nWe are excited to introduce ",Object(r.b)("strong",{parentName:"p"},"multi-task learning")," in our upcoming\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://info.cloudera.com/LP=2027?src=website&cid=70134000001SxY3"}),"webinar"),",\nreport, and prototype. Multi-task learning is an approach to machine learning\nthat goes beyond single-task approaches and supercharges classification by\nallowing algorithms to master more than one task at once and in parallel."),Object(r.b)("p",null,"The basic idea in multi-task learning is that learning several tasks at once\nallows models to benefit from relationships between tasks for improved\nperformance (alongside other benefits we will cover in the webinar and report). At\nan intuitive level, this makes sense. A child learning to read is supported by\nlearning the shapes of letters and learning how to talk. Similarly, a machine\nlearning model that is learning to understand language benefits from learning\nto identify parts of speech while concurrently learning to identify the\nsemantic role words play in a sentence. "),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2018/06/02_03-1530032857031.png",alt:null}))),Object(r.b)("h5",null,'Multi-task Learning can improve the prediction of two variables (e.g. "risk factor" and "white blood cell count")at the same time that it improves overall performance.'),Object(r.b)("p",null,"Recently, multi-task learning was shown to improve the prediction of diabetic\nretinopathy. A team at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ai.google/research/teams/brain"}),"Google Brain"),",\nusing ophthalmology databases that store thousands of retinal images, was\nable to train a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1708.09843"}),"multi-task neural network"),"\nto predict a variety of diagnostic attributes, from trivially easy ('left' or\n'right' eye) to surprisingly difficult ('male' or 'female' patient), in addition\nto the main task: the prediction of diabetic retinopathy. The outcome? Even\ntrained ophthalmologists were surprised by the network's performance. The\nprediction of the diabetic retinopathy task benefited from the addition of other tasks,\nshowing that seemingly less important tasks can be added to a\nsingle-task algorithm (turning it into a multi-task algorithm) to support a\nprimary, difficult task. "),Object(r.b)("p",null,"Similarly,\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1703.07771"}),"researchers")," have improved the ability of a model trained on hospital records to predict patient\nmortality by adding length-of-stay as a second target variable.\nAgronomists have improved soil chemistry detection by training a\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.mdpi.com/2072-4292/9/11/1099"}),"model")," to learn multiple chemical\nsignatures simultaneously. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://bons.ai"}),"Roboticists"),", in a twist on concept\nlearning, have trained a robotic arm  with MTL to satisfy both intermediate and\nend goals concurrently in a way that better supports that end goal.\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.enlitic.com"}),"Radiologists")," have used images labeled as 'normal' or\n'abnormal' alongside pixel-level labels for regions-of-interest that show the\nlocation of the abnormality to improve disease detection from imagery. And,\nunder the hood, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.nature.com/articles/nature16961"}),"AlphaGo")," is using\nmulti-task learning. Thus, multi-task learning has proven value in many practical\nsettings."),Object(r.b)("p",null,"Multi-task learning works only if tasks are related, of course, and not all\ntasks are. If unrelated tasks are included, they may degrade the performance of\nmulti-task models. Tasks are likely related if they are drawn from the same\ndomain. The startup\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.cardiogr.am/screening-for-hypertension-and-sleep-apnea-with-deepheart-416c9bc03efc"}),"Cardiogr.am"),"\ntrained a multi-task model to predict hypertension and sleep apnea from data\nrecorded by wearable heart rate sensors, and found beneficial effects.  These\nbeneficial effects may be rooted in shared biology; the autonomic nervous\nsystem links your heart with your brain, stomach, esophagus, liver, intestines,\npancreas, and, importantly, your blood vessels. The algorithm likely learned\nheart rate variability as a predictive feature for both tasks; two independent\nstudies showed associations between ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ncbi.nlm.nih.gov/m/pubmed/14581296/#fft"}),"heart rate variability and\nhypertension")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://link.springer.com/article/10.1007%2FBF02345072"}),"heart\nrate variabiliy and sleep\napnea"),'. Their results\nhighlight one of the fundamental benefits of multi-task learning: multi-task\nmodels learn, in unsupervised fashion, the relation between tasks and extract\nfeatures that can support not just one but all tasks. Models trained to learn\nthese more abstract features tend to generalize better to new data and\n(related) tasks. In "machine-learning speak," multi-task learning prevents\noverfitting and helps with model transfer.'),Object(r.b)("p",null,"Multi-task learning also offers a potential savings in processing time, power,\nand training data. Multi-task learning is a way of training a model to do more\nthan one thing at a time; it can also be used to do the same thing for more\nthan one set of data. Using multi-task learning in such a way allows for ",Object(r.b)("em",{parentName:"p"},"data\naugmentation"),": learning from several smaller datasets what one would otherwise\nneed a single large dataset to do. While a single-task model might be able to\nfind meaningful patterns in a large clinical data set (as long as the clinical\ndata was collected under a single protocol), a multi-task model can find\nmeaningful patterns across data collected under multiple protocols. "),Object(r.b)("p",null,"Given the value of a multi-task approach, we are likely to see more applications of multi-task learning across a range of industries and uses cases.  Already, we have seen the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1708.09843"}),"Medical Imagery")," - Disease detection from medical imagery can be made more accurate with less data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1709.05932"}),"Aerial Imagery")," - More accurate structure footprints can be learned using multi-task learning, facilitating property value estimates. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.mdpi.com/2072-4292/9/11/1099"}),"Agriculture")," - In-field spectroscopy detects multiple chemical profiles at once, and has made precision farming more efficient."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1703.00564"}),"Drug Discovery")," - The ability of compounds to bind to several different kinds of receptor sites can be predicted concurrently. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:""}),"Genomics")," - Using multi-task learning for data augmentation allows for learning across multiple cohorts of research subjects, which can ensure that any findings generalize better to a broader population."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1703.07771"}),"Healthcare")," - models trained by multi-task learning outperformed several (though ",Object(r.b)("em",{parentName:"li"},"not all"),") single-task learning models at predicting hospital stay length, mortality rate, disease phenotype (specific medical problem), and decompensation (organ failure)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://bons.ai/"}),"Robotics")," - multi-task learning enables learning complex operations as multiple, related, tasks that eventually culminate in a final goal for a robotic device."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.aclweb.org/anthology/E17-1015"}),"Natural Language Processing")," - multi-task learning has improved the detection of mental health issues based on social media data.")),Object(r.b)("p",null,"We invite anyone interested in supercharging their classification algorithms\nusing multi-task learning to our upcoming\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://info.cloudera.com/LP=2027?src=website&cid=70134000001SxY3"}),"webinar"),".\nAlso, be sure to keep an eye on the CFFL\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://blog.fastforwardlabs.com/"}),"blog")," for more announcements."))}c.isMDXComponent=!0},IBGg:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2018-06-26-supercharging-classification-the-value-of-multitask-learning",function(){var e=t("FLWk");return{page:e.default||e}}])}},[["IBGg","5d41","9da1"]]]);