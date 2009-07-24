# Design Enthusiast - BrandonMathis.com

This project generates the HTML source for [Design Enthusiast](http://brandonmathis.com).

This website is can be built with the [Henrik's version of Jekyll](http://github.com/henrik/jekyll/tree/master)
that adds support for HAML and SASS.

This project requires [Compass](http://github.com/chriseppstein/compass) to generate its stylesheets. First make sure you have the latest
Compass gem installed and in the root directory of the project run:

<pre>compass --sass-dir=source/stylesheets --css-dir=output/stylesheets .</pre>

To generate the website in the output directory, type:

<pre>rake generate</pre>

To generate and deploy, type:

<pre>rake deploy</pre>

## License

Feel free to reuse any of the scripts and code found in this project, but note that all content and
images are copyright © 2009, Mathis Creative, LLC. and are not licensed for distribution. If you
have questions about any of this, please get in touch.