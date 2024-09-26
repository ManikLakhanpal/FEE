// create a array with a name cart with products (name,price, qty).
// Calculate the price of the all the product that we have added in the cart.

var cart = [{ id: 1, name: 'iphone 16', price: 164000, qty: 1 },
{ id: 2, name: 'iphone 15', price: 84000, qty: 2},
]

var ans = 0;

cart.map((item) => {
    ans += item.price * item.qty;
})

console.log(ans);

listofUser = [
 {id:1, name: 'Amit', reward:7 },
{id:2, name: 'Ajay', reward:5},
{id:3, name: 'Deepak',reward:5 },
];

const users = ["Amit", "Ajay", "Mukesh"];

const new_list = users.map((value, index) => {
    return {
        id: index + 1,
        name: value,
        reward: Math.floor(Math.random() * 10 + 1)
    }
});

console.log(new_list);

const menu = [
    "Kadai Paneer",
    "Dal Makhni",
    "Masala Dosa",
    "Chicken Soup",
    "Chicken Butter Masala",
    "Veg Chowmein",
    "Egg Curry",
    "Egg Maggie",
    "Chicken Fry",
    "Chicken Biryani",
    "Khichdi",
    "Handi Paneer",
    "Onion Paratha",
    "Garlic Naan",
    "Onion Pizza",
    "Garlic Bread",
    "Onion Rings",
    "Chilli Paneer",
  ];
  
  function isVeg(food) {
    if (
      food.toLowerCase().includes("chicken") ||
      food.toLowerCase().includes("egg")
    ) {
      return false;
    }
    return true;
  }
  const vegMenu = menu.filter(isVeg);
  console.log(vegMenu);