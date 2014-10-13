var str = process.argv[2];

var averageStringNumbers = function(str) {

	var numbers = [];
	var letters = [];
	var sum = 0;

		for(var i = 0; i < str.length; i++) {
			// If the item is not a number, push it into the letters array
			if (isNaN(str[i]))
				letters.push(str[i]);
			// else item must be a number or another symbol
			else 
				numbers.push(str[i]);
		} // end for loop

		// // Filter out non-numbers from the array
		for (var z = 0; z < numbers.length; z++) {
			if (numbers[z] != ' ')
				sum = sum + parseInt(numbers[z]);
		}

		// Adding the .5 will round to the nearest whole number
		var average = sum / letters.length + .5;
		
		// Output a whole number using parseInt
		console.log(parseInt(average));

};

averageStringNumbers(str);