var carts = document.getElementById("carts");
function showMenu(){
    carts.style.right = "0";
}
function hideMenu(){
    carts.style.right = "-350px";
};
let payment = document.getElementById("pay");
function showPayment() {
    payment.style.right ="0"
}
function hidePayment() {
    payment.style.top ="-100vh"
}

let payBtn = document.getElementById("submit");

let byePage = document.getElementById("thanks");

function showThanks(){
    byePage.style.top = "0";
}
let bad = document.getElementById("bad");
function delItem() {
    Iphone.style.display = "none";
    Samsung.style.display = "none";
    Tecno.style.display = "none";
    Headset1.style.display = "none";
    Headset2.style.display = "none";
    Headset3.style.display = "none";
    Laptop1.style.display = "none";
    Laptop2.style.display = "none";
    Laptop3.style.display = "none";
    Ipad1.style.display = "none";
    Ipad2.style.display = "none";
    Ipad3.style.display = "none";
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    sound1.style.display = "none";
    sound2.style.display = "none";
    sound3.style.display = "none";
    cam1.style.display = "none";
    cam2.style.display = "none";
    cam3.style.display = "none";
    game1.style.display = "none";
    game2.style.display = "none";
    game3.style.display = "none";
    pbank1.style.display = "none";
    pbank2.style.display = "none";
    pbank3.style.display = "none";
    watch1.style.display = "none";
    watch2.style.display = "none";
    watch3.style.display = "none";
    counter.textContent = "0";
}
var login = document.getElementById("login");
function showLogin(){
    login.style.top = "0";
}
function hideLogin(){
    login.style.top = "-100vh";
}
let genBtn = document.getElementById("genBtn");
let cartBtn = document.getElementById("gen-btn");
let Iphone = document.getElementById("iPhone");
let Samsung = document.getElementById("samsung");
let Tecno = document.getElementById("tecno");
let Headset1 = document.getElementById("NCHeadSet");
let Headset2 = document.getElementById("SonyHS");
let Headset3 = document.getElementById("BeausHS");
let Laptop1 = document.getElementById("MacBook");
let Laptop2 = document.getElementById("Lenovo");
let Laptop3 = document.getElementById("hp");
let Ipad1 = document.getElementById("iPadAir");
let Ipad2 = document.getElementById("iPadPro");
let Ipad3 = document.getElementById("iPadPro");
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let sound1 = document.getElementById("sound1");
let sound2 = document.getElementById("sound2");
let sound3 = document.getElementById("sound3");
let cam1 = document.getElementById("cam1");
let cam2 = document.getElementById("cam2");
let cam3 = document.getElementById("cam3");
let game1 = document.getElementById("game1");
let game2 = document.getElementById("game2");
let game3 = document.getElementById("game3");
let pbank1 = document.getElementById("pbank1");
let pbank2 = document.getElementById("pbank2");
let pbank3 = document.getElementById("pbank3");
let watch1 = document.getElementById("watch1");
let watch2 = document.getElementById("watch2");
let watch3 = document.getElementById("watch3");
let counter = document.getElementById("quant");
let btn1 = document.getElementById("btn1");
function show14ProMax() {
    Iphone.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
    btn1.style.backgroundColor = "rgb(221, 43, 43)";
}
function showS23() {
    Samsung.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showVflip() {
    Tecno.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showNCHeadSet() {
    Headset1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showSonyHS() {
    Headset2.style.display = "block";
    // alert(counter.innerText);
    counter.innerText = Number.parseInt (counter.innerText)+1;
    // alert(counter.innerText);
}
function showBeausHS() {
    Headset3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showMacBook() {
    Laptop1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showLenovo() {
    Laptop2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showhp() {
    Laptop3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showiPadAir() {
    Ipad1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showiPadPro() {
    Ipad2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showiPad11() {    
    Ipad3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showtab1() {
    tab1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showtab2() {
    tab2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showtab3() {
    tab3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showsound1() {
    sound1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showsound2() {
    sound2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showsound3() {
    sound3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showcam1() {
    cam1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showcam2() {
    cam2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showcam3() {
    cam3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showgame1() {
    game1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showgame2() {
    game2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showgame3() {
    game3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showpbank1() {
    pbank1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showpbank2() {
    pbank2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showpbank3() {
    pbank3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showwatch1() {
    watch1.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showwatch2() {
    watch2.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
function showwatch3() {
    watch3.style.display = "block";
    counter.innerText = Number.parseInt (counter.innerText)+1;
}
// let div = document.createElement("div")
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
    // for (var i = 0; )
// }