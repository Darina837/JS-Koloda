function testArguments () {
    function generateError ( numArgs ) {
		throw ( {		
			name:  "Application",
			message: "Invalid arguments",
			stack: `Function needs 3 arguments, but only ${numArgs} present`
		} )
    }
	try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    }
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}

testArguments ( "Google" )
testArguments ( "Google", "Chrome" )
testArguments ( "Google", "Chrome", "Opera" )