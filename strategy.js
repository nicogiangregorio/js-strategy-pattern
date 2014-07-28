var ClickProcessor = function(obj) {
	this.obj = obj;
}

ClickProcessor.prototype.leftClick = function() {
	this.obj.leftClick();
}

ClickProcessor.prototype.rightClick = function() {
	this.obj.rightClick();	
}

var TypeA = function() {
	this.leftClick = function() {
		console.log("TypeA left click");
	}

	this.rightClick = function() {
		console.log("TypeA right click");
	}
}

var TypeB = function() {
	this.leftClick = function() {
		console.log("TypeB left click");
	}

	this.rightClick = function() {
		console.log("TypeB right click");
	}
}