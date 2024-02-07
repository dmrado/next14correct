"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var now = new Date();
// Функция для генерации возраста
function generateAge() {
    var birthDate = faker_1.faker.date.birthdate({ min: 0, max: 100, mode: "age" });
    var age = now.getFullYear() - birthDate.getFullYear();
    var monthDiff = now.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
}
// Функция для генерации полного имени
function generateName() {
    return faker_1.faker.person.fullName();
}
// Функция для генерации массива людей
function generatePeople(count) {
    var people = [];
    for (var i = 0; i < count; i++) {
        people.push({
            name: generateName(),
            age: generateAge(),
        });
    }
    return people;
}
var people = generatePeople(100);
var categorizedPeoples = people.reduce(function (accum, currentValue) {
    if (currentValue.age < 20) {
        accum.young.push(currentValue);
    }
    else if (currentValue.age >= 20 && currentValue.age < 65) {
        accum.workingAge.push(currentValue);
    }
    else if (currentValue.age >= 65) {
        accum.senior.push(currentValue);
    }
    return accum;
}, { young: [], workingAge: [], senior: [] });
console.log('Categorized Peoples:', categorizedPeoples);
