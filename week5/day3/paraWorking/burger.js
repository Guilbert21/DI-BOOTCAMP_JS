// --- synchronous code ---
// function getBuns () {
//     console.log('getting buns');
//     return "whole wheat";
// }

// function getMeat () {
//     console.log('getting meat');
//     return "beef";
// }

// function putBurgerTogether () {
//     console.log('putting burger together');
//     return "bun + meat";
// }

// function makeBurger () {
//     let meatType = getMeat();
//     let bunType = getBuns();
//     let burger = putBurgerTogether();
//     return "Delicious Burger"
// }

// let my = makeBurger();
// console.log(my);

// const makeBurger = () => {
//     const meatType = getMeat();
//     const bunsType = getBuns();
//     const burger = putMeatBetwenBuns(bunsType, meatType);
//     return burger;
// };

 
// --- asynchronous code ---
// function getMeat() {
//     console.log("walking to the butcher...");
//     setTimeout(() => {
//         console.log("getting the beef from the butcher");
//         return "beef"
//     }, 2000);
// }

// function getBuns() {
//     console.log("getting the buns from the bakery");
//     return "whole grain";
// }


// function putMeatBetwenBuns(bunsType, meatType) {
//     console.log(`creating the ${meatType} burger with ${bunsType} buns`);
//     return "Delicious Burger"
// }

// const burger = makeBurger();
// console.log(burger);


// --- asynchronous code with callbacks ---
// function getMeat(callback) {
//     console.log("walking to the butcher...");
//     setTimeout(() => {
//         console.log("getting the beef from the butcher");
//         callback("beef");
//     }, 10000);
// }

// function getBuns(callback) {
//     console.log("getting the buns from the bakery");
//     callback("whole grains");
// }


// function putMeatBetwenBuns(bunsType, meatType, callback) {
//     console.log("preparing the burger...");
//     callback(`The ${meatType} burger with ${bunsType} buns is created`)
// }

// const makeBurger = () => {
//     getMeat((meatType) => {
//         getBuns((bunsType) => {
//             putMeatBetwenBuns(bunsType, meatType, (finalBurger) => {
//                 console.log(finalBurger);
//             })
//         })
//     })
// }

// const burger = makeBurger();

// --- asynchronous code with promises ---
// function startBurger() {
//     return new Promise((resolve, reject) => {
//         console.log("walking to the butcher...");
//         setTimeout(() => {
//             console.log("getting the beef from the butcher");
//             resolve("beef");
//         }, 2000)
//     })
// }


// startBurger()
//     .then(meatType => {
//         console.log("getting the buns from the bakery");
//         return [meatType, "whole grains"];
//     })
//     .then(([bunsType, meatType]) => {
//         console.log("preparing the burger...");
//         console.log(`The ${meatType} burger with ${bunsType} buns is created`);
//     })


// --- give random numbers ---
// const generateRandomNumbers = () => {
//     const numbers = [];
//     while (numbers.length < 6) {
//         const randomNumber = Math.floor(Math.random() * 40) + 1;
//         if (!numbers.includes(randomNumber)) {
//             numbers.push(randomNumber);
//         }
//     }
//     return numbers;
// };

// const randomNumbers = generateRandomNumbers();
// console.log(randomNumbers);

// --- promise ---
// let goodGrades = true;

// let endSemester = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (goodGrades) {
//             resolve("I will get a gift");
//         } else {
//             reject("I won't get the gift");
//         }
//     }, 2000);
// });

// console.log(endSemester)

//------------------Promise------------------
// let goodGrades = 98;

// let endSemester = new Promise(function (resolve, reject) {
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades > 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
// });


// endSemester.then(function (value) {
//     console.log("I got an amazing gift : A ", value);
// });

// endSemester.catch(function (value) {
//     console.log("Booo", value);
// });

// endSemester.finally(function () {
//     console.log(`No matter if I get a gift or not, 
//                 I want to have good grades`);
// });

// console.log(endSemester)


// ------------------Promise------------------
// let bankAmount = 501
// let expense = 500

// let bankPromise = new Promise((resolve, reject) => {
//     if (expense<bankAmount) {
//         resolve(expense);
//     } else {
//         reject("Rejected by the Bank");
//     }
// });

// //1st "then"
// bankPromise.then((result) => {
//     //result is the argument passed in the resolve function
//     console.log(`The expense is ${result} dollars`);
//     return result * 1.17;
// //2nd "then"
// }).then((resultTwo) => {
//     //resultTwo is the expense including taxes
//     console.log(`The expense included taxes is ${resultTwo} dollars`);
//     bankAmount -= resultTwo;
//     console.log(`I have ${bankAmount} dollars left in the bank`);
//     return bankAmount;
// }).catch((error) => {
//     console.log(`We have a problem : ${error}`)
// });

let chuckNorris = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'

    xhr.onload = function () {
        if (xhr.status != 200) {
            reject(xhr);
        } else {
            resolve(xhr);
        }
    };

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    xhr.send();
})

chuckNorris.then(x => console.log(`Joke :  ${x.response.value}`))
chuckNorris.catch(error => console.log(`Error ${error.status}`))
chuckNorris.finally(() => console.log(`I love Chuck Norris!`))


console.log(chuckNorris)