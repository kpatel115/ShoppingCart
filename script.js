//JS practice with console and basics

/**
// Arrays 
var array = ["Apple", "Banana", "Orange"];

array.push("Pine")

// For Loops - 1 counter | 2 condition to loop | 3 increment i
for ( var i = 0; i < array.length; i++ ) {
    console.log(array[i]);  
};


// Objects
var obj = {name: "apple", cost:1.99, count:2}; 
console.log(obj.name);
console.log(obj.cost);

for (var key in obj) {
    console.log(key+": "+obj[key]);

}

var array1 = ["a", "b", "c", "d"];

for (var key in array1) {
    console.log(key+": "+array1[key]);

}
**/
/** 
var cart = []

var item = {name: "Apple", cost: 1.49, count: 3};
cart.push(item);

console.log(cart);
console.log(cart[0]);

console.log(cart[0].name);
console.log(cart[0].cost);
console.log(cart[0].count);

console.log(cart[0].price);
*/

//Functions
/** 
function myFunction(message, count) {
    for (var i = 0; i < count; i++){
        console.log(message);
    }
}
myFunction("Hello", 5);
myFunction("World", 2);


var global = "Hello";

function functionScope() {

};
*/
// Shopping Cart
var cart = [];
var Item = function(name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};

// sample item - var brush = new Item("Brush", 1.99, 3); 

// addItemToCart()
