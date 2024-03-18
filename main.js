console.log("Little Clicker is starting!");
console.log("Little Clicker by lilterror11, this is currently a Work In Progress");

console.log("loading...");

// temp variables
console.log("loading... temp variables");

let cv = 0; // Created Variables
let moneyInt = 0;
let cps = 0; // Clicks Per Second

console.log("loading... temp variables, complete!");

// localStorage loading
console.log("loading... creating localStorage variables");

if (localStorage.money == undefined) {localStorage.money = 0.0; cv++;} // clicks
if (localStorage.clickPower == undefined) {localStorage.clickPower = 1; cv++;} // how much 'money' you get from a click
if (localStorage.autoClicker == undefined) {localStorage.autoClicker = 0; cv++;} // realy fast click generation

console.log("loading... creating localStorage variables, complete!");
console.log("DEBUG: created " + String(cv) + " variables");
//for (let i = 0; i < localStorage.length; i++) {
//    console.log(toString(localStorage));
//}

const items = { ...localStorage };

// creating temp variables for localStorage
console.log("loading... creating temp variables for localStorage");

money = Number(localStorage.money);
clickPower = Number(localStorage.clickPower);
autoClicker = Number(localStorage.autoClicker);

console.log("loading... creating temp variables for localStorage, complete!");

// functions

console.log("loading... functions");

function saveStorage() {
    localStorage.money = money;
    localStorage.clickPower = clickPower;
    localStorage.autoClicker = autoClicker;
}

function autoClickers() {
    money += auto;
}

setInterval(function() {
    cps += 1.0;
    cps *= 1.0;
    document.getElementById("cps").innerHTML = cps;
    document.getElementById("money").innerHTML = money;
}, 100);