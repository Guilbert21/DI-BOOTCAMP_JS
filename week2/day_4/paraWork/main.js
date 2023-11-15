let familyAges = (myAge)=>{

 let momAges = myAge * 2;
 let dadAges = momAges * 1.2
console.log("Dad's: ",parseInt(dadAges), "mom:",momAges )
};
familyAges(14);


let person= {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : function () {
        console.log("I love chocolate")
    }
}

console.log(person.firstName)
person.eat()


