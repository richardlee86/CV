//Fibonacci practice
function Fibonacci(n) {
  myArray = [0, 1];
  if (n === 1) {
    myArray = [0];
  }
  for (let i = 0; i <= n; i++) {
    myArray[i] = myArray[i - 2] + myArray[i - 1];
    console.log(myArray);
  }
}
