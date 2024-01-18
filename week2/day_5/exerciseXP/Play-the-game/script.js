function playTheGame() {
    let play = confirm("Do you want to play the game");
    if (play === false) {
        alert("No problem, Goodbye");
        return;
    }
    let num;
    while (play === true) { 
        num = parseInt(prompt("Enter a number between 0 and 10"));
        if (num >=0 && num <=10) {


        let computerNum = Math.floor(Math.random() * 11);
        test(num, computerNum);
    }
}
}

function test(num, computerNum) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (num == computerNum) {
            alert("WINNER");
            break;
        } else if (num > computerNum) {
            alert("Your number is bigger then the computer’s, guess again");
            num = prompt("Enter a number between 0 and 10");
            count++;
        } else {
            alert("Your number is smaller then the computer’s, guess again");
            num = prompt("Enter a number between 0 and 10");
            count++;
        }
    }
    if (count == 3) {
        alert("out of chances");
    }
}
