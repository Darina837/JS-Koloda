var LibraryBook = function (_title = "Неизвестно", _year = "Неизвестно", _author = "Неизвестно") {
  var title = _title
  var year = _year
  var author = _author
  var readerName = null
  var readerDate = null
  function giveTheBook (client, date = new Date().toLocaleDateString()) {
        readerName = client 
        readerDate = date
    }
  this.getBookInfo = function () {
  var infoAboutBook = readerName ? "Выдана на руки" : "Есть в наличии" 
  console.log (`${"Вы запросили информацию о книге: "}${author}, "${title}" (${year}) || ${"Статус книги:"} ${infoAboutBook} ${readerDate}`)
  } 
  this.getTheBook = function (client, date) {
    var text = "Книга выдана!"
        if (readerName) {
            this.getBookInfo ()
            return null
        }
        else {
            giveTheBook (client, date)
            return {
                title: title,
        text: text
            }
        }
  }
  this.returnBook = function () {
  readerName = null
  readerDate = null
  console.log("Книга успешно возвращена")
  }
}
var books = []
books [0] = new LibraryBook ("Портрет Дориана Грея", "1890", "Оскар Уайльд")
books [1] = new LibraryBook ("Маленький принц", "1943", "Антуан де Сент-Экзюпери")
books [2] = new LibraryBook ("Алхимик", "1988", "Пауло Коэльо")
books [3] = new LibraryBook ("Гордость и предубеждение", "1813", "Джейн Остин")
books [4] = new LibraryBook ("Чувство и чувствительность", "1811", "Джейн Остин")
books[0].getBookInfo()
books[0].getTheBook("Иванов Иван", new Date().toLocaleDateString())
books[0].getBookInfo()
books[0].returnBook()
books[0].getBookInfo()