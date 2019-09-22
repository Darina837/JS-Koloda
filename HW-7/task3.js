var collection = ["main", "section", "article", "div", "footer", "button", "address"]
var indexes = [1, 2, 3, 4, 5, 6, 7]
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
		height: 80%;
		background-color: #ff00ff50;
	`
	var oneElem = document.getElementsByTagName(tag)[0]
	oneElem.setAttribute("title", indexes[i++])


	elem.onmouseover = function enter (event) {
		this.style.backgroundColor = `#ffff0050`
	}
	elem.onmouseout = function leave (event) {
		this.style.backgroundColor = `#ff00ff50`
	}
	elem.onclick = function clickHandler (event) {
		event.stopPropagation()
		event.target.remove(event.target)
	}
	container = elem  
}