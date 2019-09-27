function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    message.split("").forEach(
		function (oneLetter, index) {
			setTimeout (function() {
				container.textContent += oneLetter
			}, 1000 * index * velocity)
		}
	)
}

typeMessage ( `Welcome to the hell`, 1 )