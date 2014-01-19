---
title: 'jQuery Hotshot Chapter 3 - Denver Code Club'
meta_title: 'jQuery Hotshot Chapter 3 - Denver Code Club'
meta_desc: 'jQuery Hotshot Chapter 3 - Denver Code Club'
alt_title: 'jQuery Hotshot Chapter 3 - Denver Code Club'
blog_content: |
  <h2>jQuery Hotshot Chapter 3 - Denver Code Club</h2>
  
  <p>I organize a local meetup here in Denver called the&nbsp;<a href="http://www.meetup.com/Denver-Code-Club/">Denver Code Club</a>. Each Saturday, we work through a chapter from Dan Wellman&#39;s book <a href="http://www.packtpub.com/jquery-hotshot/book">jQuery Hotshot</a>. Following each meetup, I&#39;ll write up a review here of what we learned and link the to final project. Each week is a new project and the book takes us through 10 projects in total.</p>
  
  <h2>What project did we complete in week 3?</h2>
  
  <p>This weeks project was to create a map using the Google API to let customers calculate shipping costs between locations. You can see the completed project <a href="http://matt-steele.com/google-map.html">here</a>&nbsp;and&nbsp;my completed code on&nbsp;<a href="https://github.com/mattsteele/DCC-jQuery-Hotshot/blob/master/Chapter%20code/Chapter%203/js/matt-completed.js">Github</a>.</p>
  
  <h2>Challenges</h2>
  
  <p>This lesson was the hardest of the three we&#39;ve worked on so far. It took me about 6 hours from start to finish to get both the project running and comment the code to where I fully understood it.</p>
  
  <p>The main challenge was learning to use the Google API. I&#39;ve used it quite a bit in the past, but never at a level where I needed to manipulate it by adding markers and calculating distances. I can&#39;t say that I know the <em>huge</em>&nbsp;<a href="https://developers.google.com/maps/documentation/javascript/tutorial">API</a>&nbsp;completely, in fact, we only touched the surface of it. But I was able to finish up the lesson finally.</p>
  
  <p>A good discussion that was prompted by this lesson was how best to call jQuery&#39;s wrapper function. What&#39;s the difference between these three below?</p>
  
  <p>After talking shop at the meetup and searching around the internet, these are the explanations that I came up with:</p>
  
  <p>1. This first one is the most common method you see. $(document) is being used to create a jQuery object from the pages document. The .ready() function is then being called once the document is ready to go. We can then pass a function to execute on it.</p>
  
  <pre class="language-css">
  $( document ).ready(function() {
    ...
  });</pre>
  
  <p><br />
  2. This is shorthand for the function above. $() function is simply an alias for $(document).ready()</p>
  
  <pre class="language-css">
  $(function() {
    ...
  });</pre>
  
  <p><br />
  3. This is an anonymous function to wrap around your function to avoid conflict. You&#39;re passing a reference to the actual jQuery object, but it&#39;ll be known as $ within the scope of this function. It&#39;s a function literal that is executed immediately. Anything you define inside that function remains local to that function and inaccessible from the outside world.</p>
  
  <pre class="language-css">
  (function($) {
  ...
  }(jQuery);</pre>
  
  <h2>Wrap-up</h2>
  
  <p>I learned quite a bit this week. This was the first project that I struggled with and that forced me to spend some extra time on. There&#39;s some incredibly smart people in the meetup that have helped explain some of the more advanced code to the newer folks, which is really nice to see.</p>
  
  <p>Next week we dive into <a href="http://jquerymobile.com/">jQuery Mobile</a>. I&#39;ve sat in on a couple talks on the subject, but have never actually coded one up, so it should be fun to do!</p>
  
  <p>(As always, if you see any errors in my explanation or code above, please help me out by correcting me!)</p>
---



