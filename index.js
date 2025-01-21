//1.
function FizzBuzz() {
  for (i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(` 3x${i} ----- hello`);
    } else if (i % 5 == 0) {
      console.log(`5x${i} ---javascript`);
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("hello javascript");
    }
  }
}
FizzBuzz();

//2
//fibonacci series
num1 = 0;
num2 = 1;
function febonacci() {
  for (i = 0; i < 10; i++) {
    num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
  }
}
febonacci();

//2.1 leap year

function checkLeapYear(num) {
  if ((num % 4 == 0 && num % 400 == 0) || num%100!== 0) {
    return `${num} is a leap year`;
  }
  return `${num} is not a leap year`;
}
console.log(checkLeapYear(2000));
console.log(checkLeapYear(1900));
console.log(checkLeapYear(2025));
console.log(checkLeapYear(1996));
console.log(checkLeapYear(2002));

//3.factorial
function factorial(num) {
  if (num < 0) {
    return `${num} is not a factorial`;
  } else if (num == 0) {
    return `${num} factorial is 1`;
  } else {
    let result = 1;
    for (i = 1; i <= num; i++) result *= i;
    return `${num} factorial is ${result}`;
  }
}
console.log(factorial(4));
console.log(factorial(-5));
console.log(factorial(12));
console.log(factorial(0));

//4.printing positive numbers
function evenNumbers(num) {
  if (num < 0) {
    return "please enter nonnegative number";
  }
  let evenNumbers = [];
  for (i = 0; i <= num; i++)
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
  return evenNumbers.join(",");
}
console.log(evenNumbers(10));
console.log(evenNumbers(-5));
console.log(evenNumbers(18));

//5.multiplication table

let num1=prompt("enter the number to know table")
  for (i = 1; i <= 10; i++) {
    console.log(`${num1} X ${i} = ${num1 * i}`);
  }

//6.greet user
let name=prompt("Enter The User Name")
function greetuser(name){
    console.log(` "HELLO WELCOME" : ${name}!`)
}
greetuser("SHIVA")
greetuser("VAMSHI")

//7.remove vowels from string
let userInput = prompt("Enter The String");
let result = "";
for (i = 0; i <= userInput.length; i++) {
  char = userInput[i];
  if (
    char !== "a" &&
    char !== "e" &&
    char !== "i" &&
    char !== "o" &&
    char !== "u" &&
    char !== "A" &&
    char !== "E" &&
    char !== "I" &&
    char !== "O" &&
    char !== "U"
  ) {
    result += char;
  }
}
console.log("string without vowels:", result);

//8.sum of digits un number
let num = prompt("Enter the number to be added");
let sum = 0;
function sumOfDigits(num) {
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
}
sumOfDigits(num);
console.log(`The sum of the digits of ${num} is ${sum}`);
