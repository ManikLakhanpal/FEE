const person1 = {
    name: "Kartik",
    age: 20,
    development: "CEO"
};

console.log(person1);

const person2 = Object.create(person1);
const person3 = Object.create(person2);

console.log(person2);
console.log(person3.name);

console.log(person2.__proto__ == person1);
console.log(person2.__proto__ == person1);

console.log(`Has own property : ${person1.hasOwnProperty("name")}`);