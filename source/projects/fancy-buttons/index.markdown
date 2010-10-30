---
layout: default
title: "Projects :: Fancy Buttons"
nav: projects
---

## Fancy Buttons

<video width="640" height="360" preload="none" controls poster="http://s3.imathis.com/video/zero-to-fancy-buttons.png">
  <source src="http://s3.imathis.com/video/zero-to-fancy-buttons.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
</video>

[Fancy Buttons Demo &raquo;](demo/)

### How to Install

{% highlight bash %}
gem install compass
gem install fancy-buttons
{% endhighlight %}

To create a new project based on fancy-buttons:<br/>
{% highlight bash %}
compass install -r fancy-buttons -f fancy-buttons /path/to/project
{% endhighlight %}

To add fancy-buttons to an existing compass project, add this to your configuration file (rails: compass.config, other: config.rb):  
{% highlight ruby %}
require 'fancy-buttons'
{% endhighlight %}

Then import fancy-buttons in your sass file:  
{% highlight css %}
@import "fancy-buttons";
{% endhighlight %}


#### What's It Doing?
Here's a sample of what CSS rules this mixin handles for you:

1. Button reset - to get browsers to the same starting point
2. CSS3: Rounded corners, Text shadows, Gradients, Inset box shadows, and browser vendoring
3. Background image fallback
4. Padding, Text size, line-height, etc
5. Default, Hover, and Active states for all styles
6. Lots of tricky color math to generate beautiful gradients from one color

That's a lot of CSS to write, effectively reduced to a single mixin. Of course, it's also great that you can use the bare minimum HTML.

##### What's Compass and Where's the CSS?
In the screencast I'm writing my styles in [Sass](http://sass-lang.com) which is much cleaner and more powerful than CSS. Every time I save the file, Compass automatically compiles the Sass to regular or compressed CSS. If you're not familiar with Compass, you should [check it out](http://wiki.github.com/chriseppstein/compass/) because this is the future of web design. Without compass I'd be posting stylesheets and images, and trying to explain how you could customize them. Compass lets me package my stylesheets as a plugin so it's easier to share, and easier to use.

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