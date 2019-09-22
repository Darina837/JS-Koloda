var text = document.body.appendChild(document.createElement("p"))
text.innerText = "Click here..."

var image = document.createElement("img")
image.style = `
	width: 100px;
	transition: all 0.5s;
`
image.src = "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg"

text.onclick = function (event) {
	document.body.appendChild(image)
}

image.onmouseover = function (event) {
	this.style.width = "200px"
}.bind(image)

image.onclick = function(event) {
	event.target.parentNode.remove(event.target)
}