var selected;

/* Main function that has to be called to enable tree behavior*/
(function ($) {
	var options;
	$.fn.tree = function(arg) {
		options = arg;
		$(this).disableSelection();
		$(this).attachEventHandlers($(this));
		$($(this).children('ul')[0]).addClass('tree');
		addCSSClassToLastNode();
		return $(this);
	};
	$.fn.openBranch = function(id) {
		var jqueryid = "#" + id;	
		if(id && $(jqueryid).length > 0 && $(jqueryid)[0].tagName=='LI') {//check for null.
			//open the tee structure to display the node
			openNode($(jqueryid));
			//invoke callback function for particular node
			$(this).callBackAfterOpenBranch($(jqueryid));
		}
	};
	$.fn.selectNode = function(id) {
		var jqueryid = "#" + id;	
		if(id && $(jqueryid).length > 0 && $(jqueryid)[0].tagName=='LI') {//check for null.
			tagSelectedNode($(jqueryid).children('a')[0]);
			//invoke callback function for particular node
			$(this).callBackAfterClick($(jqueryid));
		}
	};	
	$.fn.disableSelection = function () {
		return this.each(function () {
			if (typeof this.onselectstart != 'undefined') {
				this.onselectstart = function() { return false; };
			} else if (typeof this.style.MozUserSelect != 'undefined') {
				this.style.MozUserSelect = 'none';
			} else {
				this.onmousedown = function() { return false; };
			}
		});
	};

	$.fn.callBackAfterOpenBranch = function(node){
		if(options) {
			if(options.onOpen) {
				options.onOpen.call(this, node);
			}
		}
	};
	
	$.fn.callBackAfterClick = function(node){
		if(options) {
			if(options.onClick) {
				options.onClick.call(this, node);
			}
		}
	};
	
	$.fn.attachEventHandlers = function(parent) {
		$(parent).find('li').each(function() {
			var child = $(this).children('ul')[0];
			var clickable = $(this).children('a')[0];

			var liElement = $(this);
			if(child) {
				//create a span node with for expanding and collapsing the tree
				var span = document.createElement("span");
				span.className = "toggle";
				//next create an image element inside of this
				var img = document.createElement("img");
				img.src="icon_tree_on.gif";				
				img.addEventListener("click", 
						function(event){
							if($(child).is(":hidden")) {
								openFolderGraphic(clickable);
								img.src="icon_tree_off.gif"								
							} else {
								closeFolderGraphic(clickable);
								img.src="icon_tree_on.gif";								
							}					
							$(child).toggle(180);
							$.fn.callBackAfterOpenBranch(liElement);							
							event.stopPropagation();});
				span.appendChild(img);
				var parentNode = $(this)[0];
				parentNode.insertBefore(span, parentNode.firstChild);
				
				$(child).hide();
				$(this).addClass('parent');
				$(clickable).click(function(event){
					tagSelectedNode(this);
					$(this).callBackAfterClick($(liElement));				
					event.stopPropagation();
				});
			} else {
				$(this).addClass('childless');
				//var ico = {"background":"url(../text.png) no-repeat;"};
				//$(clickable).css({'background-image':'url(../images/text.png)',
					//'background-repeat':'no-repeat'});
				$(clickable).click(function(event){
					tagSelectedNode(this);
					event.stopPropagation();
					$(this).callBackAfterClick($(liElement));					
				});				
			}
		});
		$(parent).find('ul').each(function() {
			$(this).click(function(event){
				event.stopPropagation();
				$(this).callBackAfterClick($(this));				
				return false;
			});				
		});	
	};
	
})(jQuery);

function addCSSClassToLastNode() {
	$('ul li:last-child').each(function() {
			if($(this).hasClass('parent')) {
				$(this).addClass('lastParent');
			} else {
				$(this).addClass('last');
			}
		});
}

function tagSelectedNode(object) {
	if(window.self.selected) {
		$(window.self.selected).removeClass('selected');
	}
	window.self.selected = object;
	$(window.self.selected).addClass('selected');
}

function openNode(node) {
	var parent = $(node).parent("ul");
	var clickable = $(node).children('a')[0];
	var icon = null;
	var img = null;
	var isRoot = false;
	//is this the root list?
	var grandparent = $(parent).parent("li");
	if(grandparent.length == 0) {
		isRoot = true;
	};
	//if(node.attr('id')=='root') {
	if(isRoot) {
		openFolderGraphic(clickable);
		icon = getFirstChildByTag($(node)[0], "SPAN");
		img = getFirstChildByTag(icon, "IMG");
		img.src = "icon_tree_off.gif";
		var child = $(node).children('ul')[0];	
		$(child).show(180);		
		return false;
	} else {
	    if($(node).hasClass('parent')) {
			openFolderGraphic(clickable);
			icon = getFirstChildByTag($(node)[0], "SPAN");
			img = getFirstChildByTag(icon, "IMG");			
			//get children of this class and open them.
			var child = $(node).children('ul')[0];	
			$(child).show(180);
			img.src = "icon_tree_off.gif";			
		}
		if($(parent).is(":hidden")) {
			$(parent).show(180);
		}
		openNode($(parent).parent('li'));		
	}
}

function openFolderGraphic(object) {
	//if(!$(object).hasClass('open')) {
		$(object).removeClass('close');
		$(object).addClass('open');
	//}
}

function closeFolderGraphic(object) {
	if(!$(object).hasClass('close')) {
		$(object).removeClass('open');
		$(object).addClass('close');
	}
}

function getFirstChildByTag(element, tagName) {
	//get all children of the element
	var children = element.childNodes
	for(i=0;i<children.length;i++) {
		if(children.item(i).tagName==tagName) {
			return children.item(i);
		}
	}
}