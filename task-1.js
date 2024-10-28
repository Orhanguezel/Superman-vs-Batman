// Target array
const people = [];

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"];
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"];
const ages = [18, 27, 31, 44];
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"];

// Your code here!
for (let i = 0; i < firstNames.length; i++) {
    people.push({
        firstName: firstNames[i],
        lastName: lastNames[i],
        age: ages[i],
        city: cities[i],
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    });
}

for (let i = 0; i < people.length; i++) {
    console.log(`Hello, my name is ${people[i].getFullName()}, I live in ${people[i].city} and I am ${people[i].age} years old.`);
}
