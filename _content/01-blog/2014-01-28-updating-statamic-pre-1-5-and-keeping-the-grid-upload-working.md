---
title: 'Updating Statamic pre-1.5 & keeping the grid upload working'
meta_title: 'Updating Statamic pre-1.5 & keeping the grid upload working'
meta_desc: >
  Updating Statamic. Updating Statamic
  pre-1.5. Statamic grid upload not
  working after update. Statamic upgrade.
alt_title: ""
blog_content: |
  <p>I recently updated two Statamic sites from pre-1.5 versions to a current version. In these particular cases it was from 1.4.2 to 1.6.7, and in both cases&nbsp;I ran into an issue of no longer being able to upload files from within a <a href="http://statamic.com/learn/documentation/fieldtypes/grid">grid</a>. The fix turned out to be rather simple, but I thought I&#39;d jot it down here for future reference.</p>
  
  <h3>Upgrading Statamic</h3>
  
  <p>If you haven&#39;t updated Statamic before, the the process&nbsp;is just about as <a href="http://statamic.com/learn/installing-and-updating/updating">easy</a> as it could possibly be.</p>
  
  <p>If you&#39;re going from post-1.5 to the latest version, you just replace two folders:</p>
  
  <pre class="language-markup">
  _app
  admin</pre>
  
  <p>Version 1.5 was a major re-write of some of the code base, so the upgrade process involves a few extra files if you&#39;re going from say, 1.4.2 to the current version.</p>
  
  <p>In that case, the folders/files to replace are:</p>
  
  <pre class="language-markup">
  _app
  _add-ons
  admin
  index.php
  admin.php</pre>
  
  <p>In both instances you should also delete the contents of the cache folder to get a fresh start.</p>
  
  <h3>What happened to the grid?</h3>
  
  <p>The issue that I ran into was that I was no longer able to upload files from within a grid.&nbsp;Images,&nbsp;PDF&#39;s&nbsp;or otherwise; I wasn&#39;t able to upload anything. The fix ended up being to simply add any new field type to the YAML&nbsp;file that controls the grid. In my case it was an event listing.</p>
  
  <p>You can see the fix here at the bottom as an extra field with a &#39;type: hidden&#39; tacked onto the end of&nbsp;it.</p>
  
  <p>From the fields.yaml file:</p>
  
  <pre class="language-markup">
    attachments:
      display: Attachments
      type: grid
      starting_rows: 1
      max_rows: 3
      fields:
        name:
          display: File Name
          type: text
        file:
          display: Upload File
          type: file
          allowed: [png, gif, jpg, jpeg, pdf]
          destination: assets/attachments/events
        file:
          type: hidden</pre>
  
  <p>A permanent fix should be on it&#39;s way soon and render this work around uneccessary in future updates, but at least there&#39;s a record of the fix here if you happen to run into it.</p>
---
















