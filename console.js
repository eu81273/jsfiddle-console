! function (global) {
	function append ($element) {
		return document.body ? document.body.append($element) : setTimeout(append, 100, $element);
	}

	function element (text, color, $element) {
		$element = document.createElement('p');
		$element.style.color = color || '#000000';
		$element.innerText = text;
		return $element;
	}

	function log () {
		return append(element(Array.prototype.slice.call(arguments).join(' ')));
	}

	function error () {
		return append(element(Array.prototype.slice.call(arguments).join(' '), '#FF0000'));
	}

	global.console = {
	   log: log,
	   error: error
	};
} (window);
