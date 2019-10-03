let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

var log = {}

var sendMessage = ( message, callback ) =>
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? key + "[2]" : key
}

messages.forEach (
    message => sendMessage ( message, handler )
)

function handler(message){
   const _key = getKey()
   log[_key] = message
}

console.log(log)