function playTheGame(){
    // In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).
    function confirm(){
        confirm = prompt("will like to play?")
        if (confirm === "no" || confirm === "n") {
            alert("No problem, goodbye")
    }else if (confirm === "yes" || confirm === "y"){
    }

    function prompt()
        const userNumber = prompt("Enter a number between 0 - 10")
        if (userNumber == " " ){
            alert("Sorry Not a number, Goodbye")
        }else if (userNumber > 10 || userNumber <0){
            alert("Sorry it’s not a good number, Goodbye")
        }else {
        computerNumber = mathRandom()
        }
    }
    function mathRandom(){
        document.getElementById("demo").innerHTML =
        Math.floor(Math.random() * 11);
    }
}


function compareNumbers(userNumber, computerNumber){
    userNumber = number
    
    if (userNumber === computerNumber){
        alert("WINNER!")
    }else if (userNumber > computerNumber){
        prompt()
    }else if (userNumber < computerNumber){
        alert("Your number is smaller then the computer’s, guess again")
        prompt()
    }else if (prompt() > 3){
        alert("out of chances")
    }
}
console.log(playTheGame())
