function hotelCost(){
    let night = prompt("Number of night(s) you would stay?")

    // If the user doesn’t answer or if the answer is not a number, ask again.
    if (isNaN(night) || night < 0) {
       night = prompt("incorrect, re-enter ")
    } else {
        return night * 140
    }
}

function planeRideCost(){
    let destination = prompt("Choose between London, Paris or Other")
    // If the user doesn’t answer or if the answer is not a string, ask again.
    if (destination!== "London" && destination!== "Paris" && destination!== "Other") {
        destination = prompt("incorrect, re-enter ")
    }else if (destination == "London"){
        return 183
    }else if (destination == "Paris"){
        return 220
    }else if (destion == "Other"){
        return 300
    }

}


function rentalCarCost(){
    let day = prompt("How many day(s) would you like to rent the car?")
    // If the user doesn’t answer or if the answer is not a number, ask again
    if (day == "") {
        day = prompt("incorrect, re-enter ")
    }else if (day < 11){
        total = day *40
    }else if (day > 10){
        total1 = (day * 40) 
        totalper = (total * 5)/100
        total = total1 - totalper

    }
    console.log(total)
}

function totalVacationCost(){
    // Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
    console.log("Hotel cost:"+ hotelCost() + "Plane ticket:" + planeRideCost() + "The car cost:" + rentalCarCost())
}

totalVacationCost()

