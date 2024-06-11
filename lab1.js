// Lab Activity: Functional Data Transformation Playground

// String Transformations
// a. Capitalize String
function capitalize(str) {
  let capitalized = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    capitalized += str[i];
  }

  return capitalized;
}

// console.log(capitalize("cat"));

// b. Reverse String
function reverse(str) {
  strArr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strArr += str[i];
  }
  return strArr;
}

console.log(reverse("cat"));
