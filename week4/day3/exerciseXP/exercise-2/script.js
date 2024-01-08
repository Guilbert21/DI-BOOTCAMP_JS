const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let welcomeUsers = users.map((user) => { return `Welcome ${user.firstName} !`});
console.log(welcomeUsers);

let fullStack = users.filter((user) => { return user.role === 'Full Stack Resident'});
console.log(fullStack);

let lastNames = fullStack.map((user) => { return user.lastName});
console.log(lastNames);