var indexOfImage = 0, indexOfText = 0
let elements = `[
    {
    "title": "Winter",
    "ref": "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRr7Ln0CZbGDL_zUZQ2I6LEQ"
  },

  {
    "title": "Spring",
    "ref": "https://rediskin.net/uploads/posts/2012-05/1336543113_vesna-vremya-peremen-i-novyh-idey.jpg"
  },

  {
    "title": "Summer",
    "ref": "https://avatars.mds.yandex.net/get-pdb/251121/a89ab08b-d410-4a9f-b904-75acdef9f0f6/s1200"
  },

  {
    "title": "Autumn",
    "ref": "http://atas.info/upload/resize_cache/iblock/12a/900_444_0/12af09eccc68161272d7114ead954ba9.png"
  }
]`

for (var i = 0; i < 5; i++) {
	var text = document.body.appendChild(document.createElement("h2"))
	var image = document.body.appendChild(document.createElement("img"))
	image.style = `width: 350px;`
    text.innerText = JSON.parse(elements)[indexOfText++]["title"]
    image.src = JSON.parse(elements)[indexOfImage++]["ref"]
}