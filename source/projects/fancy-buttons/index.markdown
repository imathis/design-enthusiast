---
layout: default
title: "Projects :: Fancy Buttons"
nav: projects
---

## Fancy Buttons

<object width="640" height="400"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=7723529&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=7723529&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="640" height="400"></embed></object>

[Fancy Buttons Demo &raquo;](demo/)

### How to Install
**Important:** Fancy Buttons 0.3.6 requires Compass 0.10.0-pre2 which must be *manually installed* until Compass
0.10 is released in the next couple of weeks. Just run this and you should be good to go.

<small>*If you have any previous versions of compass, chriseppstein-compass, compass-colors, or chriseppstein-compass-colors, uninstall them to prevent them from being loaded.*</small>

{% highlight bash %}
sudo gem install compass --pre
sudo gem install fancy-buttons
{% endhighlight %}

To create a new project based on fancy-buttons:<br/>
{% highlight bash %}
compass -r compass-colors -r fancy-buttons -f fancy-buttons project_directory
{% endhighlight %}

To add fancy-buttons to an existing compass project, add this to your configuration file (rails: compass.config, other: config.rb):  
{% highlight ruby %}
require 'compass-colors'
require 'fancy-buttons'
{% endhighlight %}

Then import fancy-buttons in your sass file:  
{% highlight sass %}
@import fancy_buttons.sass
{% endhighlight %}

{% highlight bash %}
# Then run the following command:
compass -r fancy-buttons -f fancy-buttons project_directory
{% endhighlight %}

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

#### Custom Gradients
As of Fancy Buttons 0.3.6 you can use glossy, matte, or your own custom gradients, and it has a new inverted click style.
For a full list of changes, read [the changelog](http://github.com/imathis/fancy-buttons/blob/master/CHANGELOG.markdown).
To use your own gradients you'll need to learn how to use the gradients mixin, you can [read the source here](http://github.com/chriseppstein/compass/blob/master/lib/compass/frameworks/compass/stylesheets/compass/css3/_gradient.sass).
It's pretty simple.

##### Writing Custom Gradients
The demo shows some small buttons using custom radial gradients. I'll show you how
you can use custom gradients in your projects with the new gradients mixin in Compass 0.10.0-pre2.

Write a "custom-fancy-gradient" mixin that takes two variables, light and dark versions of the base color.
This will produce a simple matte gradient.

{% highlight sass %}
// A custom gradient mixin
=custom-fancy-gradient(!color1, !color2)
  +v-gradient(!color1, !color2)
{% endhighlight %}

To use a different gradient style for when the button is clicked create a mixin named "invert-custom-fancy-gradient".
In this example, I'm changing the colors a bit, and reusing the main custom gradient mixin. That way if I decide to
change the type of gradient, I only have to change it in one place.

{% highlight sass %}
// The inverted mixin gets triggered when the user clicks
=invert-custom-fancy-gradient(!color1, !color2)
  !color1 = lighten(!color2, 10)
  !color2 = lighten(!color2, 25)
  +custom-fancy-gradient(!color1, !color2)
{% endhighlight %}

To use your custom gradient for every button in your project, set a global variable like this.

{% highlight sass %}
!fb_gradient_type = "custom"
{% endhighlight %}

If you want to only use the custom gradient for some buttons you can always do something like this.

{% highlight sass %}
button.custom
  +fancy-button-structure
  +custom-fancy-button-colors(#ddd)
{% endhighlight %}

The demo uses a really nice custom radial gradient. Here's what the custom gradient mixin looks like for that.

{% highlight sass %}
=custom-fancy-gradient(!color1, !color2)
  !color2 = darken(!color2, 5)
  +radial-gradient("50% 10%, 10, 50% 10%, 30", !color1, !color2)

=invert-custom-fancy-gradient(!color1, !color2)
  !color1 = lighten(!color2, 10)
  !color2 = lighten(!color2, 25)
  +custom-fancy-gradient(!color1, !color2)
{% endhighlight %}

If you want to write your own radial gradient mixin, I suggest browsing the examples on [The art of web](http://www.the-art-of-web.com/css/radial-gradients/).
It's pretty tricky, but you can get some awesome effects with a little bit of fiddling.

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