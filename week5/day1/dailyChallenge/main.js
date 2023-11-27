// const { handle } = require("express/lib/application");

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     let firstName = document.getElementsByName("firstname")[0].value;
//     let lastName = document.getElementsByName("lastname")[0].value;
    
//     let data = {
//         firstName: firstName,
//         lastName: lastName
//     };
    
//     let jsonString = JSON.stringify(data);
    
//     let result = document.createElement("p");
//     result.textContent = jsonString;
//     document.body.appendChild(result);
// });

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));

    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    const jsonString = JSON.stringify(data);
    const p = document.createElement("p");

    p.innerText = jsonString;
    document.body.appendChild(p);
}
