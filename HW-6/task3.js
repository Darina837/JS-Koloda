var tags = ["header", "main", "div", "p", "footer"]
var classes = ["mainHeader", "mainAbout", "section", "text", "mainFooter"]
var style = document.createElement("style")
var i = 0
document.head.appendChild(style)
style.textContent = `
    .mainHeader {
        height: 200px;
        width: 500px;
        background-color: yellow;
    }
    .mainAbout {
        height: 300px;
        width: 300px;
        background-color: orange;
    }
    .mainFooter {
        height: 100px;
        width: 100px;
        background-color: green;
    }
    .section {
        height: 250px;
        width: 250px;
        border: 1px solid red;
    }
    .text {
        height: 50px;
        width: 50px;
        border: 5px solid blue;
    }
`

for (var tag of tags) {
	var newTag = document.createElement(`${tag}`)
    newTag.innerHTML = `${tag}`
    document.body.appendChild(newTag)
    newTag.classList.add(classes[i++])
}

function redBack () {
    var newClass = "redBack"
    style.appendChild(document.createTextNode(`
		.${newClass} {
			background-color: red!important
		}
	`))
	for (var tag of tags) {
        var newTag = document.querySelector(tag)
        newTag ? newTag.classList.add(`${newClass}`) : undefined
    }
}

redBack()