var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    
    return function ( message ) {
        var i = index 
        setTimeout( function () {
            return container.textContent += message[i]
        }, 1000 * i * velocity)
        index++ > message.length - 1 ? null : arguments.callee(message)
    }
})( 1 )

typeMessage ( `Welcome to the hell` )