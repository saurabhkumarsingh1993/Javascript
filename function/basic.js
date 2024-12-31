//Function Declarations

// function addition(a, b)
// {
// return (a+b);
// }

// //function expression

// let x = function (a,b){
//     return (a+b);
// }
// console.log(x(4, 10));
// //function constructor

// const myFunction = new Function("a", "b", "return a+b");
// let ans = myFunction(4,5)
// console.log(ans)

// self invoking function
// (function () {
//     let x = "Hello!!";  // I will invoke myself
//   })();
//Functions Can Be Used as Values
 function basic(x, y)
 {
    return(x+y)
 }

 const answere = basic(10,5)
 console.table(answere)
 //Functions Can Be Used as expression

 function basic2(x, y)
 {
    return(x+y)
 }

 const answere2 = basic2(10,5)*2
 console.table(answere2)

 function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x)