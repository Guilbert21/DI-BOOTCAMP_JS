const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

rejectedPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
    