let form = document.querySelector("form");
console.log(form);

// ID
let fname = document.querySelector("#fname");
console.log(fname);
let lname = document.querySelector("#lname");
console.log(lname);

// Name
let fnameByName = document.querySelector("[name='firstname']");
console.log(fnameByName);
let lnameByName = document.querySelector("[name='lastname']");
console.log(lnameByName);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve values from input fields
    let firstNameValue = fname.value;
    let lastNameValue = lname.value;

    if (firstNameValue.trim() === "" || lastNameValue.trim() === "") {
        alert("Please fill in the form");
    } else {
        // Create li elements
        let firstNameLi = document.createElement("li");
        firstNameLi.textContent = firstNameValue;

        let lastNameLi = document.createElement("li");
        lastNameLi.textContent =  lastNameValue;

        // Get the existing useranswers ul element
        let usersAnswerList = document.querySelector(".usersAnswer");

        // Clear previous entries
        usersAnswerList.innerHTML = '';

        // Append li elements to ul
        usersAnswerList.appendChild(firstNameLi);
        usersAnswerList.appendChild(lastNameLi);
    }
});
