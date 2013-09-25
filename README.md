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
      <h4>Creating a simple 5 panel layout</h5>
       <h6>HTML</h6>
       <pre>
		&lt;div id="container"&gt;
			&lt;div class="hlayout_north"&gt; Header   &lt;/div&gt;
			&lt;div class="hlayout_center"&gt;
				&lt;div class="vlayout_west"&gt; West  &lt;/div&gt;
				&lt;div class="vlayout_center"&gt; Body  &lt;/div&gt;
				&lt;div class="vlayout_east"&gt; East  &lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="hlayout_south"&gt; Footer  &lt;/div&gt;
		&lt;/div&gt;
  	</pre>
  	<h6>Javascript</h6>
	<pre>  
	window.onload=function() {new Xlayout('container')};	
	</pre>
	<h6>Example<h6>
  	<p>This will give you a 5 panel vertical layout like <a href="http://internationalist.github.io/xlayout/fivepaneldefaultoptions.html">this</a><p>
  	
  	<h4>Fixed layout or scaling on browser resize</h4>
		<p>In the example above if we load the example page and then resize the browser window, notice how the layout changes automatically to fit the new size of the window.
		Thus the layout 'scales' on browser window resize. This is the default behavior when we create the Xlayout object with only the placeholder argument.</p>
		<p>However we can change this behavior and keep the layout fixed at a given height and width.</p>
		<p>To do that we have to change the html to specify a height and width to the placeholder div.</p> 
		
	<pre>
	&lt;div id="placeholder" style="width:200px;height:200px;"&gt;
		&lt;div class="hlayout_north"&gt; Header   &lt;/div&gt;
		&lt;div class="hlayout_center"&gt;
			&lt;div class="vlayout_west"&gt; West  &lt;/div&gt;
			&lt;div class="vlayout_center"&gt; Body  &lt;/div&gt;
			&lt;div class="vlayout_east"&gt; East  &lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="hlayout_south"&gt; Footer  &lt;/div&gt;
	&lt;/div&gt;
	</pre>
	<h6>Javascript<h6>
	<pre>
	window.onload=function() {new Xlayout('placeholder', 'fixed')};
	</pre>
	<h6>Example:</h6>
	<p>Run the <a href="http://internationalist.github.io/xlayout/fixedsize.html" class="plainlink">example</a> to see how the layout is not resized when the browser window is resized.</p>

	<p>We can change the behavior to utilize the full screen and scale with browser resize if we change the argument to 'window'.</p>
	<p>This is also the default option.</p>
	<pre>
	window.onload=function() {new Xlayout('container', 'window')};
	</pre>

	<h4>The configuration object.</h4>
	<p>It is possible to specify configuration values to set the height and width of each individual panel.</p>
	<p>Xlayout has default values for the sizes of each panel these are:</p>
	<ul>
		<li>Header - <strong>20%</strong></li>
		<li>Footer - <span style="margin-left:7px;"><strong>20%</strong></span></li>
		<li>West - <span style="margin-left:17px;"><strong>25%</strong></span></li>
		<li>East - <span style="margin-left:19px;"><strong>25%</strong></span></li>
	</ul>
	<p>In Addition these are the other configuration options that Xlayout has default values for.</p>
	<p>Some of these are:</p>
	<ul>
		<li><strong>resizable</strong> (You can set panels to be resizable or not default:true)</li>
		<li><strong>resizebar</strong> (You can show or hide the resize bar default:true)</li>
		<li><strong>border</strong> (You can add or remove borders from panels default:true)</li>
	</ul>
	<p>It is possible to override these default values. In this section we will show how this is to be done.
	</p>
	<p>Below is the complete code for a simple 3 pane panel with a footer, left menu and content</p>
	<pre>
	&lt;html&gt;
		&lt;head&gt;
			&lt;link rel="stylesheet" type="text/css" href="xlayout.css"/&gt;
			&lt;script src="xlayout.js"&gt;&lt;/script&gt;
			&lt;script&gt;
				window.onload=function() {new Xlayout('container', 'window')};
			&lt;/script&gt;
		&lt;/head&gt;
		&lt;body&gt;
			&lt;div id="container" style="width:200px;height:200px;"&gt;
			&lt;div class="hlayout_north"&gt; Header   &lt;/div&gt;
			&lt;div class="hlayout_center"&gt;
			&lt;div class="vlayout_west"&gt; West  &lt;/div&gt;
			&lt;div class="vlayout_center"&gt; Body  &lt;/div&gt;
			&lt;/div&gt;
			&lt;/div&gt;
		&lt;/body&gt;
	&lt;/html&gt;		
	</pre>
	<p style="clear:both">You can see this example here:<a href="http://internationalist.github.io/xlayout/threepaneldefault.html" class="plainlink">Example</a> </p>
	<h6>Changing panel default options</h6>
	<p>Now we will change some of the default options. We want to change the header size to only about 5% of the height and also to remove any resize bars</p>
	<p>To do this we change the javascript to the one below.</p>
	<pre>
	window.onload=function() {new Xlayout('container', 'window',
		{
			default:{
				northheight:5,
				resizebar:false
			}
		}
	)};
	</pre>
	
	<h6>Example<h6>
	<p>You can see the example here:<a href="http://internationalist.github.io/xlayout/threepanelcustom.html" class="plainlink">Example</a> </p>
	<p>So what we did here was pass in a Json configuration object to override xlayout's internal defaults. We set the 'northheight' i.e the height of the header panel to 5% of the page height and also turned off all resize bars.</p>	
	
  	
<!--  	<p> You can also programmatically hide and show header, footer west and east panels</p>
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
  	<p>Xlayout has considerable configuration and customization options that will be detailed on the site.</p>-->
  	
  	
  
  </div>
  </li>



</ul>
