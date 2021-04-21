//1) //Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//16  -->  1 + 6 = 7

const digital_root = (number) => {

    var number = 999,
        output = [],
        sNumber = number.toString();
    
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }
    
    console.log(output);
    }

//2)

// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


const array = ['0', '1', '2', '3', '4']

function take(arr, n) {
  return arr.slice(0, n)
}

const test = take(array, 3)

console.log(test)

//3)

// Write function bmi that calculates body mass index (bmi = weight / height^2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

const calculateBmi = (weight, height) => {
  
    const bmi = (weight * 703) / (height * height)
  
    if (bmi <= 18.5) {
      return "Underweight"
    }
    else if (bmi <= 25.0) {
      return "Normal"
    } 
  
    else if (bmi <= 30.0) {
      return "Overweight"
    }
  
    else if (bmi > 30) {
      return "Obese"
    }
  }
  
  const test = calculateBmi(200, 74)
  
  console.log(test)


//4)

// Your function takes two arguments:

// current father's age (years)

// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const kidAge = 5
const dadAge = 31

const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

const test = twiceAsOld(31, 10)

console.log(test)


//5)
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

var list1 = [
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS',
    firstName: 'Danny', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' }
  ];
  

  const countDevelopers = (list) => {
  count = 0;
  for(i = 0; i < list.length; ++i){
      if(((list[i].continent) === 'Europe') && ((list[i].language) === 'JavaScript')) {
          count+=1;
  }
  }
  return count
  }
  
  const test = countDevelopers(list1)
  console.log(test)

//6)

-- Write a select statement that takes name from person table and return "Hello, <name> how are you doing today?" results in a column named greeting

-- [Make sure you type the exact thing I wrote or the program may not execute properly]


SELECT 'Hello, ' || name || ' how are you doing today?' as greeting 
FROM person

//7)
// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// X will be a valid integer number.
// X will be either a number or a string. Both are valid.

// Other katas in this series:

const temperatureCheck = (x) => {
  let statement = "";
  if (x*x >= 1000) {
  statement = "It's hotter than the sun!!";
  } else { 
  statement = "Help yourself to a honeycomb Yorkie for the glovebox."; 
  }
  return statement
}

const test = temperatureCheck(300)

console.log(test)


