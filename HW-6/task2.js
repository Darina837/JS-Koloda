var elements = [
    {
		tagName: "header",
		className: "mainHeader",
		innerText: "Header",
		style: `height: 200px;
				width: 500px;
				background-color: yellow;`,
		onclick: click
	},
	
	{
		tagName: "main",
		className: "mainAbout",
		innerText: "Main",
		style: `height: 300px;
                width: 300px;
                background-color: orange;`,
		onclick: click
	},

	{
		tagName: "section",
		className: "sectionPart1",
		innerText: "Section",
		style: `height: 100px;
                width: 100px;
                background-color: green;`,
		onclick: click
	},

	{
		tagName: "article",
		className: "headerOfArticle",
		innerText: "Article",
		style: `height: 250px;
                width: 250px;
                border: 1px solid red;`,
		onclick: click
	},
	{
		tagName: "aside",
		className: "leftAside",
		innerText: "Aside",
		style: `height: 50px;
                width: 50px;
                border: 5px solid blue;`,
		onclick: click
	},

	{
		tagName: "footer",
		className: "mainFooter",
		innerText: "Footer",
		style: `height: 350px;
                width: 350px;
                border: 10px solid pink;`,
		onclick: click
	}
]
var style = document.createElement("style")
document.head.appendChild(style)

function click (event) {
	console.log("CLICK")
} 

for (var element of elements) {
    var newElement = document.createElement(`${element.tagName}`)
    document.body.appendChild(newElement)
    newElement.classList.add(element.className)
    style.appendChild(document.createTextNode(`.${element.className} { ${element.style}}`))
    newElement.onclick = element.onclick
    newElement.innerText = element.innerText
    }