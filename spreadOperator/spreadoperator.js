//In JavaScript, the spread operator is denoted by three consecutive dots '...'.

//Copying Arrays;
var originalArray=[1,2,3,4,5,6];
var array=[...originalArray,7,8,9];

console.log(array)

// Merging Objects;

const obj1={a:1,b:2};
const obj2={c:3,c:4};
const mergedObject={...obj1,...obj2};

console.log(mergedObject)