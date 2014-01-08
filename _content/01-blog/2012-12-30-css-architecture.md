---
title: CSS architecture
meta_title: CSS architecture
meta_desc: CSS architecture
alt_title: CSS architecture
blog_content: |
  <p>Over the last few weeks I&#39;ve been digging into CSS architecture, wanting to learn how large organizations are working to keep their code organized.</p>
  
  <p>Along the way I&#39;ve picked up a ton of useful tips that will change the way I write CSS going forward, which I&#39;ll share here.</p>
  
  <p>I started by reading <a href="http://smacss.com/">SMACSS</a> by Jonathan Snook, which I actually re-read a couple times and ended up <em>heavily</em> marking up with notes. In a way, this marked-up SMACSS book has become my notebook on css architecture. It sits near my computer as a reference guide and gets notes added to it as I find more info on the internet.</p>
  
  <p>The two other resources for CSS architecture that I started reading was Harry Roberts&#39; articles over at <a href="http://csswizardry.com/">CSS Wizardry</a>, and Nicole Sullivans&#39; work with <a href="https://github.com/stubbornella/oocss/wiki">OOCSS</a>. Both have similar messages and are creating new ways to think about how we write our code.</p>
  
  <p>What really tied it all together though was watching <a href="http://www.youtube.com/watch?v=ZpFdyfs03Ug">this video</a> from Andy Hume at SXSW. If you haven&#39;t seen this yet, do yourself a favor and take some time to watch. There&#39;s tons of great information in it.</p>
  
  <p>So, after studying and learning as much as I can on CSS architecture, I thought it would be good to write down some of the key ideas that I&#39;ve picked up on. This is not an exhaustive list, but here are some thoughts to get you started:</p>
  
  <h2>1. Find patterns</h2>
  
  <p>The overarching rule to CSS architecture is to learn to identify patterns. Patterns simplify your code. Learning to identify patterns and write reusable CSS will make you code leaner, DRY and much easier to maintain. Writing smart CSS will invariably mean that you&#39;ll be writing <em>less</em> CSS.</p>
  
  <h2>2. Separate your concerns</h2>
  
  <p>The #1 benefit for me, by far, has to be the organizational aspect of CSS architecture. It keeps you organized by separating your code, which has been common place in other languages for a long time. This is a core idea of OOCSS.</p>
  
  <p>Using Sass and a revised starter file structure, I now divide my files into this file structure:</p>
  
  <p><img alt="" src="http://matt-steele.dev/assets/img/blog/scss-file-list-december-2012.jpeg" style="height:413px; width:475px" /></p>
  
  <h2>3. Be intentional with your CSS</h2>
  
  <p>what I mean by this is no more of this:</p>
  
  <p>.nav ul li a{ }</p>
  
  <p>When a much leaner selector like this would work better:</p>
  
  <p>.subnav{ }</p>
  
  <p>SMACSS address this as &#39;<a href="http://smacss.com/book/applicability">minimizing depth</a>&#39;, while Harry Roberts talks about&nbsp;<a href="http://csswizardry.com/2012/07/shoot-to-kill-css-selector-intent/">this</a>&nbsp;as the difference between using a sniper rifle vs. using a grenade. This has performance issues related to it since CSS gets evaluated right to left by the browser. It makes no sense make the browser work harder to find your intent.</p>
  
  <h2>4. Don&#39;t make your selectors do too much</h2>
  
  <p>This is bad:</p>
  
  <p>.thing{ position: absolute; top: 15em; right: 10em; background-color: green; text-transform: uppercase; font-size: 2rem; line-height: 1.2rem; }</p>
  
  <p>This is bad because it&#39;s not reusable. It&#39;s also defining the look and feel as well as the layout and position all in one rule. This can be modularized like below:</p>
  
  <p>.thing-layout{ position: absolute; top: 15em; right: 10em }</p>
  
  <p>&nbsp;</p>
  
  <p>.thing-module{ background-color: green; }</p>
  
  <p>&nbsp;</p>
  
  <p>.thing-title{ text-transform: uppercase; font-size: 2rem; line-height: 1.2rem; }</p>
  
  <p>This is still not perfect, but it&#39;s much improved, and best of all it&#39;s <em>reusable</em>. The class .thing-title can now be used wherever we want; it&#39;s portable. It also separates our skin from the structure. This lends itself well to the idea of finding a solution once and using it over and over again.</p>
  
  <h2>5. No ID&#39;s.</h2>
  
  <p>They&#39;re just bad news all around. I know there are arguments for using them, but unless you need it for a JS hook, or a anchor, there&#39;s really no need to.</p>
  
  <h2>6. Comment, comment, comment</h2>
  
  <p>There&#39;s really no reason <em>not</em> to write as many comments as you can. I&#39;ve always tried to keep my code well commented for my own reference, but when it comes to large teams it&#39;s absolutely vital. You need to explain your decisions to others clearly, and there is no better way than writing good comments.</p>
  
  <p>As I said, these ideas don&#39;t cover all of CSS architecture, and there are certainly exceptions to every rule, but I think they&nbsp; provide a good starting point.</p>
  
  <p>Here are some additional resources that I&#39;ve used to learn more about CSS architecture as well. I highly recommend each one:</p>
  
  <p><a href="http://vimeo.com/54990931">John Rohan on CSS performance at Github</a></p>
  
  <p><a href="http://www.youtube.com/watch?v=R-BX4N8egEc">Harry Roberts on big CSS&nbsp;</a></p>
  
  <p><a href="http://nicolasgallagher.com/about-html-semantics-front-end-architecture/">Nicolas Gallagher on front-end architecture</a></p>
  
  <p><a href="http://engineering.appfolio.com/2012/11/16/css-architecture/">Phillip Walton on CSS Architecture</a></p>
---

