
let arr = [[5, 9, 2], [1, 4, 7], [8, 3, 6]]
console.log(...arr);
let flatArray = [].concat(...arr);

const res = flatArray.sort((A, B) => A - B)
//console.log(res);

let slice1 = res.slice(0, 3)
// console.log(slice1);

let slice2 = res.slice(3, 6)
//console.log(slice2);

let slice3 = res.slice(6, 9)
//console.log(slice3);

const fin = [slice1, slice2, slice3]

console.log(fin);