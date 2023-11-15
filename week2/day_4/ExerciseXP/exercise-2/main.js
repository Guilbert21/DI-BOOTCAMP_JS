// Create a function named calculateTip() that takes no parameter.
function calculateTip(){
    // Inside the function, use prompt to ask John for the amount of the bill.
    let billAmount = prompt("What is the bill amount?");

//     If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
    if (billAmount < 50){
        tip = billAmount * 0.2;
    } else if (billAmount >= 50 && billAmount <= 200){
        tip = billAmount * 0.15;
    } else { tip = billAmount * 0.1}

    // Console.log the tip amount and the final bill (bill + tip).
    let totalBill = tip + billAmount
    console.log("The tip is $" + tip);
    // console.log("Total bill is" + totalBill)

    
}
// let totalBill = calculateTip + billAmount
// Call the calculateTip() function.
console.log(calculateTip());
