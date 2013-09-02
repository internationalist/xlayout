var configParam = null;
var windowMode = 'subset';

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

//This get called once only from the client html page!!
function init(container, mode, param) {
	windowMode=mode;
	configParam = new ConfigParam();
	if(param) {
		configParam.resolve(param);
	}
	//initialize mouse drag component.
	var dragMonitor = new MouseDragMonitor();
	
	//get the container element
	var containerElement = getChild(document.body, container);
	//pack
	pack(containerElement, viewport(containerElement, windowMode));
	
	//pack the layout if the window is resized.
	if(windowMode=="window") {
		window.onresize=function() { pack(containerElement, viewport(containerElement, windowMode));}
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
					borderWidths += 10;
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
					borderWidths += 10;
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
					borderWidths += 8;
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
					borderWidths += 8;
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
	var regex = new RegExp(className);
	for(i=0;i<children.length;i++) {
		if(children.item(i).className && (children.item(i).className.search(className) > -1)) {
			return children.item(i);
		}
	}
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

