function User ( name ) {
    this.name = name
    var presence = false
    Object.defineProperty (this, "presence", {
    get:  () => presence ? `${this.name} is present` : `${this.name} is absent`,
    set: _presence => presence = _presence
    })
}

let user = new User ( "Ivan" )
console.info ( user.presence )

user.presence = "+"
console.info ( user.presence )