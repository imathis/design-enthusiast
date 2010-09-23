---
title: "Faster Color Theming With Compass and Sass"
layout: default
tags: Sass, Compass, video, CSS3
---

Designing in-browser is often faster than using a graphics application. The result can be deployed immediately, and maintained easily in version control. There's no excuse not to be doing this, except perhaps, you don't know how yet.

Here's a glimpse at my normal workflow for theming a site with Compass and Sass. On this particular project, I needed to create multiple color themes each with their own master stylesheet to allow CMS users to change the theme of their site.

Checkout the video below. I know I could have been more thorough, so leave a comment if you have a question.

<object width="640" height="429" type="application/x-shockwave-flash" data="/assets/jwplayer/player.swf"><param name="movie" value="http://s3.imathis.com/video/color-themes.mp4" /><param name="allowfullscreen" value="true" /><param name="flashvars" value="file=http://s3.imathis.com/video/color-themes.mp4&skin=/assets/jwplayer/glow/glow.xml" /></object>

Here's the gradient-bg mixin demonstrated in this video: *note: I'm sorry for the syntax highlighting. Pygments doesn't grok the new Sass syntax.*

{% highlight sass %}
=gradient-bg($color, $top: 5, $bottom: $top)
  @if $top < 0 and $bottom < 0
    $color1: darken($color, abs($top))
    $color2: lighten($color, abs($bottom))
    +linear-gradient(color-stops($color1, $color2))
  @else
    $color1: lighten($color, abs($top))
    $color2: darken($color, abs($bottom))
    +linear-gradient(color-stops($color1, $color2))
  background-color: $color
{% endhighlight %}

[View the gist on Github](http://gist.github.com/590559).