/* LESSON 2
 * Task 2
 * Function createLogger receive an argument (predifined text) 
 * and return new function, which prints in console the text information in format:
 * ISODate PredefinedText: someData
 *
 * Example of call:
 * var myLogger = createLogger('My Logger');
 * myLogger('some data');
 *
 * Example of output:
 * 2016-06-06T09:55:44.162Z My Logger: some data
 */

function createLogger(prefix){
    return function ( message ){
		console.log( (new Date).toISOString() +' '+ prefix +": "+ message );
	}
}

var myLogger = createLogger('My Logger');
myLogger('some data');
