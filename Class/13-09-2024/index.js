var a = new Object()
a.name = "mmm";
// console.log(typeof a);

const obj = {
    "name" : "Manik",

    age : 19
}


// console.log(obj.name);

const users = {
    user1: {
        name: "Manik",
        age: 18
    },

    user2: {
        name: "W",
        age: 18
    },

    user3: {
        name: "H",
        age: 18
    }
}

const array = [users, obj];

const d1 = {name: "マリク", age: 19};
const d2 = {name2: "Manik", age2: 18};

const ps = {...d1,...d2};
console.log(array[0].user1.age);