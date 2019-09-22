var collection = ["main", "section", "article", "div"]
var indexes = ["first", "second", "third", "fourth"]
var container = document.body
var i = 0

for (var tag of collection) {
	var elem = container.appendChild(
		document.createElement(tag)
	)
	elem.style = `
		padding: 10px;
		border: dotted 1px yellow;
		width: 80%;
		height: 50%;
		background-color: #ff00ff50;
	`
	var oneElem = document.getElementsByTagName(tag)[0]
	oneElem.setAttribute("title", indexes[i++])


	elem.onmouseover = function over (event) {
		this.style.backgroundColor = `#ffff0050`
	}
	elem.onmouseout = function out (event) {
		this.style.backgroundColor = `#ff00ff50`
	}
	elem.onclick = function clickHandler (event) {
		event.stopPropagation()
		event.target.remove(event.target)
	}
	container = elem  
}