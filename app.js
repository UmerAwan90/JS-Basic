

//Q1: write a java Program to reverse a string 
// without using String inbuilt function reverse().

 const str = 'javascript'

 function reverseStr(str) {
   let output = ''
   for(let i = str.length - 1; i>= 0; i--){
      output = output + str[i]
   }
   return output
 }

 document.write(reverseStr (str) +"<br>" +"<hr>")

//Q:2 Count the number of vowels in a given string. 

var string = prompt("Please enter a string");
        const reg = /[aeiou]/gi;
        var chars = string.match(reg);
        document.write(chars.join(',')  +"<br>");
        document.write(chars.length  +"<br>" +"<hr>");

//Q3: Convert the first letter of each word in a sentence to uppercase.

var string = prompt("Please enter a string");
document.write(string  +"<br>");
var first = string.charAt(0);
document.write(first  +"<br>");
document.write(first.toUpperCase()  +"<br>");
var rem = string.slice(1);
document.write(rem  +"<br>");
var caps = first.toUpperCase() + rem;
document.write(first  +"<br>");
document.write(`${caps}`  +"<br>" +"<hr>");

//Q4: Check if a string is a palindrome.

var string = prompt("Please enter a string");
var len = string.length;
var msg = 'It is a Palindrome';
for(var i = 0; i < len/2 ; i++) {
  if(string[i] != string[len - 1 - i]){
    msg = 'It is not a palindrome';
  }
}
document.write(`${string}: ${msg}`  +"<br>" +"<hr>");

//Q5: Find the sum of all positive numbers in an array.

function sumofAll(arr) {
  let sum = 0;
  for(let a of arr)
  sum += a;
return sum;
};
document.write(sumofAll([3,4,2])  +"<br>" +"<hr>")


//Q6: Find the index of the first occurrence of a specific element in an array.

var string = prompt("Please enter a string");
var letter = prompt("Please enter a letter");
let strlen = string.length;
var counter = 0;
for(var i = 0; i < strlen ; i++){
  if(string[i] == letter){
    counter++;
  }
}
document.write(`${string} => ${letter} =>${counter}`  +"<br>" +"<hr>");

//Q7: Remove all duplicates from an array without built-in methods.

let arr = [1,1,1,2,2,23,3,4,4,,5,5,6,6,6,7,7,8,8,9,9];

let newUniqueArr = [...new Set(arr)];

document.write(newUniqueArr  +"<br>" +"<hr>");

//Q8: Sort the array in ascending and descending without built-in methods.

document.write("Hello! Sorter function" +"<br>");
var numbers = [200,100,2,5,10,3,7,1,8];
document.write(numbers  +"<br>");

function sorter(array) {
  var swap, done = false, swapped;
  swapped; 
  while (!done) {
    swapped = 0;
    for(i = 1; i < array.length; i++) {
        if(array[i - 1] > array[i]) {
            swap = array[i];
            array[i] = array[i - 1];
            array[i - 1] = swap;
            swapped = 1;
        };
        if (swapped == 0){
            done = true;
        } 
    };
  };
  return array;
};
document.write(sorter(numbers)  +"<br>" +"<hr>");

//Q9: Print all even numbers between 1 and 20 using a while loop.

var i = 2; 
while(i <= 20)
{
  document.write(i +"<br>"); 
    i += 2; 
}

//Q10: Calculate the factorial of a number using a do-while loop.

function givenNumber(number) {
    let factorial = 1;
    let index = 1;
    do
    {
        factorial = factorial * index 
        index++; 
    } 
    while ( index <= number )
    return factorial; 
}
const myNumber = givenNumber(5);
document.write(myNumber  +"<br>" +"<hr>"); 

//Q11: Lterate through the properties of an object using a for-in loop.

var obj = {
    firstName : "Umer",
    lastName : "Ayaz",
    Age : 19,
    email : "rajau3567@gmail.com",
};

for(var key in obj) {
  document.write(key + " : " + obj[key] +"<br>" +"<hr>") 
};

//Q12: Loop through an array using a for-of loop and double each element.

let characters = ['Sonic', 'Tails', 'Mario', 'Luigi', 'Link'];

for ( x of characters) {
  document.write(x  +"<br>");
}

//Q13: Check if a number is even or odd and return a corresponding message.

var x = 4; 
var res = x%2 == 0 ? "even" : "odd"; 
document.write (`${x} is an ${res } number` +"<br>" +"<hr>");  

//Q14: Find the maximum of three numbers using nested ternary operators.

let age = 10;

let status = age >= 18? (document.write("You're an adult!"), "adult"):
                        (document.write("You're a child!" +"<br>" +"<hr>" ), "child");

//Q15: Determine if a year is a leap year or not.

const isleapYear = function(year) {
  document.write(year % 100  +"<br>")
    return (year % 100 ===0) ? (year % 400 === 0) : (year % 4 ===0);
}

document.write(isleapYear(2001)  +"<br><br>" );