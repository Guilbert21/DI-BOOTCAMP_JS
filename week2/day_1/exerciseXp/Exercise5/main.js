typeof(15)
// Prediction:integer
// Actual:number

typeof(5.5)
// Prediction:real
// Actual:number

typeof(NaN)
// Prediction:boolean
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:boolean
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:error
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:error
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:error
// Actual:NaN

99 * "hello"
// Prediction:error
// Actual:NaN

1 != 1
// Prediction:true
// Actual:

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false