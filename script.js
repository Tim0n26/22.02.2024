// 1.
// Создайте объект person, который содержит следующие свойства: name (строка), age (число), hobby (строка).
person = {
  name: "Alex",
  age: 0,
  hobby: "Coding"
}
// 2.
// Используя объект person, напишите код, который выводит имя человека в консоль.
console.log(person.name);
// 3.
// Измените возраст person на 30.
person.age = 30;
// 4.
// Добавьте новое свойство job в объект person.
person.job = "coding";
// 5.
// Удалите свойство hobby из объекта person.
delete person.hobby;
// 6.
// Напишите цикл, который перебирает все свойства объекта person и выводит их в консоль.
for (var prop in person) {
  console.log(prop + " = " + person[prop]);
}
// 7.
// Добавьте метод greet в объект person, который выводит приветствие в консоль.
person.greet = function() {
  console.log("Hello");
};
// 8.
// Создайте объект car, который содержит свойства model и engine. Свойство engine должно быть объектом с свойствами fuel и volume.
car = {
  model: "911",
  engine: {
    fuel: "95",
    volume: "89"
  }
}
// 9.
// Копирование объектов: Создайте копию объекта person.
copyperson = person;
// 10.
console.log(person == copyperson);
// Сравните два объекта: оригинальный person и его копию.