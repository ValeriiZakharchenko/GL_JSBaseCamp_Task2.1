/* LESSON 2
 * Task 1
 * Function extractCharacters returns array of unique symbols from an input argument. 
 * Don't sort output array. Upper and lowercase symbols are the same.
 *
 * Example of call:
 * extractCharacters('aaaabc');        //['a', 'b', 'c']
 * extractCharacters('Hello, world');  //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];
 */

// Example of realization 1
// Input values only STRING. 
function extractCharacters (str) {
	return Array.from ( new Set (str.toLowerCase())  );
}

// Example of realization 2
function extractCharacters (str) {
	var resArr = [];
	if (str != undefined && str != null) {
		var inStr  = String(str).toLowerCase(),
			lenStr = inStr.length;

		for (var i = 0; i < lenStr; i++) { 
			if ( !resArr.includes (inStr[i]) ) 
				resArr.push (inStr[i]);
		}
	}
	return resArr;
}



