const beersNum = (prompt("how many beers"))
// const first = "99 bottles of beer on the wall"
// const second = "99 bottles of beer"
let down = beersNum - 1
const i = 1
const zero  = 0
if (beersNum > 1){
    console.log(beersNum + " bottles of beer on the wall")
    console.log(beersNum + " bottles of beer")
    console.log("Take 1 down, pass it around")
    console.log(down + " bottles of beer on the wall")
}else if (beersNum == i){
    console.log(beersNum + " bottle of beer on the wall" )
    console.log(beersNum + " bottle of beer")
    console.log("Take 1 down, pass it around")
    console.log(down + "bottle of beer on the wall")
}else if (beersNum == zero) {
    console.log("no bottle of beer on the wall")
}