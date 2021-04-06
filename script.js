const _ = require("lodash");
const list1 = [1, 2, 3, 4];
const list2 = [3, 4, 5, 6];
console.log("Run with nodejs");

function add(a, b) {
  return (a += +b);
}
const c = add(1, 2);
console.log(c);

const resultList = _.union(list1, list2);
console.log(resultList);
