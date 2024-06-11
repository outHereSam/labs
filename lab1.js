/* -----------------------------------------------------------------------
Lab Activity: Functional Data Transformation Playground
-------------------------------------------------------------------------*/

// String Transformations

/*----------------------
 a. Capitalize String
-----------------------*/
function capitalize(str) {
  let capitalized = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    capitalized += str[i];
  }

  return capitalized;
}

// console.log(capitalize("cat"));

/* ----------------
b. Reverse String
------------------*/
function reverse(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

// console.log(reverse("cat"));

/*----------------
 c. Is Palindrome
------------------*/
function isPalindrome(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return str === revString;
}

// console.log(isPalindrome("palindrome"));
