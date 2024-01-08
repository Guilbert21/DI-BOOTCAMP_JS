const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let isPassed = students.filter((student) => { return student.isPassed === true});
console.log(isPassed);

let congratulations = isPassed.map((student) => { return `Good job ${student.name} you passed the course in ${student.course}`});
console.log(congratulations); 