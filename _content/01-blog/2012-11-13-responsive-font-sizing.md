---
title: Responsive font sizing
meta_title: Responsive font sizing
meta_desc: Responsive font sizing
alt_title: Responsive font sizing
blog_content: |
  <p>When I made the switch from static width sites to responsive sites, I also made the switch from sizing my fonts with static&nbsp;px's to em's. In fact, hardly anything in my code is styled using px's anymore (other than&nbsp;vertical positioning, and even that could be eliminated). Em-based pixel sizing&nbsp;was a needed change because&nbsp;pixel-based sizes could become problematic on different screen sizes.&nbsp;</p>
  
  <p>One issue that I started to notice with em's though was that their sizing is relative to what has been declared before on their parent element. So, if you declared 1.3em on a parent and then declared a different em size within it, the font would actually inherit the parent size and not end up looking like what you were expecting.</p>
  
  <h2>Enter the rem-based font sizing.</h2>
  
  <p>I recently discovered a solution to this problem, and it's rem-based font sizing. The magic of using rem's instead of em's is that it's <strong><em>relative to the root html element</em></strong>, meaning that you can set the HTML font size once, and then base your font sizing relative to that for the rest of your site.</p>
  
  <p>Just put this in your CSS to start with:</p>
  
  <pre>
  html {
    font-size: 24px; (or whatever you like)
  }</pre>
  
  <p>No more odd behaving nested font sizing to think about. Now I just set it once at the root and size from there using rem's where needed.</p>
  
  <pre>
  .selector {
    font-size: 2rem;
  ​}</pre>
  
  <p>So far, I haven't noticed any drawbacks to using this&nbsp;method. Everything with responsive design is new and seems to be ever changing. This&nbsp;is just one small change I've discovered recently, and I think I'll be using from here on out.</p>
---
