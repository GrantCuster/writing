(window.webpackJsonp=window.webpackJsonp||[]).push([["e191"],{"4keH":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2017-03-09-fairml-auditing-black-box-predictive-models",function(){var e=a("e/nC");return{page:e.default||e}}])},"e/nC":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return r}),a.d(t,"default",function(){return l});var n=a("kOwS"),i=a("qNsG"),o=(a("q1tI"),a("E/Ix")),r={layout:"post",title:"FairML: Auditing Black-Box Predictive Models",date:"2017-03-09 09:44",preview_image:"/images/2017/03/fairness_and_justice_symbol.png",feature:!0,post_type:"Whitepaper",author:"Julius",author_link:"https://twitter.com/julius_adebayo"},s={frontMatter:r},c="wrapper";function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2017/03/fairness_and_justice_symbol.png",alt:"Fairness in ML"}))),Object(o.b)("p",null,"Machine learning models are used for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.nber.org/papers/w23180"}),"important decisions"),"\nlike ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.law.nyu.edu/sites/default/files/upload_documents/Angele%20Christin.pdf"}),"determining who has access to bail"),".\nThe aim is to increase efficiency and spot patterns in data that humans would otherwise miss.\nBut how do we know if a machine learning model is fair? And what does fairness in machine learning mean?"),Object(o.b)("p",null,"In this post, we'll explore these questions using\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/adebayoj/fairml"}),"FairML"),", a new Python library that audits\nblack-box predictive models and is based on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1611.04967"}),"work I did with my advisor while\nat MIT"),". We'll apply it to a hypothetical\nrisk model based on data collected by ProPublica in their investigation of the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing"}),"COMPAS\nalgorithm"),".\nWe'll also go over the methodology behind FairML at a conceptual level and\ndescribe other work addressing bias in machine learning."),Object(o.b)("p",null,"This post is a prelude to our upcoming research report and prototype on algorithmic interpretability, which we'll release in the next few months. Understanding how algorithms use inputs to inform outputs is, in certain instances, a condition for organizations to adopt machine learning systems. This is particularly salient when algorithms are used for sensitive use cases, like criminal sentencing."),Object(o.b)("h2",null,"Recidivism & ProPublica"),Object(o.b)("p",null,"Until recently, judges and legal professionals were the sole arbiters deciding whether to release someone on bail. Legislation and other\nchecks that limit discrimination in this process are designed with\nhuman biases in mind. As algorithms influence--or even take over--these types of decisions, it\nis not clear how to audit the process for fairness and\ndiscrimination."),Object(o.b)("p",null,"Police and legal professionals in states like Virginia, Arizona, and Florida now use scores from the COMPAS algorithm to support decisions about who to set free, typically regarding bail and/or sentencing. The makers claim the COMPAS algorithm can\nfairly predict whether a person will re-offend.\nThe exact details and methodology of the COMPAS algorithm are not publicly\navailable, but ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://criminology.fsu.edu/wp-content/uploads/Validation-of-the-COMPAS-Risk-Assessment-Classification-Instrument.pdf"}),"several"),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.northpointeinc.com/files/technical_documents/FieldGuide2_081412.pdf"}),"studies"),"\nhave assessed its performance."),Object(o.b)("p",null,"In a recent investigation, ProPublica analyzed the risk scores produced by\nthe ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"(https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm)"}),"COMPAS model"),"\nfor about 7000 individuals in Broward County, Florida and found that"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"[COMPAS]"," correctly predicts recidivism 61 percent of the time. But blacks are\nalmost twice as likely as whites to be labeled a higher risk but not actually\nre-offend. It makes the opposite mistake among whites: they are much more\nlikely than blacks to be labeled lower risk but go on to commit other crimes.")),Object(o.b)("h2",null,"Multicollinearity and Indirect Effects"),Object(o.b)("p",null,"In its investigation, ProPublica ran ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm"}),"several regression\nmodels"),"\nto quantify how COMPAS risk scores depend on race and other factors.\nRegressions allow one to use the magnitude and sign of the\ncoefficient estimate obtained as a measure of an model's dependence\non particular attributes. However, indirect effects might still not\nbe accounted for if the attributes used in the regression are co-linear."),Object(o.b)("p",null,"The variance inflation factor (VIF) allows us to quantify multicollinearity before\nrunning a regression. Despite low VIF scores, a variable correlated with other attributes -even midly-\nused in the regression can still have indirect effects. Consequently, we need a way to properly account for\nthe issue of ",Object(o.b)("strong",{parentName:"p"},"multicollinearity")," and ",Object(o.b)("strong",{parentName:"p"},"indirect effects")," for black-box\nmodels. FairML provides this capability."),Object(o.b)("h2",null,"Audit of a Proxy Model"),Object(o.b)("p",null,"While used for public sentencing, Northpointe's COMPAS risk assessment\nalgorithm is proprietary, so ProPublica was not able to directly examine its model.\nInstead, ProPublica manually collected data on the COMPAS risk scores\nfor thousands of cases in Broward, County FL. Using this data, they built\nregression models that measure the relationship between race and the\nrisk scores COMPAS produces."),Object(o.b)("p",null,"For our audit, we used a proxy model. We built a logistic\nregression proxy model using the attributes collected by ProPublica\nand assumed this model was an oracle, i.e., a ",Object(o.b)("em",{parentName:"p"},"reasonable")," approximation of the\nCOMPAS model.  We then audit this proxy model for bias using FairML. As a\nsanity check, we also built more sophisticated models using the ProPublica\ndata, and our conclusions remain the same."),Object(o.b)("h2",null,"FairML"),Object(o.b)("h3",null,"Perturbation"),Object(o.b)("p",null,"The basic idea behind FairML (and many other attempts to audit or interpret model behavior)\nis to measure a model's dependence on its inputs by\nchanging them. If a small change to an input feature dramatically changes the output,\nthe model is sensitive to the feature."),Object(o.b)("p",null,"For example, imagine we have a predictive model of income that takes as input\nattributes age, occupation, and educational level. One way of determining the\nmodel's dependence on age is to see how much the model's prediction of an\nindividual's income changes if the individual's age is slightly ",Object(o.b)("strong",{parentName:"p"},"perturbed"),".\nIf the model places high importance on age, then a slight change would result in\na big change to the prediction."),Object(o.b)("p",null,"But what if the input attributes are correlated? This is certainly true of age\nand education: there aren't many 16-year olds with PhDs! This means that perturbing\nage alone will not provide an accurate measure\nof the model's dependency on age. One has to perturb the other input\nattributes as well."),Object(o.b)("h3",null,"Orthogonal Projection as a Perturbation Scheme"),Object(o.b)("p",null,"The trick FairML uses to counter this multicollinearity is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Projection_(linear_algebra)"}),"orthogonal"),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.khanacademy.org/math/linear-algebra/alternate-bases/orthogonal-projections/v/linear-algebra-projections-onto-subspaces"}),"projection"),".\nFairML orthogonally projects the input to measure the\ndependence of the predictive model on each attribute."),Object(o.b)("p",null,"Why does this help? Orthogonal projection is a type of vector projection.\nA projection maps one vector onto another. If you project a vector ",Object(o.b)("strong",{parentName:"p"},"a"),"\nonto vector ",Object(o.b)("strong",{parentName:"p"},"b"),", then you get the component of vector ",Object(o.b)("strong",{parentName:"p"},"a"),"\nthat lies in the direction of vector ",Object(o.b)("strong",{parentName:"p"},"b"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2017/03/fairml-01.png",alt:"Orthogonal Projection Demonstration"}))),Object(o.b)("p",null,"An orthogonal projection is a particular type of vector projection that maps a\nvector onto a direction orthogonal (or perpendicular) to reference vector. For\nexample, if we orthogonally project vector ",Object(o.b)("strong",{parentName:"p"},"v")," onto ",Object(o.b)("strong",{parentName:"p"},"s")," (in Euclidean\nspace), we get the component of vector ",Object(o.b)("strong",{parentName:"p"},"v")," that is at perpendicular to vector\n",Object(o.b)("strong",{parentName:"p"},"s"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2017/03/fairml-02.png",alt:"Orthogonal Projection Demonstration"}))),Object(o.b)("p",null,"Orthogonal projection of vectors is important for FairML because it allows us to\ncompletely remove the linear dependence between attributes. If two vectors\nare orthogonal to one another, then no ",Object(o.b)("strong",{parentName:"p"},"linear transformation")," of one vector can\nproduce the other. This intuition underlies the feature dependence measure\nin FairML."),Object(o.b)("p",null,"More concretely, if we have a model, ",Object(o.b)("strong",{parentName:"p"},"F"),", trained on two features ",Object(o.b)("strong",{parentName:"p"},"x")," and\n",Object(o.b)("strong",{parentName:"p"},"y"),", the dependence of model ",Object(o.b)("strong",{parentName:"p"},"F")," on ",Object(o.b)("strong",{parentName:"p"},"x")," is determined by quantifying the\nchange in output on a transformed input. This transformed input perturbs ",Object(o.b)("strong",{parentName:"p"},"x"),", and the other feature ",Object(o.b)("strong",{parentName:"p"},"y")," is made orthogonal to\n",Object(o.b)("strong",{parentName:"p"},"x"),"."),Object(o.b)("p",null,"The change in output between the perturbed input and the original input\nindicates the dependence of the model on a given attribute, and we can be\nconfident that there are no hidden collinearity effects."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2017/03/fairml-03.png",alt:"FairML Process Diagram",title:"FairML Process Diagram"}))),Object(o.b)("p",null,"If you're familiar with vector projection, you may note that orthogonal\nprojection is a linear transformation. This means it does not account for\nnon-linear dependence among attributes. This is a valid concern. FairML\naccounts for this by a basis expansion and a greedy search over such\nexpansions (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/adebayoj/fairml/tree/master/doc/thesis_document"}),"see chapter 4 of thesis"),",\nand ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/adebayoj/fairml/blob/master/fairml/non_linear_expansion.py"}),"FairML repo"),")."),Object(o.b)("h2",null,"FairML - Demo"),Object(o.b)("p",null,"Finally, here's how to use the FairML Python package to audit a\nblack-box model using the ",Object(o.b)("inlineCode",{parentName:"p"},"audit_model")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from fairml import audit_model\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"audit_model")," takes two required arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A function that classifies data, i.e., the model of interest."),Object(o.b)("li",{parentName:"ul"},"Sample data to be perturbed by the querying function (a pandas DataFrame\nwith no missing data). This sample data should represent\ndata the model will encounter in the real world.")),Object(o.b)("p",null,"It also takes optional keywords that control the mechanics of the auditing\nprocess, including"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the number of iterations to perform"),Object(o.b)("li",{parentName:"ul"},"a Boolean flag to enable/disable checking model dependence on interactions"),Object(o.b)("li",{parentName:"ul"},"distance metric to to quantify dependence.")),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/adebayoj/fairml"}),"FairML")," repository for a more\ndetailed explanation of how these parameters affect the auditing process."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"audit_model")," returns a dictionary whose keys are the column names of the input\npandas DataFrame and whose values are lists containing model dependence on that\nparticular feature for each iteration performed."),Object(o.b)("p",null,"Let's use scikit-learn to make a model for FairML to audit. We're using a\n",Object(o.b)("inlineCode",{parentName:"p"},"LogisticRegression")," model here, but one advantage of FairML is that it can audit any\nclassifier or regressor. FairML only requires that it has a\npredict function."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from sklearn.linear_model import LogisticRegression\n\n# Read in the propublica data to be used for our analysis.\npropublica_data = pd.read_csv("./doc/example_notebooks/propublica_data_for_fairml.csv")\n\n# Create feature and design matrix for model building.\ncompas_rating = propublica_data.score_factor.values\npropublica_data = propublica_data.drop("score_factor", 1)\n\n# Train simple model\nclf = LogisticRegression(penalty=\'l2\', C=0.01)\nclf.fit(propublica_data.values, compas_rating)\n')),Object(o.b)("p",null,"Now let's audit the model built with FairML."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"importances, _ = audit_model( clf.predict, propublica_data)\n\nprint(importances)\n\nFeature: Number_of_Priors,   Importance: 0.3608\nFeature: Age_Above_FourtyFive,   Importance: -0.006805\nFeature: Misdemeanor,    Importance: -0.05266\nFeature: Hispanic,   Importance: -0.008425\nFeature: Age_Below_TwentyFive,   Importance: 0.1533\nFeature: Other,  Importance: -0.004861\nFeature: Two_yr_Recidivism,  Importance: 0.2289\nFeature: African_American,   Importance: 0.2349\nFeature: Asian,  Importance: -0.00032404\nFeature: Female,     Importance: 0.045366\nFeature: Native_American,    Importance: 0.0004861\n")),Object(o.b)("p",null,"As a convenience, FairML includes a basic plotting function to visualize these\ndependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from fairml import plot_dependencies\n\nplot_dependencies(\n    total.median(),\n    reverse_values=False,\n    title="FairML feature dependence"\n)\n')),Object(o.b)("p",null,"That's it. FairML allows us to quickly perform an end-to-end audit of a model\nsimply by passing in a predict method and sample data."),Object(o.b)("h2",null,"Auditing COMPAS"),Object(o.b)("p",null,"Now that we know how FairML works, let's use it to audit a hypothetical COMPAS\nmodel. Here's the output of the demo code above."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2017/03/fairml_propublica_linear_direct_v2.png",alt:"Fairness in ML"}))),Object(o.b)("h5",null,"Relative feature dependence ranking obtained from FariML. Red indicates that the factor highly contributes to a high recidivism rating by COMPAS. Note: We omit the intercept term."),Object(o.b)("p",null,"Let's compare the dependence above with that of the logistic regression model\nobtained in ProPublica's analysis. Below, we show a bar chart of each attribute\nand then feature dependence obtained in the two analyses."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/2017/03/propublica_vs_fairml_feature_dependence.png",alt:"Fairness in ML"}))),Object(o.b)("h5",null,"Relative ranking of Logistic Regression Coefficients obtained by ProPublica. Red indicates that the factor highly contributes to a high recidivism rating by COMPAS. Note: We omit the intercept term."),Object(o.b)("p",null,"The crucial point to note is: when we account for multicollinearity using\nFairML, we actually strengthen ProPublica's claim of bias against\nAfrican Americans, i.e., we see that the model's dependence on that attribute\nincreases. FairML shows that the most significant variable is the number of\npriors an individual has, but this is followed by the attribute\nAfrican American. In their analysis, ProPublica found that the importance of the\nAfrican American attribute was not as strong as attributes such as Age, Native\nAmerican, and Past Recidivism, which differs from the result of our audit."),Object(o.b)("p",null,"As noted earlier, our audit results are for the proxy\nlogistic regression model similar to ProPublica's proxy\nmodel. While this audit is not of the original COMPAS model, we, like ProPublica, take the proxy\nmodel as an reasonable approximation. Ultimately, to\nmake concrete conclusions, we'll need access to the COMPAS model. We also built\nother ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/adebayoj/fairml/blob/master/example_non_linear_models.py"}),"more complicated\nmodels"),"\nbased on this data and audited them. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/adebayoj/fairml/blob/master/doc/images/feature_dependence_plot_fairml_random_forest.png"}),"Our\nresults"),"\nare consistent with the  graph shown above."),Object(o.b)("h2",null,"Other Work"),Object(o.b)("p",null,"There are many other examples of research about auditing black-box models. All use input perturbation to\nmeasure attribute influence on a black-box model, but use different strategies to perturb the input. Two\nprojects stand out: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1602.07043"}),"Adler et al. also propose a data perturbation\nmethod")," (whose ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/algofairness/BlackBoxAuditing"}),"open source code is\navailable"),") and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://ieeexplore.ieee.org/document/7546525/"}),"Datta et.\nal."),"\nattack the problem of auditing black-box models."),Object(o.b)("p",null,"Beyond auditing black box models, the research on fairness and discrimination\nin machine learning has become a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1104.3913"}),"hot button\nissue"),". The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.fatml.org/"}),"Fairness, Accountability and\nTransparency in Machine Learning")," community is active\nand dedicated to this line of research. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1610.02413"}),"Recent work"),"\nhas articulated ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cis.upenn.edu/~aaroth/rawlsbandits.html"}),"new definitions of\nfairness"),", and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1609.05807"}),"the\ninherent tradeoffs")," that different notions of\nfairness lead to."),Object(o.b)("p",null,"Governments and international organizations have become increasingly concerned\nabout algorithmic decision-making too. In fact, the EU recently adopted a\nresolution that allows for a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1606.08813"}),"'right to\nexplanation'")," of algorithmic decisions that\n'significantly' affect an individual. The United States White House has also\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://obamawhitehouse.archives.gov/sites/default/files/docs/big_data_privacy_report_may_1_2014.pdf"}),"published"),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://obamawhitehouse.archives.gov/sites/default/files/whitehouse_files/microsites/ostp/NSTC/preparing_for_the_future_of_ai.pdf"}),"several reports\non"),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/2016_0504_data_discrimination.pdf"}),"big data and\ndiscrimination"),".\nDeveloping and deploying ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://arxiv.org/abs/1606.06565"}),"'artificial intelligence' in a safe\nmanner")," is becoming topical among\nresearchers, industry, and government. Going forward, there seems to be\ndedicated effort on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://venturebeat.com/2017/01/10/linkedin-cofounder-reid-hoffman-omidyar-network-create-27-million-fund-for-ai-in-the-public-interest/"}),"multiple\nfronts"),"\nto tackle this issue."))}l.isMDXComponent=!0}},[["4keH","5d41","9da1"]]]);