/* LESSON 2
 * Task 2
 * Function createLogger receive an argument (predifined text) 
 * and return new function, which prints in console the text information in format:
 * ISODate PredefinedText: someData
 * someData - is any number of arguments of any types.
 *
 * Example of call and output:
 * var myLogger = createLogger('My Logger');
 * myLogger('My data is -', { data: 1 });
 * 2016-06-06T09:55:44.162Z My Logger: my data is - Object {data: 1}
 * var fun = function (a){return ++a;};
 * var o = {1:'a', 2:[1,2,{a:'aa', b:'bb'},['a','b','c'], null, 3, {q:'qq', w:{w1:1, w2:2, w3:3, w4:fun}}], 3:fun, 4:undefined, 5:false };
 * myLogger(o);
 */

function createLogger (prefix) {

	function printObj (obj) {
		var str='';
		if (obj.constructor.name === 'Array') {
			str += '[';
			for (var i = 0; i < obj.length; i++) {
				if ( typeof obj[i] === 'object' && obj[i] !== null)
					str += printObj (obj[i]) + ', ';
				else
					str += obj[i] + ', ';
			}
			return str.slice(0, -2) + ']';
		}
		else {
			str += "Object {";
			for (var key in obj) {
				if (typeof obj[key] === 'object' && obj[key] !== null) { 
					str += key + ': ' + printObj (obj[key]) + ', ';
				}
				else {
					str += key + ': ' + obj[key] + ', ';
				}
			}
			return str.slice(0,-2) + '}';
		}
	}

    return function ( ) {
		var strOut = '';
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] === 'object' && arguments[i] !== null )
				strOut += printObj (arguments[i]);
			else
				strOut += arguments[i];
			strOut += " ";
		}
		console.log( (new Date).toISOString(), prefix + ":", strOut );
	}
}

