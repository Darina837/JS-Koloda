var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                 users.filter(function (currentUser) {
					return currentUser.name === userName
				})[0].present = true
            },
            showPresent () {
                users.filter (function (currentUser) {
					return currentUser.present
				}).forEach(function (currentUser) {
					console.log(currentUser)
				})
            },
            showAbsent () {
                users.filter (function (currentUser) {
					return !currentUser.present
				}).forEach(function (currentUser) {
					console.log(currentUser)
				})
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()