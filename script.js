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

// ===================================== Shopping Cart=======
// Shopping Cart project
var cart = [];
var Item = function(name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};

// sample item - var brush = new Item("Brush", 1.99, 3); 

// addItemToCart(name, price, count) - adds one item
function addItemToCart(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }   
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

// removeItemFromCart(name) - removes one item
function removeItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name ) {
            cart[i].count --;
            if (cart[i].count === 0 ) {
                cart.splice( i, 1 );
            }
            break;
        }
    }
    saveCart();
}

// removeItemFromCartAll(name) - removes all item (name)
function removeItemFromCartAll(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i,1);
            break;
        }
    }
    saveCart();
}

// clearCart() - clears whole cart 
function clearCart() {
    cart = [];
    saveCart();
};

// countCart() - return total counts of items
function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}
console.log( countCart() ); // testing total counts of added and removed items

// totalCart() - return total cost
function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price;
    }
    return totalCost;
}
console.log( totalCart() );

// listCart() - array of Item
function listCart() {
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

// saveCart() - local storage 
function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// loadCart()
function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();

var array = listCart();
console.log(array);