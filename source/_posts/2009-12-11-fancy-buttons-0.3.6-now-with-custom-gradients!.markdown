---
title: "Fancy Buttons 0.3.6 -  Now With Custom Gradients!"
tags:
- Compass
- Sass
- CSS3
---

If you're new to Fancy Buttons, checkout the [Project Page](/projects/fancy-buttons/) and the [Demo](/projects/fancy-buttons/demo/)

To make writing custom gradients easier, I've written a gradient mixin. To use the gradient mixin you need
Compass 0.10 which is currently available as a pre-release. You'll have to manually install it until Compass
0.10 final is released in the next couple of weeks. Just run this and you should be good to go.

{% highlight bash %}
sudo gem install compass --pre
sudo gem update fancy-buttons
{% endhighlight %}

To learn how to use the gradients mixin, you can [read the source](http://github.com/chriseppstein/compass/blob/master/lib/compass/frameworks/compass/stylesheets/compass/css3/_gradient.sass).
It's pretty simple.

#### Demo Screenshot
*Hover to see what they look like without CSS gradients*.
<div class="hover_switcher">
  <img class="show" src="http://s3.imathis.com/dev/compass/fancy-buttons/demo.png" alt="Fancy Buttton Demo" title="Fancy Buttton Demo"/>
  <img class="hide" src="http://s3.imathis.com/dev/compass/fancy-buttons/demo-no-gradients.png" alt="Fancy Buttton Demo - Without Gradients" title="Fancy Buttton Demo - Without Gradients"/>
</div>

This release lets you use glossy, matte, or your own custom gradients, and it has a new inverted click style.
For a full list of changes, read [the changelog](http://github.com/imathis/fancy-buttons/blob/master/CHANGELOG.markdown).

#### How to Write Custom Gradients
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