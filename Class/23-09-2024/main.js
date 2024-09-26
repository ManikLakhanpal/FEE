// var a = 10;

// c();
// console.log(a);

// function c() {
//     let d = 20;
//     console.log(d);
// }

// 

// let a  = 7;

// console.log(a);

// const val = function (num) {
//     return num ** 2;
// }

// val(a);

let arr = ["a", "b", "c", "d", "e", "f"];
const ages = [32, 33, 16, 40];

const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

arr.map((val, index) => {
    arr[index] = val.toUpperCase();
});

console.log(result);