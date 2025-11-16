// function hny() {
//     console.log("happy new year");
//     //function declaratiob
// }
// hny()

// let fnc= function() {
//     console.log("hello");
//     //function Expression
// }
// fnc()

// let myfnc = () => {
//     console.log("ok men");
    
// }
// myfnc()


// function dance(value) {
//     console.log(`${value} nach raha he`);
    
// }
// dance("ghoda") 
// dance("cow") 
// dance("tiger") 
// dance("lion") 


// function add(val1, val2) {
//     val1 + val2;
    
// }

// console.log(add(1,2)); // ubdefined dega kyuki return nhi kia he hamane



// function add(val1, val2) {
//    console.log(val1 + val2) 
    
// }
// add() //if I not give the value of in val1 and val2 so it gives undefined output because of val1 and val2 is varibale

//rest oper
// function abcd(...val) {
//    console.log(val);
   
// }

// abcd(1,2,3,4,5,6,7,8,9,10) //output-[1,2,3,4,5,6,7,8,9,10]



//return - jahase aya ho vha vapis chale jaoo
// function ok(val) {
//      return 12 + val;
// }


// console.log(ok(1))
// let result = ok(2)
// console.log(result);


//first class function
// function vijay(val) {
//      val()
// }

// vijay(function() {
//     console.log("hello vijay");
    
// })


//higher order function
// function fuck() {
//       return function() {
//               console.log("fuck you");
              
//       }
// }
// fuck()()
//  fuck()()
 





// this also hof
// function fuck(b) {
//     // b()
// }

// fuck(function() {
//     console.log("fuck off");
    
// })


//impure and pure
// let a = 12;
// function aa() {
//    return a++
// }

// let res = aa()
// console.log(res);


// closure- ek aise function jo return kare aur function aur return hona wala function hamseha use karega parent function koi variable
// function parent() {
//     let z = 2; //parent function ka varable ye he
//     function child() {
//         console.log(z);
        
//     }
   
// child()
    
// }
// console.log(
// parent());





//lexical scoping - a ko sirf hum abc() ma hii access kr skate he, b ko hum sirf def() ma hi access kar sakte he, aur c ko hum sirf fhu() ma hi access kr sakte he.....
// function abc() {
//     let a= 1;
//     function def() {
//         let b =2; 
//         function ghi() {
//             let c = 3
//         }
//     }
// }


//iifi - call karne ke jaruart nahi he, call ho chuka he..
// (function iifi() {
//          console.log("hey");
         
// })()


//hoisting - function ke phaile he hum use call kr skate he , but function expression ma nahi chalta he ye 
// hois()

// function hois() {
//     console.log("hi hoisting");
    
// }




//Qs
// function getScore(...score) {
//     let total = 0;
//       score.forEach(function(val) {
//           total = total + val
//       })
//     return total
    
// }
// console.log(getScore(1,2,3,4,5));


//convert the above function in the pure function 
// let total = 0;

// function pure(num) {
//    let newTotal= total
//    return newTotal += num


// }

// console.log(pure(3));



// Qs closure concept
// function outer() {
//     let count = 0
//     return function() {
//            count++
//            console.log(count)
//     }

// }
// let counter = outer()
// counter()
// counter()
// counter()
// counter()



//BMI calculator
// function bmi(weight, height) {
//    return weight / (height * height)
     
// }

// console.log(bmi(50, 1.7))





//discount calculator 
// function discountCal(discount) {
//     return function(price) {
//         return price - price * (discount/100)
//     }

// }

// let ten = discountCal(10)
// let twenty = discountCal(20)

// result = ten(200)

// console.log(result);


//imp Qs and concept
// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//       return count
        
//     }
// }

// let c = counter()
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter()
// console.log(d());



//Qs imp concept
// function double(val) {
//     return val * 2;
// }


// console.log(double(5));


//iifi
//  (function () {
//     const password = "secerte password"
//     console.log(password);
    
// })()

// console.log(password)// error 


//Qs return fnc 
// function add(a, b) {
//     return a + b;

// }

// add()

//
// function greet() {
//     return "hello vijay";
// }


// console.log(greet());

//
// function test() {
//     let x = 5;
//     return x * 2;
//     console.log("after return ");
    
// }
// console.log(test());


//
// function cal(num) {
//     return num + 2;

// }
// console.log(cal(2));


//
// function double(num) {
// return num * 2;
// }


// let result = double(double(4))
// console.log(result);


//**Level 3 – Function Returning Another Function**

// function outer() {
//     return function() {
//         console.log("hello form inner")
//     }
// }

// outer()()

//or

// function outer() {
//     return function() {
//         console.log("hello form inner")
//     }
// }


// let result = outer()
// result()


//
// function multiplyBy(x) {
//        return function(y) {
//               return x * y;
//        }
// }

// let yMultiplyby = multiplyBy(2)
// console.log(yMultiplyby(3));


// console.log(multiplyBy(2) (4))

//
// function show() {
//    console.log("Vijay");
// }
// let a = show(); //undefined output ayega kyuki retrun nahi kiya he hamane
// console.log(a);// Vijay 


//
// function add(a, b) {
// console.log(a + b);
// }
// console.log(add(3, 4));


//
// function test() {
//    return
//    10;
// }
// console.log(test());


//first class function  Qs
// function greet() {
//   return "Hello Vijay!";
// }
// let sayHello = greet;
// console.log(sayHello());


//very imp concept
// function greet(fn) {
//  return fn()
// }

// function sayHi() {
//   return "Hi!";
// }


// console.log(greet(sayHi));

//
// function outer() {
//   return function() {
//     return "Inner Function!";
//   }
// }
// let outerPrint = outer()
// console.log(outerPrint());


//
// let arr = [
//   function() { return "One"; },
//   function() { return "Two"; },
//   function() { return "Three"; }
// ];
// console.log(arr[1]());

//
// let user = {
//   name: "Vijay",
//   greet: function() {
//     return "Hello " + this.name;
//   }
// }


// console.log(user.greet());


//
// function multiply(x) {
//   return function(y) {
//    return x * y
//   }
// }

// let result = multiply(2)
// let yy = result(3)
// console.log(yy);


//
// function run(fn) {
//   fn();
// }
// run(function() {
//   console.log("Running anonymous function!");
// });


//
// function hello() {
//   return function() {
//     return "Namaste Vijay!";
//   }
// }
// let greet = hello();
// console.log(greet());


//
// function getFnc(type) {
//       if(type === "add") {
//         return function (a, b) {
//             return a + b
//         }

//       }
//       else {
//         return function() {
//             return a * b
//         }
//       }
// }
// let calc = getFnc("add")

// console.log(calc(2,3));


//very very imp Qs
// function square(x) {
//   return x * x;
// }

// function higherOrder(fn, value) {
//   return fn(value)
// }

// console.log(higherOrder(square, 5));



//closures
// 
// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// let counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// //
// function greet(name) {
//   return function() {
//     console.log("Hello " + name);
//   }
// }

// let sayHello = greet("Vijay");
// sayHello(); 


// //
// function createCounter() {
//   let count = 0;

//   return function() {
//     count++;
//     return count;
//   }
// }

// let counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

//
// function multiplier(x) {
//   return function(y) {
//     return x * y;
//   }
// }

// let res = multiplier(2)

// console.log(res(3));


//
// function counter(start) {
//   return function() {
//     start++;
//     return start;
//   }
// }

// let c1 = counter(5);
// let c2 = counter(10);

// console.log(c1());
// console.log(c1());
// console.log(c2());
// console.log(c2());

//
// function makeFunctions() {
//   let funcs = [];

//   for (let i = 1; i <= 3; i++) {
//     funcs.push(function() {
//       console.log(i);
//     });
//   }

//   return funcs;
// }

// let arr = makeFunctions();
// arr(); 
// arr[1](); 
// arr[2]();

//
function countdown(start) {
  return function() {
    if (start > 0) {
      console.log(start);
      start--;
    } else {
      console.log("Time’s up!");
    }
  }
}

let timer = countdown(3);
timer();
timer();
timer();
timer();
