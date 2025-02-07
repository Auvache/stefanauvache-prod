(function(){"use strict";var e={7065:function(e,t,n){n(454);var o=n(3751),a=n(641);const i={class:"bg-dark-blue"},s={class:"container medium-content py-2"},r={class:"d-flex justify-content-between align-items-center"},c={class:"menu-links"},l=(0,a.Lk)("span",{class:"bar1 mb-1"},null,-1),m=(0,a.Lk)("span",{class:"bar2 mb-1"},null,-1),d=(0,a.Lk)("span",{class:"bar3"},null,-1),u=[l,m,d],h={id:"dropdown",class:"hamburger-menu d-none"},f=(0,a.Lk)("div",{class:"nav-buffer"},null,-1);var p={__name:"Navbar",setup(e){const t=()=>{let e=document.getElementById("dropdown");e.classList.toggle("d-none")};return(e,n)=>{const o=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",i,[(0,a.Lk)("div",s,[(0,a.Lk)("div",r,[(0,a.bF)(o,{class:"logo",to:"/"},{default:(0,a.k6)((()=>[(0,a.eW)(" STEFAN AUVACHE ")])),_:1}),(0,a.Lk)("div",c,[(0,a.bF)(o,{class:"white",to:"/subscribe"},{default:(0,a.k6)((()=>[(0,a.eW)("Subscribe")])),_:1}),(0,a.Lk)("div",null,[(0,a.Lk)("button",{class:"hamburger-icon",type:"button",onClick:t},u),(0,a.Lk)("ul",h,[(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/articles"},{default:(0,a.k6)((()=>[(0,a.eW)("Read more articles")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/archive"},{default:(0,a.k6)((()=>[(0,a.eW)("Visit the archive")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/about"},{default:(0,a.k6)((()=>[(0,a.eW)("Learn more")])),_:1})])])])])])])]),f],64)}}};const g=p;var w=g,b=n(33),v=n(953);const y=(0,v.Kh)({year:2024}),k={class:"py-4 bg-dark-blue"},x={class:"container thinnest-content text-center fade-in"},T=(0,a.Lk)("p",{class:"white mb-0"},[(0,a.eW)("Subscribe to the "),(0,a.Lk)("span",{class:"fw-bold fst-italic"},"Food For Thought"),(0,a.eW)(" email list for weekly articles on practical life lessons from the worlds of technology, business, literature, and music.")],-1),L={class:"subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center"};function A(e,t){return(0,a.uX)(),(0,a.CE)("section",k,[(0,a.Lk)("div",x,[(0,a.Lk)("div",null,[T,(0,a.Lk)("div",null,[(0,a.Lk)("div",L,[((0,a.uX)(),(0,a.Wv)((0,a.$y)("script"),{async:"","data-uid":"0396ab84d5",src:"https://stefan-bradley.ck.page/0396ab84d5/index.js"}))])])])])])}var S=n(6262);const E={},C=(0,S.A)(E,[["render",A]]);var F=C,W=n(5220);const M={class:"fade-in-up"},P={class:"bg-gray text-center py-4"},D={class:"container"},B={class:"row"},R={class:"m-0 tagline"};var j={__name:"Footer",setup(e){const t=(0,v.KR)(!0),n=(0,W.lq)();return(0,a.wB)(n,(()=>{t.value=!location.href.includes("/subscribe")})),(e,n)=>((0,a.uX)(),(0,a.CE)("div",M,[t.value?((0,a.uX)(),(0,a.Wv)(F,{key:0})):(0,a.Q3)("",!0),(0,a.Lk)("footer",null,[(0,a.Lk)("section",P,[(0,a.Lk)("div",D,[(0,a.Lk)("div",B,[(0,a.Lk)("p",R,"Property of Stefan Auvache Bradley, "+(0,b.v_)((0,v.R1)(y).year),1)])])])])]))}};const N=j;var q=N;const O={id:"mainContent",class:"loading"};var H={__name:"App",setup(e){return(e,t)=>{const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(w),(0,a.Lk)("div",O,[(0,a.bF)(n)]),(0,a.bF)(q)],64)}}};const I=H;var G=I;const _=[{path:"/",name:"Home",component:()=>Promise.all([n.e(325),n.e(936)]).then(n.bind(n,936)),meta:{title:"Stefan Auvache",canonical:"https://www.stefanauvache.com",metaTags:[{name:"description",content:"Education, both formal and personal, always changes lives for the better. Universal, practical life lessons lie waiting to be discovered in literature, business, technology, and even music."},{name:"keywords",content:"Stefan Auvache, articles, learning, lifelong learning, education, philosophy, articles, literature, business, technology, music"},{name:"robots",content:"index, follow"}]}},{path:"/:catchAll(.*)*",name:"PageNotFound",component:()=>n.e(555).then(n.bind(n,5555)),meta:{title:"Requested Page Not Found",metaTags:[{name:"description",content:"Requested Page Not Found on"}]}},{path:"/about",name:"About",component:()=>n.e(559).then(n.bind(n,5559)),meta:{title:"About Stefan Auvache",canonical:"https://www.stefanauvache.com/about",metaTags:[{name:"description",content:"Read articles with insights on business, technology, literature, philosophy, music, and life."},{name:"keywords",content:"about, articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles"},{name:"robots",content:"index, follow"}]}},{path:"/articles",name:"Articles",component:()=>Promise.all([n.e(325),n.e(505)]).then(n.bind(n,505)),meta:{title:"Articles",canonical:"https://www.stefanauvache.com/articles",metaTags:[{name:"description",content:"Read articles with insights on business, technology, literature, philosophy, music, and life."},{name:"keywords",content:"articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles"},{name:"robots",content:"index, follow"}]}},{path:"/archive",name:"Archive",component:()=>n.e(633).then(n.bind(n,2014)),meta:{title:"Archive",canonical:"https://www.stefanauvache.com/archive",metaTags:[{name:"description",content:"Read articles with insights on business, technology, literature, philosophy, music, and life."},{name:"keywords",content:"articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles"},{name:"robots",content:"index, follow"}]}},{path:"/music",name:"Music",component:()=>n.e(446).then(n.bind(n,1446)),meta:{title:"Music",canonical:"https://www.stefanauvache.com/music",metaTags:[{name:"description",content:"Music I love, music I make"},{name:"keywords",content:"music, share music, love music"},{name:"robots",content:"index, follow"}]}},{path:"/sitemap",name:"Sitemap",component:()=>n.e(306).then(n.bind(n,4306)),meta:{title:"Stefan Auvache Sitemap",canonical:"https://www.stefanauvache.com/sitemap",metaTags:[{name:"description",content:"Sitemap for Stefan Auvache"},{name:"keywords",content:"sitemap, Stefan Auvache"},{name:"robots",content:"index, follow"}]}},{path:"/subscribe",name:"Subscribe",component:()=>n.e(11).then(n.bind(n,4011)),meta:{title:"Subscribe to Food For Thought",canonical:"https://www.stefanauvache.com/subscribe",metaTags:[{name:"description",content:"Subscribe to my Food For Thought newsletter for the latest updates, exclusive content, and special offers delivered straight to your inbox. Stay informed and never miss out. Join our community today!"},{name:"keywords",content:"subscribe, newsletter, email list, Food For Thought, articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache"},{name:"robots",content:"index, follow"}]}},{path:"/articles/agile-development-a-pattern-for-improvement",name:"AgileDevelopmentAPatternForImprovement",component:()=>n.e(138).then(n.bind(n,6138)),meta:{title:"Agile Development: A Pattern for Improvement",canonical:"https://www.stefanauvache.com/articles/agile-development-a-pattern-for-improvement",metaTags:[{name:"description",content:"Make a plan to get a little closer to where you want to be. Act on that plan. Measure the outcome of your actions. Then, use what you have learned to adjust your vision for the future and plan your next move. Your life will start moving in the direction you really want it to go."},{name:"keywords",content:"agile development, the agile life, agile, business principles applied to life, personal development, project management"},{name:"robots",content:"index, follow"}]}},{path:"/articles/be-curious-not-opinionated",name:"BeCuriousNotOpinionated",component:()=>n.e(716).then(n.bind(n,4716)),meta:{title:"Be Curious, Not Opinionated",canonical:"https://www.stefanauvache.com/articles/be-curious-not-opinionated",metaTags:[{name:"description",content:"Explore the power of curiosity over opinion in shaping perspectives and fostering learning. Discover how curiosity leads to deeper understanding and innovation, with insights on how to navigate conversations and debates with an open mind."},{name:"keywords",content:"Curiosity over opinion, curiosity, Benefits of being curious, How to foster curiosity, Opinion vs. curiosity, Ultracrepidarian, Humility in learning, Innovation through curiosity, Effective communication tips, How to approach debates"},{name:"robots",content:"index, follow"}]}},{path:"/articles/better-business-writing",name:"BetterBusinessWriting",component:()=>n.e(932).then(n.bind(n,7932)),meta:{title:"Better Business Writing",canonical:"https://www.stefanauvache.com/articles/better-business-writing",metaTags:[{name:"description",content:"Writing should be as easy to understand and as meaningful as possible. Make your work entertaining, but not at the expense of simplicity."},{name:"keywords",content:"writing, better writing, business writing, meaningful writing, improve writing, write better articles, war of art, scott adams, steven pressfield, dilbert"},{name:"robots",content:"index, follow"}]}},{path:"/articles/biography-method",name:"BiographyMethod",component:()=>n.e(975).then(n.bind(n,4975)),meta:{title:"The Biography Method: Enhancing Social Interactions Through Curiosity",canonical:"https://www.stefanauvache.com/articles/biography-method",metaTags:[{name:"description",content:"Discover the Biography Method, inspired by Fred Rogers' empathetic approach to connecting with others. Learn how to build deeper relationships by actively listening, asking thoughtful questions, and showing genuine curiosity about people's life stories."},{name:"keywords",content:"Fred Rogers, Biography Method, active listening, empathy in communication, deep connections, François Clemmons, Mr. Rogers' Neighborhood, Marcus Aurelius quote, building relationships, Dale Carnegie, effective communication, personal storytelling, understanding others."},{name:"robots",content:"index, follow"}]}},{path:"/articles/books-that-have-changed-my-life",name:"BooksThatHaveChangedMyLife",component:()=>n.e(719).then(n.bind(n,5719)),meta:{title:"Books That Have Changed My Life",canonical:"https://www.stefanauvache.com/articles/books-that-have-changed-my-life",metaTags:[{name:"description",content:"Find interesting, powerful books and read them. These books that have changed my life."},{name:"keywords",content:"books, best books, interesting books, powerful books, book recommendations, life-changing books, favorite books, literature, business books"},{name:"robots",content:"index, follow"}]}},{path:"/articles/eliminate-automate-delegate-do",name:"EliminateAutomateDelegateDo",component:()=>n.e(395).then(n.bind(n,1395)),meta:{title:"Eliminate Automate Delegate Do",canonical:"https://www.stefanauvache.com/articles/eliminate-automate-delegate-do",metaTags:[{name:"description",content:"Eliminate tasks that don't need to be done, automate tasks that can be automated, delegate tasks that that can be should be done by others, and do the rest of your work."},{name:"keywords",content:"efficiency, eliminate, automate, delegate, do, improve work efficiency, low level tasks, self improvement"},{name:"robots",content:"index, follow"}]}},{path:"/articles/excellent-advice-for-living",name:"ExcellentAdviceForLiving",component:()=>n.e(721).then(n.bind(n,2721)),meta:{title:"Excellent Advice for Living",canonical:"https://www.stefanauvache.com/articles/excellent-advice-for-living",metaTags:[{name:"description",content:'Discover valuable life advice from Kevin Kelly\'s book "Excellent Advice for Living: Wisdom I Wish I’d Known Earlier." Explore 20 insightful quotes that inspire personal growth, goal setting, and living a fulfilling life.'},{name:"keywords",content:"Kevin Kelly, Excellent Advice for Living, wisdom quotes, life advice, personal growth, goal setting, inspirational quotes, life lessons, self-improvement, personal development, motivation, good habits, meaningful life, living well, Kevin Kelly book."},{name:"robots",content:"index, follow"}]}},{path:"/articles/world-class-feedback-loops",name:"WorldClassFeedbackLoops",component:()=>n.e(413).then(n.bind(n,7413)),meta:{title:"Creating World-Class Feedback Loops",canonical:"https://www.stefanauvache.com/articles/world-class-feedback-loops",metaTags:[{name:"description",content:"Learn how to create world-class feedback loops that drive continuous improvement in any area of life or business. Discover strategies used by successful entrepreneurs like Paul Graham and Gordon Ramsay to enhance performance and achieve excellence through effective feedback systems."},{name:"keywords",content:"feedback loops, world-class feedback, continuous improvement, growth mindset, effective feedback, Paul Graham feedback strategy, Gordon Ramsay success tips, iterative improvement, objective feedback sources, professional feedback loop"},{name:"robots",content:"index, follow"}]}},{path:"/articles/giving-life-less-meaning",name:"GivingLifeLessMeaning",component:()=>n.e(501).then(n.bind(n,2501)),meta:{title:"Rewards, Punishments, and Giving Life Less Meaning",canonical:"https://www.stefanauvache.com/articles/giving-life-less-meaning",metaTags:[{name:"description",content:"Discover the surprising results of Gneezy and Rustichini's study on fines and human behavior, exploring the impacts of transactional vs. intrinsic motivation. Learn how incentives can reshape our decisions, punishments can backfire, and rewards can diminish natural motivation."},{name:"keywords",content:"human motivation, Gneezy and Rustichini study, intrinsic vs transactional motivation, behavior study, psychology of fines, economics of behavior, intrinsic rewards, parenting lessons, motivation and punishment, Mark Twain quotes"},{name:"robots",content:"index, follow"}]}},{path:"/articles/grow-your-focus",name:"GrowYourFocus",component:()=>n.e(503).then(n.bind(n,2503)),meta:{title:"Grow Your Focus",canonical:"https://www.stefanauvache.com/articles/grow-your-focus",metaTags:[{name:"description",content:"Anyone can learn to improve their focus. Even if your ability to focus sucks, your capacity to focus is greater than you think. You can focus."},{name:"keywords",content:"focus, improve focus, self improvement, train focus, learn to focus"},{name:"robots",content:"index, follow"}]}},{path:"/articles/have-you-considered-the-cost",name:"HaveYouConsideredTheCost",component:()=>n.e(747).then(n.bind(n,1747)),meta:{title:"Have You Considered the Cost",canonical:"https://www.stefanauvache.com/articles/have-you-considered-the-cost",metaTags:[{name:"description",content:"Find something that engages you. Work to master it. That will bring you satisfaction. Don't be afraid to pursue something challenging. Don't be afraid to suck at something."},{name:"keywords",content:"mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills"},{name:"robots",content:"index, follow"}]}},{path:"/articles/on-living-a-fulfilling-life",name:"LivingAFulfillingLife",component:()=>n.e(620).then(n.bind(n,620)),meta:{title:"On Living a Fulfilling Life...",canonical:"https://www.stefanauvache.com/articles/on-living-a-fulfilling-life",metaTags:[{name:"description",content:"Journey through the life-changing insights from the miracle landing of US Airways Flight 1549. Learn Ric Elias' three key lessons on living fully, prioritizing happiness, and aging with a forward-looking mindset for a more fulfilling life."},{name:"keywords",content:"US Airways Flight 1549, Miracle on the Hudson, Ric Elias life lessons, Chesley Sullenberger, focus on happiness, enjoy life now, parenting advice, aging gracefully, future-focused mindset, personal growth"},{name:"robots",content:"index, follow"}]}},{path:"/articles/mastery",name:"Mastery",component:()=>n.e(293).then(n.bind(n,6293)),meta:{title:"Mastery",canonical:"https://www.stefanauvache.com/articles/mastery",metaTags:[{name:"description",content:"Find something that engages you. Work to master it. That will bring you satisfaction. Don't be afraid to pursue something challenging. Don't be afraid to suck at something."},{name:"keywords",content:"mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills"},{name:"robots",content:"index, follow"}]}},{path:"/articles/monk-week",name:"MonkWeek",component:()=>n.e(291).then(n.bind(n,2291)),meta:{title:"Monk Week",canonical:"https://www.stefanauvache.com/articles/monk-week",metaTags:[{name:"description",content:'Discover how a week of introspection during finals changed the author\'s life in "Monk Week." Explore the benefits of taking time for self-reflection, reading influential books, and setting personal values. Learn how this experience inspired a life of freedom and thoughtful decision-making.'},{name:"keywords",content:"Monk Week, self-reflection, introspection, life-changing experience, finals week, personal values, life goals, self-discovery, reading for self-improvement, How to Win Friends and Influence People, The 4-Hour Workweek, Bill Gates Think Week, Carl Jung The Tower, setting life goals, personal development, avoiding stress, deep thinking, career planning, life efficiency, soul searching, setting priorities, deep reflection."},{name:"robots",content:"index, follow"}]}},{path:"/articles/netflix-chaos-monkey-and-preparing-for-the-worst",name:"NetflixChaosMonkeyAndPreparingForTheWorst",component:()=>n.e(120).then(n.bind(n,4120)),meta:{title:"Netflix, Chaos Monkey, and Preparing for the Worst",canonical:"https://www.stefanauvache.com/articles/netflix-chaos-monkey-and-preparing-for-the-worst",metaTags:[{name:"description",content:"Find something that engages you. Work to master it. That will bring you satisfaction. Don't be afraid to pursue something challenging. Don't be afraid to suck at something."},{name:"keywords",content:"mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills"},{name:"robots",content:"index, follow"}]}},{path:"/articles/premature-optimization",name:"PrematureOptimization",component:()=>n.e(526).then(n.bind(n,9526)),meta:{title:"Premature Optimization",canonical:"https://www.stefanauvache.com/articles/premature-optimization",metaTags:[{name:"description",content:"Explore how Shaun White, the world's most famous snowboarder, transitioned into music with his band, Bad Things, and the powerful lesson he learned about the dangers of premature optimization. Discover why over-preparation can hinder success and how embracing challenges leads to greatness."},{name:"keywords",content:"Shaun White, professional snowboarder, Bad Things band, Lollapalooza performance, premature optimization, over-preparation, productivity tips, Donald Knuth quote, Steven Pressfield, success strategies, overcoming resistance."},{name:"robots",content:"index, follow"}]}},{path:"/articles/relative-sacrifice",name:"RelativeSacrifice",component:()=>n.e(17).then(n.bind(n,6017)),meta:{title:"Relative Sacrifice",canonical:"https://www.stefanauvache.com/articles/relative-sacrifice",metaTags:[{name:"description",content:"Explore the concept of relative sacrifice in relationships and life, delving into how the value of a sacrifice varies between individuals. This thought-provoking article, inspired by a quote from Gabby Reece and a biblical parable, examines the impact of sacrifices in different contexts—from financial donations to everyday gestures like cooking dinner. Learn how understanding the relative weight of sacrifices can improve your relationships and show appreciation for the efforts of those around you."},{name:"keywords",content:"Relative sacrifice, Sacrifice meaning, Gabby Reece quote, Sacrifice in relationships, Understanding sacrifice, Marriage sacrifices, Value of sacrifice, Biblical parables on sacrifice, Luke 21:1-4 meaning, Sacrifice comparison, Acts of sacrifice, Importance of sacrifice, Emotional sacrifices, Relationship dynamics, Identifying sacrifices in relationships"},{name:"robots",content:"index, follow"}]}},{path:"/articles/starting-successful-creative-projects",name:"StartingSuccessfulCreativeProjects",component:()=>n.e(955).then(n.bind(n,8955)),meta:{title:"Starting Successful Creative Projects",canonical:"https://www.stefanauvache.com/articles/starting-successful-creative-projects",metaTags:[{name:"description",content:"Success comes from an unrefined idea that you work on long enough until it becomes something good, then something better, then something great."},{name:"keywords",content:"creativity, craft, ryan holiday, long term success"},{name:"robots",content:"index, follow"}]}},{path:"/articles/unplanned-work",name:"The9090Principle",component:()=>n.e(928).then(n.bind(n,6928)),meta:{title:"Mastery",canonical:"https://www.stefanauvache.com/articles/unplanned-work",metaTags:[{name:"description",content:"Find something that engages you. Work to master it. That will bring you satisfaction. Don't be afraid to pursue something challenging. Don't be afraid to suck at something."},{name:"keywords",content:"mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills"},{name:"robots",content:"index, follow"}]}},{path:"/articles/weaving-baskets-and-better-essays",name:"WeavingBasketsAndBetterEssays",component:()=>n.e(425).then(n.bind(n,2425)),meta:{title:"Weaving Baskets and Better Essays",canonical:"https://www.stefanauvache.com/articles/weaving-baskets-and-better-essays",metaTags:[{name:"description",content:'Write better essays with the "Basket Weaving" method. Learn how to organize your thoughts, assign colors to main ideas, and create cohesive, impactful papers. Discover how this innovative approach, inspired by anthropology studies, can streamline your writing process and improve your academic performance.'},{name:"keywords",content:"better essays, essay writing tips, cohesive writing, organize thoughts, writing method, academic writing, anthropology class, colorful writing technique, essay organization, main ideas in writing, writing process, improve writing skills, college essays, efficient writing, writing strategy, study tips."},{name:"robots",content:"index, follow"}]}},{path:"/articles/why-you-should-read",name:"WhyYouShouldRead",component:()=>n.e(14).then(n.bind(n,5633)),meta:{title:"Why You Should Read",canonical:"https://www.stefanauvache.com/articles/why-you-should-read",metaTags:[{name:"description",content:"Discover the inspiring story of George Yeomans Pocock, a master-craftsman, and learn why building a reading habit can be more valuable than earning a university degree. Explore how lifelong reading sharpens competence, is cost-effective, and surpasses temporary academic studies."},{name:"keywords",content:"George Yeomans Pocock, rowing, racing shells, handcrafting boats, University of Washington, reading habit, education, lifelong learning, university alternatives, personal competence, affordable education, book recommendations"},{name:"robots",content:"index, follow"}]}},{path:"/articles/work-deeply",name:"WorkDeeply",component:()=>n.e(35).then(n.bind(n,6035)),meta:{title:"Work Deeply",canonical:"https://www.stefanauvache.com/articles/work-deeply",metaTags:[{name:"description",content:"Discover the transformative power of deep work with insights from Cal Newport. Learn how focusing on singular tasks can enhance productivity and quality of work."},{name:"keywords",content:"deep work, productivity tips, Cal Newport, focus at work, deep work strategy, concentration techniques, work-life balance, eliminate distractions, boost productivity"},{name:"robots",content:"index, follow"}]}},{path:"/articles/what-song-are-you-working-on",name:"WhatSongAreYouWorkingOn",component:()=>n.e(976).then(n.bind(n,976)),meta:{title:"What Song Are You Working On?",canonical:"https://www.stefanauvache.com/articles/what-song-are-you-working-on",metaTags:[{name:"description",content:"Explore the songwriting genius of Sir Paul McCartney, who has written over a thousand songs, including the most covered song of all time, 'Yesterday.' Discover how the combination of generating numerous ideas and refining them leads to creating timeless music and solving problems."},{name:"keywords",content:"Paul McCartney, songwriting, Yesterday, Beatles, prolific songwriter, creativity, idea refinement, music history, Eric Clapton, songwriting process"},{name:"robots",content:"index, follow"}]}},{path:"/articles/hiring-new-people",name:"HiringNewPeople",component:()=>n.e(698).then(n.bind(n,7698)),meta:{title:"What I Learned From Ray Dalio and Hiring New People",canonical:"https://www.stefanauvache.com/articles/hiring-new-people",metaTags:[{name:"description",content:"Ray Dalio's hiring principles focus on fit, values, and systematic decision-making, guiding successful recruitment and personal relationships."},{name:"keywords",content:"Ray Dalio, Bridgewater, Principles, hiring, fit, decision-making, values, skills"},{name:"robots",content:"index, follow"}]}},{path:"/articles/meaningful-research",name:"MeaningfulResearch",component:()=>n.e(815).then(n.bind(n,815)),meta:{title:"Establishing Context for Meaningful Research",canonical:"https://www.stefanauvache.com/articles/meaningful-research",metaTags:[{name:"description",content:"Discover how Pixar's dedicated research process, from Harvard to Paris, creates authentic storytelling and inspires meaningful questions."},{name:"keywords",content:"Pixar, research, Monsters University, authenticity, storytelling, meaningful questions, Harvard, MIT"},{name:"robots",content:"index, follow"}]}},{path:"/articles/asking-useful-questions",name:"AskingUsefulQuestions",component:()=>n.e(882).then(n.bind(n,4501)),meta:{title:"Asking Useful Questions",canonical:"https://www.stefanauvache.com/articles/asking-useful-questions",metaTags:[{name:"description",content:"Learn from Cal Newport's journey balancing a PhD at MIT with writing, using strategic questions to set goals and achieve productive progress."},{name:"keywords",content:"Cal Newport, goal setting, MIT, productivity, writing, useful questions, career success"},{name:"robots",content:"index, follow"}]}},{path:"/articles/dont-make-beggars",name:"DontMakeBeggars",component:()=>n.e(712).then(n.bind(n,3712)),meta:{title:"Don't Make Beggars",canonical:"https://www.stefanauvache.com/articles/dont-make-beggars",metaTags:[{name:"description",content:"The Salwen family's journey to Ghana teaches the power of empowering others over providing aid, fostering self-sufficiency and leadership."},{name:"keywords",content:"Salwen family, empowerment, Ghana, Hunger Project, self-sufficiency, leadership, aid effectiveness"},{name:"robots",content:"index, follow"}]}}],Y=(0,W.aE)({history:(0,W.LA)("/"),scrollBehavior(e,t,n){return e.hash?{el:e.hash,top:80}:n||{top:0}},routes:_});Y.beforeEach(((e,t,n)=>{const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),i=e.matched.slice().reverse().find((e=>e.meta&&e.meta.canonical)),s=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(o?document.title=o.meta.title:s&&(document.title=s.meta.title),i){const e=document.createElement("link");e.setAttribute("rel","canonical"),e.setAttribute("href",i.meta.canonical),document.head.append(e)}if(Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!a)return n();a.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((n=>{t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),n();let r=document.querySelectorAll("[id$=Modal]");for(let l=0;l<r.length;l++){let e=r[l].id.replace("Modal","");closeModal(e)}let c=document.getElementById("dropdown");c&&(c.classList.contains("d-none")||c.classList.toggle("d-none"))}));var z=Y;(0,o.Ef)(G).use(z).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var s=1/0;for(m=0;m<e.length;m++){o=e[m][0],a=e[m][1],i=e[m][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,i<s&&(s=i));if(r){e.splice(m--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[o,a,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{11:"f4950916",14:"31f682ad",17:"0c0b6289",35:"8f44bf02",120:"d8c31ccc",138:"f02345cf",291:"0e1bdd60",293:"095629d9",306:"b51ad5fc",325:"af36641e",395:"ce1f32ba",413:"197585f3",425:"4e293754",446:"48a9f11e",501:"1185ff12",503:"a09c7a2a",505:"e6d2c826",526:"646b26a8",555:"ad42ddeb",559:"9947544d",620:"013a8e9a",633:"abeef383",698:"6f171742",712:"5ebc9ecc",716:"d9a9748f",719:"11dd21da",721:"6f5f816b",747:"3a6e5227",815:"2160210b",882:"0a05e6a0",928:"c6bcf0fa",932:"9c5077f8",936:"de5d1f54",955:"7612f971",975:"ed6ea462",976:"fe91d55c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{11:"3b90f0b5",719:"92765d2a"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mhn:";n.l=function(o,a,i,s){if(e[o])e[o].push(a);else{var r,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),m=0;m<l.length;m++){var d=l[m];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+i),r.src=o),e[o]=[a];var u=function(t,n){r.onerror=r.onload=null,clearTimeout(h);var a=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,a,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var r=function(n){if(s.onerror=s.onload=null,"load"===n.type)a();else{var o=n&&n.type,r=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+r+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,s.parentNode&&s.parentNode.removeChild(s),i(c)}};return s.onerror=s.onload=r,s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){a=s[o],i=a.getAttribute("data-href");if(i===e||i===t)return a}},o=function(o){return new Promise((function(a,i){var s=n.miniCssF(o),r=n.p+s;if(t(s,r))return a();e(o,r,null,a,i)}))},a={524:0};n.f.miniCss=function(e,t){var n={11:1,719:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var s=n.p+n.u(t),r=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",r.name="ChunkLoadError",r.type=i,r.request=s,a[1](r)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,s=o[0],r=o[1],c=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var m=c(n)}for(t&&t(o);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(m)},o=self["webpackChunkmhn"]=self["webpackChunkmhn"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7065)}));o=n.O(o)})();
//# sourceMappingURL=app.17931eed.js.map