function userInfo (registered, name, date) {
  registered ? console.log("Дата регистрации: ", date) : console.log("Незарегистрированный пользователь", name)
}
var Anna = {
  name: "Анна",
  registered: true,
  date: new Date(2015, 02, 12).toLocaleDateString()
}
var Oleg = {
  name: "Олег",
  registered: false,
  date: new Date().toLocaleDateString()
}
Anna.getInfo = userInfo(Anna.registered, Anna.name, Anna.date)
Oleg.getInfo = userInfo(Oleg.registered, Oleg.name, Oleg.date)