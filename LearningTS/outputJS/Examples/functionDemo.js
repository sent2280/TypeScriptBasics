function add(a, b) {
    return a + b;
}
console.log("Add = " + add(5, 9));
function add1(a, b) {
    return a + b;
}
console.log("Add1 = " + add1(5, 9));
function add2(a, b, c, d) {
    if (d === void 0) { d = 10; }
    return a + b + c + d;
}
console.log("Not providing  value for param 4.. So it has to take default value.. Add2 = " + add2(5, 9, 6));
console.log("Providing all the values .. Add2 = " + add2(5, 9, 6, 15));
