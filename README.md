xlayout
=======

A Javascript and CSS based layout library for laying out divs in your HTML document. Similar to Jquery UI layout.

<h2>Installation<h2>
==============
Download the folders js and style. The js contains the javascript file xlayout.js. The folder style contains the css file xlayout.css and a couple of images that help render the resize bars.
<pre>
	&lt;link rel="stylesheet" type="text/css" href="xlayout.css"/&gt;
	&lt;script src="xlayout.js"&gt;&lt;/script&gt;
</pre>

Note: Above example assumes that you have placed the js file and the css in the same location as your html.

<h2>Tutorial<h2>
==========
<ul>
 <li>
  <div><h4>Overview</h4>
      The name Xlayout originates from the idea of two layout types: Horizontal and Vertical
      that are laid out in a cross pattern. This arrangement can be used to generate a complete border pattern
      of panels laid out in sections of north, center, south, west and east.
      Any number of nesting can be used to generate complex panel based layouts.
      <h4>Browsers supported</h4>
	<ul>
		<li>Firefox 15.x and newer.</li>
		<li>Chrome 21.x and newer.</li>
		<li>Opera 11.x and newer.</li>
		<li>Safari 5.x and newer.</li>		
		<li>Internet Explorer 9.x and newer</li>
	</ul>      
      <h5>Basic Usage</h5>
       <h6>HTML</h6>
       <pre>
	&lt;div id="container"&gt;
		&lt;div class="hlayout_north"&gt; Header &lt;/div&gt;
		&lt;div class="hlayout_center"&gt;Center&lt;/div&gt;
  		&lt;div class="hlayout_south"&gt; Footer &lt;/div&gt;	
	&lt;/div&gt;

  	</pre>
  	<h6>Javascript</h6>
	<pre>  
	window.onload=function() {new Xlayout('container')};	
	</pre>
  	<p>This will give you a 3 panel vertical layout like <a href="http://i.imgur.com/IwKGkvP.jpg?1">this</a><p>
  	
  	<p> You can also programmatically hide and show header, footer west and east panels</p>
  	<p>To do this first assign an id value</p>

        <pre>
	&lt;div id="container"&gt;
	      &lt;div id="north" class="hlayout_north"&gt; Header &lt;/div&gt;
	      &lt;div class="hlayout_center"&gt;Center&lt;/div&gt;
  	      &lt;div class="hlayout_south"&gt; Footer &lt;/div&gt;
	&lt;/div&gt;
  	</pre>
  	<p>The following javascript closes then opens</p>
  
   	<pre>
	window.onload=function() {var layout = new Xlayout('container');
	layout.hidePanel('north');
	layout.showPanel('north');
  	</pre>
  	
  	
  	
  	
  	<p>Take a look at the example html files that I have checked in.</p>
  	<p>The example <strong>fivepaneldefaultoptions.html shows closing and opening header, footer, west and east panels</strong></p>
  	<p>The example <strong>complexlayout.html has 5 levels of nesting and also has styled panels.</strong></p> 

  	<p>If you keep the js and the css files in the folders 'js' and 'style' and have the html files in the parent directory (exactly like it is in the repository) then the examples should work out of the box.</p>
  	 
  	<p>I am building a documentation web site that will have more detailed documentation and tutorials etc.</p>
  	<p>Xlayout has considerable configuration and customization options that will be detailed on the site.</p>
  	
  	
  
  </div>
  </li>



</ul>
