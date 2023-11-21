const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//    exercise1 
const usernames = [];

gameInfo.forEach((name) => {
    usernames.push(name.username+"!");
});

console.log(usernames); 

// exercise2 
const winners = []

gameInfo.forEach((points) => {
    if(points.score > 5){
        winners.push(points.username);
    }
})
console.log(winners); 

// exercise3
let totalScore = 0;

gameInfo.forEach((points) => {
    totalScore += points.score;
})
console.log(totalScore);

const person = {
  name: 'Lydia',
  age: 21,
};

// get value 
console.log(Object.values(person)); 