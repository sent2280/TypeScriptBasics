// Major type in TS
var flag = true;
var value = 15;
var title = "Welcome Page";
console.log("flag = " + flag + " Value = " + value + " title = " + title);
// Throwing Error if we assign wrong type
// flag = 1;
// Template Strings
// Resolve the expression and substitute in template
var age = 15;
var sentence = "His age is " + age + "....";
// Array
var arr1 = [1, 2, 3, 67, 12];
var arr2 = [3, 8, 10, 43, 23];
//Tuple - will hold the mixed type but length is fixed
var x;
x = ["kumar", 10];
//Enum - Values inside enum will be automaticlly initilized
var colour;
(function (colour) {
    colour[colour["red"] = 0] = "red";
    colour[colour["blue"] = 1] = "blue";
    colour[colour["green"] = 2] = "green";
})(colour || (colour = {}));
;
console.log("Value of green = " + colour.green);
// any type - When type of the value is unknown For Ex. Value received from third party lib, 
// or API or from user is unknown
var random;
random = 10;
random = "ten";
// mutiple type for same value
var multitype;
multitype = true;
multitype = "true";
