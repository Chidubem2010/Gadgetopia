var carts = document.getElementById("carts");
function showMenu(){
    carts.style.right = "0";
}
function hideMenu(){
    carts.style.right = "-350px";
};

var login = document.getElementById("login");
function showLogin(){
    login.style.top = "0";
}
function hideLogin(){
    login.style.top = "-100vh";
}

// let products = [
//     {
//         id: 1,
//         name: 'Product Name 1',
//         image: '1.',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'Product Name 2',
//         image: '2.',
//         price: 120000
//     },
// ];
// let listCards =[];
// function initApp(){
//     products.forEach((value, key)=>){
//         let newDiv = document.createElement('div');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//         `
//     }
// }
// function addToCard(key) {
//     if (cards[key] == null) {
//         cards[key] = products[key];
//         cards[key].quantity = 1;
//     }
// }

// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// }else{
//     ready();
// }
// function ready() {
//     var removeCartButtons = document.getElementsByClassName("cart-remove");
//     console.log(removeCartButtons);
//     for (var i = 0; )
// }