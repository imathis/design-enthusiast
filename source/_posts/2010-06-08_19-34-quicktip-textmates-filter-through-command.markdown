---
title: "Quick-tip: Textmate's \"Filter Through Command\""
layout: default
tags: HTML, Haml, video
---

I just stumbled across the TextMate menu option "**Filter Through Command**". It does exactly what you'd think. Uses the current document, or selected text
as input for a command line function. Here's a 28 second screencast I made to show you how it works.

<object width="640" height="400"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=12239312&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=ffffff&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=12239312&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=ffffff&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="640" height="400"></embed></object>

While there are [other](http://autonomousmachine.com/2009/11/13/convert-html-to-haml-withint-textmate) [ways](http://html2haml.heroku.com/) to do it, "**Filter Through Command**" lets you run selected text through a *any* command-line operation.
Later I used it to update a few Sass stylesheets to the Sass3 syntax with <code>sass-convert --from sass2 --to sass --dasherize</code>. Conveniently, TextMate keeps a history of recent commands, so it's easy to call up previously used filters.