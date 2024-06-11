/* -----------------------------------------------------------------------
Lab Activity: Functional Data Transformation Playground
-------------------------------------------------------------------------*/

// String Transformations

/*----------------------------------------------
 a. Capitalize String
-------------------------------------------------*/
function capitalize(str) {
  let capitalized = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    capitalized += str[i];
  }

  return capitalized;
}

// console.log(capitalize("cat"));

/* -----------------------------------------------
b. Reverse String
--------------------------------------------------*/
function reverse(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

// console.log(reverse("cat"));

/*---------------------------------------------------
 c. Is Palindrome
------------------------------------------------------*/
function isPalindrome(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return str === revString;
}

// console.log(isPalindrome("palindrome"));

/*---------------------------------------------------
 d. Word Count
------------------------------------------------------*/
function wordCount(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    counter++;
  }

  return counter;
}

// console.log(wordCount("Samuel"));

// Array Transformations
/*----------------------------------------------
 a. Double
-------------------------------------------------*/
function double(arr) {
  let doubledArr = [];

  arr.map((number) => doubledArr.push(number * 2));

  return doubledArr;
}

// console.log(double([1, 2, 3, 4]));

/*----------------------------------------------
 b. Filter Even
-------------------------------------------------*/
function filterEven(arr) {
  let filtered = arr.filter((number) => number % 2 === 0);

  return filtered;
}

// console.log(filterEven([1, 2, 3, 4]));

/*----------------------------------------------
 c. Sum
-------------------------------------------------*/
function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// console.log(sum([1, 2, 3, 4]));

/*----------------------------------------------
 c. Average
-------------------------------------------------*/
function average(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

// console.log(average([1, 2, 3]));

// Object Transformations
/*----------------------------------------------
 a. Full name
-------------------------------------------------*/
function fullName(person) {
  return person.firstName + " " + person.lastName;
}

// console.log(fullName({ firstName: "Samuel", lastName: "Danquah" }));

/*----------------------------------------------
 b. Is Adult
-------------------------------------------------*/
function isAdult(person) {
  return person.age >= 18;
}

// console.log(isAdult({ firstName: "Samuel", lastName: "Danquah", age: 15 }));

/*----------------------------------------------
 c. Filter By Age
-------------------------------------------------*/
function filterByAge(people, minAge) {
  return people.filter((person) => person.age >= minAge);
}

let people = [
  {
    name: "Sam",
    age: 25,
  },
  {
    name: "Kash",
    age: 14,
  },
  {
    name: "Ella",
    age: 17,
  },
  {
    name: "Rodney",
    age: 30,
  },
];

// console.log(filterByAge(people, 18));

// 4. Function Composition
const compose =
  (...functions) =>
  (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

const revCapitalized = compose(capitalize, reverse);
const doubledEven = compose(double, filterEven);

console.log(revCapitalized("hello"));
console.log(doubledEven([1, 2, 3, 4]));
