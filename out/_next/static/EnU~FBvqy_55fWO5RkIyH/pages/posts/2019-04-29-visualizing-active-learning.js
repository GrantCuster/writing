(window.webpackJsonp=window.webpackJsonp||[]).push([["253b"],{NGQF:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"default",function(){return h});var n=a("kOwS"),o=a("qNsG"),r=(a("q1tI"),a("E/Ix")),i={title:"Visualizing Active Learning",date:"2019-04-29 16:05 -0400",preview_image:"/images/editor_uploads/2019-04-10-191420-active_learner_gif_small.gif",feature:!0,published:!0,author:"Grant",author_link:"https://twitter.com/grantcuster",post_type:"newsletter"},s={frontMatter:i},l="wrapper";function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2019-04-10-191420-active_learner_gif_small.gif",alt:"A GIF of the Active Learner prototype"}))),Object(r.b)("h5",null,Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://activelearner.fastforwardlabs.com/"}),"Active Learner")," shows how active learning selects which data to be labeled."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://activelearner.fastforwardlabs.com/"}),"Active Learner"),", our new research prototype, is an interactive visualization of different active learning strategies for labeling data. It features three different datasets (MNIST, Quickdraw, and Caltech) and four different data selection strategies (Random, Entropy, Adversarial, and Ensemble). By exploring the different datasets and strategies, you can build your intuition about how and why active learning works. (For more on the selection strategies, read our report ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.fastforwardlabs.com/2019/04/02/a-guide-to-learning-with-limited-labeled-data.html"}),"Learning with\nLimited Labeled Data"),".) "),Object(r.b)("p",null,"In this newsletter, I'm going to focus on the visualization challenges involved in the prototype."),Object(r.b)("h4",null,"Show me the data"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2019-04-10-191535-clip4.gif",alt:null}))),Object(r.b)("h5",null,"I used sprite sheets and shaders to display the image for each of the data points."),Object(r.b)("p",null,"One of the main challenges involved in visualizing machine learning processes is figuring out how to present the vast amount of data involved. For Active Learner, we used the dimension-reduction algorithm ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://umap-learn.readthedocs.io/en/latest/"}),"UMAP")," to visualize how the model clusters the dataset.  We ran UMAP on the embeddings generated by our model after each round of data selection and training. As you move through the rounds in the prototype, you can see how the active learning strategies focus on points at the boundaries of the clusters. This focus makes sense because it is at the boundaries between classifications that there is often the most uncertainty. They are (kind of literally) the edge cases."),Object(r.b)("p",null,"UMAP gets us the coordinates to plot the data, but displaying all those points in a browser is another challenge. For the UMAP dataset, we're displaying 60,000 points. That's a lot for a browser to handle when you want to be able to zoom and pan the visualization. I'd previously taken on this challenge for our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ff07.fastforwardlabs.com/deep_bargain/"}),"FF07 prototype: Deep Bargain Book Shop"),". In that prototype, we used a different dimension-reduction algorithm (T-SNE) to visualize book description similarity for recommendations. I'd turned to the JavaScript library three.js to display those. Because three.js uses WebGL, it can smoothly\nrender more points than approaches like SVG or vanilla HTML canvas. (I wrote about that approach in an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://observablehq.com/@grantcuster/using-three-js-for-2d-data-visualization"}),"Observable notebook: Using three.js for 2D data visualization"),".)"),Object(r.b)("p",null,"In this prototype, I saw an opportunity to take another crack at building an interactive large scale visualization. I wanted to take this one even further. Since this project is focused on image datasets, I wondered if I could plot the images themselves (rather than placeholder circles). Based on my past experience with three.js, and from following people online who do similar work, I believed I could – but I wasn't certain (which is, after all, what makes it fun)."),Object(r.b)("h4",null,"UMAP Explorer"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/images/editor_uploads/2019-04-10-191718-umap_zoom_1547839236092.gif",alt:null}))),Object(r.b)("h5",null,"In ",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://grantcuster.github.io/umap-explorer/"}),"UMAP Explorer")," I worked out the image rendering techniques used in the prototype."),Object(r.b)("p",null,"While Shioulin and Nisha worked on the model and selection strategies, I explored visualization rendering techniques with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://grantcuster.github.io/umap-explorer/"}),"UMAP Explorer"),", an interactive UMAP visualization of the MNIST dataset, and a trial run for the techniques I wanted to use in the prototype. I hit the wall a few times trying to get all 70,000 images to render. I eventually found a way to swing it, thanks mostly to a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/25335967/texture-atlas-offset-repeat-works-for-meshes-but-is-ignored-for-point-system-par/25372202#25372202"}),"stack overflow answer by WestLangley"),", and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://douglasduhaime.com/posts/visualizing-tsne-maps-with-three-js.html"}),"a post on a similar project by Douglas Duhaime"),". "),Object(r.b)("p",null,"The solution was to borrow a technique from video games and create a sprite sheet of the images all stitched together. You can then use a shader to pick what parts of the sprite sheet to display for each point. This gets you a huge performance improvement compared to loading a separate image for each point. I also explored different transparency and color coding options in UMAP explorer. Gradated transparency was too slow, so instead the shader just discards any pixels below a certain brightness level. This works fine for the black and white digits of MNIST, but needs to be adjusted depending on the images."),Object(r.b)("h4",null,"Transitions"),Object(r.b)("p",null,"With the knowledge gained from UMAP explorer, I jumped into the prototype itself. The new challenge that emerged was how to maintain continuity between rounds. The answer was to use transitions, so that the data points move to their new transitions from round to round. I found several examples using tween.js to transition three.js points, and was able to implement that approach. "),Object(r.b)("p",null,"The bigger issue was how to manage state. I used React to structure the app, and its system of state management was a big help in keeping organized, but things still got pretty hairy when I got into the multi-step transitions. Initially I gave the user control of when to move through each step of a round (selection, labeling, retraining), which greatly increased the number of transitions I had to prepare for (what if they changed datasets after the labeling set?), so I scaled it back by changing all the steps in a round together. It worked out, but I wouldn't mind another crack at this in a future prototype."),Object(r.b)("h4",null,"Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://activelearner.fastforwardlabs.com/"}),"Active Learner")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://grantcuster.github.io/umap-explorer/"}),"UMAP Explorer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://feed.grantcuster.com/stack/ff10-prototype"}),"A screenshot design history of Active Learner")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/GrantCuster/status/1113502812552474625"}),"My Twitter thread about Active Learner"))))}h.isMDXComponent=!0},cT09:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2019-04-29-visualizing-active-learning",function(){var e=a("NGQF");return{page:e.default||e}}])}},[["cT09","5d41","9da1"]]]);