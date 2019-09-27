function User ( name ) {
    this.name = name
    this.id = this.counter()
}


User.prototype.counter = (
() => {var counter = 0
	  return function () {
		return this.id ? this.id : counter++
	  }	
	  }
) ()

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]

users[1].id = users[1].counter()