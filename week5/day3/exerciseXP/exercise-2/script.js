const delayedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success")
        }, 4000)
    })
}
delayedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
