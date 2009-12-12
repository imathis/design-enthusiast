---
title: Fancy Buttons Are Here!
category: open source
tags: compass, sass, open source
---

<span id="flash" class="notice">
  **Update**: Fancy Buttons is under active development and this blog post will slowly go out of date.
  Checkout the [Fancy Buttons Project Page &raquo;](/projects/fancy-buttons)
</span>

<object width="640" height="400"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=7723529&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=7723529&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="640" height="400"></embed></object><p><a href="http://vimeo.com/7723529">Fancy Buttons Demo</a>

[Fancy Buttons CSS Demo &raquo;](/projects/fancy-buttons/demo/)

Here's a screenshot of some fancy buttons from the github project example. **Hover to see what they look like without CSS gradients**.
<div class="hover_switcher">
  <img class="show" src="http://s3.imathis.com/dev/compass/fancy-buttons/demo.png" alt="Fancy Buttton Demo" title="Fancy Buttton Demo"/>
  <img class="hide" src="http://s3.imathis.com/dev/compass/fancy-buttons/demo-no-gradients.png" alt="Fancy Buttton Demo - Without Gradients" title="Fancy Buttton Demo - Without Gradients"/>
</div>

#### What's It Doing?
Here's a sample of what CSS rules this mixin handles for you:

1. Button reset - to get browsers to the same starting point
2. Rounded corners, Text shadows, and Gradients + vendoring
3. Background image fallback
4. Padding, Text size, line-height, etc
5. Default, Hover, and Active states for all styles
6. Lots of tricky color math to generate beautiful gradients from one color

That's a lot of CSS to write, effectively reduced to a single mixin. Of course, it's also great that you can use the bare minimum HTML.

##### What's Compass and Where's the CSS?
In the screencast I'm writing my styles in [Sass](http://sass-lang.com) which is much cleaner and more powerful than CSS.
Every time I save the file, Compass automatically compiles the Sass to regular or compressed CSS. If you're not familiar with Compass,
you should [check it out](http://wiki.github.com/chriseppstein/compass/) because this is the future of open source design.
Without compass I'd be posting stylesheets and images, and trying to explain how you could customize them. Compass lets me
package my stylesheets as a plugin so it's easier to share, and easier to use.

##### IE Support
In IE the buttons don't have rounded corners. So far, I haven't found a solution that lets me use clean html without javascript.
I mostly design web applications, and while it's nice to have a visually stunning experience, I'm more interested in usability, than pixel perfection.
If you have any suggestions for how to improve the appearance of fancy buttons in IE, please let me know.

I'd like to point out, if you prefer using methods like sliding doors, **you can use fancy buttons to generate source images**. Just fill a button with no-break spaces '&amp;nbsp;'
to render an empty button. Take a screenshot and cut it up to use as a background image.

##### If You Liked This
I'm starting a screencast series about how to use SASS and Compass to be an efficient and incredible web designer. [Subscribe for updates.](feed://feeds.feedburner.com/designenthusiast)

<hr/>

[Demo Page](/projects/fancy-buttons/demo) | [Gem](http://gemcutter.org/gems/fancy-buttons/) | [Github Project](http://github.com/imathis/fancy-buttons/)