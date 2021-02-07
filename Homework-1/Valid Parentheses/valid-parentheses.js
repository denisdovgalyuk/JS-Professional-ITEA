/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
*/

let isValid = function (s) {
  let i, key, answer = false;
  const inputArr = s.split(''),
    obj = {
      '(': ')',
      '[': ']',
      '{': 's}'
    },
    sizeArr = inputArr.length;

  for (key in obj) {
    for (i = 0; i < sizeArr; i += 1) {
      if ((inputArr[i] === key) && (inputArr[i + 1] === obj[key])) {
        answer = true;
      }
    }
  }

  console.log(answer)
};

isValid('()') // true
isValid('()[]{}') // true
isValid('(]') // false
isValid('([)]') // false
isValid('{[]}') // true

