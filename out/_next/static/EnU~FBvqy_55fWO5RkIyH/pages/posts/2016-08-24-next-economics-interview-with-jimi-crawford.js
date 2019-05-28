(window.webpackJsonp=window.webpackJsonp||[]).push([["13e9"],{"ST9/":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return s}),a.d(t,"default",function(){return h});var o=a("kOwS"),n=a("qNsG"),i=(a("q1tI"),a("E/Ix")),s={title:"Next Economics: Interview with Jimi Crawford",date:new Date("2016-08-24T16:18:12.000Z"),tags:["deep learning","interview","satellite data","machine learning","hedge funds"],layout:"post",redirect_from:["/post/149419599203/next-economics-interview-with-jimi-crawford"],preview_image:"http://68.media.tumblr.com/de9fc93bc4bda585c1bb51a785fc7801/tumblr_inline_ocf6npUoHK1ta78fg_540.png",post_type:"interview",interview_with:"Jimi Crawford, Orbital Insights",interview_with_link:"https://orbitalinsight.com/"},r={frontMatter:s},l="wrapper";function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(l,Object(o.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"http://68.media.tumblr.com/de9fc93bc4bda585c1bb51a785fc7801/tumblr_inline_ocf6npUoHK1ta78fg_540.png",alt:null}))),Object(i.b)("h5",null,"Building shadows as proxies for construction rates in Shanghai. Photos courtesy of Orbital Insight/Digital Globe."),Object(i.b)("p",null,Object(i.b)("p",null,"It’s no small feat to commercialize new technologies that arise from scientific and academic research. The useful is a small subset of the possible, and the features technology users (let alone corporate buyers) care about rarely align with the problems researchers want to solve. But it’s immensely exciting when it works. When the phase transition is complete. When the general public starts to appreciate how a bunch of mathematics can impact their business, their lives, and their understanding of how the world works. It’s why the Fast Forward Labs team wakes up every day. It’s why we love what we do. It drives us. And it’s why we’re always on the lookout for people who are doing it well. "),Object(i.b)("p",null,Object(i.b)("a",{href:"https://orbitalinsight.com/"},"Orbital Insight")," is an excellent example of a company that is successfully commercializing deep learning technologies. 2015 saw a ",Object(i.b)("a",{href:"http://www.nytimes.com/2015/12/11/science/an-advance-in-artificial-intelligence-rivals-human-vision-abilities.html?_r=0"},"series of improvements")," in the performance of object recognition and computer vision systems. The technology is being applied across domains, to ",Object(i.b)("a",{href:"http://www.enlitic.com/"},"improve medical diagnosis"),", gain ",Object(i.b)("a",{href:"https://www.clarifai.com/"},"brand insights"),", or update our ",Object(i.b)("a",{href:"http://pictograph.us"},"social media experience"),". "),Object(i.b)("p",null,"Building on his experience at The Climate Corporation, Orbital Insight CEO  ","&"," Founder ",Object(i.b)("a",{href:"https://www.linkedin.com/in/jmcrawfordjr"},"Jimi Crawford")," decided to aim big and apply the latest in computer vision to satellite imagery. His team focused their first commercial offering on the financial services industry, honing their tools to count cars in parking lots to infer company performance and, transitively, stock market behavior. But hedge funds are just the beginning. Crawford’s long-term ambition (as that of ",Object(i.b)("a",{href:"http://www.featurex.ai/"},"FeatureX"),") is to reform macroeconomics, to replace government reports with quantified observations about the physical world. ",Object(i.b)("a",{href:"https://techcrunch.com/2016/06/27/orbital-insight-lands-20-million-from-investors-led-by-gv/"},"Investors have taken notice"),"."),Object(i.b)("p",null,"We interviewed Jimi, discussing what he learned in the past, what he does in the present, and what he envisions for the future. Read on for highlights. "),Object(i.b)("p",null,Object(i.b)("b",null,"You’ve been in artificial intelligence long enough to see the rise and fall of different theoretical trends. How has the field evolved over the years?",Object(i.b)("br",null))),Object(i.b)("p",null,"AI was different when I did my doctorate at UT Austin in the late 80s. Machine learning as induction from data wasn’t as important as it is now. We were concerned with getting computers to know what people know when they think or make true statements, which meant using variance of first-order logic as foundation of knowledge. The goal of our research was to program human common sense into a system using logical - or symbolic - techniques. While this branch of AI has since been eclipsed by machine learning and statistical techniques, there are still challenges in intelligent systems (like ",Object(i.b)("a",{href:"http://cacm.acm.org/magazines/2015/9/191169-commonsense-reasoning-and-commonsense-knowledge-in-artificial-intelligence/fulltext"},"mimicking common sense"),") that will likely only be solved by synthesizing symbolic and neural (deep learning) techniques. We can make a loose analogy to the structure of the brain: a small part is the cerebral cortex, which executes logical thought; the rest is a dense, complex network of neurons. "),Object(i.b)("p",null,Object(i.b)("b",null,"Does that mean that near-term advances in AI will continue to involve ",Object(i.b)("a",{href:"http://blog.fastforwardlabs.com/2016/05/25/human-machine-algorithms-interview-with-eric.html"},"human-machine partnerships")," as opposed to straight-up automation? ")),Object(i.b)("p",null,"I think that will be the case for the foreseeable future. Even in chess, a very controlled, rules-based game, joint human-computer teams beat teams of only computers or only humans. If we add the complexity of real-world data and real-world problems, things only get messier. At Orbital Insight, we consider computers to be a mechanism to focus human attention on the objects and entities in the world that have significance for a given task or purpose (e.g., counting how many cars there are in a store parking lot at a given time of day). The world is big. Without computer vision tools, we’d need 8 million people to review and analyze satellite images at one meter resolution to get the insights we derive using automation. That’s a massive economy of scale. "),Object(i.b)("p",null,Object(i.b)("b",null,"You’ve had a rich career, having worked at NASA, Google Books, and the Climate Corporation before founding Orbital Insight. Are there parallels between the problems you worked on at Google Books and those you work on at Orbital Insight? ")),Object(i.b)("p",null,"Google Books was deeply inspirational for Orbital Insight. In essence, both projects are about taking a complex input and transforming it into a simple output people care about. At ",Object(i.b)("a",{href:"https://www.google.com/googlebooks/about/"},"Google Books"),", the input was images of millions of book pages. The project’s main purpose was to improve Google’s search engines. We’d digitize images, pass them through an OCR pipeline to figure out what the text was, and annotate them with copyright information etc. The goal was to transform all this raw information into the quotes and passages people could search for and cared about. At Orbital Insight, we follow a similar human-computer data processing pipeline, preparing images, analyzing them with convolutional neural nets, and processing them to output the information people care about, like how many cars are in a company parking lot. "),Object(i.b)("p",null,"There were some interesting takeaways from the Google Books project. One of our 20% projects (i.e., the 20% of work time Google employees are free to devote to creative research projects) was the ",Object(i.b)("a",{href:"https://books.google.com/ngrams"},"Ngram Viewer"),", which displays graphs showing how different words or phrases occur in book corpuses over selected years. Using the tool, we were able to see a shift from saying “the United States are,” at the signing of the Constitution, to “the United States is,” right around the Civil War. Some linguists used the Ngram Viewer to correlate verb conjugation regularity with frequency of use: the tool shows that conjugations of verbs like “to be,” which are used all the time, vary more frequently. ")),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"http://68.media.tumblr.com/a96e908c63e446cf3326fdbfd33b61fb/tumblr_inline_ocf94uycft1ta78fg_540.jpg",alt:null}))),Object(i.b)("h5",null,"N-gram of mathematics trends from 1800-2000."),Object(i.b)("p",null,Object(i.b)("p",null,Object(i.b)("b",null,"Orbital Insight is a data product company, where development involves the right balance between data science and software engineering. How do you manage that balance?  ")),Object(i.b)("p",null,"When I was SVP of Science and Engineering at The Climate Corporation, I had about 100 people on my team. A little less than half were data scientists; the rest were software engineers. That experience taught me to think carefully about the gap between prototypes and products. Many data scientists are not trained as computer scientists: they are comfortable writing prototypes in R or Python, but then pass models to computer scientists to rewrite code for production. Leadership teams have to be mindful of what it takes to go from prototype to bulletproof production code, and include that in timelines and collaboration between teams. "),Object(i.b)("p",null,Object(i.b)("b",null,"What kinds of problems are Orbital Insight data scientists working on? ")),Object(i.b)("p",null,"We have an interesting mix at Orbital Insight. Part of the team specializes in computer vision, using convolutional neural nets to interpret satellite data. They transform pixels to numbers. We are in the business of counting objects in images, which differs from the classification techniques used for object recognition (as the Fast Forward Labs team researched with ",Object(i.b)("a",{href:"http://pictograph.us"},"Pictograph"),") that dominate the literature. Say the task is counting how many cars are in a parking lot. We classify each pixel, cluster together areas in the image that contain cars, and then count number of pixels. We hit challenges if we change contexts. The algorithms are trained to count cars in retail parking lots, so don’t automatically transfer to, say, the lot of a car manufacturing plant, where makers place cars inches apart to squeeze in as many as possible. This space differential muddles the clusters. So we have to retrain algorithms for different contexts. "),Object(i.b)("p",null,"The second group of data scientists is focused on analytics and statistics. They transform numbers to English. They take the millions of numbers about parked cars and distil this information into a single sentence that matters for the user. These scientists have different backgrounds and PhDs than the computer vision team, so I do think a lot about helping them collaborate successfully. "),Object(i.b)("p",null,Object(i.b)("b",null,"What are some other challenges you face working with satellite data? ")),Object(i.b)("p",null,"We’re limited by what we’re able to collect. The satellites we work with orbit over the geographical space where retailers conduct business on a daily basis. That means, we may see the parking lot of a Walmart store in Massachusetts every day at around 10 am, and a different branch in the midwest every day at 2 pm. So we have to compute a time of day curve for every retailer, and do some statistics to get the timing right. We can back up any inferences with six years of data. The other limitation is that we don’t have data about parking lot patterns in the evening. So our technique really doesn’t work for certain sectors, like evening restaurant chains or movie theaters. "),Object(i.b)("p",null,Object(i.b)("b",null,"You get to see and work with multiple satellite providers. What hardware developments are you most excited about? ")),Object(i.b)("p",null,"The most interesting developments for us are the ability to use new spectral bands and the increased frequency of imagery. Counting cars falls within the bandwidth of human vision, but there are other applications we’re keen to work on that require low-range infrared or ultraviolet. We want to do things like predict the right spot to mine for iron ore, predict crop health based upon soil moisture levels, discern if a building is occupied or unoccupied based on heat levels, or discern whether a power plant is active. A few new vendors are using novel detectors to push outside of human visual spectrum. "),Object(i.b)("p",null,"The uptick in image frequency, provided by companies like ",Object(i.b)("a",{href:"https://www.planet.com/"},"Planet")," (with whom we just ",Object(i.b)("a",{href:"https://www.planet.com/pulse/planet-strikes-landmark-deal-with-orbital-insight-to-address-financial-markets/"},"partnered"),"), provides more data to drive more accurate insights. This shift is remarkable, and is enabled by new hardware and rapidly falling costs. What’s interesting here is when ",Object(i.b)("a",{href:"https://en.wikipedia.org/wiki/Moore%27s_law"},"Moore’s Law")," applies and when it doesn’t. The laws of optics don’t follow Moore’s Law, but the ability to mass produce devices does. Development has therefore not been focused on getting higher and higher resolution from space: in most use cases (like counting cars), getting satellites to 1 or 0.5 meter resolution is perfectly fine, as people want to measure and count things we can also see. So the more useful development was to mass produce hardware, to make cheaper commodities that could be reused and relaunched….and may eventually lead to Elon Musk launching a million vehicles into space."),Object(i.b)("p",null,Object(i.b)("b",null,"What is Orbital Insight’s long-term vision? ")),Object(i.b)("p",null,"We want to understand the Earth. It’s amazing how poor our current understanding is: people review government reports and stock reports that say, for example, that steel up and crops are down, but it’s all really just guesses upon guesses given the absence of ground truth. And if you probe economists, their analyses are inevitably built on government reports. Our vision is to replace these reports - and this system - with quantified observations. We want to be able to measure and track the physical world economy like we currently measure and track the digital world (clicks, views, likes).This will impact stocks, agencies, and supply chains: major aircraft manufacturers, who worry about titanium supply, will be able to track how titanium mines are functioning. In short, we want to help rebuild economics on top of real-world observations. "),Object(i.b)("figure",{class:"tmblr-full","data-orig-height":"3744","data-orig-width":"5616"},Object(i.b)("img",{src:"http://68.media.tumblr.com/fa8d8de23783762a53f73d95cc861ed9/tumblr_inline_ocf91lcFsr1ta78fg_540.jpg","data-orig-height":"3744","data-orig-width":"5616"}))),Object(i.b)("h5",null,"Headshot courtesy of Orbital Insight"),Object(i.b)("p",null,Object(i.b)("p",null,Object(i.b)("b",null,"What recent developments in machine learning are you most excited about?"))),Object(i.b)("p",null,Object(i.b)("p",null,"Deep learning has only just gotten started. It has tremendous power. ",Object(i.b)("a",{href:"http://www.theatlantic.com/technology/archive/2016/03/the-invisible-opponent/475611/"},"AlphaGo beating the world Go champion")," is mind bending: Go is an intuitive, visual game that is far more complex than chess. And we’re just getting started, especially when we apply this algorithmic power to data from the internet of things. We’re testing this model at Orbital Insight. We’re a data company, but a highly differentiated data company that fuses techniques to create reports that are valuable and hard to create.  There are a tremendous number of new data streams, and the game is on for entrepreneurs and data scientists to explore the data, push the algorithms, and create something that is truly unique and new. "),Object(i.b)("p",null,Object(i.b)("b",null,"What advice would you give to young entrepreneurs looking to push the boundaries and build something new? ")),Object(i.b)("p",null,"We just had a party to celebrate a successful ",Object(i.b)("a",{href:"https://techcrunch.com/2016/06/27/orbital-insight-lands-20-million-from-investors-led-by-gv/"},"B round")," and what struck me was the number of folks present who helped get the company started. One great thing about being in Silicon Valley is the access to people and resources who truly support you if they see your vision and think you can be something someday. At the beginning, people gave us free office space, made dozens of intros, shared countless pieces of advice. I’d tell young entrepreneurs to build and rely on their network, and to be open to their input and sensitive to their feedback. Everyone in my network said Orbital Insight was a great idea. And it helped to act with the confidence of a clear signal from the beginning.")))}h.isMDXComponent=!0},zWy8:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2016-08-24-next-economics-interview-with-jimi-crawford",function(){var e=a("ST9/");return{page:e.default||e}}])}},[["zWy8","5d41","9da1"]]]);