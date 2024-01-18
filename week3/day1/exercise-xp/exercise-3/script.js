let navbar = document.getElementById("navBar");
navbar.setAttribute("id", "socialNetworkNavigation");


let Newli = document.createElement("li");
let NewText =document.createTextNode("Logout");
Newli.appendChild(NewText);


let ul = document.querySelector("ul");
ul.appendChild(Newli);

let Firstli = ul.firstElementChild;
let Lastli = ul.lastElementChild;
 console.log(Firstli.textContent);
 console.log(Lastli.textContent);