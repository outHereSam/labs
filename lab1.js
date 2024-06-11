// Lab Activity: Functional Data Transformation Playground

// String Transformations
// a. Capitalize
function capitalize(str) {
  let capitalized = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    capitalized += str[i];
  }

  return capitalized;
}

console.log(capitalize("cat"));
