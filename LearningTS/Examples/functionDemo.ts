function add(a:number, b:number){
return a+b;
}
console.log("Add = " + add(5,9));

function add1(a:number, b:number): number{
    return a+b;
}
console.log("Add1 = " + add1(5,9));

// 3rd param - optional param with default value
// 4th param - optional param but no default value
function add2(a:number, b:number, c?:number, d:number=10){
return a+b+c+d;
}

console.log("Not providing  value for param 4.. So it has to take default value.. Add2 = " + add2(5,9,6));
console.log("Providing all the values .. Add2 = " + add2(5,9,6,15));