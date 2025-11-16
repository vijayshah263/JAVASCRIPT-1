// //repeat karne ko loop kheta hain..

// for(let i=0; i<101; i++) {
//     // console.log(i);
    
// }

// // let i =1;
// while(i < 33) {
//     // console.log(i);
    
//     i++ 
// }


// for(let i = 0; i < 33; i++) {
  
    
//     if(i === 32) {
//         break;
//     } 
//     //break ke bad ka code nahi chlata
//     //  console.log(i);
// }


// //Qs
// for(let i = 1; i < 11; i++) {
//     // console.log(i)
// }

// //Qs
// for(let i = 10; i > 0; i--) {
//     // console.log(i);
    
// }

// //Qs

// let k = 10;
// while(k > 0) {
//     // console.log(k);
    
//     k--
// }

// //Qs print even number 1 to 20
// for(let i = 0; i < 21; i++) {
//       if(i % 2 === 0) {
//         // console.log(i);
        
//       }
// }

// //Qs multiplication table
// for(let i = 1; i<11; i++) {
    
  
//     // console.log(i*5);
    

// }

// //Qs sum of 1 to 100
// //  let sum = 0
// // for(let i=1; i < 101; i++ ) {
   
// //     sum = sum + i 
// //     // console.log(sum);
// // }

// //Qs
// // // let val = prompt("enter the number")
// // for(let i =1; i <= val; i++) {
// //    if(i % 2===0) {
// //     // console.log(i, "number is even");
    
// // }
// // else {
// //     // console.log(i,"number is odd");
    
// // } 
// // }


//Qs

// for(let i=1; i < 101; i++) {
//     if(i % 3 ===0  && i % 5 ===0){
       
//         console.log(i);
//     } 
// }



//concept imp
let i; // declare outside
for(i = 1; i < 15; i++) {
  
}
// console.log(i); // ✅ works fine, prints 15


//Qs
for(let i=1; i < 101; i++) {
    // console.log(i);
    
    if(i%7===0) {
        
        break
    }
}

//Qs
for(let i=0; i < 21; i++) {
    if(i % 3 === 0) continue;
    // console.log(i);
    
}

//Qs
let count = 0;
for(let i=1; i < 101; i++) {
    if(i % 2 !== 0 ) {
        count++
       console.log(i);
       
    }
        if(count === 5) {
            break
        }

}