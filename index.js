// Part 1: Login & Access Control**************************
let username = prompt("Enter your username (admin/user):");
let password = prompt("Enter your password:");

if ((username === "admin" || username === "user") && password === "1234") {
    let role = username === "admin" ? "high" : "low";
    alert("Access granted. Role: " + role);

    // Part 2: Coffee Shop Order Calculator*****************
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    let coffeeType = prompt("Choose coffee type (espresso, latte, cappuccino):");
    let quantity = parseInt(prompt("Enter the quantity of cups:"));

    let pricePerCup = {
        espresso: 2.5,
        latte: 3.5,
        cappuccino: 4.0
    };

    let originalTotal = pricePerCup[coffeeType] * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
    let finalTotal = originalTotal - discount;

    // Part 3: Bill Splitter with Tip************************
    let numberOfPeople = parseInt(prompt("How many people are splitting the bill (1, 2, or 3)?"));
    let tipPercentage = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));
    
    let tipAmount = finalTotal * (tipPercentage / 100);
    let totalWithTip = finalTotal + tipAmount;
    let amountPerPerson = totalWithTip / numberOfPeople;

    // Display results****************************************
    alert(`Hello ${name}!\nYou ordered ${quantity} ${coffeeType}(s).\nOriginal total: $${originalTotal.toFixed(2)}\nDiscount: $${discount.toFixed(2)}\nTip: $${tipAmount.toFixed(2)}\nTotal with Tip: $${totalWithTip.toFixed(2)}\nSplit between ${numberOfPeople} people: $${amountPerPerson.toFixed(2)} each`);
} else {
    alert("Invalid credentials. Access denied.");
}