var i = 100
var elem = document.body.appendChild(document.createElement("h3"))


function addZero(i) {
	return (i < 10) ? "0" + i : i;
}


let showTime = function () {
	if (!i--) return elem.remove()
	var date = new Date()
	var getCurrentHours = addZero(date.getHours())
	var getCurrentMinutes = addZero(date.getMinutes())
	var getCurrentSeconds = addZero(date.getSeconds())
	elem.innerText = `${getCurrentHours}:${getCurrentMinutes}:${getCurrentSeconds}`
	
	setTimeout(showTime, 1000)
}

showTime()