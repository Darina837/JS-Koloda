var ladies_handbag = {
  for_food: "Ланчбокс с салатом",
  for_snack: "Питьевой йогурт",
  for_drinking: "Бутылочка воды",
  for_face_beauty: "Пудра со спонжем",
  for_eyes_beauty: "Палетка теней для век",
  for_eyebrows_beauty: "Палетка для бровей с кистью",
  just_in_case: "Влажные салфетки",
  for_getting_home: "Ключи от дома",
  for_urgent_matters: "Маленький блокнотик с ручкой",
  for_hard_day: "Бутылочка вина"
}
ladies_handbag.addNew = function (prop_name, new_object_to_add) {
  ladies_handbag[prop_name] = new_object_to_add
  console.log("Новый предмет успешно добавлен в сумочку! Хорошего дня :)")
}
ladies_handbag.delete = function (object_to_delete) {
  var prop = object_to_delete
  delete ladies_handbag[prop]
  console.log("Предмет успешно оставлен дома :)")
}

ladies_handbag.delete("for_hard_day")
ladies_handbag.addNew("for_very_very_hard_day", "Водка")