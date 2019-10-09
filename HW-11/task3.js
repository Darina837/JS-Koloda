var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => new Date().toLocaleString().split(", ")[1]

var log = {}

var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)

var sendAll = () => {
    var index = 0
    function recursive () {
        sendMessage (messages [index++])
                .then (
                    function (response) {
                        if (!response) return
                        Object.assign ( 
							log,
                            {[ messages.getKey()] : response}
                        )
                        recursive ()
                    }
                )
    }
    recursive ()
}

sendAll()