var str = process.argv[2];

var addNumbers = function(str) {

	var newArray = [];

	for(var i = 0; i < str.length; i++) {
		// Push all of the integers into the newString string
		var toInt = parseInt(str[i]);
		newArray.push(toInt);
	}

	console.log(newArray);

	// for(var i = 0; i < str.length; i++) {
	// 	if (!isNaN(newArray[i]))

	// };

};

addNumbers(str);