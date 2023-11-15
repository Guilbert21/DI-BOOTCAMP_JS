const str = "Hello,World,in,a,frame";
const arr = str.split(",");
// // console.log(arr)

// for (let i = 0; index < arr.length; i++) {
//     max = 0
//     if (arr > max)
//     max = arr.length
//     console.log(max)
// }
// for (let i = 0; i < arr.length; index++) {
//     // console.log(arr[i])
    
// }
// console.log(arr)

// function display(arr){
// console.log(arr)
// }
// arr.forEach(display)

let maxStr = 0;
for(let i = 0; i < arr.length; i++){
    if (arr[i].length > maxStr){
        maxStr = arr[i].length;
    
    }

}

let n = maxStr + 5;
let string = "";

function starLine(){
for(let i = 0; i < 1; i++) { 
  for(let j = 0; j < n; j++) { 
    string += "*";
  }
  string += "\n";
}
console.log(string);
}
// console.log(starLine())
starLine()

for (i = 0; i< arr.length; i++){
	console.log("* " +  arr[i].padEnd(maxStr + 2, " " ) + "*")

}
// console.log(maxStr)

// console.log("* " +  + "*")

// console.log("* " + display().padEnd(maxStr + 2) + "*")

// arr.forEach((display).padEnd(5)+"*")
// console.log(arr.forEach(display.padEnd(5)+"*"))

// console.log("* " +  arr[i].padEnd(maxStr + 2," " ) + "*")
// }

// function starLine(){
//     let colNum = 5
//     for (let i = 1; i <= colNum;i++ ){
//         document.write("*"); 
//     }
    
// starLine()
// }

// let n = maxStr + 5;
// let string = "";

// function starLine(){
// for(let i = 0; i < 1; i++) { 
//   for(let j = 0; j < n; j++) { 
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// }
starLine()
