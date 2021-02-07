// Object Assign

var obj1 = {
  a: 1
}

var obj2 = {
  b: 2
}

var obj3 = {
  c: 3,
  fn: function () {
    console.log(this.c)
  },
  z: {j: {k: {l: 'z:jkl'}}}
}

function mixin(...arguments) {
  const objAssign = {};
  arguments.forEach((obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        objAssign[key] = obj[key];
      }
    }
  });
  console.log('Mixin ->', objAssign);
}

mixin(obj1, obj2, obj3, {d: 20, a: 31}, {q: {d: 24}});
console.log('Object.assign(ES6) ->', Object.assign(obj1, obj2, obj3, {d: 20, a: 31}, {q: {d: 24}}));
