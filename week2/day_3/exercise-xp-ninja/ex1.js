const person1 = {
    fullName: "John Doe",
    mass: 80, 
    height: 1.8, 
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  
  const person2 = {
    fullName: "Jane Doe",
    mass: 70, 
    height: 1.65, 
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  
  function compareBMIs(person1, person2) {
    const bmi1 = person1.calculateBMI();
    const bmi2 = person2.calculateBMI();
  
    if (bmi1 > bmi2) {
      return `${person1.fullName} has a larger BMI of ${bmi1.toFixed(2)}`;
    } else if (bmi2 > bmi1) {
      return `${person2.fullName} has a larger BMI of ${bmi2.toFixed(2)}`;
    } else {
      return "Both persons have the same BMI";
    }
  }
  
  console.log(compareBMIs(person1, person2)); 
