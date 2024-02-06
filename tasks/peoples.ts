import { faker } from '@faker-js/faker';

interface Person {
    name: string;
    age: number;
}

interface CategorizedPeople {
    young: Person[];
    workingAge: Person[];
    senior: Person[];
}

const now = new Date();

// Функция для генерации возраста
function generateAge(): number {
    const birthDate = faker.date.birthdate({ min: 0, max: 100, mode: "age" });
    const age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
}

// Функция для генерации полного имени
function generateName(): string {
    return faker.person.fullName();
}

// Функция для генерации массива людей
function generatePeople(count: number): Person[] {
    const people: Person[] = [];
    for (let i = 0; i < count; i++) {
        people.push({
            name: generateName(),
            age: generateAge(),
        });
    }
    return people;
}

const people = generatePeople(100);

const categorizedPeoples = people.reduce<CategorizedPeople>((accum, currentValue) => {
    if (currentValue.age < 20) {
        accum.young.push(currentValue);
    } else if (currentValue.age >= 20 && currentValue.age < 65) {
        accum.workingAge.push(currentValue);
    } else if (currentValue.age >= 65) {
        accum.senior.push(currentValue);
    }
    return accum;
}, { young: [], workingAge: [], senior: [] });

console.log('Categorized Peoples:', categorizedPeoples);

