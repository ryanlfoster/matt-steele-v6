---
title: 'box-sizing: border-box'
meta_title: box-sizing-border-box
meta_desc: box-sizing-border-box
alt_title: box-sizing-border-box
blog_content: |
  <p>The box model, it&rsquo;s the very foundation of CSS&hellip;and a bit weird when it comes to how it treats width. It&rsquo;s not very confusing, except if you start to wonder why it was made to act the way it does.</p>
  
  <p>For the uninitiated:</p>
  
  <p>When you create a 300px box and then put in 50px of padding on it and a 1px border, you would think it would do this:</p>
  
  <p><img alt="" src="http://matt-steele.dev/assets/img/blog/box-sizing-1.png" style="height:434px; width:605px" /></p>
  
  <p>But, what it does is this:</p>
  
  <p><img alt="" src="http://matt-steele.dev/assets/img/blog/box-sizing-2.png" style="height:502px; width:622px" /></p>
  
  <p>This, of course, can throw off your entire page. But, damn it(!) you say,&nbsp; if I want a 300px box, then I mean I want a 300px box, right? RIGHT! It makes sense that the padding and the border width should go inside of this set width, not on the outside. Luckily, you&#39;re not the only one thinking this. Paul Irish just posted about this and agrees with you. Chris Coyier has a nice write-up about the subject as well.</p>
  
  <p>The solution? *{box-sizing: border-box}</p>
  
  <p>* { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }</p>
  
  <p>Putting *box-sizing: border-box; on your reset will doubtlessly save you hours of frustration when you&rsquo;re still trying to wrap your head around CSS layout basics.</p>
  
  <p>&nbsp;</p>
---

