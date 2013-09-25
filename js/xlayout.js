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



function ConfigParam() {
	this.initParam = {
		default: {
	  		northheight:20,
	  		southheight:10,
	  		westwidth:25,
	  		eastwidth:25,
	  		resizable:true,
	  		resizebar:true,
	  		border:true,
	  		hbarclassname:"horizontal",
	  		vbarclassname:"vertical",
	  		lateralmarginfixedlayout:3
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
			if(temp.border==null) {
				temp.border=this.initParam.default.border;
			}
			if(temp.hbarclassname==null) {
				temp.hbarclassname=this.initParam.default.hbarclassname;
			}
			if(temp.vbarclassname==null) {
				temp.vbarclassname=this.initParam.default.vbarclassname;
			}
			if(temp.lateralmarginfixedlayout==null) {
				temp.lateralmarginfixedlayout=this.initParam.default.lateralmarginfixedlayout;
			}
		} else {
			defConfig.default=this.initParam.default;
		}
		
		this.initParam=defConfig;
	}
	
	this.getConfig = function(token, id) {
		var retValue = null;
		var tempParams = null;
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
	
	this.setConfig = function(token, id, value) {
		var tempParams = null;
		if(this.initParam[id]) {
			tempParams = this.initParam[id];
			tempParams[token] = value;
		} else {
			this.initParam[id] = new Object();
			this.initParam[id][token] = value;
		}
	}
}

function viewport(container, mode){
	var e = window, a = 'inner';
	if(mode=="window") {
		return { width : (e[ a+'Width' ]) , height : (e[ a+'Height' ])};
	} else if(mode=="fixed_window") {
		container.style.marginLeft=(this.configParam.getConfig("lateralmarginfixedlayout", container.id)) + "%";
		return {width:screen.width - calculateScreenWidthOffset(screen.width,
				this.configParam.getConfig("lateralmarginfixedlayout", container.id)), height:(screen.height)}
		
	} else {
		var style = window.getComputedStyle(container, null);
		
		return {width:parseSize(style["width"]), height:parseSize(style["height"])};
	}
	
}

function Xlayout(container, mode, param) {
	this.configParam = null;
	this.idGen = 0;
	this.v_resizeBars = ["vertical"];
	this.h_resizeBars = ["horizontal"];
	this.dragMonitor = null;
	this.containetElement = null
	this.mode = mode;
	

	if(container=='body') {
		this.containerElement = document.body;
	} else {
		this.containerElement = getChildUsingIdOrClass(document.body, container);
	}		
	
	this.hidePanel=collapsePanel;
	this.showPanel=expandPanel;
	this.init=function (containerElement, mode, param) {
			this.configParam = new ConfigParam();
			if(param) {
				this.configParam.resolve(param);
			}
			
			if(mode==null) {
				mode="window";
			}
			
			//initialize mouse drag component.
			this.dragMonitor = new MouseDragMonitor(this);
			this.viewport=viewport;
		
			//pack
			this.pack(containerElement, this.viewport(containerElement, mode));
			
			//pack the layout if the window is resized.
			if(mode=="window") {
				nullifyBorderMarginPaddingsAndOverflow(containerElement);
				/*window.onresize=function() { this.pack(containerElement, viewport(containerElement, mode));}*/
				var windowResizeHandler = new WindowResizeHandler(this);
			}
			
			var vshadow = document.createElement("div");
			vshadow.id="dragme_v";
			document.body.insertBefore(vshadow, document.body.firstChild);
			var hshadow = document.createElement("div");
			hshadow.id="dragme_h";
			document.body.insertBefore(hshadow, document.body.firstChild);
		}

		this.processBorders=processBorders;
		this.createHBarsBeforeElement=createHBarsBeforeElement;
		this.createVBarsBeforeElement=createVBarsBeforeElement;
		this.adjustHorizontalPanelSize=adjustHorizontalPanelSize;
		this.adjustVerticalPanelSize=adjustVerticalPanelSize;
		this.collapseOrShowHorizontalPanels=collapseOrShowHorizontalPanels;
		this.collapseOrShowVerticalPanels=collapseOrShowVerticalPanels;
		this.pack=pack;
	
		this.init(this.containerElement, this.mode, param);
}

//This get called once only from the client html page!!


function Config() {
	this.increment=function (property, count) {
		this[property] = this[property] + count;
	}
}

function WindowResizeHandler(xlayout) {
	window.addEventListener("resize", function(e) {
		xlayout.pack(xlayout.containerElement, xlayout.viewport(xlayout.containerElement, xlayout.mode));
	});
}

function pack(rootElement, size) {
try {
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
				
				hlayoutNorthHeight = Math.round(screenheight*(this.configParam.getConfig("northheight", hlayout_north.id)/100));
				//compensate for border width if any
				config.hlayout_north_xborder=0;
				this.processBorders(hlayout_north, config, "vertical", "hlayout_north");
				//adjust the width for borders
				var northWidth = screenwidth - config.hlayout_north_xborder;
	
				if(hlayout_north.style.display!="none") {
					if(config.hlayout_north_border) {
						borderWidths += config.hlayout_north_border;
					}
				}
				
				hlayout_north.style.width=northWidth + "px";
	
				//if resize bars are needed generate them
				if(this.configParam.getConfig("resizebar", hlayout_north.id)) {
					borderWidths += this.createHBarsBeforeElement(hlayout_center, 
							this.configParam.getConfig("hbarclassname", hlayout_north.id),
							this.configParam.getConfig("resizebartext", hlayout_north.id));
				}
			}
			
			if(hlayout_south) {
				//reset the class name
				//find out if this is a container element and void styles if this is the case.			
				resetStylesIfContainer(hlayout_south, "hlayout_south");
				hlayoutSouthHeight = Math.round(screenheight*(this.configParam.getConfig("southheight", hlayout_south.id)/100)); //4% of total height
				this.processBorders(hlayout_south, config, "vertical", "hlayout_south");
				//adjust the width for borders
				var southWidth = screenwidth - config.hlayout_south_xborder;
				if(hlayout_south.style.display!="none") {
					if(config.hlayout_south_border) {
						borderWidths += config.hlayout_south_border;
					}
				}			
				
				hlayout_south.style.width=southWidth + "px";
						
				//if resize bars are needed generate them
				if(this.configParam.getConfig("resizebar", hlayout_south.id)) {
					borderWidths += this.createHBarsBeforeElement(hlayout_south,
							this.configParam.getConfig("hbarclassname", hlayout_south.id),
							this.configParam.getConfig("resizebartext", hlayout_south.id));
				}
			}
			
		
			hlayout_center.style.width=screenwidth + "px";
			this.processBorders(hlayout_center, config, "vertical", "hlayout_center");
			//adjust the width for borders
			centerWidth = screenwidth - config.hlayout_center_xborder;
			hlayout_center.style.width=centerWidth + "px";		
			centerContainerHeight = screenheight - (hlayoutNorthHeight + hlayoutSouthHeight) - borderWidths - config.hlayout_center_border;
	
	
			if(centerContainerHeight < 0) {
				if(hlayoutNorthHeight > hlayoutSouthHeight) {
					hlayoutNorthHeight += centerContainerHeight;
				} else {
					hlayoutSouthHeight += centerContainerHeight;
				}
				centerContainerHeight = 0;
			}
			//if center panel is closed.
			var centerClosed = this.configParam.getConfig("centrewidth", hlayout_center.id) == 0;
			//we have to explicitly handle open and close of center panel because we haven't yet implemented a function for open/close of center panel.
			if(centerClosed) {
				hlayout_center.style.display="none";
				if(hlayout_south) {
					hlayoutSouthHeight +=centerContainerHeight;
					hlayoutSouthHeight +=config.hlayout_center_border;
				} else if(hlayout_north) {
					hlayoutNorthHeight +=centerContainerHeight;	
					hlayoutNorthHeight +=config.hlayout_center_border;
				}
				centerContainerHeight=0;
			} else{
				hlayout_center.style.display="block";			
				hlayout_center.style.height=centerContainerHeight + "px";
			}
			this.pack(hlayout_center, {width:centerWidth, height:centerContainerHeight});		
	
			if(hlayout_north) {
				hlayout_north.style.height=hlayoutNorthHeight + "px"; //3% of total height
			}
			if(hlayout_south) {
				hlayout_south.style.height=hlayoutSouthHeight + "px";
			}
			
			if(hlayout_north) {
				this.pack(hlayout_north, {width:northWidth, height:hlayoutNorthHeight});			
			}
			if(hlayout_south) {
				this.pack(hlayout_south, {width:southWidth, height:hlayoutSouthHeight});			
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
				topWestWidth = Math.round(screenwidth*(this.configParam.getConfig("westwidth", vlayout_west.id)/100));
				this.processBorders(vlayout_west, config, "horizontal", "vlayout_west");
					//adjust the width for borders
				var westHeight = screenheight - config.vlayout_west_xborder;
	
				if(vlayout_west.style.display!='none') {
					if(config.vlayout_west_border) {
						borderWidths += config.vlayout_west_border;
					}
				}
	
				vlayout_west.style.height=westHeight + "px";
				if(this.configParam.getConfig("resizebar", vlayout_west.id)) {				
					borderWidths += this.createVBarsBeforeElement(vlayout_center,
							this.configParam.getConfig("vbarclassname", vlayout_west.id),
							this.configParam.getConfig("resizebartext", vlayout_west.id));
				}
			}
			
			if(vlayout_east) {
				//reset the class name
				resetStylesIfContainer(vlayout_east, "vlayout_east");			
				topEastWidth = Math.round(screenwidth*(this.configParam.getConfig("eastwidth", vlayout_east.id)/100));			
				
				this.processBorders(vlayout_east, config, "horizontal", "vlayout_east");
					//adjust the width for borders
				var eastHeight = screenheight - config.vlayout_east_xborder;
				if(vlayout_east.style.display!='none') {
					if(config.vlayout_east_border) {
						borderWidths += config.vlayout_east_border;
					}
				}
				vlayout_east.style.height=eastHeight + "px";
						
				if(this.configParam.getConfig("resizebar", vlayout_east.id)) {				
	
					borderWidths += this.createVBarsBeforeElement(vlayout_east,
							this.configParam.getConfig("vbarclassname", vlayout_east.id),
							this.configParam.getConfig("resizebartext", vlayout_east.id));
				}
			}
			
	
			
			this.processBorders(vlayout_center, config, "horizontal", "vlayout_center");			
			topCenterWidth = screenwidth - (topWestWidth + topEastWidth) - borderWidths - config.vlayout_center_border;
			
			if(topCenterWidth < 0) {
				if(topWestWidth > topEastWidth) {
					topWestWidth += topCenterWidth;
				} else {
					topEastWidth += topCenterWidth;
				}
				topCenterWidth = 0;
			}
			
			var centerClosed = this.configParam.getConfig("centrewidth", vlayout_center.id) == 0;
			if(centerClosed || (centerHeight < 0)) {
				vlayout_center.style.display="none";
				topCenterWidth=0;
				if(vlayout_west) {
					topWestWidth +=topCenterWidth;
					topWestWidth +=config.vlayout_center_border;
				} else if(vlayout_east) {
					topEastWidth +=topCenterWidth;	
					topEastWidth +=config.vlayout_center_border;
				}			
			} else {
				vlayout_center.style.display="block";			
				vlayout_center.style.width=topCenterWidth + "px";
				//adjust the width for borders
				vlayout_center.style.height=centerHeight + "px";			
			}
			
			if(vlayout_west) {
				vlayout_west.style.width=topWestWidth + "px"; //3% of total height
			}
			if(vlayout_east) {
				vlayout_east.style.width=topEastWidth + "px";
			}		
			
			var centerHeight = screenheight - config.vlayout_center_xborder;		
	
		
			//recursive call
			this.pack(vlayout_center, {width:topCenterWidth, height:centerHeight});
			//createVerticalBars(rootElement);
			if(vlayout_west) {
				this.pack(vlayout_west, {width:topWestWidth, height:westHeight});			
			}
			if(vlayout_east) {
				this.pack(vlayout_east, {width:topEastWidth, height:eastHeight});			
			}		
		}
	}catch(err) {
		console.error("error in pack() function:" + err);
	}

}

function compensateOverflow(centerContainer, previousContainer, nextContainer) {
	if(centerContainer < 0) {
		if(previousContainer > nextContainer) {
			previousContainer + centerContainer;
		} else {
			nextContainer + centerContainer;
		}
	}
	return {center:centerContainer, previous:previousContainer, next:nextContainer}
}

function resetStylesIfContainer(element, elementClassName) {
	if(getChild(element, "hlayout_center") || getChild(element, "vlayout_center")) {
		element.className=elementClassName;		
		nullifyBorderMarginPaddingsAndOverflow(element);
	}
}

function nullifyBorderMarginPaddingsAndOverflow(containerElement) {
	containerElement.style.border="0px";
	containerElement.style.padding=0;
	containerElement.style.margin=0;
	containerElement.style.overflow="hidden";
}



function isContainer(element) {
	if(getChild(element, "hlayout_center") || getChild(element, "vlayout_center")) {
		return true;
	}	
}

function addTextNode(element, text) {
	var textNode = document.createTextNode(text);
	element.appendChild(textNode);
}

function createVBarsBeforeElement(vlayoutPanel, className, text) {
	if(!contains(this.v_resizeBars, className)) {
		this.v_resizeBars.push(className);
	}	
	if(vlayoutPanel) {
		var vertical = resizeBarAlreadyPresent(vlayoutPanel, className);
		if(vertical == null) {
			vertical = document.createElement("div");
			vertical.className = className;
			vlayoutPanel.parentNode.insertBefore(vertical, vlayoutPanel);
			if(text) {
				addTextNode(vertical, text);
			}
		}
		var style = window.getComputedStyle(vertical,null);
		trimVerticalStyles(vertical);
		var config = calculateBorderMarginPaddingSize(style, "vbar");
		//console.log(config["vbar_border"] + parseSize(style['width']));
		return config["vbar_border"] + parseSize(style['width']);		
	}
}

function contains(arr, element) {
	var containsFlag = false;
	for(var i=0;i<arr.length; i++) {
		if(arr[i]==element){
			containsFlag = true;
			break;
		}
	}
	return containsFlag;
}

function createHBarsBeforeElement(hlayoutPanel, className, text) {
	if(!contains(this.h_resizeBars, className)) {
		this.h_resizeBars.push(className);
	}
	if(hlayoutPanel) {	
		var horizontal = resizeBarAlreadyPresent(hlayoutPanel, className);
		
		if(horizontal == null) {
			horizontal = document.createElement("div");
			horizontal.className = className;
			hlayoutPanel.parentNode.insertBefore(horizontal, hlayoutPanel);
			if(text) {
				addTextNode(horizontal, text);
			}			
		}
		var style = window.getComputedStyle(horizontal,null);
		trimHorizontalStyles(horizontal);
		var config = calculateBorderMarginPaddingSize(style, "hbar");
		//console.log(config["hbar_xborder"] + parseSize(style['height']));
		return config["hbar_xborder"] + parseSize(style['height']);
	}
}

function resizeBarAlreadyPresent(panel, orientation) {
	var retPanel = null;
/*	if(panel.previousSibling || panel.nextSibling) {
		if((panel.previousSibling.className && panel.previousSibling.className==orientation)
				||(panel.nextSibling.className && panel.nextSibling.className==orientation)) {
			if(panel.previousSibling) {
				retPanel = panel.previousSibling;
			} else {
				retPanel = panel.nextSibling;
			}
		}
	}*/
	if(panel.previousSibling) {
		if(panel.previousSibling.className==orientation) {
			retPanel = panel.previousSibling;
		}
	}	
	return retPanel;
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
		if(!style['overflow'] || style['overflow'] != 'auto') {
			element.style.overflow='auto';
		}
		if(this.configParam.getConfig("border", element.id)==true) {
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

function MouseDragMonitor(xlayout) {
	document.addEventListener("mousedown", function(e){
		this.target = e.target != null ? e.target : e.srcElement;
		this.prevNode = getPreviousDiv(this.target);
		this.nextNode = getNextDiv(this.target);
	
			//if(this.target.className=="vertical") {
		if(contains(xlayout.v_resizeBars, this.target.className)) {		
				stopDefault(e);				
				if(xlayout.configParam.getConfig("resizable", prevNode.id)==true
				 && xlayout.configParam.getConfig("resizable", nextNode.id)==true){					
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
	
			} else if(contains(xlayout.h_resizeBars, this.target.className)) {
				stopDefault(e);
				if(xlayout.configParam.getConfig("resizable", prevNode.id)==true
				 && xlayout.configParam.getConfig("resizable", nextNode.id)==true){					
					this.flag = 1;			
					this.originalMouseAxePos = e.clientY;
					this.originaPrevDivSize = parseSize(prevNode.style.height);
					this.originalNextDivSize = parseSize(nextNode.style.height);
					this.dragme_h = document.getElementById("dragme_h");
					this.dragme_h.style.height="8px";
					this.dragme_h.style.width=prevNode.style.width;
					
					//console.log(whereAt(e) + " " + e.clientY);
					//this.dragme_h.style.top=(e.clientY) + "px";
					this.dragme_h.style.top=(whereAt(e)[1]) + "px";					
					topPos = getPos(this.target);
					this.dragme_h.style.left=topPos.x + "px";
					this.dragme_h.style.display='block';
				}
			}
	
	}, false);
	
	document.addEventListener("mousemove", function(e){
		if(this.flag == 1) {
			//console.log(whereAt(e));
			if(contains(xlayout.v_resizeBars, this.target.className)) {
				stopDefault(e);				
				this.dragme_v.style.left=(e.clientX - 3) + "px";
			} else if(contains(xlayout.h_resizeBars, this.target.className)) {
				stopDefault(e);				
				this.dragme_h.style.top=(whereAt(e)[1]) + "px";			
			}
		}
	}, false);
	
	
	document.addEventListener("mouseup", function(e){


			if(this.flag==1 && contains(xlayout.v_resizeBars, this.target.className)) {
				this.flag=0;				
				this.dragme_v.style.display='none';				
				mouseX = e.clientX;
				delta = mouseX - this.originalMouseAxePos;//check the delta
				if(delta != 0) {//if the mousemove is not significant then do nothing.
					//calculate the div size changes
					divSizes = calculateSiblingDivSizes(this.originaPrevDivSize, this.originalNextDivSize, delta);
					this.flag = 0;
					//collapse the section if width becomes 0
					collapseSection(this.prevNode, this.nextNode, divSizes);
					//make the actual size adjustments.
					xlayout.adjustVerticalPanelSize(this.nextNode, this.prevNode);
				}
			} else if(this.flag==1 && contains(xlayout.h_resizeBars, this.target.className)) {
				this.flag=0;				
				this.dragme_h.style.display='none';					
				mouseY = e.clientY;
				delta = mouseY - this.originalMouseAxePos;//check the delta
				if(delta != 0) {//if the mousemove is not significant then do nothing.				
					divSizes = calculateSiblingDivSizes(this.originaPrevDivSize, this.originalNextDivSize, delta);
					this.flag = 0;
					//collapse the section if height becomes 0
					collapseSection(this.prevNode, this.nextNode, divSizes);
					xlayout.adjustHorizontalPanelSize(this.nextNode, this.prevNode);
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

function trimHorizontalStyles(horizontal) {
	horizontal.style["borderLeft"]="0px";
	horizontal.style["borderRight"]="0px";
	horizontal.style["marginLeft"]="0px";
	horizontal.style["marginRight"]="0px";
	horizontal.style["paddingLeft"]="0px";
	horizontal.style["paddingRight"]="0px";
}

function trimVerticalStyles(horizontal) {
	horizontal.style["borderTop"]="0px";
	horizontal.style["borderBottom"]="0px";
	horizontal.style["marginTop"]="0px";
	horizontal.style["marginBottom"]="0px";
	horizontal.style["paddingTop"]="0px";
	horizontal.style["paddingBottom"]="0px";
}

function adjustVerticalPanelSize(nextNode, prevNode) {
	nextNode.style.width=divSizes.nextDiv + "px";
	prevNode.style.width=divSizes.prevDiv + "px";
	var oldSize = null;
	if(nextNode.id==null || nextNode.id==""){
		nextNode.id="n1l4r" + (++this.idGen);
	}
	if(prevNode.id==null || prevNode.id=="") {
		prevNode.id="n1l4r" + (++this.idGen);
	}	
	var base = null;
	var percentVal = null;
	var percentValCenter = null;
	if(nextNode.className.search("vlayout_east") > -1) {
		
		base = parseSize(nextNode.parentNode.style.width);
		percentVal = Math.round(divSizes.nextDiv/base*100);
		//preserve the original dimension for use when expanding this panel
		oldSize = this.configParam.getConfig("eastwidth",  nextNode.id);
		this.configParam.setConfig("eastwidth_orig",  nextNode.id, oldSize);
		this.configParam.setConfig("eastwidth",  nextNode.id, percentVal);
		percentValCenter = Math.round(divSizes.prevDiv/base*100);
		this.configParam.setConfig("centrewidth",  prevNode.id, percentValCenter);		

	} else if(prevNode.className.search("vlayout_west") > -1) {
		base = parseSize(prevNode.parentNode.style.width);
		percentVal = Math.round(divSizes.prevDiv/base*100);
		//preserve the original dimension for use when expanding this panel
		oldSize = this.configParam.getConfig("westwidth",  prevNode.id);
		this.configParam.setConfig("westwidth_orig",  prevNode.id, oldSize);		
		this.configParam.setConfig("westwidth",  prevNode.id, percentVal);
		percentValCenter = Math.round(divSizes.nextDiv/base*100);
		this.configParam.setConfig("centrewidth",  nextNode.id, percentValCenter);		
	}

		
	var nextheight = parseSize(nextNode.style.height);
	var prevheight = parseSize(prevNode.style.height);				
	//pack the elements
	this.pack(nextNode, {width:divSizes.nextDiv, height:nextheight});
	this.pack(prevNode, {width:divSizes.prevDiv, height:prevheight});
}

function adjustHorizontalPanelSize(nextNode, prevNode) {
	nextNode.style.height=divSizes.nextDiv + "px";
	prevNode.style.height=divSizes.prevDiv + "px";
	var oldSize = null;
	if(nextNode.id==null || nextNode.id==""){
		nextNode.id="n1l4r" + (++this.idGen);
	}
	if(prevNode.id==null || prevNode.id=="") {
		prevNode.id="n1l4r" + (++this.idGen);
	}	
	var base = null;
	var percentVal = null;
	var percentValCenter = null;	
	if(nextNode.className.search("hlayout_south") > -1) {
		base = parseSize(nextNode.parentNode.style.height);
		percentVal = Math.round(divSizes.nextDiv/base*100);		
		//preserve the original dimension for use when expanding this panel
		oldSize = this.configParam.getConfig("southheight",  nextNode.id);
		this.configParam.setConfig("southheight_orig",  nextNode.id, oldSize);
		this.configParam.setConfig("southheight",  nextNode.id, percentVal);	
		percentValCenter = Math.round(divSizes.prevDiv/base*100);
		this.configParam.setConfig("centrewidth",  prevNode.id, percentValCenter);		
	} else if(prevNode.className.search("hlayout_north") > -1) {
		base = parseSize(prevNode.parentNode.style.height);
		percentVal = Math.round(divSizes.prevDiv/base*100);
		//preserve the original dimension for use when expanding this panel
		oldSize = this.configParam.getConfig("northheight",  prevNode.id);
		this.configParam.setConfig("northheight_orig",  prevNode.id, oldSize);		
		this.configParam.setConfig("northheight",  prevNode.id, percentVal);
		percentValCenter = Math.round(divSizes.nextDiv/base*100);
		this.configParam.setConfig("centrewidth",  nextNode.id, percentValCenter);		
	}	
			
	var nextwidth = parseSize(nextNode.style.width);
	var prevwidth = parseSize(prevNode.style.width);
	//pack the elements
	this.pack(nextNode, {width:nextwidth, height:divSizes.nextDiv});
	this.pack(prevNode, {width:prevwidth, height:divSizes.prevDiv});	
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
	
	if(collapsedDiv) {
		if(collapsedDiv.action=="hide") {
			if(collapsedDiv.nodeType=="next") {
				var style = window.getComputedStyle(nextNode,null);
				config = calculateBorderMarginPaddingSize(style, "nextNode");
				divSizes.prevDiv = divSizes.prevDiv + config["nextNode_border"];
			} else if(collapsedDiv.nodeType=="previous") {
				var style = window.getComputedStyle(prevNode,null);
				config = calculateBorderMarginPaddingSize(style, "prevNode");							
				divSizes.nextDiv = divSizes.nextDiv + config["prevNode_border"];	
			}
		} else if(collapsedDiv.action=="show") {
			if(collapsedDiv.nodeType=="next") {
				var style = window.getComputedStyle(nextNode,null);
				config = calculateBorderMarginPaddingSize(style, "nextNode");
				divSizes.prevDiv = divSizes.prevDiv - config["nextNode_border"];
			} else if(collapsedDiv.nodeType=="previous") {
				var style = window.getComputedStyle(prevNode,null);
				config = calculateBorderMarginPaddingSize(style, "prevNode");							
				divSizes.nextDiv = divSizes.nextDiv - config["prevNode_border"];	
			}
		}
	}
	
	
	return collapsedDiv;
}

function collapsePanel(id) {
	var element = document.getElementById(id);
	if(element.style.display=="none") {
		return;
	}
	var className =  element.className;
	var sibling = null;
	var height = null;
	var width = null;
	var siblingHeight = null;
	var siblingWidth = null;
	
	if(className=="vlayout_west") {
		sibling = getNextDivForClassName(element, "vlayout_center");
		width = 0;
		siblingWidth = parseSize(sibling.style.width) + parseSize(element.style.width);
		this.collapseOrShowVerticalPanels(siblingWidth, width, sibling, element);
	} else if(className=="vlayout_east"){
		sibling = getPreviousDivForClassName(element, "vlayout_center");
		width = 0;
		siblingWidth = parseSize(sibling.style.width) + parseSize(element.style.width);
		this.collapseOrShowVerticalPanels(width, siblingWidth, element, sibling);		
	} else if(className=="hlayout_north"){
		sibling = getNextDivForClassName(element, "hlayout_center");
		height = 0;
		siblingHeight = parseSize(sibling.style.height) + parseSize(element.style.height);
		this.collapseOrShowHorizontalPanels(siblingHeight, height, sibling, element);
	} else if(className=="hlayout_south"){
		sibling = getPreviousDivForClassName(element, "hlayout_center");
		height=0;
		siblingHeight = parseSize(sibling.style.height) + parseSize(element.style.height);
		this.collapseOrShowHorizontalPanels(height,siblingHeight,element,sibling);
	}

}

function expandPanel(id) {
	var element = document.getElementById(id);
	//just check of the panel is already visible if it is then do nothing
	if(element.style.display!="none") {
		return;
	}
	var className =  element.className;
	var sibling = null;
	var height = null;
	var width = null;
	var siblingHeight = null;
	var siblingWidth = null;
	var parentSize = null;
	
	if(className=="vlayout_west") {
		parentSize = parseSize(element.parentNode.style.width);
		sibling = getNextDivForClassName(element, "vlayout_center");
		width = Math.round(parentSize*(this.configParam.getConfig("westwidth_orig", id)/100));
		siblingWidth = parseSize(sibling.style.width) - width;
		if(siblingWidth < 0) {
			siblingWidth=0;
		}
		this.collapseOrShowVerticalPanels(siblingWidth, width, sibling, element);
	} else if(className=="vlayout_east"){
		parentSize = parseSize(element.parentNode.style.width);		
		sibling = getPreviousDivForClassName(element,"vlayout_center");
		width = Math.round(parentSize*(this.configParam.getConfig("eastwidth_orig", id)/100));
		siblingWidth = parseSize(sibling.style.width) - width;
		if(siblingWidth < 0) {
			siblingWidth=0;
		}
		this.collapseOrShowVerticalPanels(width, siblingWidth, element, sibling);		
	} else if(className=="hlayout_north"){
		parentSize = parseSize(element.parentNode.style.height);		
		sibling = getNextDivForClassName(element, "hlayout_center");
		height = Math.round(parentSize*(this.configParam.getConfig("northheight_orig", id)/100));
		siblingHeight = parseSize(sibling.style.height) - height;
		if(siblingHeight < 0) {
			siblingHeight=0;
		}		
		this.collapseOrShowHorizontalPanels(siblingHeight, height, sibling, element);
	} else if(className=="hlayout_south"){
		parentSize = parseSize(element.parentNode.style.height);		
		sibling = getPreviousDivForClassName(element, "hlayout_center");
		height=Math.round(parentSize*(this.configParam.getConfig("southheight_orig", id)/100));
		siblingHeight = parseSize(sibling.style.height) - height;
		if(siblingHeight < 0) {
			siblingHeight=0;
		}		
		this.collapseOrShowHorizontalPanels(height,siblingHeight,element,sibling);
	}
}

function collapseOrShowHorizontalPanels(next, previous, nextElement, prevElement) {
	//calculate the div size changes
	divSizes = {nextDiv:next,prevDiv:previous};
	//collapse the section
	collapseSection(prevElement, nextElement, divSizes);
	//make the actual size adjustments.
	this.adjustHorizontalPanelSize(nextElement, prevElement);
}

function collapseOrShowVerticalPanels(next, previous, nextElement, prevElement) {
	//calculate the div size changes
	divSizes = {nextDiv:next,prevDiv:previous};
	//collapse the section
	collapseSection(prevElement, nextElement, divSizes);
	//make the actual size adjustments.
	this.adjustVerticalPanelSize(nextElement, prevElement);
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

function getPreviousDivForClassName(element, className) {
	prevNode = element.previousSibling;
	while(prevNode && (prevNode.nodeType!=1 || !(prevNode.className && prevNode.className.search(className) >-1))) {
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

function getNextDivForClassName(element, className) {
	nextNode = element.nextSibling;
	while(nextNode && (nextNode.nodeType!=1 || !(nextNode.className
			&& nextNode.className.search(className) > -1))){
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

//calculate screen height offset based upon browser
function calculateScreenWidthOffset(screenwidth, marginPercent) {
	return Math.round(screenwidth*(marginPercent/100))*2
}

var whereAt= (function(){
    if(window.pageXOffset!= undefined){
        return function(ev){
            return [ev.clientX+window.pageXOffset,
            ev.clientY+window.pageYOffset];
        }
    }
    else return function(){
        var ev= window.event,
        d= document.documentElement, b= document.body;
        return [ev.clientX+d.scrollLeft+ b.scrollLeft,
        ev.clientY+d.scrollTop+ b.scrollTop];
    }
})()



/*** JQUERY PLUGIN CODE BELOW **/
/*(function($) {
	$.fn.xlayout = function(mode, param) {
	    init($(this)[0], mode, param);
	};
})(jQuery);*/