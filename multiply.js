// Using a for loop for multiplication
function multiply(a, b) {

  
  let result = 0;

  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}


//  function multiply(a, b) {
//   
//       return a * b;
//   }


module.exports = multiply;
