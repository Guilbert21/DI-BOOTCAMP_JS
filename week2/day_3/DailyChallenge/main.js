let num = prompt("Enter a number:")

for (let x = 0;x < num; x++) {
    const stars = x + 1;
    let starsLine = ""
    for (let y = 0; y < stars; y++) {
        starsLine = starsLine + " * "
}
console.log(starsLine)
}