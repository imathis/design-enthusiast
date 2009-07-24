# Design Enthusiast - BrandonMathis.com

This project generates the HTML source for [Design Enthusiast](http://brandonmathis.com).

This website is can be built with the [Henrik's version of Jekyll](http://github.com/henrik/jekyll/tree/master)
that adds support for HAML and SASS.

The following change is from the [Recursive Creative Website](http://github.com/rcreative/rcreative-website/) project.

You need to make a small change to the HAML gem in order to get the SASS to compile. In:

<pre>lib/sass/tree/import_node.rb</pre>

Change the line:

<pre>paths = (@options[:load_paths] || []).dup</pre>

To this:

<pre>paths = (@options[:load_paths] || []).dup.to_a</pre>

Hopefully this change won't be necessary in future versions of HAML, but as of 2.2.2 it seems to be.

To generate the website in the output directory, type:

<pre>rake generate</pre>

To generate and deploy, type:

<pre>rake deploy</pre>


## License

Feel free to reuse any of the scripts and code found in this project, but note that all content and
images are copyright © 2009, Mathis Creative, LLC. and are not licensed for distribution. If you
have questions about any of this, please get in touch.