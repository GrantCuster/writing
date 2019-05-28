(window.webpackJsonp=window.webpackJsonp||[]).push([["3a09"],{jy1p:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2017-10-26-alphago-zero",function(){var e=a("pUDz");return{page:e.default||e}}])},pUDz:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"default",function(){return p});var o=a("kOwS"),n=a("qNsG"),r=(a("q1tI"),a("E/Ix")),i={layout:"post",title:"AlphaGo Zero's win, what it means",date:new Date("2017-10-25T00:00:00.000Z"),preview_image:"/images/2017/10/220px_Go_board_part-1508964914733.jpg",author:"Friederike",author_link:"https://twitter.com/FSchueuer",published:!0},l={frontMatter:i},s="wrapper";function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(s,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In an almost Freudian twist, a play on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.gutenberg.org/files/41214/41214-h/41214-h.htm"}),Object(r.b)("em",{parentName:"a"},"Vatermord"))," by an artificial intelligence, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://deepmind.com/blog/alphago-zero-learning-scratch/"}),"AlphaGo Zero"),' has dethroned its "parent," AlphaGo. '),Object(r.b)("p",null,"In March 2016, AlphaGo ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.theatlantic.com/technology/archive/2016/03/the-invisible-opponent/475611/"}),"defeated 18-time world Go champion Lee Sedol"),". At the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://events.google.com/alphago2017/"}),"Future of Go Summit in May 2017"),", AlphaGo prevailed against China's top Go players including Ke Jie, who was considered to be the world's best Go player. "),Object(r.b)("p",null,"AlphaGo's reign was short lived. On October 18th 2017, in a tournament to which human players were not invited, AlphaGo Zero beat AlphaGo."),Object(r.b)("h2",null,"What's cool about AlphaGo Zero, and what isn't"),Object(r.b)("p",null,"Shortly after AlphaGo's success in May 2016, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://cs.stanford.edu/people/karpathy/"}),"Andrej Karpathy")," (Director of AI at Tesla) wrote an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.com/@karpathy/alphago-in-context-c47718cb95a5"}),"insightful post")," explaining why AlphaGo is cool, and, largely, why it isn't:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"AlphaGo is a narrow AI system that can play Go and that’s it. The ATARI-playing agents from DeepMind do not use the approach taken with AlphaGo. The Neural Turing Machine has little to do with AlphaGo. The Google data center improvements definitely do not use AlphaGo. The Google Search engine is not going to use AlphaGo. Therefore, AlphaGo does not generalize to any problem outside of Go ","[...]","."))),Object(r.b)("p",null,'AlphaGo was successful because its DeepMind creators studied the game Go and uncovered (at least) seven characteristics (or "conveniences") of the game Go, which they then exploited to build an expert AI game-playing agent.'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"All but one")," of these characteristics are still at the heart of the success of AlphaGo Zero. Unlike Alpha Go, trained on human game-playing data ",Object(r.b)("em",{parentName:"p"},"and")," through playing against itself, AlphaGo Zero learns ",Object(r.b)("em",{parentName:"p"},"only")," through self-play. Therefore, AlphaGo Zero does not rely on readily available human game-playing data, and - since data on human behavior is not be available for most real-world problems - for moving beyond the world of games, removing ",Object(r.b)("em",{parentName:"p"},"that")," requirement is great."),Object(r.b)("p",null,"But, AlphaGo Zero still relies on other characteristics of Go: most importantly, the ",Object(r.b)("em",{parentName:"p"},"access to a perfect simulator")," (the game itself) and (relatively) ",Object(r.b)("em",{parentName:"p"},"short games with clear wins and losses"),". AlphaGo Zero does not have to worry about today's weather (and make it a part of its simulator); self-driving cars do. Complex decisions have outcomes far beyond the time-horizon of a typical game of Go. In life, there are rarely clear winners and clear losers. AlphaGo Zero, like AlphaGo, is still a narrow AI system."),Object(r.b)("p",null,"Karpathy updated his post last week:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Update Oct 18, 2017: AlphaGo Zero was announced. This post refers to the previous version. 95% of it still applies."))),Object(r.b)("p",null,"Yes."),Object(r.b)("p",null,"We encourage you to read ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://spectrum.ieee.org/transportation/self-driving/the-big-problem-with-selfdriving-cars-is-people"}),"Rodney Brooks' quite amusing account")," of all the things self-driving cars have to worry about (like being bullied by humans)."),Object(r.b)("h2",null,"Okay, now what's cool"),Object(r.b)("p",null,"AlphaGo Zero ",Object(r.b)("em",{parentName:"p"},"is")," cool. AlphaGo has two neural networks, one trained to generate a distribution over likely Go moves and one to generate an evaluation for each move (i.e., how likely it is to lead to a win). AlphaGo Zero has only ",Object(r.b)("em",{parentName:"p"},"one")," neural network trained on a dual objective (move ",Object(r.b)("em",{parentName:"p"},"and")," evaluation prediction) (see ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nature.com/nature/journal/v550/n7676/full/nature24270.html"}),"the Nature paper"),"); this is a neat application of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://arxiv.org/abs/1706.05098"}),"multi-task learning"),"."),Object(r.b)("p",null,"AlphaGo Zero uses a tweaked, simplified, and very clever ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://jeffbradberry.com/posts/2015/09/intro-to-monte-carlo-tree-search/"}),"Monte Carlo Tree Search")," (MCTS) that relies on the (single) neural network to evaluate positions and sample moves; the neural network guides the MCTS (and therefore MCTS improves with neural network training)."),Object(r.b)("p",null,"AlphaGo zero also uses a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://arxiv.org/abs/1512.03385"}),"residual learning framework"),", a framework that makes it easier to train very deep networks."),Object(r.b)("p",null,"So, AlphaGo Zero (like AlphaGo) is a ",Object(r.b)("em",{parentName:"p"},"very clever combination")," of ",Object(r.b)("em",{parentName:"p"},"known components")," to achieve a goal better than any known solution for a ",Object(r.b)("em",{parentName:"p"},"well-understood problem"),": it's cool. And, it follows the (secret) recipe for any successful machine learning or AI product; a thorough understanding of the problem is as important as a good grasp of the tech."),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"real awesomeness of AlphaGo Zero"),", however, is the reduction in computational complexity and required compute power for training due to algorithmic advances and (as so often) hardware improvements. After just three days of self-play training on 4 TPUs, AlphaGo Zero defeated AlphaGo. (For comparison, the first generation of the AlphaGo lineage needed 176 GPUs.) Compute power can be a real bottleneck; the reduction in compute power is impressive."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/images/2017/10/AlphaGo20Efficiency_width_1500-1508465583728.png",alt:null}))),Object(r.b)("h5",null,"Image Credit: ",Object(r.b)("a",Object(o.a)({parentName:"h5"},{href:"https://deepmind.com/blog/alphago-zero-learning-scratch/"}),"Google DeepMind"),"."),Object(r.b)("p",null,"The approach taken by AlphaGo Zero may help solve other problems that are ",Object(r.b)("em",{parentName:"p"},"structurally similar")," to Go (i.e., problems that share characteristics of the game Go). Other games come to mind, and the DeepMind researchers suggest structured problems like protein folding, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://deepmind.com/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-40/"}),"reducing energy consumption"),", or searching for revolutionary new materials. The application of AlphaGo Zero to these problems won't be trivial."),Object(r.b)("h2",null,"What's interesting"),Object(r.b)("p",null,"Through pure self-play without any guidance by human game playing data, AlphaGo Zero learned moves and strategies known to Go players: "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"AlphaGo Zero rapidly progressed from entirely random moves towards a sophisticated understanding of Go concepts, including")," ",Object(r.b)("strong",{parentName:"p"},"fuseki")," ",Object(r.b)("em",{parentName:"p"},"(opening)"),", ",Object(r.b)("strong",{parentName:"p"},"tesuji")," ",Object(r.b)("em",{parentName:"p"},"(tactics)"),", ",Object(r.b)("strong",{parentName:"p"},"life-and-death"),", ",Object(r.b)("strong",{parentName:"p"},"ko")," ",Object(r.b)("em",{parentName:"p"},"(repeated board situations)"),", ",Object(r.b)("strong",{parentName:"p"},"yose")," ",Object(r.b)("em",{parentName:"p"},"(endgame)"),", ",Object(r.b)("strong",{parentName:"p"},"capturing races"),", ",Object(r.b)("strong",{parentName:"p"},"sente")," ",Object(r.b)("em",{parentName:"p"},"(initiative)"),", ",Object(r.b)("strong",{parentName:"p"},"shape"),", ",Object(r.b)("strong",{parentName:"p"},"influence")," ",Object(r.b)("em",{parentName:"p"},"and")," ",Object(r.b)("strong",{parentName:"p"},"territory"),", ",Object(r.b)("em",{parentName:"p"},"all discovered from first principles.")," ")),Object(r.b)("p",null,"But what comes easy to humans may not come as easily to an AI:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Surprisingly,")," ",Object(r.b)("strong",{parentName:"p"},"shicho")," ",Object(r.b)("em",{parentName:"p"},"(‘ladder’ capture sequences that may span the whole board) — one of the first elements of Go knowledge learned by humans — were only understood by AlphaGo Zero much later in training."))),Object(r.b)("p",null,"Human Go players may have developed, or stumbled across, strategies to compensate for limits in the brain's compute power (e.g., limited ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.sciencedirect.com/science/article/pii/S0079742108604521"}),"working memory"),"). Comparing the machine's to human play may yield insights into the development of strategies for complex games."),Object(r.b)("p",null,"Not all the moves the systems learned to make were components of known strategies; it is likely that Go masters will study the moves of AlphaGo Zero to inform their own strategies and future chances of winning."),Object(r.b)("p",null,"Rather poetically, Andy Okun and Andrew Jackson from the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.usgo.org/"}),"American Go Association")," describe the (possible) exchange between human and artificially intelligent AI masters as ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nature.com/nature/journal/v550/n7676/pdf/550336a.pdf"}),'"a conversation"'),"):"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Go players, coming from so many nations, speak to each other with their moves, even when they do not share an ordinary language. They share ideas, intuitions and, ultimately, their values over the board — not only particular openings or tactics, but whether they prefer chaos or order, risk or certainty, and complexity or simplicity. The time when humans can have a meaningful conversation with an AI has always seemed far off and the stuff of science fiction. But for Go players, that day is here."))),Object(r.b)("p",null,"AlphaGo Zero, welcome!"),Object(r.b)("h2",null,"Parting thoughts"),Object(r.b)("p",null,'The DeepMind researchers characterize Go (in their paper introducing AlphaGo Zero) as belonging to one of the "most challenging domains in terms of human intellect." While convenient, a solution is all the more impressive when the problem is extremely difficult. Aren\'t there more important problems for us to solve, more challenging problems?'),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/images/2017/10/gallery_6-1508465225174.jpg",alt:null}))),Object(r.b)("h5",null,"The number of possible configurations on the Go board is greater than the number of atoms in the universe, according to the ",Object(r.b)("a",Object(o.a)({parentName:"h5"},{href:"https://www.alphagomovie.com/"}),"AlphaGo Movie"),", but complexity is more than combinatorics."),Object(r.b)("p",null,"Complexity is more than combinatorics, the number of possible states in the world (in that sense, and in that sense only, Go is a complex game). As F. Scott Fitzgerald once said: "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function."))),Object(r.b)("p",null,"AlphaGo Zero, alongside its other artificially intelligent companions, would suffer; they need a black or white world. "))}p.isMDXComponent=!0}},[["jy1p","5d41","9da1"]]]);