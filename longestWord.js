var _ = require('underscore');

var str = process.argv[2];

var longestWord = function(str) {
	var array = str.split(' ');
	var lengths = [];

	// Use a sort function to sort by the longest-length word to smallest-length word
	array.sort(function(a, b) {
		return b.length - a.length;
	});

	return array[0];  // First word will be the largest word

};



console.log( longestWord(str) );