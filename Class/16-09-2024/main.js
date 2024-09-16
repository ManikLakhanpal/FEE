const obj = {
    "name": "manik",
    "last_name": "Lakhanpal"
}

for ( let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

// functions

function add(a, b) {
    let ans = a + b;
    console.log(ans);
}

add(10, 8);