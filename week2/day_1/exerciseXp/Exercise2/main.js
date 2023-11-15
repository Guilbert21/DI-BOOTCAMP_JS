const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries)

let myWatchedSeriesLength =  myWatchedSeries.length;
console.log(myWatchedSeriesLength);

let myWatchedSeriesSentence = ("Black mirror,"+" money heist,"+" and"+" big bang theory")
console.log(myWatchedSeriesSentence);

console.log("i watched "+ myWatchedSeriesLength+":"+myWatchedSeriesSentence)

myWatchedSeries.splice(2, 2, "friends")
console.log(myWatchedSeries)

myWatchedSeries.push("who killed Sarah")
console.log(myWatchedSeries)

myWatchedSeries.unshift("how to sell drugs online")
console.log(myWatchedSeries)

myWatchedSeries.splice(1,1)
console.log(myWatchedSeries)


console.log(myWatchedSeries[1].substring(3, 4))
console.log(myWatchedSeries)

