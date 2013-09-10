/*
GNU LESSER GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.


  This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

  0. Additional Definitions.

  As used herein, "this License" refers to version 3 of the GNU Lesser
General Public License, and the "GNU GPL" refers to version 3 of the GNU
General Public License.

  "The Library" refers to a covered work governed by this License,
other than an Application or a Combined Work as defined below.

  An "Application" is any work that makes use of an interface provided
by the Library, but which is not otherwise based on the Library.
Defining a subclass of a class defined by the Library is deemed a mode
of using an interface provided by the Library.

  A "Combined Work" is a work produced by combining or linking an
Application with the Library. The particular version of the Library
with which the Combined Work was made is also called the "Linked
Version".

  The "Minimal Corresponding Source" for a Combined Work means the
Corresponding Source for the Combined Work, excluding any source code
for portions of the Combined Work that, considered in isolation, are
based on the Application, and not on the Linked Version.

  The "Corresponding Application Code" for a Combined Work means the
object code and/or source code for the Application, including any data
and utility programs needed for reproducing the Combined Work from the
Application, but excluding the System Libraries of the Combined Work.

  1. Exception to Section 3 of the GNU GPL.

  You may convey a covered work under sections 3 and 4 of this License
without being bound by section 3 of the GNU GPL.

  2. Conveying Modified Versions.

  If you modify a copy of the Library, and, in your modifications, a
facility refers to a function or data to be supplied by an Application
that uses the facility (other than as an argument passed when the
facility is invoked), then you may convey a copy of the modified
version:

   a) under this License, provided that you make a good faith effort to
   ensure that, in the event an Application does not supply the
   function or data, the facility still operates, and performs
   whatever part of its purpose remains meaningful, or

   b) under the GNU GPL, with none of the additional permissions of
   this License applicable to that copy.

  3. Object Code Incorporating Material from Library Header Files.

  The object code form of an Application may incorporate material from
a header file that is part of the Library. You may convey such object
code under terms of your choice, provided that, if the incorporated
material is not limited to numerical parameters, data structure
layouts and accessors, or small macros, inline functions and templates
(ten or fewer lines in length), you do both of the following:

   a) Give prominent notice with each copy of the object code that the
   Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the object code with a copy of the GNU GPL and this license
   document.

  4. Combined Works.

  You may convey a Combined Work under terms of your choice that,
taken together, effectively do not restrict modification of the
portions of the Library contained in the Combined Work and reverse
engineering for debugging such modifications, if you also do each of
the following:

   a) Give prominent notice with each copy of the Combined Work that
   the Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the Combined Work with a copy of the GNU GPL and this license
   document.

   c) For a Combined Work that displays copyright notices during
   execution, include the copyright notice for the Library among
   these notices, as well as a reference directing the user to the
   copies of the GNU GPL and this license document.

   d) Do one of the following:

       0) Convey the Minimal Corresponding Source under the terms of this
       License, and the Corresponding Application Code in a form
       suitable for, and under terms that permit, the user to
       recombine or relink the Application with a modified version of
       the Linked Version to produce a modified Combined Work, in the
       manner specified by section 6 of the GNU GPL for conveying
       Corresponding Source.

       1) Use a suitable shared library mechanism for linking with the
       Library. A suitable mechanism is one that (a) uses at run time
       a copy of the Library already present on the user's computer
       system, and (b) will operate properly with a modified version
       of the Library that is interface-compatible with the Linked
       Version.

   e) Provide Installation Information, but only if you would otherwise
   be required to provide such information under section 6 of the
   GNU GPL, and only to the extent that such information is
   necessary to install and execute a modified version of the
   Combined Work produced by recombining or relinking the
   Application with a modified version of the Linked Version. (If
   you use option 4d0, the Installation Information must accompany
   the Minimal Corresponding Source and Corresponding Application
   Code. If you use option 4d1, you must provide the Installation
   Information in the manner specified by section 6 of the GNU GPL
   for conveying Corresponding Source.)

  5. Combined Libraries.

  You may place library facilities that are a work based on the
Library side by side in a single library together with other library
facilities that are not Applications and are not covered by this
License, and convey such a combined library under terms of your
choice, if you do both of the following:

   a) Accompany the combined library with a copy of the same work based
   on the Library, uncombined with any other library facilities,
   conveyed under the terms of this License.

   b) Give prominent notice with the combined library that part of it
   is a work based on the Library, and explaining where to find the
   accompanying uncombined form of the same work.

  6. Revised Versions of the GNU Lesser General Public License.

  The Free Software Foundation may publish revised and/or new versions
of the GNU Lesser General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

  Each version is given a distinguishing version number. If the
Library as you received it specifies that a certain numbered version
of the GNU Lesser General Public License "or any later version"
applies to it, you have the option of following the terms and
conditions either of that published version or of any later version
published by the Free Software Foundation. If the Library as you
received it does not specify a version number of the GNU Lesser
General Public License, you may choose any version of the GNU Lesser
General Public License ever published by the Free Software Foundation.

  If the Library as you received it specifies that a proxy can decide
whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is
permanent authorization for you to choose that version for the
Library.
*/

var configParam = null;

function ConfigParam() {
	this.initParam = {
		default: {
	  		northheight:20,
	  		southheight:10,
	  		westwidth:25,
	  		eastwidth:25,
	  		resizable:true,
	  		resizebar:true,
	  		border:true
		  	}
	};
	this.resolve = function(defConfig) {
		if(defConfig.default) {
			var temp = defConfig.default;
			if(!temp.northheight) {
				temp.northheight=this.initParam.default.northheight
			}
			if(!temp.southheight) {
				temp.southheight=this.initParam.default.southheight;
			}
			if(!temp.westwidth) {
				temp.westwidth=this.initParam.default.westwidth;
			}
			if(!temp.eastwidth) {
				temp.eastwidth=this.initParam.default.eastwidth;
			}
			if(temp.resizable==null) {
				temp.resizable=this.initParam.default.resizable;
			}
			if(temp.resizebar==null) {
				temp.resizebar=this.initParam.default.resizebar;
			}			
		} else {
			defConfig.default=this.initParam.default;
		}
		
		this.initParam=defConfig;
	}
	
	this.getConfig = function(token, id) {
		retValue = null;
		if(this.initParam[id]) {
			tempParams = this.initParam[id];
			if(tempParams[token]!=null) {
				retValue = tempParams[token];
			} else {
				retValue = this.initParam.default[token];
			}
		} else {
			retValue = this.initParam.default[token];
		}
		return retValue;
	}
}

function viewport(container, mode){
	var e = window, a = 'inner';
	if(mode=="window") {
		return { width : (e[ a+'Width' ]) , height : (e[ a+'Height' ])};
	} else {
		return {width:container.clientWidth, height:container.clientHeight}
	}
}

function Xlayout(container, mode, param) {
	
	window.onload=function() {
		if(container=='body') {
			containerElement = document.body;
		} else {
			containerElement = getChildUsingIdOrClass(document.body, container);
		}		
		init(containerElement, mode, param);
	}
}

//This get called once only from the client html page!!
function init(containerElement, mode, param) {
	configParam = new ConfigParam();
	if(param) {
		configParam.resolve(param);
	}
	
	if(mode==null) {
		mode="window";
	}
	
	//initialize mouse drag component.
	var dragMonitor = new MouseDragMonitor();

	//pack
	pack(containerElement, viewport(containerElement, mode));
	
	//pack the layout if the window is resized.
	if(mode=="window") {
		nullifyBorderMarginAndPaddings(containerElement);
		window.onresize=function() { pack(containerElement, viewport(containerElement, mode));}
	}
	
	var vshadow = document.createElement("div");
	vshadow.id="dragme_v";
	document.body.insertBefore(vshadow, document.body.firstChild);
	var hshadow = document.createElement("div");
	hshadow.id="dragme_h";
	document.body.insertBefore(hshadow, document.body.firstChild);
	

}

function Config() {
	this.increment=function (property, count) {
		this[property] = this[property] + count;
	}
}

function pack(rootElement, size) {
	var config = new Config();
	var screenheight = size['height'];
	var screenwidth = size['width'];

	
	rootElement.style.height=screenheight + "px";
	rootElement.style.width=screenwidth + "px";
	
	//set the sizes to all containers depending upon the screen size
	var hlayout_north = getChild(rootElement, "hlayout_north");
	var hlayout_center = getChild(rootElement, "hlayout_center");
	var hlayout_south = getChild(rootElement,"hlayout_south");
	
	if(hlayout_north || hlayout_center || hlayout_south) {
		//We cannot have a horizontal layout without the center panel specified. If this is the case then throw an error.
		if(!hlayout_center) {
			alert("Uh-oh. Looks like you missed a center panel in a horizontal layout. Check your html.");
			return false;
		}
		
		//This is a container div so any style elements it has should be voided.
		//check if child is container div and if so then remove all predefined style elements.
		resetStylesIfContainer(hlayout_center, "hlayout_center");		
		
		var borderWidths = 0;
		
		
		//We are going to be packing a horizontal layout. 
		//For these layouts we only need to calculate the heights as the width will always be the same as container width.
		//initialize heights
		var hlayoutSouthHeight = 0;
		var hlayoutNorthHeight = 0;
		var centerContainerHeight = 0;
		
		//layouts could be specified with one or more layers missing. Determine what layout sections are present

		if(hlayout_north) {
			//reset the class name
			//find out if this is a container element and void styles if this is the case.
			resetStylesIfContainer(hlayout_north, "hlayout_north");
			
			hlayoutNorthHeight = Math.round((screenheight*(configParam.getConfig("northheight", hlayout_north.id)))/100);
			if(hlayoutNorthHeight <= 10) {
				hlayout_north.style.display="none";
				hlayout_north.style.height="0px";
			} else {

				hlayout_north.style.height=hlayoutNorthHeight + "px"; //3% of total height
				//compensate for border width if any
				config.hlayout_north_xborder=0;
				processBorders(hlayout_north, config, "vertical", "hlayout_north");
				//adjust the width for borders
				var northWidth = screenwidth - config.hlayout_north_xborder;
				if(northWidth <= 10) {
					hlayout_north.style.display="none";
				} else {
					hlayout_north.style.display="block";
				}
				
				hlayout_north.style.width=northWidth + "px";			
				
				//if resize bars are needed generate them
				if(configParam.getConfig("resizebar", hlayout_north.id)) {
					createHBarsBeforeElement(hlayout_center);
					//then add resize bar width to borderWidths
					borderWidths += 6;
				}
			}
		}
		
		if(hlayout_south) {
			//reset the class name
			//find out if this is a container element and void styles if this is the case.			
			resetStylesIfContainer(hlayout_north, "hlayout_south");
			//hlayoutSouthHeight = Math.round((screenheight*params.southheight)/100); //4% of total height
			hlayoutSouthHeight = Math.round((screenheight*(configParam.getConfig("southheight", hlayout_south.id)))/100); //4% of total height
			if(hlayoutSouthHeight <= 20) {
				hlayout_south.style.display="none";
				hlayout_south.style.height="0px";
			} else {
				//hlayout_south.style.display="block";				
				hlayout_south.style.height=hlayoutSouthHeight + "px";
				processBorders(hlayout_south, config, "vertical", "hlayout_south");
				//adjust the width for borders
				var southWidth = screenwidth - config.hlayout_south_xborder;
				if(southWidth <= 10) {
					hlayout_south.style.display="none";
				} else {
					hlayout_south.style.display="block";
				}				
				hlayout_south.style.width=southWidth + "px";			
				//if resize bars are needed generate them
				if(configParam.getConfig("resizebar", hlayout_south.id)) {
					createHBarsBeforeElement(hlayout_south);
					//then add resize bar width to borderWidths
					borderWidths += 6;
				}
			}
		}
		
	
		hlayout_center.style.width=screenwidth + "px";
		processBorders(hlayout_center, config, "vertical", "hlayout_center");
		//adjust the width for borders
		centerWidth = screenwidth - config.hlayout_center_xborder;
		hlayout_center.style.width=centerWidth + "px";		
		
		if(config.hlayout_north_border) {
			borderWidths += config.hlayout_north_border;
		}
		if(config.hlayout_south_border) {
			borderWidths += config.hlayout_south_border;
		}		
		centerContainerHeight = screenheight - (hlayoutNorthHeight + hlayoutSouthHeight) - borderWidths - config.hlayout_center_border;
		if(centerContainerHeight < 10 || centerWidth < 10) {
			hlayout_center.style.display="none";
		} else{
			hlayout_center.style.display="block";			
			hlayout_center.style.height=centerContainerHeight + "px";
		}
			
		//recursive call
		pack(hlayout_center, {width:centerWidth, height:centerContainerHeight});

		if(hlayout_north) {
			pack(hlayout_north, {width:northWidth, height:hlayoutNorthHeight});			
		}
		if(hlayout_south) {
			pack(hlayout_south, {width:southWidth, height:hlayoutSouthHeight});			
		}		
		
		
	}
	
	//style
	var vlayout_west = getChild(rootElement,"vlayout_west");
	var vlayout_center = getChild(rootElement,"vlayout_center");
	var vlayout_east = getChild(rootElement,"vlayout_east");
	if(vlayout_west || vlayout_center || vlayout_east) {

		if(!vlayout_center) {
			alert("Uh-oh. Looks like you missed a center panel in a vertical layout. Check your html.");
			return false;
		}
		resetStylesIfContainer(vlayout_center, "vlayout_center");
	
		
		borderWidths = 0;		
		//Unlike the hlayout above the vlayouts need to be specified width values instead of heights
		//initialize the width variables
		var topWestWidth = 0;
		var topEastWidth = 0;
		var topCenterWidth = 0;
		if(vlayout_west) {
			//reset the class name
			resetStylesIfContainer(vlayout_west, "vlayout_west");			
			topWestWidth = Math.round((screenwidth*(configParam.getConfig("westwidth", vlayout_west.id)))/100);
			if(topWestWidth <= 10) {
				vlayout_west.style.display="none";
			} else {
								
				vlayout_west.style.width=topWestWidth + "px";
				processBorders(vlayout_west, config, "horizontal", "vlayout_west");
				//adjust the width for borders
				var westHeight = screenheight - config.vlayout_west_xborder;
				if(westHeight <= 10) {
					vlayout_west.style.display="none";
				} else {
					vlayout_west.style.display="block";
				}
				vlayout_west.style.height=westHeight + "px";				
				if(configParam.getConfig("resizebar", vlayout_west.id)) {				
					createVBarsBeforeElement(vlayout_center);
					//then add resize bar width to borderWidths
					borderWidths += 6;
				}
			}
			
		}
		
		if(vlayout_east) {
			vlayout_east.style.display="block";			
			//reset the class name
			resetStylesIfContainer(vlayout_east, "vlayout_east");			
			topEastWidth = Math.round((screenwidth*(configParam.getConfig("eastwidth", vlayout_east.id)))/100);			
			
			if(topEastWidth <= 10) {
				vlayout_east.style.display="none";
			} else {
				vlayout_east.style.display="block";				
				vlayout_east.style.width=topEastWidth + "px";
				processBorders(vlayout_east, config, "horizontal", "vlayout_east");
				//adjust the width for borders
				var eastHeight = screenheight - config.vlayout_east_xborder;
				if(eastHeight <= 10) {
					vlayout_east.style.display="none";
				} else {
					vlayout_east.style.display="block";
				}				
				vlayout_east.style.height=eastHeight + "px";
				if(configParam.getConfig("resizebar", vlayout_east.id)) {				
					createVBarsBeforeElement(vlayout_east);
					//then add resize bar width to borderWidths
					borderWidths += 6;
				}
			}
		}
		

		if(config.vlayout_west_border) {
			borderWidths += config.vlayout_west_border;
		}
		if(config.vlayout_east_border) {
			borderWidths += config.vlayout_east_border;
		}		
		
		processBorders(vlayout_center, config, "horizontal", "vlayout_center");			
		topCenterWidth = screenwidth - (topWestWidth + topEastWidth) - borderWidths - config.vlayout_center_border;
		var centerHeight = screenheight - config.vlayout_center_xborder;		
		if(topCenterWidth <= 20 || centerHeight < 10) {
			vlayout_center.style.display="none";
		} else {
			vlayout_center.style.display="block";			
			vlayout_center.style.width=topCenterWidth + "px";
			//adjust the width for borders
			vlayout_center.style.height=centerHeight + "px";			
		}
	
		//recursive call
		pack(vlayout_center, {width:topCenterWidth, height:centerHeight});
		//createVerticalBars(rootElement);
		if(vlayout_west) {
			pack(vlayout_west, {width:topWestWidth, height:westHeight});			
		}
		if(vlayout_east) {
			pack(vlayout_east, {width:topEastWidth, height:eastHeight});			
		}		
	}

}

function resetStylesIfContainer(element, elementClassName) {
	if(getChild(element, "hlayout_center") || getChild(element, "vlayout_center")) {
		element.className=elementClassName;		
		element.removeAttribute("style");
	}
}

function nullifyBorderMarginAndPaddings(containerElement) {
	containerElement.style.border="0px";
	containerElement.style.padding=0;
	containerElement.style.margin=0;
}



function isContainer(element) {
	if(getChild(element, "hlayout_center") || getChild(element, "vlayout_center")) {
		return true;
	}	
}

function createVBarsBeforeElement(vlayoutPanel) {
	if(vlayoutPanel) {
		if(vlayoutPanel.previousSibling) {
			if(vlayoutPanel.previousSibling.className && vlayoutPanel.previousSibling.className=="vertical") {
				return;
			}
		}		
		var vertical = document.createElement("div");
		vertical.className = "vertical";
		vlayoutPanel.parentNode.insertBefore(vertical, vlayoutPanel);
	}
}

function createHBarsBeforeElement(hlayoutPanel) {
	if(hlayoutPanel) {
		//check if border element alreay present. In that case do nothing.
		if(hlayoutPanel.previousSibling) {
			if(hlayoutPanel.previousSibling.className && hlayoutPanel.previousSibling.className=="horizontal") {
				return;
			}
		}
		var horizontal = document.createElement("div");
		horizontal.className = "horizontal";
		hlayoutPanel.parentNode.insertBefore(horizontal, hlayoutPanel);
	}
}

function getChild(element, className) {
	//get all children of the element
	var children = element.childNodes
	for(i=0;i<children.length;i++) {
		if(children.item(i).className && (children.item(i).className.search(className) > -1)) {
			return children.item(i);
		}
	}
}

function getChildUsingIdOrClass(element, identity) {
	//get all children of the element
	var children = element.childNodes
	var child = null;
	for(i=0;i<children.length;i++) {
		if(children.item(i).className && (children.item(i).className.search(identity) > -1)) {
			child = children.item(i);
		} else if(children.item(i).id==identity) {
			child = children.item(i);
		}
	}
	return child;
}

function processBorders(element, config, orientation, className) {
	//initialize the variable
	var style = window.getComputedStyle(element,null);
	//set overflow to auto if it is not already specified. Do this only for non container elements.
	//also set border if not already defined This one too for only non containers or 'content' elements XD
	if(!isContainer(element)) {
		//console.log(style);		
		if(!style['overflow'] || style['overflow'] != 'auto') {
			element.style.overflow='auto';
		}
		if(configParam.getConfig("border", element.id)==true) {
			if(!style["borderLeftWidth"] || style["borderLeftWidth"]=="0px") {
				element.style.borderLeft="1px solid grey";
			}
			if(!style["borderRightWidth"] || style["borderRightWidth"]=="0px") {
				element.style.borderRight="1px solid grey";
			}
			if(!style["borderBottomWidth"] || style["borderBottomWidth"]=="0px") {
				element.style.borderBottom="1px solid grey";
			}
			if(!style["borderTopWidth"] || style["borderTopWidth"]=="0px") {
				element.style.borderTop="1px solid grey";
			}
		}
	}
	//console.log(Math.round(parseSize(window.getComputedStyle(element,null)["borderLeftWidth"])));
	config[className + "_border"] = 0;
	config[className + "_xborder"] = 0;	
/*	if(element.style.borderWidth) {//if divs have borders we set them to have fixed value of 1px
		//get the width as a number
		config[element.className + "_border"] = parseSize(element.style.borderWidth)*2;
	} else if(orientation=="horizontal") {
		if(element.style.borderRight) {
			config.increment(element.className + "_border",
					parseSizeFromString(element.style.borderRight));			
		} else if(element.style.borderRightWidth){
			config.increment(element.className + "_border",
					parseSize(element.style.borderRightWidth));
		}
		if(element.style.borderLeft) {
			config.increment(element.className + "_border",
					parseSizeFromString(element.style.borderLeft));			
		} else if(element.style.borderLeftWidth){
			config.increment(element.className + "_border",
					parseSize(element.style.borderLeftWidth));			
		}	
	} else if(orientation=="vertical") {
		if(element.style.borderTop) {
			config.increment(element.className + "_border",
					parseSizeFromString(element.style.borderTop));			
		} else if(element.style.borderTopWidth){
			config.increment(element.className + "_border",
					parseSize(element.style.borderTopWidth));			
		}
		
		if(element.style.borderBottom) {
			config.increment(element.className + "_border",
					parseSizeFromString(element.style.borderBottom));				
		} else if(element.style.borderBottomWidth){
			config.increment(element.className + "_border",
					parseSize(element.style.borderBottomWidth));			
		}
	}*/
	if(orientation=="horizontal") {
		//adjust for borders
		adjustHorizontalSize(style, "borderLeftWidth", "borderRightWidth",
				"borderTopWidth", "borderBottomWidth", config, className);
		//adjust for margins
		adjustHorizontalSize(style, "marginLeft", "marginRight",
				"marginTop", "marginBottom", config, className);
		
		//adjust for padding
		adjustHorizontalSize(style, "paddingLeft", "paddingRight",
				"paddingTop", "paddingBottom", config, className);		
		
	} else if(orientation=="vertical") {
		adjustVerticalSize(style, "borderLeftWidth", "borderRightWidth",
				"borderTopWidth", "borderBottomWidth", config, className);
		adjustVerticalSize(style, "marginLeft", "marginRight",
				"marginTop", "marginBottom", config, className);
		adjustVerticalSize(style, "paddingLeft", "paddingRight",
				"paddingTop", "paddingBottom", config, className);		
	}
	return config;
}

function adjustHorizontalSize(style, left, right, top, bottom, config, className) {
	var leftWidth = Math.round(parseSize(style[left]));
	var rightWidth = Math.round(parseSize(style[right]));
	config.increment(className + "_border",
			leftWidth);
	config.increment(className + "_border",
			rightWidth);
	var xtopWidth = Math.round(parseSize(style[top]));
	var xbottomWidth = Math.round(parseSize(style[bottom]));
	config.increment(className + "_xborder",
			xtopWidth);
	config.increment(className + "_xborder",
			xbottomWidth);
}

function adjustVerticalSize(style, left, right, top, bottom, config, className) {
	var topWidth = Math.round(parseSize(style[top]));
	var bottomWidth = Math.round(parseSize(style[bottom]));
	config.increment(className + "_border",
			topWidth);
	config.increment(className + "_border",
			bottomWidth);
	var xleftWidth = Math.round(parseSize(style[left]));
	var xrightWidth = Math.round(parseSize(style[right]));
	config.increment(className + "_xborder",
			xleftWidth);
	config.increment(className + "_xborder",
			xrightWidth);
}

function parseSize(dim) {
	dim = new String(dim);
	dimNum = dim.substring(0,dim.indexOf("px"));
	return Number(dimNum);
}

function parseSizeFromString(border) {
	size = matchSizeInBorder(border);
	if(size) {
		return parseSize(size);
	} else {
		return 0;
	}
}

function increment(property, count) {
	this[property] = this[property] + count;
}

function matchSizeInBorder(border) {
	if(border) {
		var re = /\b\d+px/i;
		var match = border.match(re);
		if(match) {
			return match;
		}
	}
}

function MouseDragMonitor() {
	this.flag = 0;
	this.target;
	this.originaPrevDivSize;
	this.originalNextDivSize;
	this.originalMouseAxePos;
	this.prevNode;
	this.nextNode;
	this.dragme_v;
	this.dragme_h;
	document.addEventListener("mousedown", function(e){
		this.target = e.target != null ? e.target : e.srcElement;
		this.prevNode = getPreviousDiv(this.target);
		this.nextNode = getNextDiv(this.target);
	
			if(this.target.className=="vertical") {
				stopDefault(e);				
				if(configParam.getConfig("resizable", prevNode.id)==true && configParam.getConfig("resizable", nextNode.id)==true){					
					this.originaPrevDivSize = parseSize(prevNode.style.width);
					this.originalNextDivSize = parseSize(nextNode.style.width);
					this.flag = 1;			
					this.originalMouseAxePos = e.clientX;
					this.dragme_v = document.getElementById("dragme_v");
					this.dragme_v.style.width="8px";
					this.dragme_v.style.height=prevNode.style.height;
					this.dragme_v.style.left=(e.clientX - 3) + "px";
					topPos = getPos(this.target);
					this.dragme_v.style.top=topPos.y + "px";
					this.dragme_v.style.display='block';
				}
	
			} else if(this.target.className=="horizontal") {
				stopDefault(e);
				if(configParam.getConfig("resizable", prevNode.id)==true && configParam.getConfig("resizable", nextNode.id)==true){					
					this.flag = 1;			
					this.originalMouseAxePos = e.clientY;
					this.originaPrevDivSize = parseSize(prevNode.style.height);
					this.originalNextDivSize = parseSize(nextNode.style.height);
					this.dragme_h = document.getElementById("dragme_h");
					this.dragme_h.style.height="8px";
					this.dragme_h.style.width=prevNode.style.width;
					this.dragme_h.style.top=(e.clientY) + "px";
					topPos = getPos(this.target);
					this.dragme_h.style.left=topPos.x + "px";
					this.dragme_h.style.display='block';
				}
			}
	
	}, false);
	
	document.addEventListener("mousemove", function(e){
		if(this.flag == 1) {
			if(this.target.className=="vertical") {
				stopDefault(e);				
				this.dragme_v.style.left=(e.clientX - 3) + "px";
			} else if(this.target.className=="horizontal") {
				stopDefault(e);				
				this.dragme_h.style.top=(e.clientY) + "px";			
			}
		}
	}, false);
	
	
	document.addEventListener("mouseup", function(e){


			if(this.flag==1 && this.target.className=="vertical") {
				this.flag=0;				
				this.dragme_v.style.display='none';				
				mouseX = e.clientX;
				delta = mouseX - this.originalMouseAxePos;//check the delta
				if(delta != 0) {//if the mousemove is not significant then do nothing.
					divSizes = calculateSiblingDivSizes(this.originaPrevDivSize, this.originalNextDivSize, delta);
					this.flag = 0;
					//collapse the section if width becomes 0
					var collapsedDiv = collapseSection(this.prevNode, this.nextNode, divSizes);
					if(collapsedDiv) {
						if(collapsedDiv.action=="hide") {
							if(collapsedDiv.nodeType=="next") {
								var style = window.getComputedStyle(this.nextNode,null);
								config = calculateBorderMarginPaddingSize(style, "nextNode");
								divSizes.prevDiv = divSizes.prevDiv + config["nextNode_border"];
							} else if(collapsedDiv.nodeType=="previous") {
								var style = window.getComputedStyle(this.prevNode,null);
								config = calculateBorderMarginPaddingSize(style, "prevNode");							
								divSizes.nextDiv = divSizes.nextDiv + config["prevNode_border"];	
							}
						} else if(collapsedDiv.action=="show") {
							if(collapsedDiv.nodeType=="next") {
								var style = window.getComputedStyle(this.nextNode,null);
								config = calculateBorderMarginPaddingSize(style, "nextNode");
								divSizes.prevDiv = divSizes.prevDiv - config["nextNode_border"];
							} else if(collapsedDiv.nodeType=="previous") {
								var style = window.getComputedStyle(this.prevNode,null);
								config = calculateBorderMarginPaddingSize(style, "prevNode");							
								divSizes.nextDiv = divSizes.nextDiv - config["prevNode_border"];	
							}
						}
					}
					this.nextNode.style.width=divSizes.nextDiv + "px";
					this.prevNode.style.width=divSizes.prevDiv + "px";				
					console.log("Setting mouse to up with next: " + divSizes.nextDiv + "px" + " and previous: " + divSizes.prevDiv + "px");				
					var nextheight = parseSize(this.nextNode.style.height);
					var prevheight = parseSize(this.prevNode.style.height);				
					//pack the elements
					pack(this.nextNode, {width:divSizes.nextDiv, height:nextheight});
					pack(this.prevNode, {width:divSizes.prevDiv, height:prevheight});
				}
			} else if(this.flag==1 && this.target.className=="horizontal") {
				this.flag=0;				
				this.dragme_h.style.display='none';					
				mouseY = e.clientY;
				delta = mouseY - this.originalMouseAxePos;//check the delta
				if(delta != 0) {//if the mousemove is not significant then do nothing.				
					divSizes = calculateSiblingDivSizes(this.originaPrevDivSize, this.originalNextDivSize, delta);
					this.flag = 0;
					//collapse the section if height becomes 0
					var collapsedDiv = collapseSection(this.prevNode, this.nextNode, divSizes);
					if(collapsedDiv) {
						if(collapsedDiv.action=="hide") {
							if(collapsedDiv.nodeType=="next") {
								var style = window.getComputedStyle(this.nextNode,null);
								config = calculateBorderMarginPaddingSize(style, "nextNode");
								divSizes.prevDiv = divSizes.prevDiv + config["nextNode_border"];
							} else if(collapsedDiv.nodeType=="previous") {
								var style = window.getComputedStyle(this.prevNode,null);
								config = calculateBorderMarginPaddingSize(style, "prevNode");							
								divSizes.nextDiv = divSizes.nextDiv + config["prevNode_border"];	
							}
						} else if(collapsedDiv.action=="show") {
							if(collapsedDiv.nodeType=="next") {
								var style = window.getComputedStyle(this.nextNode,null);
								config = calculateBorderMarginPaddingSize(style, "nextNode");
								divSizes.prevDiv = divSizes.prevDiv - config["nextNode_border"];
							} else if(collapsedDiv.nodeType=="previous") {
								var style = window.getComputedStyle(this.prevNode,null);
								config = calculateBorderMarginPaddingSize(style, "prevNode");							
								divSizes.nextDiv = divSizes.nextDiv - config["prevNode_border"];	
							}
						}
					}				
					this.nextNode.style.height=divSizes.nextDiv + "px";
					this.prevNode.style.height=divSizes.prevDiv + "px";				
					console.log("Setting mouse to up with next: " + divSizes.nextDiv + "px" + " and previous: " + divSizes.prevDiv + "px");				
					var nextwidth = parseSize(this.nextNode.style.width);
					var prevwidth = parseSize(this.prevNode.style.width);
					//pack the elements
					pack(this.nextNode, {width:nextwidth, height:divSizes.nextDiv});
					pack(this.prevNode, {width:prevwidth, height:divSizes.prevDiv});
				}
			}
		}, false);

}

function calculateBorderMarginPaddingSize(style, token) {
	var config = new Config();							
	config[token + "_border"] = 0;
	config[token + "_xborder"] = 0;
								
	//adjust for borders
	adjustHorizontalSize(style, "borderLeftWidth", "borderRightWidth",
			"borderTopWidth", "borderBottomWidth", config, token);
	//adjust for margins
	adjustHorizontalSize(style, "marginLeft", "marginRight",
			"marginTop", "marginBottom", config, token);
	
	//adjust for padding
	adjustHorizontalSize(style, "paddingLeft", "paddingRight",
			"paddingTop", "paddingBottom", config, token);
	
	return config;
	
}

function collapseSection(prevNode, nextNode, divSizes) {
	var collapsedDiv = new Object();
	if(divSizes.nextDiv==0) {
		if(nextNode.style.display=="none") {//this is the case when someone is dragging to hide an already hidden div
			return;
		}
		nextNode.style.display="none";
		collapsedDiv.nodeType = "next";
		collapsedDiv.action = "hide";
	} else {
		if(nextNode.style.display=="none") {
			collapsedDiv.action="show";
			collapsedDiv.nodeType = "next";
		}
		nextNode.style.display="block";
	}
	if(divSizes.prevDiv==0) {
		if(prevNode.style.display=="none") {//this is the case when someone is dragging to hide an already hidden div
			return;
		}		
		prevNode.style.display="none";
		collapsedDiv.nodeType = "previous";
		collapsedDiv.action = "hide";		
	} else {
		if(prevNode.style.display=="none") {
			collapsedDiv.action="show";
			collapsedDiv.nodeType = "previous";
		}		
		prevNode.style.display="block";
	}
	return collapsedDiv;
}

function calculateSiblingDivSizes(originaPrevDivSize, originalNextDivSize, delta) {
	if(delta > 0) {//this means mouse is moving right or downward
		if((originalNextDivSize - Math.round(delta)) > 10) {
			originaPrevDivSize += Math.round(delta);
			originalNextDivSize -= Math.round(delta);
		} else {
			originaPrevDivSize +=originalNextDivSize;
			originalNextDivSize=0;
		}
	} else if(delta < 0) {
		if((originaPrevDivSize + Math.round(delta))  > 10) {
			originaPrevDivSize += Math.round(delta);
			originalNextDivSize -=  Math.round(delta);
		} else {
			originalNextDivSize += originaPrevDivSize;			
			originaPrevDivSize=0;
		}
	}
	return {nextDiv:originalNextDivSize,prevDiv:originaPrevDivSize}
}

function getPreviousDiv(element) {
	prevNode = element.previousSibling;
	while(prevNode && prevNode.nodeType!=1) {
		prevNode=prevNode.previousSibling;
	}
	return prevNode;
}

function getNextDiv(element) {
	nextNode = element.nextSibling;
	while(nextNode && nextNode.nodeType!=1) {
		nextNode=nextNode.nextSibling;
	}
	return nextNode;
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}

function stopDefault(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    else {
        window.event.returnValue = false;
    }
    return false;
}

/*** JQUERY PLUGIN CODE BELOW **/
(function($) {
	$.fn.xlayout = function(mode, param) {
	    init($(this)[0], mode, param);
	};
})(jQuery);