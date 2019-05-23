(window.webpackJsonp=window.webpackJsonp||[]).push([["2563"],{q45v:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",function(){return r}),o.d(t,"default",function(){return c});var n=o("kOwS"),a=o("qNsG"),i=(o("q1tI"),o("E/Ix")),r={layout:"post",title:"The Product Possibilities of Interpretability",date:"2017-09-28 10:30",preview_image:"/images/2017/09/refractor-local.gif",feature:!0,author:"Grant",author_link:"https://twitter.com/GrantCuster"},s={frontMatter:r},l="wrapper";function c(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",null,"This post is part of a series highlighting the importance of interpretability. Previous posts include a ",Object(i.b)("a",Object(n.a)({parentName:"h5"},{href:"http://blog.fastforwardlabs.com/2017/09/11/interpretability-webinar.html"}),"video conversation on interpretability"),", ",Object(i.b)("a",Object(n.a)({parentName:"h5"},{href:"http://blog.fastforwardlabs.com/2017/09/01/LIME-for-couples.html"}),"a guide to using the LIME technique to predict whether couples will stay together"),", and a look at the ",Object(i.b)("a",Object(n.a)({parentName:"h5"},{href:"http://blog.fastforwardlabs.com/2017/08/02/business-interpretability.html"}),"business rationale"),". In ",Object(i.b)("a",Object(n.a)({parentName:"h5"},{href:"http://blog.fastforwardlabs.com/2017/03/09/fairml-auditing-black-box-predictive-models.html"}),"our post on FairML"),", we used interpretability techniques to identify discriminatory bias in algorithms."),Object(i.b)("p",null,"As the use of machine learning algorithms increases, the need to understand\nthem grows as well. This is true at both a societal and a product level. As\nalgorithms enter into our workplaces and workflows, they can appear mysterious and\nintimidating. Their predictions may be precise, but the utility of those\npredictions is limited if we cannot understand how they were reached. Without\ninterpretability, even accurate algorithms are poor team players—technically\ncorrect but uncommunicative."),Object(i.b)("p",null,"Interpretability opens up opportunities for collaboration with algorithms.\nDuring their development, it promises better processes for feature engineering\nand model debugging. After completion, it can enhance users' understanding of\nthe system being modeled and advise on what actions to take."),Object(i.b)("div",{class:"html-video-holder"},Object(i.b)("video",{controls:"true",autoplay:"true",loop:"true",src:"/static/images/2017/09/refractor-wide.mp4"})),Object(i.b)("h5",null,"The Refractor prototype shows how different attributes affect a customer's likelihood to churn."),Object(i.b)("p",null,"For our prototype, we wanted to explore how that collaboration through\ninterpretability might look. We chose an area, churn probability for customers\nof an internet service provider, where the collaboration payoff is high. The base of the prototype is a supervised machine learning model of customer churn (how likely a customer is to unsubscribe) trained on public data. Making\nthe churn prediction is the kind of problem machine learning excels at, but\nwithout an understanding of what features are driving the predictions, user\ntrust and ability to take action based on the model are limited. With\ninterpretability, we can break out of those limitations."),Object(i.b)("p",null,"Our prototype, Refractor, explores how interpretability can be visualized. It guides the user through two levels of interpretability, from a\nglobal table view of customers to an exploration of the effects of different\nfeatures on an individual user. The process of building the prototype was also\na movement between, and eventually a balancing of, those two levels."),Object(i.b)("h2",null,"Global View: Understanding the Model"),Object(i.b)("p",null,"Refractor uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marcotcr/lime"}),"LIME")," to explore which features are most affecting\nthe model's prediction. LIME is focused on local explanation of feature importance through feature\nperturbation. It may initially seem a strange choice, then, to use it in a\nglobally oriented view. The stacked local interpretations, however, coalesce\ninto a powerful global representation of how the algorithm works. For many\ncomplex algorithms, this is the only kind of global view you can have."),Object(i.b)("div",{class:"html-video-holder"},Object(i.b)("video",{controls:"true",autoplay:"true",loop:"true",src:"/static/images/2017/09/refractor-global.mp4"})),Object(i.b)("h5",null,"The global table displays the churn probability prediction (calculated by the model) and highlights in red and blue the importance of different features in making that prediction (as calculated by LIME). Columns can be sorted by value to explore the relationships across customers."),Object(i.b)("p",null,"Machine learning models are powerful because of their ability to capture\nnonlinear relationships. Nonlinear relationships cannot be reduced to global\nfeature importance without significant information loss. By highlighting local\nfeature importance within a table view, you do see important columns begin to\nemerge, but you can also observe patterns, like discontinuities in a feature's\nimportance, that would have to be averaged out if feature importance was\nglobally calculated."),Object(i.b)("p",null,"The table, as a sort of global view of local interpretability, highlights how\ninterpretability depends on collaboration. The intuitive feel a user builds up\nfrom scrolling through the highlighted features depends on our ability to\nrecognize patterns and develop models in our heads that explain those\npatterns, a process that mirrors some of the work the computer model is doing.\nIn a loose sense, you can imagine that the highlighted features give you a\nglimpse of how the model sees the data—model vision goggles. This view can\nhelp us better debug, trust, and work with our models. It is important to keep\nperspective, however, and remember that the highlighted features are an\nabstracted ",Object(i.b)("em",{parentName:"p"},"representation")," of how the model works, not how it ",Object(i.b)("em",{parentName:"p"},"actually"),"\nworks. After all, if we could think at the scale and in the way the model\ndoes, we wouldn't need the model in the first place."),Object(i.b)("h2",null,"Local View: Understanding the Customer"),Object(i.b)("p",null,"While the table view is a powerful interface, it can feel overwhelming. For\nthis prototype, we wanted to complement it with an individual customer view\nthat would focus on actions you could take in relation to a specific customer."),Object(i.b)("div",{class:"html-video-holder"},Object(i.b)("video",{controls:"true",autoplay:"true",loop:"true",src:"/static/images/2017/09/refractor-customer.mp4"})),Object(i.b)("h5",null,"The individual customer view shifts the focus from comparisons across customers to one particular customer."),Object(i.b)("p",null,"Free of the table, we are now able to change the displayed feature order. The\nobvious move is to sort the features by their relative importance to the\nprediction. In the vertical orientation, this creates a list of the factors\nmost strongly contributing to the customer's likelihood of churning. For a\ncustomer service representative looking for ways to decrease the chance the\ncustomer will leave, this list can function as a checklist of things to try to\nchange."),Object(i.b)("div",{class:"html-video-holder"},Object(i.b)("video",{controls:"true",autoplay:"true",loop:"true",src:"/static/images/2017/09/refractor-sort.mp4"})),Object(i.b)("h5",null,"Using LIME, we can sort customer attributes by their relative importance to the churn prediction."),Object(i.b)("p",null,"Because this sorting is an obvious move, it's easy to undervalue its\nusefulness. It is worth remembering that without LIME (or a different\ninterpretability strategy), the list would remain unsorted. You could manually\nalter features to see how the probability changed, but it would be a long and tedious process."),Object(i.b)("p",null,"The implicit recommendations of the feature checklist are built upon with\nfurther information. The recommendation side panel highlights the top three\nand uses the model to calculate the percent reduction in\nchurn probability that changing each feature would have."),Object(i.b)("div",{class:"html-video-holder"},Object(i.b)("video",{controls:"true",autoplay:"true",loop:"true",src:"/static/images/2017/09/refractor-recommendations.mp4"})),Object(i.b)("h5",null,"The recommendation sidebar highlights the top possible churn reduction actions."),Object(i.b)("p",null,"As the user follows these recommendations, or explores by changing other\nfeature values for the individual customer, we not only calculate the new churn\nprediction, we also calculate the weights based on the new feature set. This\nability to change one feature value and see the ripple effect on the importance\nof other features once again helps the user build up an intuitive feeling of\nhow the model works. In the case of a customer service representative with an\naccurate model, that intuitive understanding translates to an ability to act\noff of its insights."),Object(i.b)("h2",null,"Product Tension: Focus vs. Context"),Object(i.b)("p",null,"As we developed the global and local interfaces of the prototype, we constantly\nengaged with a tension between providing the user with context and providing a\nfocused and directed experience. This tension will arise any time you are\nadding interpretability to a model, and requires careful consideration and\nthought about the purpose of your product."),Object(i.b)("p",null,"In the early stages of prototype development we kept all of the features\nvisible, using color and ordering to emphasize those with higher importances.\nAs we probed how a consumer product using LIME might work, we explored only\nshowing the highest-importance features for each customer. After all, if you're\na customer service representative concerned with convincing a user to stay, why\nwould you need to know about features that, according to the model, have no\ndiscernible effect on the churn prediction?"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2017/09/4b-ps-3.png",alt:"A screenshot of an early version of the Refractor prototype. Only the top three features are shown."}))),Object(i.b)("h5",null,"Early interface experiments displayed only the top three features for each customer. The view was focused but provided the user with less context to understand the model."),Object(i.b)("p",null,"We experimented with interfaces emphasizing just the top features, and they did\nhave the benefit of being more clear and focused. However, the loss of context\nended up decreasing the user's trust and understanding of the model. The model\nwent back to feeling more black box-like. Being able to see which factors don't\nmake contributions to the prediction (for example, gender) and checking those\nagainst your own intuitions is key to trusting the features that are rated of\nhigh importance."),Object(i.b)("p",null,"Having seen the importance of context, we decided to focus our prototype on\nthat, while also dedicating some space to a more focused experience. In the\nindividual view, this means that along with the full list of features we show the more targeted recommendation panel. For a customer service representative, this recommendation panel could be the primary view, but\nproviding it alongside the full feature list helps the user feel like they're\non stable ground. The context provides the background for users to take more\nfocused action."),Object(i.b)("h2",null,"Collaborating with Algorithms"),Object(i.b)("p",null,"Trust is a key component of any collaboration. As algorithms become\nincreasingly prevalent in our lives the need for trust and collaboration will\ngrow. Interpretability strategies like LIME open up new possibilities for that\ncollaboration, and for better and more responsible use of algorithms. As those\ntechniques develop they will need to be supported by interfaces that balance\nthe need for context with a focus on possible actions."),Object(i.b)("h5",null,"Full access to the Refractor prototype is available as part of our research subscription. To learn more about subscribing to our reports and prototypes email us at ",Object(i.b)("a",Object(n.a)({parentName:"h5"},{href:"mailto:contact@fastforwardlabs.com"}),"contact@fastforwardlabs.com"),"."))}c.isMDXComponent=!0},uSrp:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2017-09-26-the-product-possibilities-of-interpretability",function(){var e=o("q45v");return{page:e.default||e}}])}},[["uSrp","5d41","9da1"]]]);