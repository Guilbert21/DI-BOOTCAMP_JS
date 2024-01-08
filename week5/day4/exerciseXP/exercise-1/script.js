async function fetchStarWarsData() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
fetchStarWarsData();
