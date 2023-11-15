function calculateAvg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  
  
  function findAvg(gradesList) {
    const avg = calculateAvg(gradesList);
    console.log(`The average grade is ${avg.toFixed(2)}.`);
    if (avg >= 65) {
      console.log("Congratulations, you passed the course!");
    } else {
      console.log("Sorry, you failed the course and must repeat it.");
    }
  }
  
  const grades = [85, 92, 76, 88, 91];
  findAvg(grades); 
  