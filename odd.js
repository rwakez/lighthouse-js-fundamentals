function isOdd(num) {
  let b = num % 2 === 0 ? false : true;
  return b;
}

let n = 22;
let m = 23;
console.log(n + " is odd: " + isOdd(n));
console.log(m + " is odd: " + isOdd(m));