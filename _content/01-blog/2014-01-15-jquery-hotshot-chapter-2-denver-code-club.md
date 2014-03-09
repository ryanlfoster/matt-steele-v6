---
title: 'jQuery Hotshot Chapter 2 - Denver Code Club'
meta_title: >
  Wrap-up of chapter 2 of jQuery Hotshot
  for the meetup Denver Code Club
meta_desc: >
  Wrap-up of chapter 2 of jQuery Hotshot
  for the meetup Denver Code Club
alt_title: >
  Wrap-up of chapter 2 of jQuery Hotshot
  for the meetup Denver Code Club
blog_content: |
  <p>I organize a local meetup here in Denver called the <a href="http://www.meetup.com/Denver-Code-Club/">Denver Code Club</a>. Each Saturday, we work through a chapter from Dan Wellman&#39;s book &#39;<a href="http://www.packtpub.com/jquery-hotshot/book">jQuery Hotshot</a>&#39;. Following each meetup, I&#39;ll write up a review here of what we learned and link to the&nbsp;final project.</p>
  
  <p>Each week is a new project and the book takes us through 10 projects in total. You can see my completed code on <a href="https://github.com/mattsteele/DCC-jQuery-Hotshot/blob/master/Chapter%20code/Chapter%202/js/matt-completed.js">Github</a>&nbsp;and the completed project <a href="http://matt-steele.com/fixed-sidebar.html">here</a>.</p>
  
  <p>I learned a valuable lesson during chapter 1 last week, and that&#39;s that my time during the actual meetup on Saturday mornings is better spent being the organizer, rather than a participant. For Chapter 2, and all chapters going forward, I&#39;m taking time to complete the chapter <em>before</em>&nbsp;the meetup on Saturday morning. This has four main advantages:</p>
  
  <ol>
  	<li>I can answer questions and help people because I&#39;ve already completed the project</li>
  	<li>I&#39;m able to concentrate on the code more closely because I&#39;m not distracted my handing out raffle tickets and greeting everyone, ect.</li>
  	<li>I know of all the challenges and pitfalls that are going to come up in the project and thus, I can time the meetup better.</li>
  	<li>My time is freed up to make the experience better for the people that I&#39;ve gathered</li>
  </ol>
  
  <h2>What project did we complete in week 2?</h2>
  
  <p>In this project, we worked to create a page with a fixed sidebar and animated scrolling.</p>
  
  <h2>Challenges</h2>
  
  <p>There were a couple challenges in getting this completed and it took me just about three hours to finish the project and comment each line of code until I knew exactly what it was doing.</p>
  
  <p>The first challenge that came up was realizing that all the code is written very efficiently, which is great from a performance and best practices point-of-view, but can be difficult to understand off the bat. For instance, Mr. Wellman rightly declares most of variables at the outset, but when you&#39;re working top to bottom through the books code it&#39;s hard to know what a variable will be doing until you finally use it.</p>
  
  <p>Another challenge that I ran into was the use of a ternary operator. I know what these are, having read &#39;JavaScript for Web Developers&#39;, but I&#39;ve never actually used one in a real world situation. The operator is this:</p>
  
  <pre class="language-css">
  targetOffset = (!href) ? 0 : sections.eq(target - 1).offset().top;</pre>
  
  <p>Some Googling around and referencing the JavaScript book I just mentioned got me to this explanation:</p>
  
  <pre class="language-css">
  (test) ? true doThis : false doThat</pre>
  
  <p>The ternary operator is essentially a more efficient way to write an if/else statement. The line of code is asking a boolean question: is the targetOffset not equal to the current href? If so, then the result is 0. If it isn&#39;t equal, find the sections variable, then the target -1 offset at the top.</p>
  
  <p>It was a good lesson in completing a fairly common feature request for a web page. Week 3 will have us manipulating a Google map. You can find the completed project <a href="http://matt-steele.com/fixed-sidebar.html">here</a>.</p>
---












