if (typeof Object.beget !== 'function') {
  Object.beget = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
}

var leftClickProcessor = {
	printMessage: function(elemId){
		var element = document.getElementById(elemId);
		element.innerHTML += '<br>Default text';
	}
};

var typeALeftClickprocessor = Object.beget(leftClickProcessor);
typeALeftClickprocessor.printMessage = function(elemId) {
	var element = document.getElementById(elemId);
	element.innerHTML += '<br>Type A message';
}

var typeBLeftClickprocessor = Object.beget(leftClickProcessor);
typeBLeftClickprocessor.printMessage = function(elemId) {
	var element = document.getElementById(elemId);
	element.innerHTML += '<br>Type B message';
}

STRATEGY_CONTEXT = function () {
	var typeMap = [];

	typeMap['TypeA'] = typeMap['TypeAA'] = typeALeftClickprocessor;
	typeMap['TypeB'] = typeBLeftClickprocessor;

	return {
		evaluate: function(obj){
			
			if(!typeMap[obj.typeofobj]){
				obj.leftClickProcessor = Object.beget(leftClickProcessor);
			} else {
				obj.leftClickProcessor = typeMap[obj.typeofobj];
			}
		}
	};
}();