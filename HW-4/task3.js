var object = {}
object.__proto__.addProperty = function (name_of_property, value) {
		object[name_of_property] = value
		console.log("Свойство успешно добавлено!")
		console.dir(object)
}


object.addProperty("name", "Vasya")
object.addProperty("age", 25)
object.addProperty("hobby", "car")