function sampleFunc () {
    console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator ( func ) {
	var length = String( func ).length
	console.info ( `Symbols in my code: ${length}` )
}

modificator( sampleFunc )

sampleFunc()