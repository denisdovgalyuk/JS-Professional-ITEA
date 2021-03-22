// Find unique elements of an array - [{}, {}, [], []];

const arr1 = [{}, {}, [], []];
const arr2 = [{}, {}, [], [], 1, 2, 1, '3', '4', '3', [1,2,3], [1,2,3], {a: 1}, {a: 1}, {b: {c: 2}}, {b: {c: 2}}];

function unique(arr) {

  arr = arr.filter((item, i, arr) => {
     if (typeof item === 'object' || Array.isArray(item)) {
       return JSON.stringify(item) === JSON.stringify(arr[i + 1]);
     }

    return arr.indexOf(item) === i;
  });

  return arr;
};

console.log('arr1 =>', unique(arr1));
console.log('arr2 =>', unique(arr2));
