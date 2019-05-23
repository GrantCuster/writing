(window.webpackJsonp=window.webpackJsonp||[]).push([["a0e5"],{AM5y:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return r}),a.d(t,"default",function(){return h});var i=a("kOwS"),n=a("qNsG"),o=(a("q1tI"),a("E/Ix")),r={layout:"post",title:"Encartopedia",date:"2017-08-15 10:30",preview_image:"/images/2017/08/enc-tabula.jpg",author:"Sepand",author_link:"https://sepans.com/sp",feature:!0},s={frontMatter:r},c="wrapper";function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"/images/2017/08/enc-tabula.jpg",alt:"Tabula Rogeriana"}))),Object(o.b)("h5",null,"The ",Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"https://en.wikipedia.org/wiki/Tabula_Rogeriana"}),"Tabula Rogeriana"),", a world map created by Muhammad al-Idrisi through traveler interviews in 1154."),Object(o.b)("p",null,"The Wikipedia corpus is one of the favorite datasets of the machine learning community. It is often used for experimenting, benchmarking and providing how-to examples. These experiments are generally presented separate from the Wikipedia user interface, however, which has remained true to the early hypertext vision of the web. For this experiment, ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://encartopedia.fastforwardlabs.com"}),Object(o.b)("em",{parentName:"a"},"Encartopedia")),", I used machine learning techniques and visualization to explore new navigation possibilities for Wikipedia while preserving its hypertextual feel. With Encartopedia, you can map the path of any ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://xkcd.com/214/"}),"journey")," through Wikipedia, or use the visualization to jump to articles near and far."),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"/images/2017/08/enc-ui.png",alt:"Encartopedia"}))),Object(o.b)("h5",null,Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"http://encartopedia.fastforwardlabs.com"}),"Encartopedia")," features the conventional Wikipedia interface in the left panel, and a mapping of articles based on similarity on the right."),Object(o.b)("h2",null,"Mapping articles"),Object(o.b)("p",null,"The starting point for the research was ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://seealso.hatnote.com/"}),"hatnote.com")," which has a glossary of Wikipedia visualizations and alternative user interfaces. Among those examples ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://wiki.polyfra.me/"}),"Wikigalaxy")," by ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://byowen.com/"}),"Owen Cornec")," was the most inspiring for its attempt to map the semantic space of Wikipedia into a navigable space. From Wikigalaxy I borrowed the coordinates of their dimensionality reduction algorithm, mapping the articles to 2D coordinates for the 100,000 top Wikipedia articles."),Object(o.b)("p",null,"The mapping of the top 100,000 articles makes up the base visualization in the right-hand panel of Encartopedia. The mapping is not only limited to those 100,000 articles, however. Any article you navigate to in Wikipedia can be located on the navigation map. To make this possible I used a method similar to this ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://rare-technologies.com/performance-shootout-of-nearest-neighbours-contestants/"}),"benchmark")," to create a fast index of 500 dimensional LSA vectors for all five million articles. I used ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/spotify/annoy"}),"Annoy"),' to query the nearest neighbors of the chosen article and used triangulation to then place the article on the map. The nearest neighbors are also displayed above the Wikipedia article in the "Semantic Neighbors" section.'),Object(o.b)("h2",null,"Categorizing clusters"),Object(o.b)("p",null,"In order to color code and categorize the topic clusters in the article map, I applied the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html"}),"DBSCAN")," clustering algorithm over the result of article coordinates. Unlike many other clustering algorithms DBSCAN doesn't create evenly sized clusters, making it a good fit for the map clusters (after some parameter tuning). DBSCAN doesn't assign categories to all the points but it is easy to assign those points to a cluster in the second pass using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://scikit-learn.org/stable/modules/neighbors.html"}),"Nearest Neighbors"),". To name the clusters I scraped the Wikipedia categories assigned to those articles and found the top category shared between them."),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"/images/2017/08/enc-color.png",alt:"Coloring the map"}))),Object(o.b)("h5",null,"Color coding points by clustering using DBSCAN"),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"/images/2017/08/enc-voro.png",alt:"Voronoi overlay of the map"}))),Object(o.b)("h5",null,"Overlaying the clusters with a voronoi diagram for mouseover interactions."),Object(o.b)("h2",null,"Making it interactive"),Object(o.b)("p",null,"The UI is build using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://facebook.github.io/react/"}),"React")," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://redux.js.org/"}),"Redux"),". The map is mostly in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://threejs.org/"}),"three.js")," and rendered on a canvas except for the annotations which are SVG. Using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://d3js.org/"}),"D3.js")," is almost inevitable in any data-driven UI, especially with the modular design of version 4, however the DOM manipulation is done only with React."),Object(o.b)("h2",null,"The possibilities of encyclopedia cartography"),Object(o.b)("p",null," My interest in Wikipedia is not just because I spend too much time reading random articles, but also because I am fascinated by the idea of the ultimate encyclopedia containing the totality of human knowledge. Once such an encyclopedia was an idealistic dream that was mostly ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.pastemagazine.com/blogs/lists/2014/03/10-of-the-weirdest-mostly-fictional-encyclopedias.html"}),"fantasized about in literature"),", but now its accessibility has  trivialized it to the point it no longer has its past allure. So maybe being able to map and log the navigation within this meta-space brings back a little bit of the old fantasy."),Object(o.b)("p",null," On the other hand hyperlinks are no longer the unique source of signifying the relation between two nodes on the web. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://medium.com/matter/the-web-we-have-to-save-2eb1fe15a426"}),"The hypertext web is declining")," where social media indexes play a more important role in determining how much media objects on the web are valuable and related. Wikipedia is unique for remaining purely hypertextual. Encartopedia is also a celebration of the good old hypertextual web. "),Object(o.b)("h5",null,"In the end I wanted to mention how grateful I am for Fast Forward Labs, especially ",Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"https://twitter.com/GrantCuster"}),"Grant"),", ",Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"https://twitter.com/hmason"}),"Hilary")," for giving me the opportunity to work on this project which I have been fascinated with for a long time. I would also like to thank ",Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"https://github.com/mynameisfiber"}),"Micha")," for help with figuring out ML challenges and ",Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"https://twitter.com/purplebulldozer"}),"Raschin")," for help with UI, ",Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"https://twitter.com/hatnotable"}),"hatnote")," and ",Object(o.b)("a",Object(i.a)({parentName:"h5"},{href:"https://twitter.com/owencornec"}),"Owen Cornec")," for inspiration and all the creators and contributors to the open-source projects I have used."),Object(o.b)("p",null,"–"," ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://sepans.com/sp"}),"Sepand")))}h.isMDXComponent=!0},kE7G:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2017-08-08-encartopedia",function(){var e=a("AM5y");return{page:e.default||e}}])}},[["kE7G","5d41","9da1"]]]);