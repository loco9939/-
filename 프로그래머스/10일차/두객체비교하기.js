const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};
const obj2 = {
  a: "a",
  b: 1,
  d: {
    e: null,
    f: -1,
  },
  c: ["a", "b", "c"],
};
let c = Object.keys(obj1);
function answer(objA, objB) {
  const checkObj =
    objA && objB && typeof objA === "object" && typeof objB === "object";
  if (checkObj && Object.keys(objA).length === Object.keys(objB).length) {
    console.log(Object.keys(objA))
    return Object.keys(objA).reduce((equal, key) => {
      return equal && answer(objA[key], objB[key]);
    }, true);
  } else {
    return objA === objB;
  }
}
console.log(answer(obj1,obj2));

function isCorrect(obj1, obj2) {
  let a = JSON.stringify(obj1);
  let b = JSON.stringify(obj2);
  // console.log(a);
  // console.log(typeof a);

  // console.log(a.split("").sort().join(""));
  console.log("==============")
  // console.log(b.split("").sort().join(""));
  // console.log(b);
  // console.log(a.split("").sort().join("") === b.split("").sort().join(""));
}
// isCorrect(obj1, obj2);
