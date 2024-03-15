console.log("Little Clicker is starting!")
console.log("Little Clicker by lilterror11, this is currently a Work In Progress")

console.log("loading...")

if (localStorage.money == undefined) {localStorage.money = 0}
if (localStorage.clickPower == undefined) {localStorage.clickPower = 1}
if (localStorage.autoClicker == undefined) {localStorage.autoClicker = 0}

money = Number(localStorage.money);
clickPower = Number(localStorage.clickPower);
autoClicker = Number(localStorage.autoClicker);