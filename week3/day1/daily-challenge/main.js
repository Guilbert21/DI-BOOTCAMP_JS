// // Create an array which value is the planets of the solar system.
// const planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
// let temp;

// const section = document.querySelector(".listPlanets")
// // For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// for (let i = 0; i < planetsArray.length; i++) {
//     temp = document.createElement("div")
//     temp.className = "planet color-" +[i + 1]
//     temp.innerHTML = planetsArray[i]
//     document.getElementsByTagName("Body")[0].appendChild(temp)
   
//     section.appendChild(temp)
// }

const planets  = [
    {name: 'Mercury', moons:0},
    {name: 'Venus', moons:0},
    {name: 'Earth', moons:1},
    {name: 'Mars', moons:2},
    {name: 'Jupiter', moons:95},
    {name: 'Saturn', moons:146},
    {name: 'Uranus', moons:27},
    {name: 'Neptune', moons:14}
 ];

for (const planet of planets) {
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.name.toLocaleLowerCase())
    div.innerHTML = planet.name

    for (let i = 0;i < planet.moons;i++) {
        const moonDiv = document.createElement("div")
        moonDiv.classList.add("moon")
        moonDiv.style.left = i * 10 + "px"
        div.appendChild(moonDiv)
    }


    const section = document.querySelector(".listPlanets")
    section.appendChild(div)
}
