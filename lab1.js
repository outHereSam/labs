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

console.log(sum([1, 2, 3, 4]));
