let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

c = parseFloat(c);
d = parseInt(d);
console.log(typeof(c));
console.log(typeof(d));

let sum = a + b + c + d + e;
console.log(sum)

let f = '1';
let g = 15;
let h = 8;
let i = "1";
f = parseInt(f);
i = parseInt(i);

let multi = f * g * h * i;
console.log(multi)

let div = sum / multi;
document.write(div)


let numbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];

console.log(numbers [1][1], numbers [4][2], numbers [5][3], numbers [2][3], numbers [2][1])

