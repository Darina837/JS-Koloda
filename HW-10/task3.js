var User = function (name = "user",
                     email = "user@sample.com",
                     photo = User.getAvatar() 
					) {
        this.name = name
        this.email = email
        this.photoURL = photo
		this.textAboutPerson = ''
}

User.avatars = [
     "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
     "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
     "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
     "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
     "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
]

User.admin = {
        photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
        name: "admin"
}

User.getAvatar = function () {
     return this.avatars.shift ()
}

User.prototype.messageBox = (function () {
        var box = document.createElement ('div')
        document.body.appendChild ( box )
        box.style = `
                position: fixed;
                top: 0;
                left: 0;
                width: 300px;
                height: 300px;
                overflow: auto;
                border: 1px solid gray;
                padding: 20px;
                background-color: black;
        `
        box.picture = box.appendChild (document.createElement ('img'))
        box.picture.style.width = "100px"
        box.name = box.appendChild (document.createElement ('span'))
        box.name.style = "font-weight: bold; color: black; padding-left: 20px;"
        box.message = box.appendChild ( document.createElement ('textarea'))
        box.message.placeholder = "Введите текст..."
        box.message.oninput = function (event) {
                event.target.parentNode.querySelector ('span').innerHTML = User.admin.name
				event.target.parentNode.querySelector ('img').src = User.admin.photoURL
		}
        box.message.style = "width: 100%; height: 80%;"
        return box
})()

User.prototype.write = function (text) {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.messageBox.message.value = text
}

User.prototype.read = function () {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.textAboutPerson = this.messageBox.message.value
}



var users = [
    new User ( "Иван" ),
    new User ( 'Alex', "alex@gmail.com" ),
    new User ( 'Bob', "bob777@gmail.com" ),
    new User ( 'Dima', "dima888@gmail.com" ),
    new User ( 'Fima', "fima999@gmail.com" )
]

var k = 1
users.forEach (
    function ( user ) {
        setTimeout (
            function () {
                user.write ( `Hello, I'm ${user.name}` )
            }, 3000 * k++
        )
    }
)