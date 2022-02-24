// 1. Please write a function that shows the usage of closures
const multiplier = (x) => (y) => x * y;
const by3 = multiplier(3);
const twelve = by3(4);
console.log({ twelve }); // will output { twelve: 12 }

// It was currying (and currying is a form of closure)
// More common closure
const outer = (someVariable) => {
  let protectedVariable = someVariable;
  const inner = () => {
    protectedVariable++;
    console.log(protectedVariable);
  };
  return inner;
};
const testOne = outer(1);
testOne(); // will output 2
testOne(); // will output 3
const testTwo = outer(10);
testTwo(); // will output 11
testTwo(); // will output 12
testOne(); // will output 4

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34
const arrSum = (arr) => arr.reduce((acc, item) => acc + item);
console.log(arrSum([9, 1, 22, 0, 2])); // will output 3

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
const recursiveFlat = (arr) =>
  arr.reduce(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(recursiveFlat(item)) : acc.concat(item),
    []
  );
console.log(recursiveFlat([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5])); // will output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
const commonElements = (arr1, arr2) =>
  arr1.filter((item) => arr2.includes(item));
console.log(commonElements(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"]));

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']
const differentElements = (arr1, arr2) =>
  arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2.filter((item) => !arr1.includes(item)));
console.log(
  differentElements(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
); // will output ['a', 3, 21, 'c', 'e']

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]
const makeTuples = (arr1, arr2) => {
  const length = arr1.length < arr2.length ? arr1.length : arr2.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
};
console.log(makeTuples([1, 2, 3], [4, 5, 6, 7])); // will output [[1,4], [2,5], [3,6]]

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const pathFinder = (path, obj) => {
  let current = obj;
  for (let i = 0; i < path.length; i++) {
    if (!current[path[i]]) return undefined;
    current = current[path[i]];
  }
  return current;
};
console.log(pathFinder(["a", "b", "c", "d"], { a: { b: { c: { d: "23" } } } })); // will output '23'

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
