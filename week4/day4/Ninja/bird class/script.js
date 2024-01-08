class Bird {
    constructor() {
      console.log("I'm a bird. 🦢"); //I'm a bird. 🦢
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸"); // I'm pink. 🌸
      super();
    }
  }
  
  const pet = new Flamingo(); // 🌸 I'm pink.