var tags = ["header", "main", "section", "article", "aside", "footer"]
var classes = ["mainHeader", "mainAbout", "sectionPart1", "headerOfArticle", "leftAside", "mainFooter"]
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
.sectionPart1 {
	height: 250px;
	width: 250px;
	border: 1px solid red;
}
.headerOfArticle {
	height: 50px;
	width: 50px;
	border: 5px solid blue;
}
.leftAside {
	height: 350px;
	width: 350px;
	border: 10px solid pink;
}
`
for (var tag of tags) {
	document.body.appendChild(document.createElement(tag))
	var newTag = document.getElementsByTagName(tag)[0]
	newTag.classList.add(classes[i++])
}