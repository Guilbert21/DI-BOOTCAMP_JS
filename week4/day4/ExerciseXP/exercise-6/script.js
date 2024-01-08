// [2] === [2] // false
// {} === {} // false

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) //4 because object2 is a reference to object1
// console.log(object3.number) // 4 because object3 is a reference to object2
// console.log(object4.number) // 5 because object4 is a new object

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }
    sound(){
        console.log(`Mooooo I'm a ${this.type}, my name is ${this.name} and I'm ${this.color}`)
    }
}

let farmerCow = new Mamal('Lily', 'cow', 'brown and white');
farmerCow.sound();
